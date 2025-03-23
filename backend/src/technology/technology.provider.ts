import { Injectable } from '@nestjs/common';
import { Technology } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class TechnologyProvider {
    constructor(private readonly prisma: PrismaProvider) {}

    async getAll(): Promise<Technology[]> {
        return this.prisma.technology.findMany();
    }
}
