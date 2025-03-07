export const generateModelID = (modelName) => {
    const randomPart = Math.floor(1_000_000 + Math.random() * 9_000_000); // Ensures a 7-digit number 
    return `${modelName.toUpperCase()}${randomPart}`;
};

// console.log(generateModelID('ADM'));