import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { IconButton } from '@mui/material';

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
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuTwoToneIcon></MenuTwoToneIcon>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Technology</MenuItem>
        <MenuItem onClick={handleClose}>Education</MenuItem>
        <MenuItem onClick={handleClose}>Society</MenuItem>
        <MenuItem onClick={handleClose}>Other</MenuItem>
      </Menu>
    </div>
  );
}