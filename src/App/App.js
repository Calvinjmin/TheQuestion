import "./App.css";
import MainMenu from "../Components/MainMenu";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from "react-router-dom";

const HomeStyle = {
  main: {
    background: "#D0B8AC",
  },
  about: {
    height: "100vh",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    background: "#BA9C9C",
  },
};

function App() {
  return (
    <div className="App">
      <div className="App-main" style={HomeStyle.main}>
        <IconButton id="basic-button" component={Link} to="/">
          <HelpOutlineIcon />
        </IconButton>
        <h1>The Question</h1>
        <MainMenu />
      </div>
      <div style={HomeStyle.about}>
        <Box sx={{ flexGrow: 1}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h2>About</h2>
            </Grid>
            <Grid item xs={12}>
              <p>Here to provide answers to pressing questions.</p>
            </Grid>
            <Grid item xs={6}>
              <h3>What can you do?</h3>
            </Grid>
            <Grid item xs={6}>
              <p>Educate Yourself.</p>
              <p>Learn how to help.</p>
              <p>Be the change.</p>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
