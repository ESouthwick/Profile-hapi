import { db } from '../database';

export const createNewProfileRoute = {
    method: 'POST',
    path: '/api/profiles',
    handler: async (req, h) => {
        const { id = '', username = '', firstName = '', lastName= '', email = ''} = req.payload;
        const userPassword = 'novell';
        // console.log(id, username, userPassword, firstName, lastName, email);
        await db.query(`
            INSERT INTO profiles (id, username, userPassword, firstName, lastName, email)
              VALUES (?, ?, ?, ?, ?, ?);
        `, [id, username, userPassword, firstName, lastName, email]);

        return { id, username, firstName, lastName, email };
    } 
}