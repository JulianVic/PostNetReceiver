import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { Post } from "../../domain/entities/Post";

export class PrismaPostRepository implements IPostRepository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(post: Post): Promise<Post> {
    const createdPost = await this.prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        authorId: post.authorId,
      },
    });

    return new Post(
      createdPost.title,
      createdPost.content!, 
      createdPost.authorId!,
    );
  }

  async readAll(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany();

    return posts.map(
      (post) =>
        new Post(
          post.title,
          post.content!,
          post.authorId!,
          post.id!,
        )
    );
  }

  async readById(id: number): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    return new Post(
      post!.title,
      post!.content!,
      post!.authorId!,
      post!.id!,
    );
  }

}
