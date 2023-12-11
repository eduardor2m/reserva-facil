import { Hotel } from '../models/hotel'

export interface HotelRepository {
  getById(id: number): Hotel | null
  getAll(): Hotel[]
  save(hotel: Hotel): void
  update(hotel: Hotel): void
  delete(id: number): void
}
