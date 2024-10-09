import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import cors from "cors"
import Project from "./models/project.model.js";
import Task from "./models/task.model.js"
import mongoose from "mongoose";
import Event from "./models/event.model.js";
import { clerkClient } from '@clerk/clerk-sdk-node';
import Streak from "./models/userData.model.js";
import UserData from "./models/userData.model.js";

const app = express();
const PORT = process.env.PORT || PORT;

app.use(express.json());
app.use(cookieParser());

// Allow requests from the frontend origin
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

// app.use("/api/tasks", taskRoute)

app.get("/api/projects", async (req, res) => {
    try {
        const { organizationId } = req.query;
        if (!organizationId) {
            return res.status(400).json({ message: "Organization ID is required" });
            console.log("there is no organization ID")
        }

        const projects = await Project.find({ organizationId });
        res.status(200).json(projects);

    } catch (error) {
        console.log("Error in getProjects controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

//Create a project

app.post("/api/projects", async (req, res) => {
    console.log("Request body", req.body)
    try {
        const { name, deadline, tag, description, user, organizationId } = req.body;

        const project = await Project.create({
            name,
            deadline,
            tag,
            description,
            user,
            organizationId,
        });
        res.status(201).json(project)
    } catch (error) {
        console.log("Error in createProject controller", error.message)
        res.status(500).json({ message: "Server error", error: error.message })
    }
})

//Get tasks for a project
const ObjectId = mongoose.Types.ObjectId

app.get("/api/projects/:projectId/tasks", async (req, res) => {
    const { projectId } = req.params;
    console.log("Requested projectId:", projectId);

    try {
        const projectExists = await Project.findById(projectId);
        if (!projectExists) {
            return res.status(404).json({ message: "Project not found" });
        }
        const objectId = new ObjectId(projectId);
        const tasks = await Task.find({ projectId: objectId });

        if (!tasks) {
            return res.status(404).json({ message: "Tasks not found" })
        }
        res.status(200).json(tasks);
    } catch (error) {
        console.log("Error fetching tasks: ", error);
        res.status(500).json({ message: "Server error" });
    }
});

//Get a single project
app.get('/api/projects/:projectId', async (req, res) => {
    try {
        const { projectId } = req.params;
        const project = await Project.findById(projectId); // Fetch project by ID

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.json(project); // Send project data to the frontend
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post("/api/projects/:projectId/tasks", async (req, res) => {
    const { projectId } = req.params;
    console.log("projectId", projectId)
    const { title, description, status, points, priority, attachments, tags, assignees, author, dueDate, startDate } = req.body;

    // Ensure assignees is an array and contains at least one item
    const formattedAssignees = Array.isArray(assignees) && assignees.length > 0
        ? assignees.map(assignee => ({
            userId: assignee,  // Keep as string
            profilePictureUrl: '',
            username: '',
        }))
        : [];

    // Ensure author is provided and formatted correctly
    if (!author) {
        return res.status(400).json({ message: "Author information is required" });
    }

    const formattedAuthor = {
        userId: author,  // Assuming author is the user ID string
        profilePictureUrl: '',
        username: '',
    };

    const newTask = new Task({
        title,
        description,
        status,
        priority,
        attachments,
        tags,
        assignees: formattedAssignees,
        author: formattedAuthor,
        dueDate,
        startDate,
        projectId: projectId,
    });
    console.log("New task", newTask)

    try {
        await newTask.save();
        res.status(201).json({ message: "Task created successfully", task: newTask });
    } catch (error) {
        console.error("Error creating task", error);
        console.log("Error creating task", error.message)
        res.status(500).json({ message: "Error creating task", error: error.message })
    }
});

//Update a task status

app.patch("/api/projects/:projectId/tasks/:taskId", async (req, res) => {
    const { projectId, taskId } = req.params;
    const { status } = req.body;

    try {
        const updatedTask = await Task.findByIdAndUpdate(
            taskId,
            { status },
            { new: true }
        )
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

    } catch (error) {
        console.error("Error updating task status", error);
        res.status(500).json({ message: "Error updating task status", error });
    }
});

//Create an event
app.post('/api/events', async (req, res) => {
    const { title, start, end, contributionType, userId, id } = req.body;
    if (!title || !start || !end || !contributionType || !userId) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newEvent = new Event({
        title,
        start,
        end,
        contributionType,
        userId, // If using multi-user, else omit i
        id
    });

    try {
        await newEvent.save();
        res.status(201).json({ message: 'Event created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});
// Get an event for the timeboxing

app.get('/api/events/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const events = await Event.find({ userId });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

//Get streak data for a user

app.get('/api/streaks/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const streak = await UserData.findOne({ userId });
        if (!streak) {
            return res.status(404).json({ message: 'Streak not found' });
        }
        res.status(200).json(streak);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch streak' });
    }
});
app.get('/api/userdata', async (req, res) => {
    try {
        const userData = await UserData.find({});
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ error: 'Failed to fetch user data' });
    }
});

app.get('/api/userdata/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        let userData = await UserData.findOne({ userId });
        if (!userData) {
            // If user data doesn't exist, create a new entry with some sample data
            userData = new UserData({
                userId,
                currentStreak: 0,
                totalTasksCompleted: 0,
                tasksThisWeek: 0,
                lastUpdated: new Date(),
                contributionTypes: {
                    attend: 5,
                    support: 3,
                    own: 2
                },
                monthlyData: [
                    { month: 'Jan', timeboxScore: 80, tasksCompleted: 20, hours: 40 },
                    { month: 'Feb', timeboxScore: 85, tasksCompleted: 25, hours: 45 },
                    { month: 'Mar', timeboxScore: 90, tasksCompleted: 30, hours: 50 }
                ]
            });
            await userData.save();
        }
        res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching or creating user data:', error);
        res.status(500).json({ error: 'Failed to fetch or create user data' });
    }
});

app.post('/api/streaks/:userId/update', async (req, res) => {
    try {
        let streak = await UserData.findOne({ userId: req.params.userId });
        if (!streak) {
            streak = new UserData({ userId: req.params.userId });
        }

        const today = new Date();
        const lastUpdated = new Date(streak.lastUpdated);

        if (today.toDateString() !== lastUpdated.toDateString()) {
            if (today.getDate() - lastUpdated.getDate() === 1) {
                streak.currentStreak += 1;
            } else {
                streak.currentStreak = 1;
            }
            streak.totalTasksCompleted += 1;
            streak.tasksThisWeek += 1;
            streak.lastUpdated = today;
        }

        await streak.save();
        res.json(streak);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update streak' });
        console.log("Error updating streak", error)
    }
});
//Fetch users and their information for the admin page
// Modify the admin endpoint to fetch users from Clerk
app.get('/api/admin/users-performance', async (req, res) => {
    try {
        // Fetch all user data from our database
        console.log('Fetching user data from database...');
        const usersPerformance = await UserData.find({});
        console.log(`Fetched ${usersPerformance.length} user performance records from database`);

        res.status(200).json(usersPerformance);
    } catch (error) {
        console.error('Error fetching users performance:', error);
        res.status(500).json({ message: 'Error fetching users performance', error: error.toString() });
    }
});
// Edit an event
app.put('/api/events/:eventId', async (req, res) => {
    const { eventId } = req.params;
    const { title, contributionType, userId, start, end } = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(eventId, { title, contributionType, userId, start, end }, { new: true })
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Error updating event', error: error.toString() });
    }
});
// Delete and event
app.delete('/api/events/:eventId', async (req, res) => {
    const { eventId } = req.params;
    try {
        const deletedEvent = await Event.findByIdAndDelete(eventId);
        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Error deleting event', error: error.toString() });
    }
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})


