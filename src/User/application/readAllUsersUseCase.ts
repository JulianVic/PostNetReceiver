import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class ReadAllUsersUseCase {
    constructor(private readonly repository: IUserRepository) { }

    async run(): Promise<User[]> {
        return this.repository.readAll();
    }
}