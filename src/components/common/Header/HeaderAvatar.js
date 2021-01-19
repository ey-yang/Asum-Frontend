import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

const AvatarDiv = styled.div`
  .avatarBtn {
    &:hover {
    background: white;
  }
  }
`;

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props} 
  />
));


const HeaderAvatar = ({ onLogout, user }) => {

/* export default function CustomizedMenus({ onLogout }) { */
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    /* console.log(setAnchorEl()); */
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const { image, username } = user;

  
  
  return (
    <AvatarDiv>
      <Button disableFocusRipple disableRipple aria-controls="simple-menu" aria-haspopup="true" className="avatarBtn" onClick={handleClick}>
        <Avatar size="large" src={`http://128.199.171.26:3000/${user.image}`} icon={<UserOutlined />} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to={'/account'} style={{ color: "#323232" }}>
          <MenuItem>
            <ListItemIcon>
              <AccountCircleOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="내 정보" />
          </MenuItem>
        </Link>
        <Link to={'/tour/management/'} style={{ color: "#323232" }}>
          <MenuItem>
            <ListItemIcon>
              <AssignmentOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="예약 내역" />
          </MenuItem>
        </Link>
        <Link to={'/tour/management/past'} style={{ color: "#323232" }}>
          <MenuItem>
            <ListItemIcon>
              <ChatOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="여행 후기" />
          </MenuItem>
        </Link>
        <Link to={'/account/favorite'} style={{ color: "#323232" }}>
        <MenuItem>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="관심 여행" />
        </MenuItem>
        </Link>
        <MenuItem onClick={ onLogout }>
          로그아웃
        </MenuItem>
      </StyledMenu>
    </AvatarDiv>
  );
}

export default HeaderAvatar;