import Space from "../../db/space.model";

export const createSpace = async (space: CreateSpaceParams) => {
    try {
        // Ensure that space object only includes fields defined in ISpace
        const newSpace = await Space.create({
            spaceName: space.spaceName,
            customMessage: space.customMessage,
            heading: space.heading,
        });
        return newSpace;
    } catch (error: any) {
        console.log(`Error creating space: ${error.message}`);
        throw error;
    }
}
