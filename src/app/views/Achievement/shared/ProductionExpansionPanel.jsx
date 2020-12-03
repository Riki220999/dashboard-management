import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    paddingBottom:"20px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(12),
    fontStyle: 'italic'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#99CCFF'
  },
  thirdHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#0066CC'
  },
  firstColumn:{
    color: '#0066CC'   
  },
  secondColumn:{
    color: '#99CCFF'   
  },
  thirdColumn:{
    color: '#0066CC'   
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center",
    paddingBottom:"0px"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }
}));

const ProductionExpansionPanel = ({APIData}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>
              {APIData.previousAPIYear}
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.thirdHeading}>
              {APIData.currentAPIYear}
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelSummary
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Data ini merupakan data produksi secara bulanan</Typography>
          </div>
        </ExpansionPanelSummary>
        {APIData['APIList']
            .map((APIDataDetail, index) => (
        <ExpansionPanelDetails key={index} className={classes.details}>
          <div key={index+'a'} className={clsx(classes.column, classes.firstColumn)}>
              <a id={index+'b'}>{APIDataDetail.month}</a>
            </div> 
          <div key={index+'c'} className={clsx(classes.column, classes.helper, classes.secondColumn)}>
            {/* <Chip label="Barbados" onDelete={() => {}} /> */}
            <Typography key={index+'d'} variant="caption">
            {APIDataDetail.previousAPI}            
            </Typography>
          </div>
          <div key={index+'e'} className={clsx(classes.column, classes.helper, classes.thirdColumn)}>
            <Typography key={index+'f'} variant="caption">
              {APIDataDetail.currentAPI}
            </Typography>
          </div>
        </ExpansionPanelDetails>
            ))}
        <Divider />
        <ExpansionPanelDetails className={classes.details}>
        <div className={clsx(classes.column, classes.firstColumn)}>
              Total
            </div> 
          <div className={clsx(classes.column, classes.helper, classes.secondColumn)}>
            {/* <Chip label="Barbados" onDelete={() => {}} /> */}
            <Typography variant="caption">
            {APIData.APITotal.previousAPI}            
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper, classes.thirdColumn)}>
            <Typography variant="caption">
              {APIData.APITotal.currentAPI}
            </Typography>
          </div>

        </ExpansionPanelDetails>
        
      </ExpansionPanel>
    </div>
  );
}

export default ProductionExpansionPanel;
