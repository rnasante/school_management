import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifySuperAdmin = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(403).json({ error: 'Access denied' });
    }

    try {
        console.log(process.env.AUTH_SECRET);
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.AUTH_SECRET);
        
        if (decoded.role !== 'superadmin') {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        req.superAdmin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
