import express from 'express'
import { HotelUseCases } from '../../../application/usecases/hotel_usecases'
import { HotelSqlite } from '../../persistence/sqlite/hotel_sqlite'
import { HotelController } from '../controllers/hotel_controller'

const hotelRepository = new HotelSqlite()
const hotelUseCases = new HotelUseCases(hotelRepository)

export class HotelRoutes {
  public router: express.Router
  private controller: HotelController

  constructor() {
    this.router = express.Router()
    this.controller = new HotelController(hotelUseCases)
    this.configureRoutes()
  }

  private configureRoutes(): void {
    this.router.get('/', this.controller.getAllHotels.bind(this.controller))
    this.router.get(
      '/:hotelId',
      this.controller.getHotelById.bind(this.controller),
    )
    this.router.post('/', this.controller.createHotel.bind(this.controller))
    this.router.put(
      '/:hotelId',
      this.controller.updateHotel.bind(this.controller),
    )
    this.router.delete(
      '/:hotelId',
      this.controller.deleteHotel.bind(this.controller),
    )
  }
}
