// Define which roles can create which other roles
const rolePermissions = {
    superadmin: ['teacher', 'accountant', 'headteacher', 'superadmin'],
    headteacher: ['teacher', 'accountant'],
    teacher: [], // Teachers cannot create other users
    accountant: [] // Accountants cannot create other users
};

// Get role display names
const roleDisplayNames = {
    superadmin: 'Super Admin',
    headteacher: 'Head Teacher',
    teacher: 'Teacher',
    accountant: 'Accountant'
};

export const getAvailableRoles = (userRole) => {
    if (!rolePermissions[userRole]) {
        return [];
    }

    return rolePermissions[userRole].map(role => ({
        value: role,
        label: roleDisplayNames[role]
    }));
}; 