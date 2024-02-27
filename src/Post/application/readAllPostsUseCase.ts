import { Post } from "../domain/entities/Post";
import { IPostRepository } from "../domain/repositories/IPostRepository";

export class ReadAllPostsUseCase {
    constructor(private readonly repository: IPostRepository) { }

    async run(): Promise<Post[]> {
        return await this.repository.readAll();
    }
}

