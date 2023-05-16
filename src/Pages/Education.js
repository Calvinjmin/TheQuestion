import MainMenu from "../Components/MainMenu";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { IconButton } from "@mui/material";
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="App">
      <div className="App-main">
        <IconButton id="basic-button" component={Link} to ="/">
          <HelpOutlineIcon />
        </IconButton>
        <h1>Education</h1>
        <MainMenu />
      </div>
    </div>
  );
}

export default Education;
