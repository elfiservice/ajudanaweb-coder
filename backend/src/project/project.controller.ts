import { Controller, Get, Param } from '@nestjs/common';
import { ProjectPrisma } from './project.prisma';
import { Project } from '@prisma/client';

@Controller('projects')
export class ProjectController {
    constructor(private readonly repo: ProjectPrisma) {}

    @Get()
    async getAll() {
        return this.repo.getAll();
    }

    @Get('highlights')
    async getHighlights() {
        return this.repo.getHighlights();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Project | null> {
        return this.repo.getById(Number(id));
    }
}
