import { Controller, Get } from '@nestjs/common';

@Controller('technologies')
export class TechnologyController {

    @Get()
    async getAll() {
        return ['Node.js', 'React', 'Angular', 'Vue.js'];
    }
}
