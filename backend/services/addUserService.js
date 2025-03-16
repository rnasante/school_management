import User from '../models/userModel.js';
import { generateModelID } from '../utilities/idGenerator.js';
import { createRoleSpecificData } from "../utilities/assignRoleSpecData.js";

export const registerUser = async (userData) => {
    
        const { first_name, last_name, email, password, role, extraData } = userData;
        
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({ 
            user_id: generateModelID('USR'),
            first_name, 
            last_name,
            email, 
            password: hashedPassword, 
            role });

        // Insert into role-specific table
        await createRoleSpecificData(user, extraData);


};

