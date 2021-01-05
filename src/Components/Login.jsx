import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import "../SCSS/Login.scss";
import Loginimage from "./../Assets/Loginimage.jpg";
import { TextField, Snackbar, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      openSnackbar: false,
      snackbarVarient: "error",
      email: "",
      password: "",
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value }, (email) =>
      this.validateEmail(this.state.email)
    );
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value }, (password) =>
      this.validatePassword(this.state.password)
    );
  };

  /* =====================================
    VALIDATIONS
    =======================================*/
  validateEmail = (input) => {
   const regexEmail = new RegExp(
    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
  );
    let error =regexEmail.test(String(input))
      ? ""
      : "Email is Invalid";
      if (error === "") {
        this.setState({ emailErrorStatus: false });
        this.setState({ emailErrorMessage: error });
        this.setState({ emailValid: true });
      } else {
        this.setState({ emailErrorStatus: true });
        this.setState({ emailErrorMessage: error });
        this.setState({ emailValid: false });
      }
  };
  validatePassword = (input) => {
    const regexPassword = new RegExp(
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
  );
    let error = regexPassword.test(String(input))
      ? ""
      : "Invalid Password";
      if (error === "") {
        this.setState({ passwordErrorStatus: false });
        this.setState({ passwordErrorMessage: error });
        this.setState({ passwordValid: true });
      } else {
        this.setState({ passwordErrorStatus: true });
        this.setState({ passwordErrorMessage: error });
        this.setState({ passwordValid: false });
      }
  };

  signIn = () => {
    let errorEmail = this.state.email ? "" : "Email is Required";
    if (errorEmail === "") {
      this.setState({ emailErrorStatus: false });
      this.setState({ emailErrorMessage: errorEmail });
      this.setState({ emailValid: true });
    } else {
      this.setState({ emailErrorStatus: true });
      this.setState({ emailErrorMessage: errorEmail });
      this.setState({ emailValid: false });
    }
    let errorPassword = this.state.password ? "" : "Password is Required";
    if (errorPassword === "") {
      this.setState({ passwordErrorStatus: false });
      this.setState({ passwordErrorMessage: errorPassword });
      this.setState({ passwordValid: true });
    } else {
      this.setState({ passwordErrorStatus: true });
      this.setState({ passwordErrorMessage: errorPassword });
      this.setState({ passwordValid: false });
    }
    this.props.user.forEach(element => {
      if(this.state.email===element.email){
        if(this.state.password===element.password){
          this.setState({ responseMessage: "Login Successful" });
          this.setState({ snackbarVarient: "success" });
          this.setState({ OpenSnackbar: true });
          setTimeout(() => {
            this.props.history.push("/dashboard");
          }, 3000); 
        }
        else{
          this.setState({
            responseMessage: "Username or Password is Incorrect",
          });
          this.setState({ snackbarVarient: "error" });
          this.setState({ OpenSnackbar: true });
        }
      }
    });
  };
  
  handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({ OpenSnackbar: false });
  };

  render() {
    return (
      <div className="checkoutPage">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.OpenSnackbar}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert
            onClose={this.handleClose}
            severity={this.state.snackbarVarient}
          >
            {this.state.responseMessage}
          </Alert>
        </Snackbar>
        <div className="Login">
          <Card className="LoginCard" variant="outlined">
            <div className="loginImage">
              <img
                src={Loginimage}
                alt="Book logo"
                height="100px"
                width="100px"
              />
            </div>
            <span className="Bookstore">Login</span>
            <br />
            <div className="Loginform">
              <TextField
                className="name"
                name="email"
                variant="outlined"
                id="outlined-required"
                label="Email"
                value={this.state.email}
                required
                onChange={(e)=>this.handleEmailChange(e)}
                error={this.state.emailErrorStatus}
                helperText={this.state.emailErrorMessage}
              />
              <br />
              <TextField
                className="name"
                name="password"
                id="outlined-adornment-password"
                type={this.state.showPassword ? "text" : "password"}
                variant="outlined"
                required
                label="Password"
                value={this.state.password}
                onChange={(e)=>this.handlePasswordChange(e)}
                error={this.state.passwordErrorStatus}
                helperText={this.state.passwordErrorMessage}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sytle={{ width: "1px" }}>
                      <IconButton
                        onClick={() =>
                          this.setState({
                            showPassword: !this.state.showPassword,
                          })
                        }
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <br />
              <br />
              <div className="buttonLogin">
                <div>
                  <Button
                    className="signup"
                    color="primary"
                    onClick={() => this.props.history.push("/register")}
                  >
                    Create account
                  </Button>
                </div>
                <div>
                  <Button
                    className="button-Login"
                    variant="contained"
                    color="primary"
                    onClick={this.signIn}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  console.log("Login Data",state.user)
  return{
    user:state.user,
  }
}
export default connect(mapStateToProps)(Login);

