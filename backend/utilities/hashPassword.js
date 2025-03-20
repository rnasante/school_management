import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    if (!password) {
        throw new Error("Password is required for hashing.");
    }
    const saltRounds = 10;
    return await bcrypt.hash(String(password), saltRounds);
    
}

// hashPassword('mypassword');
