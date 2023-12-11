import { Customer } from '../models/customer'

export interface CustomerRepository {
  getById(id: number): Customer | null
  getAll(): Customer[]
  save(customer: Customer): void
  update(customer: Customer): void
  delete(id: number): void
}
