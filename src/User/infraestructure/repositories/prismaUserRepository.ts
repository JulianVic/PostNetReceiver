import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export class PrismaUserRepository implements IUserRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(user: User): Promise<User> {
        const createdUser = await this.prisma.user.create({
            data: {
                name: user.name,
                password: user.password,
            },
        });

        return new User(
            createdUser.name!,
            createdUser.password!,
        );
    }

    async readAll(): Promise<User[]> {
        const users = await this.prisma.user.findMany();

        return users.map(
            (user) =>
                new User(
                    user.name!,
                    user.password!,
                    user.id!,
                )
        );
    }

    async readById(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            },
        });

        return new User(
            user!.name!,
            user!.password!,
            user!.id!,
        );
    }

    async disconnect(): Promise<void> {
        await this.prisma.$disconnect();
    }
}