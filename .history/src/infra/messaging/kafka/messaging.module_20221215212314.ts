import { NotificationsController } from '@infra/http/controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}
