import React from "react";
import {Link} from "react-router-dom";
import {makeStyles, AppBar, Button, IconButton, Toolbar, Typography, Drawer} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow:1,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navbar: {
        boxShadow: "none",
        backgroundColor: "#003366",
    },
    navbarOpen: {
        marginLeft: 250,
        boxShadow: "none",
        backgroundColor: "#003366",
    },
    list: {
        width: 250,
    },

    listItem: {
        marginTop: 20,
    }
}));

const Header = () => {
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        if (open === true)
            setState(true);
        else
            setState(false);
    };

    const list = () => {
        return(<div className={classes.list} role={"presentation"} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
                {['Food', 'Drink', 'Fruit'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Direction', 'About'].map((text, index) => (
                    <ListItem button key={text} className={classes.listItem}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>)
    };

    return (
        <div>
           <AppBar position={"sticky"} className={!state ? classes.navbar : classes.navbarOpen}>
               <Toolbar>
                   <React.Fragment>
                       <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color={"inherit"} aria-label="menu">
                           <MenuIcon/>
                       </IconButton>
                       <Drawer open={state} onClose={toggleDrawer(false)}>
                           {list()}
                       </Drawer>
                   </React.Fragment>
                   <Typography variant="h6" className={classes.title}>
                       Menu
                   </Typography>
                   <Button
                       color="inherit"
                       component={Link}
                       to={"login"}
                   >Login</Button>
               </Toolbar>
           </AppBar>
        </div>
    );
}

export default Header;