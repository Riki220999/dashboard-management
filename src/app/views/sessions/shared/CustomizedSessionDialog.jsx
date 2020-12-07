import React from "react";
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor:"#ED1B2E"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography className={"text-white"} variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

class CustomizedSessionDialogs extends React.Component {

  render() {

    return (
      <div>
        <Dialog
          onClose={this.props.handler}
          aria-labelledby="customized-dialog-title"
          open={this.props.dialogOpen}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.props.handler}>
            {this.props.modalTitle}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Permintaan tidak dapat diproses, silakan coba lagi atau hubungi
              PRUDigitalFriend
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handler} color="secondary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomizedSessionDialogs;
