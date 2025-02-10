import { Injectable, OnModuleInit, Logger, OnApplicationShutdown } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class ProducerService implements OnModuleInit, OnApplicationShutdown {
  private readonly kafka = new Kafka({
    brokers : ['localhost:29092']
  })

  private readonly producer : Producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
  }
  async produce(record : ProducerRecord){
    await this.producer.send(record);
  }
  async onApplicationShutdown(){
    await this.producer.disconnect();
  }
} 