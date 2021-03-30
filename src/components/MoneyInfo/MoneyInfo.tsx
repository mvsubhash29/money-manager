import React from 'react';
import {
  Box,
  createStyles,
  Icon,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import {green} from '@material-ui/core/colors';
import {LedgerDailyDetails} from '../../routes/Dashboard/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 14
    },
    categoryName: {
      marginLeft: theme.spacing(1)
    },
    container: {
      '&:hover': {
        backgroundColor: theme.palette.divider
      },
      padding: theme.spacing(1),
      cursor: 'pointer'
    }
  })
);

export const MoneyInfo = (props: LedgerDailyDetails) => {
  const {description, amount, isExpense} = props;
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box display='flex' alignItems='center'>
        <Icon style={{color: green[500]}}>start</Icon>
        <Typography
          className={classes.categoryName}
          variant='body2'
          component='p'
        >
          {description}
        </Typography>
      </Box>
      <Typography color='textSecondary'>
        {isExpense ? '-' : ''} {amount}
      </Typography>
    </Box>
  );
};
