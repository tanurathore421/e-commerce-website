const crypto = require('crypto');

//generate captcha
const generateCaptcha=()=>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXZ0123456789';
    let captcha="";

    for(let i=0;i<6;i++){
        randomIndex=crypto.randomInt(0,characters.length);
        captcha+=characters[randomIndex];
    }
    return captcha;
}

module.exports = generateCaptcha;