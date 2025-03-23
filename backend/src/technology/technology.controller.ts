import { Controller, Get } from '@nestjs/common';
import { Technology } from '@prisma/client';
import { TechnologyProvider } from './technology.provider';

@Controller('technologies')
export class TechnologyController {
    constructor(private readonly provider: TechnologyProvider) {}

    @Get()
    async getAll(): Promise<Technology[]> {
        return this.provider.getAll();
    }

    @Get('highlights')
    async getHighlights(): Promise<Technology[]> {
        return this.provider.getHighlights();
    }
}
