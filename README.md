# Pls read me
#### First of all, I would like to thank you for taking the time to review my project. I hope you enjoy it and find it interesting. I am looking forward to your feedback and I am available for any questions you may have.

### Project Description
This is a simple project that uses the Hexagonal Architecture to create a simple API that allows you to create, read, update and delete posts (like any social network). The project is written in TypeScript and uses the Express.js framework to create the API. The database used is SQLite, and the ORM used is Prisma.

### How to run the project
To run the project, you need to have Node.js and MySQL installed on your machine. After that, you need to create a database in MySQL and configure the .env file with the database information. Then, you need to run the following commands:

```bash
npm install
npx prisma migrate dev --name init (to create the tables in the database)
npm run dev
```