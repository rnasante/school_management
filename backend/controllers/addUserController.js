import { registerUser } from "../services/addUserService.js";

export const addUser = async (req, res) => {
    try {
        const newUser =  await registerUser(req.body);

        res.status(201).json({message: `${newUser.role} created successfully`, newUser});
    } catch(error) {
        res.status(401).json({message: error.message})
    }
   
}