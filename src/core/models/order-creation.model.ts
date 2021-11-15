export interface IOrderCreationModel {
    customerID?: string,
    quantity: number,
    totalPrice: number,
    orderItemString: string,
    customerEmail?: string
}
