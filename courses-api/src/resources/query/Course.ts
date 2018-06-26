export const q = {
    SELECT_COURSES: "SELECT * FROM courses",
    INSERT_COURSE: "INSERT INTO courses ( name) VALUES($1) RETURNING id",
    SELECT_COURSE: "SELECT * FROM courses WHERE id=$1"
}