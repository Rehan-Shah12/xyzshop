import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

const AddProduct = (props) => {
  return (
    <Grid>
      <h1>Add New Product</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField id="name" label="Name" variant="standard" fullWidth />
          <TextField id="price" label="Price" variant="standard" fullWidth />
          <TextField id="color" label="Color" variant="standard" fullWidth />
        </Grid>
        <Grid sm={3}></Grid>
        <Grid sm={3}></Grid>{" "}
        <Grid item xs={9}>
          <Button variant="contained" color="primary">
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddProduct;
