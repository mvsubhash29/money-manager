import React from 'react';
import {Box, Icon, Typography} from '@material-ui/core';
import {green} from '@material-ui/core/colors';

import {LedgerTileProps} from './types';
import {useStyles} from './LedgerTile.style';

export const LedgerTile: React.FC<LedgerTileProps> = (props) => {
  const {ledger, onLedgerEntryClick} = props;
  const {description, isExpense, amount} = ledger;
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      onClick={() => onLedgerEntryClick({...ledger})}
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
