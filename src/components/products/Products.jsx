import React from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const navigated = useNavigate;
  const classes = useStyles();
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getData, []);
  return (
    <div>
      <h1>Products</h1>
      <Fab color="primary" aria-label="add" className={classes.addBtn}>
        <AddIcon
          onClick={() => {
            navigated("/contact-us");
            // console.log("Rehan Shah");
          }}
        />
      </Fab>
      {products.length === 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
