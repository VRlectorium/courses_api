import { Router } from 'express';
import CourseDaoImpl from '../dao/impl/CourseDaoImpl';

let router = Router();
const dao: CourseDao = new CourseDaoImpl();

router.get('/', (req, res, next) => {
    return dao.getCourses()
        .then(data => res.json({"courses": data}))
        .catch(next);
});

router.post('/', (req, res, next) => {
    let r = req.body;
    let course: Course = {
        id: parseInt(r.id),
        name: r.name,
    };
    return dao.createCourse(course)
        .then(data => res.json(data))
        .catch(next)
});

router.get('/:courseid', (req, res, next) => {
    return dao.getCourse(parseInt(req.params.courseid))
        .then(data => res.json(data))
        .catch(next)
});

export default router;