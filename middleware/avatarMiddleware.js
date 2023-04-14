const multer = require("multer");
const uuid = require("uuid").v4

 
 const multerStorage = multer.diskStorage({
   destination: (req, file, callBackFunc) => {
     callBackFunc(null, 'tmp');
    },
    filename: (req, file, callBackFunc) => {
      const ext = file.mimetype.split('/')[1];
      callBackFunc(null, `${uuid()}.${ext}`);
    },
  });
   const multerFilter = (req, file, callBackFunc) => {
      if (file.mimetype.startsWith('image')) {
        callBackFunc(null, true);
      } else {
        req.error={status:401, msg:"It is not image"};
      }
    };
  
  const avatarWiddleware = multer({
      storage: multerStorage,
      fileFilter: multerFilter,
    }).single('avatar');

module.exports = avatarWiddleware;


