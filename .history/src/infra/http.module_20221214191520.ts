import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
})
export class HttpModule {}
