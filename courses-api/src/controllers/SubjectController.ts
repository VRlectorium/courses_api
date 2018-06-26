import { Express, Router } from 'express';
import SubjectDaoImpl from '../dao/impl/SubjectDaoImpl';
import axios from 'axios';
import * as multer from 'multer';

let upload = multer({ storage: multer.memoryStorage() });
let router = Router();
const dao: SubjectDao = new SubjectDaoImpl();

router.get("/", (req, res, next) => {
    return dao.getSubjects()
        .then(data => res.json({"subjects": data}))
        .catch(next);
});

router.get("/:subjectid", (req, res, next) => {
    return dao.getSubject(parseInt(req.params.subjectid))
        .then(data => res.json(data))
        .catch(next)
});

router.post('/', upload.single('video'), async (req: any, res, next) => {
    const r = req.body;
    const f = req.file
    const d = new Date();
    try {
        const apiGet = `https://cloud-api.yandex.net:443/v1/disk/resources/upload?path=Video/${Date.now()}_${f.originalname}`
        const yandexUrl = await axios.get(apiGet, {
            headers:{'Authorization': process.env.YANDEX_API}
        })
        await axios.put(yandexUrl.data.href, f.buffer)
    } catch (err) {
        next(err)
    }
    let subject: Subject = {
        id: parseInt(r.id),
        courseId: parseInt(r.courseId),
        name: r.name,
        video: `https://cloud-api.yandex.net:443/v1/disk/resources/download?path=Video/${Date.now()}__${f.originalname}`
    };
    return dao.createSubject(subject)
        .then(data => res.json({"res": data}))
        .catch(next)
});

export default router;