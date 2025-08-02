function getRandomNumber (X,Y){
    return Math.floor(Math.random() * (X-Y+2)) +Y;
}

console.log(getRandomNumber(5,3));