import { Post } from "../domain/entities/Post";
import { IPostRepository } from "../domain/repositories/IPostRepository";

export class ReadPostByIdUseCase {
    constructor(private readonly repository: IPostRepository) { }

    async run(id: number): Promise<Post> {
        return await this.repository.readById(id);
    }
}
