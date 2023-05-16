import "./App.css";
import MainMenu from "../Components/MainMenu";
import { IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <IconButton id="basic-button" component={Link} to="/">
          <HelpOutlineIcon />
        </IconButton>
        <h1>The Question</h1>
        <MainMenu />
      </div>
    </div>
  );
}

export default App;
