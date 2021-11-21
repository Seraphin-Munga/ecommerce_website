import { IProductRetrievalModel } from "../../core/models/product-retrieval.model";

const shoppingCardReducer = (
  productState: Array<IProductRetrievalModel> = [],
  action: any
) => {
  switch (action.type) {
    case "addProduct":
      productState.push(action.payload);
      return productState;
    case "emptyCard":
      productState = [];
      return productState;
    default:
      return productState;
  }
};

export default shoppingCardReducer;
