import "reflect-metadata"
import { DataSource } from "typeorm"
// Importing the created migration
import { CreateUsersTable1709855863793 } from "./migrations/1709855863793-CreateUsersTable"
import User from "../app/entities/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "crud",
    synchronize: true,
    logging: false,
    entities: [User],
    // Applying the created migrations
    migrations: [CreateUsersTable1709855863793],
    subscribers: [],
})
