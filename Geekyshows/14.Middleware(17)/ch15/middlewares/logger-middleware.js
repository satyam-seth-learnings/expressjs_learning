var myLogger = (req, res, next) => {
    console.log('Looged');
    next();
}

export default myLogger;