import React, { Component } from "react";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  CircularProgress
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { loginWithEmailAndPassword ,closePopUp} from "../../redux/actions/LoginActions";
import './SignIn.css';
import CustomizedSessionDialog from "./shared/CustomizedSessionDialog";

const styles = theme => ({

  wrapper: {
    position: "relative"
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  },
  top50:{
    top:"50%"
  },
  p8leftrightbottom:{
    paddingRight: `2rem !important`,
    paddingBottom: `2rem !important`,
    paddingLeft: `2rem !important`
  }
});

class SignIn extends Component {

  constructor(props) {
    super(props)

    this.popUpHandler = this.popUpHandler.bind(this);
  }

  popUpHandler() {
    this.setState({
      someVar: 'some value'
    })
  }
  
  state = {
    pruforceID: "",
    password: ""
  };
  handleChange = event => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleFormSubmit = event => {
    this.props.loginWithEmailAndPassword({ ...this.state });
  };

  handleClosePopUp = event => {
    this.props.closePopUp({});
  }

  render() {
    let { pruforceID, password,popUp } = this.state;
    let { classes } = this.props;
    return (
      <Grid
      container
      direction="row-reverse"
      className="h-full"
    >
              <Grid className={"right-grid"} item lg={9} md={8} sm={12} xs={12}>
                <div className={"right-side"}>
                  <img className={"pruforce-logo"} src="/assets/images/pruforce-logo.png" alt="" />
                  <Card className="p-8 signup-card">
              <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="PRUForce ID"
                      onChange={this.handleChange}
                      type="text"
                      name="pruforceID"
                      value={pruforceID}
                      validators={["required"]}
                      errorMessages={[
                        "Mohon isi PRUForce ID Anda"
                      ]}
                    />
                    <TextValidator
                      className="mb-3 w-full"
                      label="Password"
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["Mohon isi kata sandi Anda"]}
                    />
                    <div className="flex flex-wrap items-center mb-4">
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <div className={classes.wrapper}>
                        <Button 
                        className="text-white w-full"
                          variant="contained"
                          color="secondary"
                          disabled={this.props.login.loading}
                          type="submit"
                        >
                          Login untuk masuk ke PRUForce Admin
                        </Button>
                        {this.props.login.loading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      </div>
                      </Grid>
                      <span className="ml-2 pt-5 text-small text-gray">untuk pendaftaran PRUForce ID silakan mendaftar melalui aplikasi PRUForce </span>
                    </div>
                  </ValidatorForm>
                  </Card>
                  </div>
                <div className={"right-footer"}>PT Prudential Life Assurance terdaftar dan diawasi oleh Otoritas Jasa Keuangan

Hak Cipta © 2020 Prudential Indonesia. All rights reserved.

</div>            
              </Grid>
              <Grid className={"left-grid"} item lg={3} md={4} sm={12} xs={12}>
              <div className={"left-side"}>
              <div className={"left-footer"}>
              <div>membutuhkan bantuan?</div>
              <div>silakan hubungi</div>
              <div>prudigitalfriend@prudential.co.id</div>
              <div>150085</div>
              </div>
              
              </div>
              </Grid>
              {this.props.login.popUp && (<CustomizedSessionDialog modalTitle={this.props.login.success? "KONFIRMASI": "GAGAL"} dialogOpen={this.props.login.popUp} handler={this.handleClosePopUp}></CustomizedSessionDialog>)} 
              </Grid>
              
    );
  }
}

const mapStateToProps = state => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  login: state.login
});
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { loginWithEmailAndPassword,closePopUp })(SignIn))
);
