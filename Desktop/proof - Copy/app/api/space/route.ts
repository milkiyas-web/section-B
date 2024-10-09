import { getAuth } from '@clerk/nextjs/server';
import connectToDatabase from '@/db/mongoose';
import Space from '@/db/space.model'
import { stat } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { userId } = getAuth(req);
        if (!userId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        console.log("User ID:", userId);
        const { heading, customMessage, spaceName } = await req.json();

        if (!heading || !customMessage || !spaceName) {
            return NextResponse.json(
                { message: 'Validation failed: heading, customMessage, and spaceName are required.' },
                { status: 400 }
            );
        }

        await connectToDatabase();

        const newSpace = await Space.insertMany([{
            spaceName,
            heading,
            customMessage,
            createdBy: userId,
        }]);
        // console.log('Newly created space:', newSpace);
        // console.log('Request body:', { spaceName, heading, customMessage, createdBy: userId });
        console.log('Newly created space:', newSpace);
        return NextResponse.json(newSpace, { status: 201 });
    } catch (err) {
        console.error('Error creating space:', err);
        return NextResponse.json({ message: 'Error creating space' }, { status: 500 });
    }
}
export async function GET(req: NextRequest) {
    try {
        // Get the authenticated user's details
        const { userId } = getAuth(req);
        console.log(userId)
        // Ensure that userId exists
        if (!userId) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();

        // Fetch all spaces created by this user
        const spaces = await Space.find({ createdBy: userId }).select('_id spaceName heading customMessage');
        if (spaces.length === 0) {
            console.log('No spaces found for this user');
        }
        return NextResponse.json(spaces, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Error fetching spaces' }, { status: 500 });
    }
}
// Optional: Define a handler for requests that don't match your route
export const config = {
    matcher: '/api/spaces/*',  // Adjust to match your endpoint
};