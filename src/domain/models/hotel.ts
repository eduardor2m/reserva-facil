import { Reservation } from './reservation'
import { Room } from './room'

export class Hotel {
  public name: string
  public location: string
  public totalCapacity: number
  public roomList: Room[]

  constructor(
    name: string,
    location: string,
    totalCapacity: number,
    roomList: Room[],
  ) {
    this.name = name
    this.location = location
    this.totalCapacity = totalCapacity
    this.roomList = roomList
  }

  public checkAvailability(startDate: Date, endDate: Date): boolean {
    if (this.roomList.length === 0) {
      return false
    }

    for (const room of this.roomList) {
      if (room.checkAvailability(startDate, endDate)) {
        return true
      }
    }

    return false
  }

  public reserve(room: Room, startDate: Date, endDate: Date): Reservation {
    const reservation = new Reservation(startDate, endDate, room)
    return reservation
  }

  public cancelReservation(reservation: Reservation): void {
    reservation.cancel()
  }
}
