import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User);

// Method to retrieve all data from the user table ( Select * From Users )
// Returning as an array with data matching the interface IUser
const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}

export default { getUsers };