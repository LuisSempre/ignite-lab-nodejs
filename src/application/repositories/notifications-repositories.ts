import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  [x: string]: any;
  abstract create(notification: Notification): Promise<void>;
}
