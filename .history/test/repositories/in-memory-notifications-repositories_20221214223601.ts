const notifications: Notification[] = [];

class NotificationsRepository implements NotificationsRepositories = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};
