import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IProductRetrievalModel } from "../core/models/product-retrieval.model";
import Button from "@mui/material/Button";
import OrderResourceService from "../core/services/orderService-resource";
import { IOrderCreationModel } from "../core/models/order-creation.model";
import { useHistory } from "react-router-dom";

const _orderResourceService = OrderResourceService;


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShoppingCard = () => {
  const [getProducts, setProducts] = useState<Array<IProductRetrievalModel>>();
  let [orderCreationModel, setOrderCreationModel] =
    useState<IOrderCreationModel>();
  const history = useHistory();
  async function checkOut(): Promise<void> {
    const productItems = localStorage.getItem("cardProducts");
    const items = JSON.parse(JSON.stringify(productItems));
    const ProductItemsShopping = JSON.parse(items);

  let  totalPrice = 0

    ProductItemsShopping.forEach((element:IProductRetrievalModel) => {
      
      totalPrice += element._product_price;
    });

    orderCreationModel = {
      quantity: ProductItemsShopping.length,
      totalPrice: totalPrice,
      customerEmail: "",
      customerID: "",
      orderItemString: JSON.stringify(getProducts),
    };

    try {
      await _orderResourceService.create(orderCreationModel);
      alert("Order successfully");
      localStorage.clear();
      sessionStorage.clear();
      history.push("/");
    } catch (error) {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    const productItems = localStorage.getItem("cardProducts");
    const items = JSON.parse(JSON.stringify(productItems));
    const ProductItemsShopping = JSON.parse(items);
    setProducts(ProductItemsShopping);
  }, []);

  const renderShoppingList = getProducts?.map(
    (row: IProductRetrievalModel, index) => {
      return (
        <>
          <TableRow
            key={row._product_productID}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row._product_productName}
            </TableCell>
            <TableCell align="right">{row._product_price}</TableCell>
            <TableCell align="right">{row._product_quantity}</TableCell>
          </TableRow>
        </>
      );
    }
  );
  return (
    <div className="container">
      <Button onClick={() => checkOut()} variant="contained">
        Check Out
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderShoppingList}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShoppingCard;
