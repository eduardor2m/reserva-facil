import { Hotel } from '../../../domain/models/hotel'
import { Room } from '../../../domain/models/room'
import { HotelRepository } from '../../../domain/repositories/hotel_repository'

const room = new Room(1, 'palacio', 'vaga')
const hotel = new Hotel('Hotel 1', 'Hotel 1 location', 5, [room])

export class HotelSqlite implements HotelRepository {
  getById(id: number): Hotel | null {
    console.log(id)
    return hotel
  }

  getAll(): Hotel[] {
    return [hotel]
  }

  save(hotel: Hotel): void {
    console.log(hotel)
  }

  update(hotel: Hotel): void {
    console.log(hotel)
  }

  delete(id: number): void {
    console.log(id)
  }
}
