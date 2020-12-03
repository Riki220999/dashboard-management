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

import { loginWithEmailAndPassword } from "../../redux/actions/LoginActions";
import { Breadcrumb } from "matx";

const styles = theme => ({

  leftSide:{
    position:"relative",
    top:"50%"
  },

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
  state = {
    email: "ADM12345",
    password: "Password09",
    agreement: ""
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
  render() {
    let { email, password } = this.state;
    let { classes } = this.props;
    return (
      <div style={{width:"100%"}} className="signup flex justify-center w-full h-full-screen">
        <div className="p-8">
            <Grid container>
              <Grid item lg={4} md={4} sm={4} xs={12}>
                <div className={classes.leftSide+" p-8 flex justify-center items-center h-full"} >
                  <img src="/assets/images/pruforce-logo.png" alt="" />
                </div>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={12}>
              <Card className={classes.leftSide+" signup-card position-relative x-center"}>
                <div className={classes.leftSide+ " p-8 h-full bg-light-gray position-relative"}>
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="PRUForce ID"
                      onChange={this.handleChange}
                      type="text"
                      name="email"
                      value={email}
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
                    <Grid item lg={5} md={12} sm={12} xs={12}>
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
                </div>
                </Card>
              </Grid>
            </Grid>
         </div>
       </div> 
    );
  }
}

const mapStateToProps = state => ({
  loginWithEmailAndPassword: PropTypes.func.isRequired,
  login: state.login
});
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { loginWithEmailAndPassword })(SignIn))
);
