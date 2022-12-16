import { Kafka } from "kafkajs";
import { randomUUID } from "node:crypto"

async function bootstrap() {

  const kafka = new Kafka({
    clientId: 'kafka-producer',
    brokers: ['teaching-wombat-9113-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'dGVhY2hpbmctd29tYmF0LTkxMTMkj5CiJSlIY8ZL4aDUcdRVzAYyTY3qNrH2r7M',
      password: 'HthpFDqawpUYFLJqkpNi417g_zaDBio235PM8lPsCJXSwTtdA8K4gw8QRVdcUs4aSQtqbw==',
    },
    ssl: true,
  })

  const producer = kafka.producer()