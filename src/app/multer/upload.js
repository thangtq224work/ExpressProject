const multer = require('multer');
const path = require('path');
const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve('./'), './src/public'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + '-' + file.originalname);
    }
});
module.exports = multer({ storage: store });