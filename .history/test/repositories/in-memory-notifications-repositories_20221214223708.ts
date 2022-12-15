import { NotificationsRepository } from "src/application/repositories/notifications-repositories";

const notifications: Notification[] = [];

class ImMemoryNotificationsRepository implements NotificationsRepository {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};
