
import ConnectionAPI from "./connection-api";
import { ILogin } from "../models/login.model";
import { AccountRetrievalModel } from "../models/account-retrieval.model";

export default class AuthentificationResourceService {
    public static async login(model: ILogin): Promise<AccountRetrievalModel> {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(model)
            };
            const response = await fetch(`${ConnectionAPI.API_URL}Account/authenticate`, requestOptions);
            return response.json();
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
