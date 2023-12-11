import { Reservation } from './reservation'

export class Room {
  public number: number
  public type: string
  public status: string
  public reservationList: Reservation[]

  constructor(number: number, type: string, status: string) {
    this.number = number
    this.type = type
    this.status = status
    this.reservationList = []
  }

  public checkAvailability(startDate: Date, endDate: Date): boolean {
    if (this.reservationList.length === 0) {
      return true
    }

    for (const reservation of this.reservationList) {
      if (
        reservation.startDate <= startDate &&
        reservation.endDate >= endDate
      ) {
        return false
      }
    }

    return true
  }

  public reserve(startDate: Date, endDate: Date): Reservation {
    const reservation = new Reservation(startDate, endDate, this)
    return reservation
  }

  public cancelReservation(reservation: Reservation): void {
    reservation.cancel()
  }
}
