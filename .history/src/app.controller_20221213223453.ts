import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: any) {
    console.log(body);

    // await this.prisma.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content: 'New friend',
    //     category: 'social',
    //     recipientId: randomUUID(),
    //   },
    // });
  }
}
