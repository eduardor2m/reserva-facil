import express from 'express'

export class MainRoutes {
  public router: express.Router

  constructor() {
    this.router = express.Router()
    this.configureRoutes()
  }

  private configureRoutes(): void {
    this.router.get('/', (req, res) => {
      res.send('Welcome to the main API route')
    })
  }
}
