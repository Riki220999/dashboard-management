import React, { Fragment } from "react";
import { format } from "date-fns";
import {
  Grid,
  Card,
  Icon,
  IconButton,
  Checkbox,
  Fab,
  Avatar,
  Hidden
} from "@material-ui/core";
import SimpleMenu from "./SimpleMenu"

const RowCards = () => {
  return [1, 2, 3, 4].map(id => (
    <Fragment key={id}>
      <Card className="py-4 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={12} xs={12}>
            <div className="ml-4 flex items-center overflow-auto">
              
              {/* <Avatar className=" h-80 w-80 avatar ml-4 mr-16" src="/assets/images/face-4.jpg" /> */}
              <div className=" mr-6 flex-grow">
                <h5 className="text-bold">Agent Code</h5>
                <h6 className=" mt-1 text-primary font-medium">00841117</h6>
                <h5 className="text-bold">Agent Type</h5>
                <h6 className=" mt-1 text-primary font-medium">AG</h6>
              </div>
              
              <div className="mr-6 flex-grow">
                <h5 className="text-bold">Agent Name</h5>
                <h6 className=" mt-1 text-primary font-medium">Agen Satu Dua Tiga</h6>
                <h5 className="text-bold">Email</h5>
                <a href=""><h6 className=" mt-1 text-primary font-medium">test@gmail.com</h6></a>
              </div>
             
              <div className="mr-6 flex-grow">
                <h5 className="text-bold">CPD Code</h5>
                <h6 className=" mt-1 text-primary font-medium">CPDCode123</h6>
                <h5 className="text-bold">Agency Office</h5>
                <h6 className=" mt-1 text-primary font-medium">Jakarta</h6>
              </div>
              <div className="mr-6 flex-grow">
                <h5 className="text-bold">License Number</h5>
                <h6 className=" mt-1 text-primary font-medium">License123456</h6>
                <h5 className="text-bold">License Expiry Date</h5>
                <h6 className=" mt-1 text-primary font-medium">10/10/2024</h6>
              </div>
              <div className="flex flex-grow">
                <SimpleMenu />
                
              </div>
              
            </div>
          </Grid>

        </Grid>
      </Card>
      <div className="py-2" />
    </Fragment>
  ));
};

export default RowCards;
