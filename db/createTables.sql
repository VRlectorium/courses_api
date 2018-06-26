CREATE TABLE courses (
    id serial primary key,
    name varchar(256) not null
);
CREATE TABLE subjects (
    id serial primary key,
    courseid integer REFERENCES courses(id),
    name varchar(128) not null,
    video varchar(255)
);