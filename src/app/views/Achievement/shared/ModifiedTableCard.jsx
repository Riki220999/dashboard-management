import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Icon,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    tableCellRoot: {
      borderBottom: "none"
    }
}));

const ModifiedTableCard = () => {
  
  const classes = useStyles();
  
  const productList = [
    {
      imgUrl: "/assets/images/products/headphone-2.jpg",
      name: "earphone",
      price: 100,
      available: 15
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "earphone",
      price: 1500,
      available: 30
    },
    {
      imgUrl: "/assets/images/products/iphone-2.jpg",
      name: "iPhone x",
      price: 1900,
      available: 35
    },
    {
      imgUrl: "/assets/images/products/iphone-1.jpg",
      name: "iPhone x",
      price: 100,
      available: 0
    },
    {
      imgUrl: "/assets/images/products/headphone-3.jpg",
      name: "Head phone",
      price: 1190,
      available: 5
    }
  ];

  return (
    <Card elevation={3} className="pt-5 mb-6">
      
      <div className="overflow-auto">
        <Table className="product-table">
          <TableHead>
            <TableRow className={classes.tableCellRoot}>
              <TableCell className={classes.tableCellRoot+" px-6"} colSpan={3}>
                NET APE
              </TableCell>
              <TableCell className={classes.tableCellRoot+" px-0"} colSpan={5}>
                API
              </TableCell>
              <TableCell className={classes.tableCellRoot+" px-0"} colSpan={5}>
                SAVER
              </TableCell>
              <TableCell className={classes.tableCellRoot+" px-0"} colSpan={5}>
                TOP UP
              </TableCell>
              <TableCell className={classes.tableCellRoot+" px-0"} colSpan={5}>
                SPI
              </TableCell>
              <TableCell className={classes.tableCellRoot+" px-0"} colSpan={1}>
                CORPORATE
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="px-6" colSpan={1}>
                2020
              </TableCell>
              <TableCell className="px-6" colSpan={1}>
                2019
              </TableCell>
              <TableCell className="px-6" colSpan={1}>
              test
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                SAVER
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                TOP UP
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                SPI
              </TableCell>
              <TableCell className="px-0" colSpan={1}>
                CORPORATE
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productList.map((product, index) => (
              <TableRow key={index}>
                <TableCell className="px-0 capitalize" colSpan={4} align="left">
                  <div className="flex items-center">
                    <img
                      className="circular-image-small"
                      src={product.imgUrl}
                      alt="user"
                    />
                    <p className="m-0 ml-8">{product.name}</p>
                  </div>
                </TableCell>
                <TableCell className="px-0 capitalize" align="left" colSpan={2}>
                  $
                  {product.price > 999
                    ? (product.price / 1000).toFixed(1) + "k"
                    : product.price}
                </TableCell>

                <TableCell className="px-0" align="left" colSpan={2}>
                  {product.available ? (
                    product.available < 20 ? (
                      <small className="border-radius-4 bg-secondary text-white px-2 py-2px ">
                        {product.available} available
                      </small>
                    ) : (
                      <small className="border-radius-4 bg-paper text-white px-2 py-2px ">
                        in stock
                      </small>
                    )
                  ) : (
                    <small className="border-radius-4 bg-error text-white px-2 py-2px ">
                      out of stock
                    </small>
                  )}
                </TableCell>
                <TableCell className="px-0" colSpan={1}>
                  <IconButton>
                    <Icon color="primary">edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default ModifiedTableCard;
