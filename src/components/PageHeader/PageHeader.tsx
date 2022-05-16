import React from 'react';
import {Box} from '@mui/material';
import {useStyles} from './PageHeader.style';
import {PageHeaderProps} from './types';

export const PageHeader: React.FC<PageHeaderProps> = ({title, children}) => {
  const classes = useStyles();

  return (
    <Box
      display='flex'
      alignItems='center'
      flexDirection='row'
      justifyContent='space-between'
    >
      <h1 className={classes.pageHeader}>{title}</h1>
      {children}
    </Box>
  );
};
