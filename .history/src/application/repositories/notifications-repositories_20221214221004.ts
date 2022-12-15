import { Notification } from '../entities/notification';

abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
