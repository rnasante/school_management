import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifySuperAdmin = (req, res, next) => {
    const token = req.header('Authorization');
    
    if (!token) {
        return res.status(403).json({ error: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.AUTH_SECRET);
        
        if (decoded.role !== 'superadmin') {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        req.superAdmin = decoded;

        console.log("Middleware passed, proceeding to create admin");
        
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
