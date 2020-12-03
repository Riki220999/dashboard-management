import React from "react";
import { Grid, Card, Icon, Fab } from "@material-ui/core";

const ProductionStatCard = () => {
  return (
    <Grid container spacing={3} className="mb-6">
      <Grid item xs={12} md={4}>
        <Card elevation={3} className="p-4">
          <div className="flex items-center">
            <Fab
              size="medium"
              className="bg-secondary circle-44 box-shadow-none"
            >
              <Icon className="text-white">trending_down</Icon>
            </Fab>
            <h5 className="font-medium text-secondary m-0 ml-3">NET APE</h5>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2020</h3>
            <span className="text-24 text-grey ml-1">Rp.159,829,583.37</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2019</h3>
            <span className="text-18 text-muted ml-1">Rp.1,006,773,911.9</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow"> </h3>
            <span className="text-18 text-secondary ml-1">Rp.-846,944,328.53</span>
            <div className="ml-3 small-circle bg-secondary text-white">
              <Icon className="small-icon">arrow_downward</Icon>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card elevation={3} className="p-4">
          <div className="flex items-center">
            <Fab
              size="medium"
              className="bg-secondary circle-44 box-shadow-none"
            >
              <Icon className="text-white">trending_down</Icon>
            </Fab>
            <h5 className="font-medium text-secondary m-0 ml-3">API</h5>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2020</h3>
            <span className="text-18 text-grey ml-1">Rp.117,776,496</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2019</h3>
            <span className="text-13 text-muted ml-1">Rp.962,502,510.96</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow"> </h3>
            <span className="text-13 text-secondary ml-1">Rp.-844,726,014.96</span>
            <div className="ml-3 small-circle bg-secondary text-white">
              <Icon className="small-icon">arrow_downward</Icon>
            </div>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Konvensional</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.105,276,492</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Syariah</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.12,500,004</span>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card elevation={3} className="p-4">
          <div className="flex items-center">
            <Fab
              size="medium"
              className="bg-secondary circle-44 box-shadow-none"
            >
              <Icon className="text-white">trending_down</Icon>
            </Fab>
            <h5 className="font-medium text-secondary m-0 ml-3">SAVER</h5>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2020</h3>
            <span className="text-18 text-grey ml-1">Rp.31,010,672.97</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2019</h3>
            <span className="text-13 text-muted ml-1">Rp.38,264,395.95</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow"> </h3>
            <span className="text-13 text-secondary ml-1">Rp.-7,253,722.98</span>
            <div className="ml-3 small-circle bg-secondary text-white">
              <Icon className="small-icon">arrow_downward</Icon>
            </div>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Konvensional</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.29,780,516.55</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Syariah</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.1,230,156.42</span>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card elevation={3} className="p-4">
          <div className="flex items-center">
            <Fab
              size="medium"
              className="bg-green circle-44 box-shadow-none"
            >
              <Icon className="text-white">trending_up</Icon>
            </Fab>
            <h5 className="font-medium text-green m-0 ml-3">TOP UP</h5>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2020</h3>
            <span className="text-18 text-grey ml-1">Rp.10,104,914.4</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2019</h3>
            <span className="text-13 text-muted ml-1">Rp.6,007,004.99</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow"> </h3>
            <span className="text-13 text-green ml-1">Rp.4,097,909.41</span>
            <div className="ml-3 small-circle bg-green text-white">
              <Icon className="small-icon">arrow_upward</Icon>
            </div>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Konvensional</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.10,104,914,4</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Syariah</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.0</span>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card elevation={3} className="p-4">
          <div className="flex items-center">
            <Fab
              size="medium"
              className="bg-secondary circle-44 box-shadow-none"
            >
              <Icon className="text-white">trending_down</Icon>
            </Fab>
            <h5 className="font-medium text-secondary m-0 ml-3">SPI</h5>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2020</h3>
            <span className="text-18 text-grey ml-1">Rp.937,500</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2019</h3>
            <span className="text-13 text-muted ml-1">Rp.0</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow"> </h3>
            <span className="text-13 text-green ml-1">Rp.937,500</span>
            <div className="ml-3 small-circle bg-green text-white">
              <Icon className="small-icon">arrow_upward</Icon>
            </div>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Konvensional</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.937,500</span>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">Syariah</h3>
            <span className="text-18 text-grey font-bold ml-1">Rp.0</span>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card elevation={3} className="p-4">
          <div className="flex items-center">
            <Fab
              size="medium"
              className="bg-secondary circle-44 box-shadow-none"
            >
              <Icon className="text-white">trending_down</Icon>
            </Fab>
            <h5 className="font-medium text-secondary m-0 ml-3">CORPORATE</h5>
          </div>
          <div className="pt-4 flex items-center">
            <h3 className="m-0 text-muted flex-grow">2020</h3>
            <span className="text-18 text-grey ml-1">Rp.937,500</span>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductionStatCard;
