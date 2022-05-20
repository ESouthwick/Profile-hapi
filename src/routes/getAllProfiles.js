import { db } from "../database";

export const getAllProfilesRoute = {
    method: 'GET',
    path: '/api/profiles',
    handler: async (req, h) => {
        const {results} = await db.query(
            'SELECT * FROM profiles'
        );
        return results;
    }
}