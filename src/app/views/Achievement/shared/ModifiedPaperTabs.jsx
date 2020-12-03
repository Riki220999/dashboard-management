import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom:"20px"
  },
  rootMTDYTD:{
    flexGrow: 1,
    marginBottom:"20px",
    color:"#fff"
  }
});

export function ModifiedPaperTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
    >
        <Tab label="Individual" />
        <Tab label="Unit" />
        <Tab label="Group" />
        <Tab label="AD on AD" />
      </Tabs>
    </Paper>
  );
}

export function ModifiedPaperTabsMTDYTD() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Paper className={classes.rootMTDYTD+ " bg-light-primary"}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
      >
          <Tab className={"text-brand font-bold"} label="MONTH TO DATE" />
          <Tab className={"text-brand font-bold"} label="YEAR TO DATE" />
        </Tabs>
      </Paper>
    );
  }