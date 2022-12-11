import multer from "multer"
import path from "path"

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `./../node_code/public/images/upload/`)
    },
    filename: (req, file, cb) => {
        let exit = path.extname(file.originalname)
        cb(null,file.originalname )
    }
})
var upload = multer({ storage: storage })

// module.exports = upload 
export default upload