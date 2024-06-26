"use client";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/authSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const dispatch = useDispatch();
  const username = useInput("");
  const password = useInput("");
  const router = useRouter();

  const handleSubmit = () => {
    axios
      .post("http://localhost:1000/auth/login", {
        email: username.value,
        password: password.value,
      })
      .then((res) => {
        dispatch(setToken(res.data.token));
        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };

  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <TextField
          label="Email"
          placeholder="Enter email"
          variant="outlined"
          fullWidth
          required
          {...username}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          variant="outlined"
          fullWidth
          required
          {...password}
          style={{ marginBottom: "10px" }}
        />

        <Button
          type="submit"
          variant="contained"
          style={{ ...btnstyle, background: "teal" }}
          fullWidth
          onClick={handleSubmit}
        >
          Sign in
        </Button>

        <Typography>
          {" "}
          Нет аккаунта ?<Link href="/reg">Зарегистрируйтесь</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
