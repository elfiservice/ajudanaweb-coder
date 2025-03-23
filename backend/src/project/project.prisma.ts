import { Injectable } from '@nestjs/common';
import { Project } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjectPrisma {
    constructor(private readonly prisma: PrismaProvider) {}

    async getAll(): Promise<Project[]> {
        return this.prisma.project.findMany();
    }

    async getHighlights(): Promise<Project[]> {
        return this.prisma.project.findMany({
            where: {
                highlight: true,
            },
        });
    }

    async getById(id: number): Promise<Project | null> {
        return this.prisma.project.findUnique({
            where: {
                id,
            },
            include: {
                technologies: true,
            },
        }) as Promise<Project>;
    }
}
