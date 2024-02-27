import { IEncryptRepository } from "../../domain/repositories/IEncryptRepository";
import bcrypt from "bcrypt";

export class BcryptService implements IEncryptRepository{
    encrypt(password: string): Promise<string> {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hash(password, salt);
        return hashedPassword;
    }
    compare(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
}