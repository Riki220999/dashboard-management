import React from "react";
import PaginationTable from "./ProfileTable";
import { Breadcrumb, SimpleCard } from "matx";
import BadgeAutocomplete from "./shared/BadgeAutocomplete";
import RowCards from "./shared/RowCards";
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


const AppProfileDetail = () => {
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Agent List", path: "/profile/list" }
          ]}
        />
      </div>
      <div className="py-3" />
      <SimpleCard title="My Profile Summary">
        <Grid container alignItems="center">
          <Grid item md={6} xs={6}>
            <div className="ml-4 flex items-center overflow-auto">
              <div className="py-2" />
              {/* <Avatar className=" h-80 w-80 avatar ml-4 mr-16" src="/assets/images/face-4.jpg" /> */}
              <div className=" mr-2 flex-grow">
                <h6 className="text-bold">Agent Code</h6>
                <div className="py-2" />
                <h6 className="text-bold">Agent Type</h6>
                <div className="py-2" />
                <h6 className="text-bold">Agent Name</h6>
                <div className="py-2" />
                <h6 className="text-bold">Email</h6>
                <div className="py-2" />
                <h6 className="text-bold">CPD Code</h6>
                <div className="py-2" />
                <h6 className="text-bold">License Number</h6>
                <div className="py-2" />
                <h6 className="text-bold">License Expiry Date</h6>
                <div className="py-2" />
                <h6 className="text-bold">Agency Office</h6>
              </div>
              <div className=" flex-grow">
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">:</h6>
              </div>
              <div className=" flex-grow">
                <h6 className=" mt-1 text-primary font-medium">00841117</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">Direct Sales</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">PT. PRUDENTIAL LIFE ASSURANCE</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">staffpolicy.services@prudential.co.id</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium"></h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">9</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">31-Dec-2021</h6>
                <div className="py-2" />
                <h6 className=" mt-1 text-primary font-medium">Head Office</h6>
                
              </div>
             
            </div>
          </Grid>

        </Grid>
        
      </SimpleCard>
    </div>
  );
};

export default AppProfileDetail;
