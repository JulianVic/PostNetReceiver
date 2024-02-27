import * as amqp from "amqplib";
import { INotificationNewPost } from "../../domain/services/INotificationNewPost";
import { Post } from "../../domain/entities/Post";

export class RabbitMQService implements INotificationNewPost {
    async sendNotification(post: Post): Promise<boolean> {
        const options = {
            username: "julianvic",
            password: "jejejesisisi", 
        }
        let exchange = "upchiapas.int"
        let queue = "initial"
        const conn = await amqp.connect("amqp://3.218.42.222");
        const ch = await conn.createChannel();
        ch.assertExchange(exchange, "direct", {
            durable: true
        });
        ch.assertQueue(queue, {
            durable: true
        });
        ch.bindQueue(queue, exchange, "");
        let status =  ch.publish(exchange, "", Buffer.from(JSON.stringify(post)));
        return status;
    }
}
