/* eslint-disable no-useless-constructor */
import { Hotel } from '../../domain/models/hotel'
import { HotelRepository } from '../../domain/repositories/hotel_repository'
import { HotelBoundary } from '../interfaces/hotel_usecases_boundaries'

export class HotelUseCases implements HotelBoundary {
  constructor(private hotelRepository: HotelRepository) {}

  public getAllHotels() {
    return this.hotelRepository.getAll()
  }

  public getHotelById(id: number) {
    return this.hotelRepository.getById(id)
  }

  public createHotel(hotel: Hotel) {
    return this.hotelRepository.save(hotel)
  }

  public updateHotel(hotel: Hotel) {
    return this.hotelRepository.update(hotel)
  }

  public deleteHotel(id: number) {
    return this.hotelRepository.delete(id)
  }
}
