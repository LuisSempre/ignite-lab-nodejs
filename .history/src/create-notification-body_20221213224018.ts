export class CreateNotificationBody {
  @IsNotEmpty()
  recipientId: string;
  content: string;
  category: string;
}
function IsNotEmpty() {
  throw new Error('Function not implemented.');
}
