import express from 'express';
import multer from 'multer'

const router = express.Router();
const upload = multer({dest: 'upload/'});

router.post('/upload', upload.single('file'), (req: express.Request, res: express.Response) => {
    const file = req.file as Express.Multer.File;

    res.status(200).json({ message: 'Arquivo recebido com sucesso', file});
})

export default router;