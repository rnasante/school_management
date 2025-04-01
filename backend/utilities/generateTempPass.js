import crypto from 'crypto'

export  const genTempPass = () => {
    const tempPass = crypto.randomBytes(6).toString('hex');
    console.log('Temporary password generated:', tempPass);
    return  tempPass;
}

// genTempPass();