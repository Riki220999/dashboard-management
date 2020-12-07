import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    "& > * + *": {
      marginTop: theme.spacing(1)
    }
  }
}));

const BadgeAutocomplete = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={option => option.title}
        filterSelectedOptions
        className="mr-2"
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Filter Agency Update"
            placeholder="Agency Update"
            className="bg-white"
            
          />
        )}
      />
     
    </div>
  );
};

export default BadgeAutocomplete;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "AG", status: "AG" },
  { title: "AD", status: "AD" }
];
