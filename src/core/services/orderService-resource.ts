
import ConnectionAPI from "./connection-api";
import { IOrderCreationModel } from "../models/order-creation.model";

export default class OrderResourceService {

    public static async create(model: IOrderCreationModel): Promise<void> {

        try {

            let customer = JSON.stringify(sessionStorage.getItem("user"));
            let getUserObj = JSON.parse(customer);
            let user = JSON.parse(getUserObj);

            model.customerID = user.userID;
            model.customerEmail = user.email;

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                "Authorization": "Bearer " + user.token,
                body: JSON.stringify(model)
            };
            const response = await fetch(`${ConnectionAPI.API_URL}Order`, requestOptions);
        } catch (error: any) {
            if (error && error.error instanceof ProgressEvent) {
                throw new Error(
                    "A connection could not be established. Please contact an administrator."
                );
            }
            throw Error(error.error);
        }
    }
}
