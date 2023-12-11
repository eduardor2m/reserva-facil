/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { HotelBoundary } from '../../../application/interfaces/hotel_usecases_boundaries'

export class HotelController {
  constructor(private hotelUseCases: HotelBoundary) {}

  public getAllHotels(req: Request, res: Response): void {
    res.send(this.hotelUseCases.getAllHotels())
  }

  public getHotelById(req: Request, res: Response): void {
    res.send(`Get hotel with ID ${req.params.hotelId}`)
  }

  public createHotel(req: Request, res: Response): void {
    res.send('Create a new hotel')
  }

  public updateHotel(req: Request, res: Response): void {
    res.send(`Update hotel with ID ${req.params.hotelId}`)
  }

  public deleteHotel(req: Request, res: Response): void {
    res.send(`Delete hotel with ID ${req.params.hotelId}`)
  }
}
