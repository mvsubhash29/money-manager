import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export const NavBarList = () => {
  return (
    <List>
      {[
        {name: 'Dashboard', url: '/dashboard'},
        {name: 'Category Settings', url: '/category-settings'},
        {name: 'About', url: '/about'},
        {name: 'Home', url: '/home'},
        {name: 'Entry Form', url: '/form'}
      ].map((menu, index) => (
        <Link to={menu.url}>
          <ListItem button key={menu.url}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={menu.name} />
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
