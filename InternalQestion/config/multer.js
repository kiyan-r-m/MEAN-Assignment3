const multer = require('multer')
const path = require('path');
const storage = multer.diskStorage({
    destination: (req, res, cb)=>{
        cb(null, path.join(__dirname, "../public/uploads"));
    },

    filename:(req, file, cb)=>{
        if(file.mimetype=="image/jpg" || file.mimetype=="image/png" || file.mimetype == "image/jpeg")
            cb(null, `${Date.now()}_${file.originalname}`);
    }
})

module.exports = multer({storage:storage});