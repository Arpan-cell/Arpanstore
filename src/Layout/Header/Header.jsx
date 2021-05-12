import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PersonIcon from "@material-ui/icons/Person";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import img11 from "../../Images/logo.png";
import { useSelector } from "react-redux";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { AiOutlineLogin } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillShopping } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaQuestionCircle } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "auto",
  },
  drawer: {
    width: 300,
  },

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

export default function Header() {
  const user = localStorage.getItem("full_name");

  const { totalqty } = useSelector((state) => state.CartData);

  const history = useHistory();
  const ProductD = () => {
    history.push("/Registration");
  };
  const ProductDi = () => {
    history.push("/Login");
  };
  const Productp = () => {
    history.push("/Myprofile");
  };
  const ProductDfaq = () => {
    history.push("/FAQ");
  };
  const ProductCAt = () => {
    history.push("/Productcategory");
  };
  const Productservice = () => {
    history.push("/services");
  };
  const Productcontactus = () => {
    history.push("/Contactus");
  };
  const myprofile = () => {
    history.push("/Myprofile");
  };
  const aboutus = () => {
    history.push("/Aboutus");
  };
  const help = () => {
    history.push("/Contactus");
  };
  const Cart = () => {
    history.push("/Cart2");
  };

  //  logout
  const dispatchMethod = useDispatch();
  const logout = () => {
    window.localStorage.clear();
    history.push("/Home");
  };
  const notify = () => {
    // toast.success("Logout Successful", { position: toast.POSITION.RIGHT });
    toast.success("Logout Successfull", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const classess = useStyles();
  const [open1, setOpenn] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div>
        <div className={classes.root}>
          <CssBaseline id="appdrawer" />

          <Drawer open={open1} onClose={() => setOpenn(false)}>
            <List disablePadding className={classes.drawer}>
              {localStorage.getItem("token") ? (
                <>
                  <ListItem button id="listitemheaderL">
                    <AiOutlineLogin />{" "}
                    <ListItemText onClick={Productp} primary={user} />
                  </ListItem>
                </>
              ) : (
                <ListItem button id="listitemheaderL">
                  <AiOutlineLogin />{" "}
                  <ListItemText onClick={ProductDi} primary="User Login" />
                </ListItem>
              )}

              <hr />
              {/* <ListItem button  id="listitemheaderA" onClick={ProductCAt}>
          <FaProductHunt/>   <ListItemText   primary="Categorydetails"    />

          </ListItem> */}

              <ListItem button id="listitemheaderA" onClick={ProductCAt}>
                <AiOutlineShoppingCart /> <ListItemText primary="Shop" />
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={ProductDfaq}>
                <FaQuestionCircle /> <ListItemText primary="Faq" />
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={Productservice}>
                <RiCustomerService2Fill /> <ListItemText primary="Service" />
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={Productcontactus}>
                <MdContactPhone /> <ListItemText primary="Contact" />
              </ListItem>

              <ListItem button id="listitemheaderA">
                <BiHelpCircle /> <ListItemText primary="Help" onClick={help} />
              </ListItem>

              <ListItem button id="listitemheaderA" onClick={aboutus}>
                <FaAmazon /> <ListItemText primary="About Us" />
              </ListItem>

              <hr />

              <ListItem button id="listitemheaderA">
                <FaOpencart /> <ListItemText primary="Cart" onClick={Cart} />
              </ListItem>

              <ListItem button id="listitemheaderA">
                <AiFillShopping />{" "}
                <ListItemText primary="Order" onClick={Cart} />
              </ListItem>

              <ListItem button id="listitemheaderA">
                <CgProfile />{" "}
                <ListItemText primary="My Profile" onClick={myprofile} />
              </ListItem>
            </List>
          </Drawer>

          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                onClick={() => setOpenn(true)}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Link to="/home">
                <Typography
                  variant="h6"
                  className={classes.title}
                  id="section11"
                >
                  <img id='logo1' src={img11} />
                </Typography>
              </Link>

              <Typography variant="h6" className={classes.title}></Typography>

              <div className={classes.sectionDesktop}>
                <Link to="/Productcategory">
                  <Typography className={classes.title} id="section11">
                    SHOP
                  </Typography>
                </Link>

                <Link to="/Services">
                  <Typography className={classes.title} id="section11">
                    SERVICE
                  </Typography>
                </Link>

                <Link to="/FAQ">
                  <Typography className={classes.title} id="section11">
                    FAQ
                  </Typography>
                </Link>
              </div>
              <div className="nav__right">
                <Link to="/Cart2">
                  <div className="basket">
                    <FiShoppingCart className="cart-icon" />
                    <span>{totalqty}</span>
                  </div>
                </Link>
              </div>

              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <PersonIcon />
                  </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    {localStorage.getItem("token") ? (
                      <>
                        <MenuItem onClick={myprofile}>My Profile</MenuItem>
                        <MenuItem
                          onClick={() => {
                            notify();
                            logout();
                          }}
                        >
                          Log out
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem onClick={ProductD}>Registration</MenuItem>
                        <MenuItem onClick={ProductDi}>Log in</MenuItem>
                      </>
                    )}
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </>
  );
}
