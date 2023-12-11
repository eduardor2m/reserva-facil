import { Hotel } from '../../domain/models/hotel'

export interface HotelBoundary {
  getAllHotels(): Hotel[]
  getHotelById(id: number): Hotel | null
  createHotel(hotel: Hotel): void
  updateHotel(hotel: Hotel): void
  deleteHotel(id: number): void
}
