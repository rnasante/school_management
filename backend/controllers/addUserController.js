import { registerUser } from "../services/addUserService.js";
import { getAvailableRoles } from "../utilities/getAvailableRoles.js";

export const addUser = async (req, res) => {
    try {
        const {user, tempPassword} = await registerUser(req.body);

        res.status(201).json({
            message: `${user.role} created successfully`, 
            tempPassword // Admin sees this, user does not
        });
    } catch(error) {
        res.status(401).json({message: error.message});
    }
};

export const getRoles = async (req, res) => {
    try {
        const userRole = req.user.role; // From Passport's user object
        const availableRoles = getAvailableRoles(userRole);
        
        res.status(200).json(availableRoles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};