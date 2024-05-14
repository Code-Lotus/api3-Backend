import express from 'express';
import multer from 'multer'
import xlsx from 'xlsx';

const router = express.Router();
const upload = multer({ dest: 'upload/'});

router.post('/upload', upload.single('file'), (req: express.Request, res: express.Response) =>  {
    const file = req.file as Express.Multer.File;

    const workbook = xlsx.readFile(file.path);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    res.status(200).json({ message: 'Arquivo recebido com sucesso', data});
})

export default router; 