import { Customer } from './customer'
import { Room } from './room'

export class Reservation {
  public startDate: Date
  public endDate: Date
  public room: Room
  public customer?: Customer
  public status: string

  constructor(startDate: Date, endDate: Date, room: Room, customer?: Customer) {
    this.startDate = startDate
    this.endDate = endDate
    this.room = room
    this.customer = customer
    this.status = 'active'
  }

  public cancel(): void {
    this.status = 'canceled'
  }
}
