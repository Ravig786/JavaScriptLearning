const { Kafka } = require("kafkajs");

// Create Kafka instance
const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["localhost:9092"], // Kafka broker
});

const producer = kafka.producer();

const sendMessage = async () => {
  await producer.connect();
  console.log("✅ Producer connected!");

  for (let i = 1; i <= 5; i++) {
    await producer.send({
      topic: "test-topic",
      messages: [{ key: `key-${i}`, value: `Message #${i}` }],
    });
    console.log(`📨 Sent: Message #${i}`);
  }

  await producer.disconnect();
  console.log("🔌 Producer disconnected");
};

sendMessage().catch(console.error);
