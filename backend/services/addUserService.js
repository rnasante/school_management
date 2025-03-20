import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { genTempPass } from '../utilities/generateTempPass.js';
import { generateModelID } from '../utilities/idGenerator.js';
import { createRoleSpecificData } from "../utilities/assignRoleSpecData.js";

export const registerUser = async (userData) => {
    
        const { first_name, last_name, other_names, email, phone_number, role, extraData } = userData;
        
        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) throw new Error('User already exists');

        // Generate a temporary password
        const tempPassword = genTempPass();
        const hashedPassword = await bcrypt.hash(tempPassword, 10);

        // Create user
        const user = await User.create({ 
            user_id: generateModelID('USR'),
            first_name, 
            last_name,
            other_names,
            email, 
            phone_number,
            password: hashedPassword, 
            role,
            isTemporaryPassword: true 
        }); 

         // Debugging
        console.log("User created:", user?.dataValues || user);

        // Insert into role-specific table (passing the hashed password)
        await createRoleSpecificData(user, { ...extraData, password: hashedPassword });

        return {user, tempPassword};

        // return { message: "User registered successfully. Check email for login details."  }; 

        // // Ensure user is correctly populated
        // if (!user || !user.role) {
        //     throw new Error("User creation failed or role is undefined.");
        // }


        // // Insert into role-specific table
        // await createRoleSpecificData(user, extraData);


};

