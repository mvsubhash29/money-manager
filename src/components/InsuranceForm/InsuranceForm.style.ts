import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      marginTop: theme.spacing(2)
    },
    formTitle: {
      marginBottom: theme.spacing(2)
    },
    root: {
      padding: theme.spacing(2)
    }
  })
);
