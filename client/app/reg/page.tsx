"use client";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Link from "next/link";
import useInput from "../../hooks/useInput";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/authSlice";
import { useRouter } from "next/navigation";

const Reg = () => {
  const dispatch = useDispatch();

  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const phoneNumber = useInput("");

  const router = useRouter();

  const handleSubmit = () => {
    axios
      .post("http://localhost:1000/auth/registration", {
        name: name.value,
        email: email.value,
        password: password.value,
        phoneNumber: phoneNumber.value,
      })
      .then((res) => {
        console.log(res);

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
          label="Username"
          placeholder="Enter username"
          variant="outlined"
          fullWidth
          required
          {...name}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="email"
          placeholder="Enter email"
          type="email"
          variant="outlined"
          fullWidth
          required
          {...email}
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

        <TextField
          label="Phone number"
          placeholder="Enter phone number"
          variant="outlined"
          fullWidth
          required
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          {...phoneNumber}
          style={{ marginBottom: "10px" }}
        />

        <Button
          type="submit"
          variant="contained"
          style={{ ...btnstyle, background: "teal" }}
          fullWidth
          onClick={handleSubmit}
        >
          register
        </Button>

        <Typography>
          Уже есть аккаунт?<Link href="/login">Логин</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Reg;
