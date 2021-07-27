import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'temp', 'uploads'),
    filename: (req, file, cb) => {
      crypto.randomBytes(10, (err, res) => {
        if (err) return cd(err);
        return cb(null, res.toString('hex') + extname(file.originalname));
      });
    },
  }),
};
