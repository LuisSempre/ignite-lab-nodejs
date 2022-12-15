import { NotificationsRepositories } from "src/application/repositories/notifications-repositories";

const notifications: Notification[] = [];

class ImMemoryNotificationsRepository implements NotificationsRepositories  {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};
