/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';

interface SendNotificationPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class Notifications {
  constructor(public payload: SendNotificationPayload) {}
  @EventPattern('notifications.send-notification')
  async handleSendNotification(@Payload() content,  {
    
  }
}
