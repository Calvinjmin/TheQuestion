import * as React from "react";
import { Link } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { IconButton } from "@mui/material";

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuTwoToneIcon></MenuTwoToneIcon>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/technology">Technology</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/education">Education</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/society">Society</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
