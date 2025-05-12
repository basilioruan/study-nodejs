import { env } from '../env';
import { dataSource } from '../typeorm';
import app from './app';

dataSource
  .initialize()
  .then(() => {
    app.listen(env.PORT, () => {
      console.log(`Server is running on port ${env.PORT}`);
    });
  })
  .catch(error => {
    console.error('Error initializing data source', error);
  });
