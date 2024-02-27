import { Post } from "../domain/entities/Post";
import { IPostRepository } from "../domain/repositories/IPostRepository";
import { NotificationNewProductUseCase } from "./NotificationNewProductUseCase";

export class CreatePostUseCase {
    constructor(
        private readonly postRepository: IPostRepository,
        private readonly sendNotification: NotificationNewProductUseCase
        ) {}
    
    async run(title: string, content: string, authorId: number): Promise<Post> {
        const post = new Post(title, content, authorId);
        const createdPost = await this.postRepository.create(post);
        this.sendNotification.run(post)
        return createdPost;
    }
}