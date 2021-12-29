import express, { Express } from 'express';

export class App {
  private app: Express;

  constructor() {
    this.app = express();
  }

  initialiaze() {
    // load routes, middlewares, etc
    return this.app;
  }
}
