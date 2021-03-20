import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import red from '@material-ui/core/colors/red';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {Theme, createStyles, makeStyles} from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

export interface CategoryItemProps {
  label: string;
  icon: string;
}

interface CustomCategoryItemProps extends CategoryItemProps {
  onRemove: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

export const CategoryItem = (props: CustomCategoryItemProps) => {
  const {label, icon, onRemove} = props;
  const classes = useStyles();

  return (
    <Paper classes={{root: classes.root}}>
      <Box display='flex' alignItems='center'>
        <RemoveIcon style={{color: red[500]}} onClick={onRemove} />
        <Icon>{icon}</Icon>
        {label}
      </Box>
    </Paper>
  );
};
