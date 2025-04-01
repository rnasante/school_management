export const generateModelID = (modelName) => {
    const randomPart = Math.floor(1_000_000 + Math.random() * 9_000_000); // Ensures a 7-digit number 
    return `${modelName.toUpperCase()}${randomPart}`;
};

export const generateModelID5 = (modelName) => {
    const randomPart = Math.floor(100 + Math.random() * 900 ); //ensures a 3-digit number
    return `${modelName.toUpperCase()}${randomPart}`;
};

export const generateModelIdSchLvl = (modelName) => {
 
    return modelName.toUpperCase();
};

// console.log(generateModelID('cls'));