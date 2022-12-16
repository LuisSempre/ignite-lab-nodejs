import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class Notifications {
  @EventPattern('notifications.send-notification')
  async handleSendNotification() {
    console.log('aaa');
  }
}
