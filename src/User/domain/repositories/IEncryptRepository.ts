export interface IEncryptRepository {
    encrypt(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}