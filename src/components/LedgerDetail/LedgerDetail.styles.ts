import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      fontSize: 14
    },
    mtb16: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    root: {
      marginBottom: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500
    }
  })
);
