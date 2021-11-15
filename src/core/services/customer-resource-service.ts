
import ConnectionAPI from "./connection-api";
import { ICustomerCreationModel } from "../models/customer-creation,model";

export default class CustomerResourceService {
    public static async register(model: ICustomerCreationModel): Promise<void> {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(model)
            };
            const response = await fetch(`${ConnectionAPI.API_URL}Customer`, requestOptions);
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
