import { NestExpressApplication } from '@nestjs/platform-express';

export default class MainTestMiddleware {
  static bootstrap(app: NestExpressApplication) {
    app.use((req: Request, res: Response, next: Function) => {
      MainTestMiddleware.use(req, res, next);
    });
  }

  static use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
