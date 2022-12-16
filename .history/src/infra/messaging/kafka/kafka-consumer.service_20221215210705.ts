import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        brokers: ['teaching-wombat-9113-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dGVhY2hpbmctd29tYmF0LTkxMTMkj5CiJSlIY8ZL4aDUcdRVzAYyTY3qNrH2r7M',
          password:
            'HthpFDqawpUYFLJqkpNi417g_zaDBio235PM8lPsCJXSwTtdA8K4gw8QRVdcUs4aSQtqbw==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
