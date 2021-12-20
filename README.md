# repo_provas

## Deployment 🚀
You can check the application in production here: [https://repo-provas-glauco.herokuapp.com/](https://repo-provas-glauco.herokuapp.com/)

### Tooling:
* [Typescript](https://www.typescriptlang.org/)
* [TypeORM](https://typeorm.io/)
* [ExpressJS](https://expressjs.com/)
* [JavaScript](https://www.javascript.com/)
* [NodeJS](https://nodejs.org/en/about/)
* [PostreSQL](https://www.postgresql.org/)

### Prerequisites
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/)
* [PostgreSQL](https://www.postgresql.org/)

### Repository
* Clone this repository
```sh
git clone https://github.com/glappsmobile/repo_provas
```
* Install NPM packages
```sh
npm install
```

### Database
* Create the dev and test database using PostgreSQL
```sh
CREATE DATABASE repo_provas;
CREATE DATABASE repo_provas_test;
```

* Import [DATABASE.sql](https://github.com/glappsmobile/repo_provas/blob/main/DATABASE.sql) to the dev and test database 
```sh
pg_dump repo_provas < path/to/DATABASE.sql
pg_dump repo_provas_test < path/to/DATABASE.sql
```

* Populate both databases using the [SEED.sql](https://github.com/glappsmobile/repo_provas/blob/main/SEED.sql) file 

* Create the .env.development and .env.test file in the project root, take [.env.develpment.example](https://github.com/glappsmobile/repo_provas/blob/main/.env.development.example) and [.env.test.example](https://github.com/glappsmobile/repo_provas/blob/main/.env.test.example) as example.

### How to run:
To start the development server, run:
```sh
npm run dev
```

### Routes
```
GET /categories
```
Returns all categories

```
GET /disciplines
```
Returns all disciplines

```
GET /teachers
```
Returns all teachers

```
GET /teachers/discipline/:disciplineId
```
Returns all teachers from the given discipline

```
GET /tests
```
Returns all exams

```
GET /tests/discipline/:disciplineId
```
Returns all exams from given discipline

```
GET /tests/teacher/:teacherId
```
Returns all exams from given teacher

```
POST /tests

body {
  url: string;
  name: string;
  year: number;
  semester: number;
  teacherId: number;
  categoryId: number;
  disciplineId: number;
}
```
Creates an exam with given information


