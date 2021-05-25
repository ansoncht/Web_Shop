import Axios from "axios";
import React from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    logButton: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
    },

    inputField: {
        outline: "none",
        border: "none",
        marginBottom: "5%",
        width: "85%"
    },

    loginForm: {
        marginTop: "5%",
        width: "20%",
        textAlign: "center",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 20%)",
        padding: "50px",
        backgroundColor: "white",
        boxShadow: "0 0 20px 2px rgba(0, 0, 0, 0.4)",
    },

    form: {
        width: "100%",
    },

});

const Login = () => {
    const classes = useStyles();
    const [username, getUsername] = React.useState("");
    const [password, getPassword] = React.useState("");

    const validate = () => {
    };

    const Login = () => {
        const body = {
            username: username,
            password: password,
        };
        Axios
            .post("http://localhost:8888/login", body)
            .then((res) => {
                if (res.data.success) {
                    alert("Account Created");
                    console.log(res.data.result);
                } else {
                    alert("Error. Please Try Again");
                    console.log(res.data.result);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className={classes.loginForm}>
                <h1>Login</h1>
                <form className={classes.form}>
                    <TextField
                        className={classes.inputField}
                        label={"Username"}
                        value={username}
                        variant={"outlined"}
                        required={true}
                        onChange={(e) => getUsername(e.target.value)}
                    >
                    </TextField>
                    <TextField
                        className={classes.inputField}
                        label={"Password"}
                        value={password}
                        type={"password"}
                        variant={"outlined"}
                        required={true}
                        onChange={(e) => getPassword(e.target.value)}
                    >
                    </TextField>
                    <Button
                        className={classes.logButton}
                        component={Link}
                        to={"welcome"}
                        onClick={Login}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;

