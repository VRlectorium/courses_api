import { Pool } from 'pg';
import { q } from '../../resources/query/Subject';
import DBException from './DBException';

const cs = process.env.NODE_ENV === 'test' 
    ? process.env.DB_CONNECT_TEST
    : process.env.DB_CONNECT_DEV;

class SubjectDaoImpl implements SubjectDao{
    private pool = new Pool({
        connectionString: cs,
    });
    getSubjects = (): Promise<Subject[]> => {
        return this.pool.query(q.SELECT_SUBJECTS)
            .then(res => res.rows)
            .catch(err => { throw new DBException(err) })
    };
    getSubject = (id: number): Promise<Subject> => {
        return this.pool.query(q.SELECT_SUBJECT, [id])
            .then(res => res.rows[0])
            .catch(err => { throw new DBException(err) })
    };
    createSubject = (subject: Subject): Promise<number> => {
        return this.pool.query(q.INSERT_SUBJECT, [subject.courseId, subject.name, subject.video])
            .then(res => res.rows[0].id)
            .catch(err => { throw new DBException(err) })
    }
}

export default SubjectDaoImpl;