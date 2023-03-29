import { IContact } from "./IContact"

export default interface IPerson {
    id: string
    name: string
    cpf: string
    address: string
    contacts?: IContact[]
}
