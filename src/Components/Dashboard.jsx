import React, { useEffect, useState,useContext} from 'react';
import "../SCSS/Dashboard.scss";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from "react-redux";
import { Message } from "./Context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  const message = useContext(Message)

  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("I am Clicked");
  });
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={() => props.history.push("/")}>Logout</Button>
        </Toolbar>
      </AppBar>
      <div>
      <h1 align="center">{message}</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
      <br/>
      <br/>
      <Table stickyHeader aria-label="sticky table" id='User'>  
          <TableHead>  
            <TableRow className="tableRow">  
              <TableCell align="center">First Name</TableCell>  
              <TableCell align="center">Last Name</TableCell>  
              <TableCell align="center">Email Id</TableCell>  
            </TableRow>  
          </TableHead>  

          <TableBody>  
          {  
              props.user.map((d, index) => {  
                return <TableRow key={index}>  
                  <TableCell align="center">  
                    {d.firstName}  
                  </TableCell>  
                  <TableCell align="center">{d.lastName}</TableCell>  
                  <TableCell align="center">{d.email}</TableCell>      
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    user:state.user
  }
}
export default connect(mapStateToProps)(Dashboard);