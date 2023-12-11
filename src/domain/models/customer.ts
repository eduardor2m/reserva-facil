import { Reservation } from './reservation'

export class Customer {
  public name: string
  public email: string
  public phoneNumber: string
  public reservationHistory: Reservation[]

  constructor(name: string, email: string, phoneNumber: string) {
    this.name = name
    this.email = email
    this.phoneNumber = phoneNumber
    this.reservationHistory = []
  }
}
