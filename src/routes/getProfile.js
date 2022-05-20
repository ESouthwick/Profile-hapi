import Boom from '@hapi/boom';
import { db } from '../database';

export const getUserProfile ={
    method: 'GET',
    path: '/api/profiles/{id}',
    handler: async (req, h) => {
        const id = req.params.id;
        const { results } = await db.query(
            'SELECT * FROM profiles WHERE id=?',
            [id],
        );
        const profile = results[0];
        if (!profile) throw Boom.notFound(`Profile does not exist with id ${id}`);
        return profile;
    }
} 