export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;
  content: string;
  category: string;
}
