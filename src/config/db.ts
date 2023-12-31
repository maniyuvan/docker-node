import { DataSource } from 'typeorm';
import { Todo } from '../entities/todo.entity';

export async function connectDB() {
  try {
    const dataSource: DataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      logging: false,
      entities: [Todo],
    });
    return await dataSource.initialize();
  } catch (error) {
    console.log(error);
  }
}
