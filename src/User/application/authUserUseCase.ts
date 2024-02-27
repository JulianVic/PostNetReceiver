import { IUserRepository } from "../domain/repositories/IUserRepository";
import { IEncryptRepository } from "../domain/repositories/IEncryptRepository";

export class AuthUserUseCase {
    constructor(private readonly userRepository: IUserRepository, private readonly encryptRepository: IEncryptRepository) { }

    async run(id: number, password: string): Promise<boolean> {
        const user = await this.userRepository.readById(id);
        if (!user) {
            return false;
        }
        
        const isPasswordValid = await this.encryptRepository.compare(password, user.password);

        if(!isPasswordValid) {
            return false;
        }

        return true;
    }
}