import { User } from "../domain/entities/User";
import { IUserRepository } from "../domain/repositories/IUserRepository";

export class ReadUserByIdUseCase {
    constructor(private readonly repository: IUserRepository) { }

    async run(id: number): Promise<User> {
        return this.repository.readById(id);
    }
}