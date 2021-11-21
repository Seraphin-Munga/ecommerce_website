import { IProductRetrievalModel } from "../../core/models/product-retrieval.model";

export const addProductItems = (productModel: IProductRetrievalModel) => {
  return (dispatch: any) => {
    dispatch({
      type: "addProduct",
      payload: productModel,
    });
  };
};

export const emptyCard = () => {
  return (dispatch: any) => {
    dispatch({
      type: "emptyCard",
    });
  };
};

