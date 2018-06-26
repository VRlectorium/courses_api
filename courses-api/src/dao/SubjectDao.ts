interface SubjectDao {
    getSubject(id: number): Promise<Subject>;
    getSubjects(): Promise<Subject[]>;
    createSubject(subject: Subject): Promise<number>;
}