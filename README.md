# Introduction for the template

This is a simple Express JS template/boilerplate for backend in typescript.

This project include:

- **Better Auth** library using **jwt** and **bearer** plugin already included for creating authentication system.
- **Drizzle** ORM for creating schema and migrate the table.
- **Zod** as validation library, where **drizzle-zod** being use to generate zod schema from **Dirzzle** table schema, which then will be use to generate typescript types.

There are also different .env for **production** and **development** environment variable.

Make sure to generate the **Drizzle** schema then migrate it to the database before running the backend.

You can use <u>npm run dev</u> script to use **development** environment or You can use
<isn>npm run start:dev</isn> script to use **production** environment.

There is also <u>npm run start:prod</u> script to run an already compiled app on **/dist** folder with **production** environment.

## Future Improvment

This is the thing planned to be implement into this project:

- Improve testing by implementing **jest** to the template project.
- Implementation of **Winston** for application-level logging.
- Implementation of **Prometheus** for metrics monitoring.
- Generalize the Response API Structure.
- Create seeder utility script for user table.
