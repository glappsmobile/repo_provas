import { getConnectionManager } from 'typeorm';

const connectDatabase = async () => {
  const connectionManager = await getConnectionManager();
  const connection = connectionManager.create({
    name: 'default',
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: ['src/entities/*.ts'],
  });
  await connection.connect();
  return connection;
};

export default connectDatabase;
