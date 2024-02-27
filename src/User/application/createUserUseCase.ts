import { User } from '../domain/entities/User';
import { IUserRepository } from '../domain/repositories/IUserRepository';
import { IEncryptRepository } from '../domain/repositories/IEncryptRepository';

export class CreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository, private readonly encryptRepository: IEncryptRepository) { }
    
    async run(name: string, password: string): Promise<User> {
        const hashedPassword = await this.encryptRepository.encrypt(password);
        const user = new User(name, hashedPassword);
        return await this.userRepository.create(user);
    }
}