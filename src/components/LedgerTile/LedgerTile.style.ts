import {createStyles, makeStyles, Theme} from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
