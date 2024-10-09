import mongoose from 'mongoose';

const UserDataSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    currentStreak: { type: Number, default: 0 },
    lastUpdated: { type: Date, default: Date.now },
    totalTimeCompleted: { type: Number, default: 0 }, // in minutes
    timeThisWeek: { type: Number, default: 0 }, // in minutes
    contributionTypes: {
        attend: { type: Number, default: 0 },
        support: { type: Number, default: 0 },
        own: { type: Number, default: 0 }
    },
    monthlyData: [{
        month: String,
        timeboxScore: Number,
        timeCompleted: Number, // in minutes
        hours: Number
    }]
});

const UserData = mongoose.model('UserData', UserDataSchema);
export default UserData;
