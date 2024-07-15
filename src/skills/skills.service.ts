import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class SkillsService extends PrismaClient implements OnModuleInit {

  private readonly logger = new Logger('SkillService');

  onModuleInit() {
    this.$connect();
    this.logger.log('base de datos conectada....');
    
  }
  create(createSkillDto: CreateSkillDto) {
    return this.skills.create({
      data: createSkillDto
    });
  }

  findAll() {
    return this.skills.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} skill`;
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
