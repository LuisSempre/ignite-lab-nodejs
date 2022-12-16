import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class Notifications {
  @EventPattern
  async handleSendNotification() {}
}
