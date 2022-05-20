import { db } from '../database';

export const updateProfileRoute = {
    method: 'POST',
    path: '/api/profiles/{id}',
    handler: async (req, h) => {
        const {id} = req.params;
        const {username, firstName, lastName, email} = req.payload;
        // console.log(username, firstName, lastName, email, id);
        await db.query(`
            UPDATE profiles
                SET username=?, firstName=?, lastName=?, email=?
                WHERE id=?
        `, [username, firstName, lastName, email, id]);

        return {message: 'Profile updated'};
    }
}