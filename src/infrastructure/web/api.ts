import express from 'express'
import { MainRoutes } from './routes/routes'
import { HotelRoutes } from './routes/hotel_routes'

class API {
  private app: express.Application

  constructor() {
    this.app = express()
    this.configureMiddleware()
    this.configureRoutes()
    this.startServer()
  }

  private configureMiddleware(): void {
    this.app.use(express.json())
  }

  private configureRoutes(): void {
    this.app.use('/api', new MainRoutes().router)
    this.app.use('/api/hotels', new HotelRoutes().router)
  }

  private startServer(): void {
    const port = 3000
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  }
}

export default API
