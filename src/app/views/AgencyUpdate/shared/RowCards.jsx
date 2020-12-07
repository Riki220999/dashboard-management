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
import SimpleMenu from "./SimpleMenu";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  icon: {
    fontSize: "44px",
    opacity: 0.6,
    color: theme.palette.primary.main
  }
});

const RowCards = ({ classes }) => {
  return [1, 2, 3, 4].map(id => (
    <Fragment key={id}>
      <Card className="py-4 px-4 project-card">
        <Grid container alignItems="center">
          <Grid item md={12} xs={12}>
            <div className=" flex items-center overflow-auto">
              <Icon  className={classes.icon,"ml-4 mr-8"}>notifications</Icon>
              {/* <Avatar className=" h-80 w-80 avatar ml-4 mr-16" src="/assets/images/face-4.jpg" /> */}
              <div className=" mr-6 flex-grow">
                
                <h6 className=" mt-1 text-primary font-medium">22 November 2020</h6>
                <h5 className="text-bold">PRUGalaxy - PRUWorks Champion Club Q4 & PRUWorks Convention 2020</h5>
              </div>
              
{/*              
              <div className="flex flex-grow">
                <SimpleMenu />
                
              </div> */}
              
            </div>
          </Grid>

        </Grid>
      </Card>
      <div className="py-2" />
    </Fragment>
  ));
};

export default withStyles(styles, { withTheme: true })(RowCards);
