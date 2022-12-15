import { NotificationsRepository } from "src/application/repositories/notifications-repositories";

class ImMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  },
};

