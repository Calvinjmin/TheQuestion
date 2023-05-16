import MainMenu from "../Components/MainMenu";
import { IconButton } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';

function Technology() {
  return (
    <div className="App">
      <div className="App-main">
      <IconButton id="basic-button" component={Link} to ="/">
          <HelpOutlineIcon />
        </IconButton>
        <h1>Technology</h1>
        <MainMenu />
      </div>
    </div>
  );
}

export default Technology;
