import Axios from "axios";
import React from "react";
import {Button, TextField} from "@material-ui/core";
import {makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    regButton: {
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

const Register = () => {
    const classes = useStyles();
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirm_password, setConfirmPassword] = React.useState("");

    const validate = () => {
    };

    const register = () => {
        const body = {
            email: email,
            username: username,
            password: password,
        };
        Axios
            .post("http://localhost:8888/user/register", body)
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
                <h1>New User Registration</h1>
                <form className={classes.form}>
                    <TextField
                        className={classes.inputField}
                        label={"Email Address"}
                        variant={"outlined"}
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </TextField>
                    <TextField
                        className={classes.inputField}
                        label={"Username"}
                        value={username}
                        variant={"outlined"}
                        required={true}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                    </TextField>
                    <TextField
                        className={classes.inputField}
                        label={"Password"}
                        value={password}
                        type={"password"}
                        variant={"outlined"}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </TextField>
                    <TextField
                        className={classes.inputField}
                        label={"Confirmed Password"}
                        value={confirm_password}
                        type={"password"}
                        variant={"outlined"}
                        required={true}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </TextField>
                    <Button
                        className={classes.regButton}
                        component={Link}
                        to={"welcome"}
                        onClick={register}
                    >
                        Register
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;

