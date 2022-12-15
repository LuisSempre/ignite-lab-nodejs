import { Module } from '@nestjs/common';
import { PrismaNotificationsRepository } from '@infra/database/prisma/repositories/prisma-notifications-repository';

import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from '@application/repositories/notifications-repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
