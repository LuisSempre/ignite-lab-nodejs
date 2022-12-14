import { Controller, Get, Post } from '@nestjs/common';
import { create } from 'domain';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }
}

@Post()
async create()
await this.prisma.notification.create({
  data: {
    id: randomUUID(),
    content: "New friend",
    category: 'social',
    recipient: randomUUID(),
    }
  })