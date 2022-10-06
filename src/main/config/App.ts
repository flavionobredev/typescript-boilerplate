import express, { Application, Express } from 'express';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
  }

  initialiaze() {
    // load routes, middlewares, etc
    this.initRoutes(this.app);
    return this.app;
  }

  private initRoutes(app: Application) {
    const router = express.Router();
    router.get('/', (req, res) => res.status(200).send('Hello World!'));
    app.use('/', router);
  }
}
