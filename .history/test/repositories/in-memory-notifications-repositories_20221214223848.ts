import { NotificationsRepository } from "src/application/repositories/notifications-repositories";
import { Notification } from "src/application/entities/notification"
class ImMemoryNotificationsRepository implements NotificationsRepository {
  public notifications: Notification[] = [];


  async create(notification: Notification) {
    this.notifications.push(notification);
  },
};

