import { IProductRetrievalModel } from "../models/product-retrieval.model";
import ConnectionAPI from "./connection-api";

export default class ProductResourceService {
    public static async getProducts(): Promise<Array<IProductRetrievalModel>> {
        try {
            const response = await fetch(`${ConnectionAPI.API_URL}Product`);

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
