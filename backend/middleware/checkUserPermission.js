import ac from '../config/rbac.js';

export const checkPermission = (action, resource) => {
    return (req, res, next) => {
        if (!req.user) return res.status(403).json({ error: 'Not authenticated' });

        const permission = ac.can(req.user.role)[action](resource);
        if (!permission.granted) {
            return res.status(403).json({ error: 'Access denied: Insufficient permissions' });
        }

        next();
    };
};
