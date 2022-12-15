import { NotificationsRepository } from "src/application/repositories/notifications-repositories";

const 
class ImMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    notifications.push(notification);
  },
};
