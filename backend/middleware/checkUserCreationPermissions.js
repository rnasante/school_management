// Define which roles can create which other roles
const rolePermissions = {
    superadmin: ['teacher', 'accountant', 'headteacher', 'superadmin', 'student'],
    headteacher: ['teacher', 'accountant'],
    teacher: [], // Teachers cannot create other users
    accountant: [] // Accountants cannot create other users
};

export const checkUserCreationPermissions = async (req, res, next) => {
    try {
        const { role: newUserRole } = req.body;
        const creatorRole = req.user.role; // From Passport's user object

        // Check if creator role exists in permissions
        if (!rolePermissions[creatorRole]) {
            return res.status(403).json({ 
                message: 'You do not have permission to create users' 
            });
        }

        // Check if creator can create the requested role
        if (!rolePermissions[creatorRole].includes(newUserRole)) {
            return res.status(403).json({ 
                message: `You do not have permission to create users with role: ${newUserRole}` 
            });
        }

        next();
    } catch (error) {
        console.error('Error checking user creation permissions:', error);
        res.status(500).json({ message: 'Error checking permissions' });
    }
}; 