import { Notification } from '../entities/notification';
import { SendNotification } from './send-notifications';
import { InMemoryNotificationsRepository } from 'test/repositories/in-memory-notifications-repositories';
describe('Send notification', () => {
  it('should send notification', async () => {
    const notificationsRepository = new SendNotification(
      notificationsRepository,
    );
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notifications).toBeTruthy();
  });
});
