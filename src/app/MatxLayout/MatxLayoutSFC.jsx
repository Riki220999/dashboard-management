import React, { Fragment, useContext, useEffect } from "react";
import { MatxLayouts } from "./index";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { matchRoutes } from "react-router-config";
import { connect } from "react-redux";
import AppContext from "app/appContext";
import {
  setLayoutSettings,
  setDefaultSettings
} from "app/redux/actions/LayoutActions";
import { isEqual, merge } from "lodash";
import { isMdScreen } from "utils";
import { MatxSuspense } from "matx";
import { useIdleTimer } from 'react-idle-timer'
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


let tempSettings;

const MatxLayoutSFC = props => {
  let appContext = useContext(AppContext);
  const {
    settings,
    defaultSettings,
    setLayoutSettings,
    setDefaultSettings
  } = props;

  const [open, setOpen] = React.useState(false);

  tempSettings = settings;

  useEffect(() => {
    listenWindowResize();

    if (window) {
      // LISTEN WINDOW RESIZE
      window.addEventListener("resize", listenWindowResize);
    }
    return () => {
      if (window) {
        window.removeEventListener("resize", listenWindowResize);
      }
    };
  }, []);

  useEffect(() => {
    updateSettingsFromRouter();
  }, [props.location]);

  const listenWindowResize = () => {
    let settings = tempSettings;
    if (settings.layout1Settings.leftSidebar.show) {
      let mode = isMdScreen() ? "close" : "full";
      setLayoutSettings(
        merge({}, settings, { layout1Settings: { leftSidebar: { mode } } })
      );
    }
  };

  const updateSettingsFromRouter = () => {
    const { routes } = appContext;
    const matched = matchRoutes(routes, props.location.pathname)[0];

    if (matched && matched.route.settings) {
      // ROUTE HAS SETTINGS
      const updatedSettings = merge({}, settings, matched.route.settings);
      if (!isEqual(settings, updatedSettings)) {
        setLayoutSettings(updatedSettings);
        // console.log('Route has settings');
      }
    } else if (!isEqual(settings, defaultSettings)) {
      setLayoutSettings(defaultSettings);
      // console.log('reset settings', defaultSettings);
    }
  };

  const Layout = MatxLayouts[settings.activeLayout];

  //react-idle-start
  const handleOnIdle = event => {
    setOpen(true);
    // console.log('user is idle', event)
    // console.log('last active', getLastActiveTime())
  }
 
  const handleOnActive = event => {
    // console.log('user is active', event)
    // console.log('time remaining', getRemainingTime())
  }
 
  const handleOnAction = (e) => {
    // console.log('user did something', e)
  }
 
  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 60000,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500
  })

  //react-idle-end

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    
    <Fragment>
    
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Hi, are you still there?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            For your account security, you will be automatically logged out from application if there's no activity after some time.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            Yes, Please Wait
          </Button>
        </DialogActions>
      </Dialog>
      <MatxSuspense>
      <Layout {...props} />
    </MatxSuspense>
      </Fragment>
  );
};

const mapStateToProps = state => ({
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
  defaultSettings: state.layout.defaultSettings
});

export default withRouter(
  connect(mapStateToProps, { setLayoutSettings, setDefaultSettings })(
    MatxLayoutSFC
  )
);
