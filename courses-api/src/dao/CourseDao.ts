interface CourseDao {
    getCourse(id: number): Promise<Course>;
    getCourses(): Promise<Course[]>;
    createCourse(course: Course): Promise<number>;
}