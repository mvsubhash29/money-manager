import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      background: 'transparent',
      margin: 'auto',
      maxWidth: 500
    }
  })
);
