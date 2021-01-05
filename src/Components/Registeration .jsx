import React, {Component} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import logo from '../Login/logo.jpg';
// import './Registeration.css';
import { connect } from "react-redux";

export class Registeration extends Component{
  constructor(){
    super();
    // this.signUp = this.signUp.bind(this);
    this.state={
      firstName:"",
      lastName:"",
      userName:"",
      password:"",
      user:[]
    }
  }

  saveDetails=(name,e)=>{
    this.setState({
      [name]:e.target.value
    })
  }

  signUp=()=>{
    this.state.user.push(
      {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          userName: this.state.userName,
          password: this.state.password
      }
    );
    this.props.saveDataGlobally(this.state.user);
    console.log("Props Data",this.props.user);
  }

  render(){
    return(
      <div className="registerContainer">
        <div className="registerCard">
          <div className="image">
            {/* <img src={logo} width="100" height="50" /> */}
          </div>
          <span className="heading">Sign Up</span>
          <div className="fields">
          <div className="nameDiv">
              <TextField onChange={this.saveDetails.bind(this,"firstName")} className="firstName" id="outlined-basic" label="FirstName" variant="outlined"/>
              <TextField onChange={this.saveDetails.bind(this,"lastName")} className="lastName" id="outlined-basic" label="LastName" variant="outlined"/>
          </div>
            <div className="userNameDiv">
              <TextField onChange={this.saveDetails.bind(this,"userName")} className="userName1" id="outlined-basic" label="UserName" variant="outlined" />
            </div>
            <div className="passwordDiv">
              <TextField onChange={this.saveDetails.bind(this,"password")} className="password1" id="outlined-basic" type="password" label="Password" variant="outlined" />
            </div>
          </div>
          <div className="registerButton">
            <div className="loginLink" onClick={() => this.props.history.push("/")} >SignIn instead</div>
            <Button variant="contained" color="primary" onClick={this.signUp}>Register</Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
     user:state.user
  }
}

const mapStateToDispatch = (dispatch)=>{
  return{
    saveDataGlobally: (value) => {
          dispatch({
              type:"REGISTER",
              payload:value
          })
      }
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(Registeration);
