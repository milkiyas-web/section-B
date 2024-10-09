"use server";
import { db } from "@/db"
import { projects, reviews } from "@/db/schema"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Description } from "@radix-ui/react-dialog";
import { redirect } from "next/navigation";
export async function createReview(formData: FormData) {
    //const allProjects = await db.select().from(projects);
    //const { userId } = auth();
    const review = {
        reviewId: formData.get("reviewId") as string,
        customerName: formData.get("customerName") as string,
        customerEmail: formData.get("customerEmail") as string,
        review: formData.get("review") as string,
    }
    const [newReview] = await db.insert(reviews).values(review).returning({ reviewId: reviews.id })
    console.log(newReview);
    //redirect(`/projects/${newProject.insertedId}/instructions`);
    return new Response(JSON.stringify(newReview), { status: 200 });
    
}   

