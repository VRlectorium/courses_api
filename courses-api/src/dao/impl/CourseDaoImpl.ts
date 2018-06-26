import { Pool } from 'pg';
import { q } from '../../resources/query/Course';
import DBException from './DBException';

const cs = process.env.NODE_ENV === 'test' 
    ? process.env.DB_CONNECT_TEST
    : process.env.DB_CONNECT_DEV;

class CourseDaoImpl implements CourseDao {
    private pool = new Pool({
        connectionString: cs,
    });
    getCourse = (id: number): Promise<Course> => {
        return this.pool.query(q.SELECT_COURSE, [id])
            .then(res => res.rows[0])
            .catch(err => { throw new DBException(err) })
    };
    getCourses = async (): Promise<Course[]> => {
        return this.pool.query(q.SELECT_COURSES)
            .then(res => res.rows)
            .catch(err => { throw new DBException(err) })
    };
    createCourse = (course: Course): Promise<number> => {
        return this.pool.query(q.INSERT_COURSE, [course.name])
            .then(res => res.rows[0].id)
            .catch(err => { throw new DBException(err) })
    }; 
}

export default CourseDaoImpl;