import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import shoes from "../assets/imgs/cb176970.jpeg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductResourceService from "../core/services/products-resource-service";
import { IProductRetrievalModel } from "../core/models/product-retrieval.model";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { store, useGlobalState } from "state-pool";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

const _productResourceService = ProductResourceService;
store.setState("numberOfItems", 0);
let shoppingCard: IProductRetrievalModel[] = [];

function FormRow() {
  const [getProducts, setProducts] = useState<Array<IProductRetrievalModel>>();
  let [numberOfItems, setNumberOfItems] = useGlobalState("numberOfItems");
  async function getProductsItem(): Promise<void> {
    try {
      const productData = await _productResourceService.getProducts();

      setProducts(productData);
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  const addCard = (productModel: IProductRetrievalModel) => {
    const lengthProductExist = shoppingCard.filter(
      (item) => item._product_productID === productModel._product_productID
    );

    if (lengthProductExist.length <= 0) {
      shoppingCard.push(productModel);
      localStorage.setItem("cardProducts", JSON.stringify(shoppingCard));
      numberOfItems = shoppingCard.length;
      setNumberOfItems(numberOfItems);
    } else {
      const index = shoppingCard.findIndex(
        (item) => item._product_productID === productModel._product_productID
      );
      const quatity = shoppingCard[index]._product_quantity + 1;
      shoppingCard[index]._product_quantity = quatity;

      localStorage.setItem("cardProducts", JSON.stringify(shoppingCard));

      swal({
        title: "Warning",
        text: `You have ${quatity} of the same products in your cards`,
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  useEffect(() => {
    getProductsItem();
  }, []);

  const renderProducts = getProducts?.map((item: any) => {
    return (
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={`http://compaign-002-site2.dtempurl.com/${item._product_imageLink}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item._product_productName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              R {item._product_price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => addCard(item)} size="small">
              ADD TO CARD
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  });

  return <React.Fragment>{renderProducts}</React.Fragment>;
}

const Products = () => {
  const history = useHistory();
  const [numberOfItems, setNumberOfItems] = useGlobalState("numberOfItems");

  const checkOut = () => {
    history.push("/login");
  };
  return (
    <div>
      <Badge badgeContent={numberOfItems} color="error">
        <AddShoppingCartIcon
          onClick={() => checkOut()}
          className="shoppingCard"
        />
      </Badge>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
