import { loginUser } from '../services/userLoginService.js';

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);

        const{password:_, ...userData} = user;

        res.json({ message: 'Login successful', 
            token, 
            userData 
        });

    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};
