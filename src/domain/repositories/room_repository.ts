import { Room } from '../models/room'

export interface RoomRepository {
  getById(id: number): Room | null
  getAll(): Room[]
  save(room: Room): void
  update(room: Room): void
  delete(id: number): void
}
