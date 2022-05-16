import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import {
  Drawer,
  CssBaseline,
  AppBar as MUIAppBar,
  Toolbar,
  Typography,
  useTheme,
  IconButton,
  Button
} from '@material-ui/core';
import {Grid} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {useStyles} from './AppBar.style';
import {NavBarList} from '../NavBarList/NavBarList';
import {RootState} from '../../redux/types';
import {logoutSuccess} from '../../routes/Login/redux/actions/login.action';

interface AppBarProps {
  title: string;
}

export const AppBar: React.FC<AppBarProps> = ({title, children}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {isAuthenticated} = useSelector((state: RootState) => state.login);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <MUIAppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Grid container>
            <Grid item xs={10} display='flex' alignItems='center'>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                {title}
              </Typography>
            </Grid>

            {isAuthenticated && (
              <Grid item xs={2} alignItems='center' display='flex'>
                <Button
                  onClick={() => dispatch(logoutSuccess())}
                  size='small'
                  style={{color: '#fff', border: '1px solid #fff'}}
                >
                  Logout
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </MUIAppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <NavBarList />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
