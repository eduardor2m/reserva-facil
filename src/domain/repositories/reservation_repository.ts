import { Reservation } from '../models/reservation'

export interface ReservationRepository {
  getById(id: number): Reservation | null
  getAll(): Reservation[]
  save(reservation: Reservation): void
  update(reservation: Reservation): void
  delete(id: number): void
}
