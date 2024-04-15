import { app } from './app';
import { PORT } from './config/environment';

try {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT} 🚀🚀🚀`);
  });
} catch (error) {
  console.log('Server startup failed! ❌');
}
