export const q = {
    SELECT_SUBJECTS: "SELECT subjects.id, subjects.name as subjectname, courses.name as coursename FROM subjects INNER JOIN courses ON subjects.courseid = courses.id",
    INSERT_SUBJECT: "INSERT INTO subjects (courseid, name, video) VALUES($1, $2, $3) RETURNING id",
    SELECT_SUBJECT: "SELECT subjects.id, subjects.name as subjectname, courses.name as coursename FROM subjects INNER JOIN courses ON subjects.courseid = courses.id WHERE subjects.id = $1"
}