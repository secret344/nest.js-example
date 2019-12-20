import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import MainTestMiddleware from './middleware/logger.middleware.ts';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  MainTestMiddleware.bootstrap(app);


  await app.listen(3666).then(() => {
    console.log('myself server listening on port 3666!');
  });
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
