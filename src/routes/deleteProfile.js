import {db} from '../database'

export const deleteProfileRoute = {
    method: 'DELETE',
    path: '/api/profiles/{id}',
    handler: async (req, h) => {
        const {id} = req.params;
        await db.query(
            'DELETE FROM profiles WHERE id=?',
            [id],
        );
        return {message: 'Profile deleted'};
    }
}
