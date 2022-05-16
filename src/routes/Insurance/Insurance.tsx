import React from 'react';
import {Button, Drawer, Grid} from '@mui/material';

import {InsuranceCard} from '../../components/InsuranceCard/InsuranceCard';
import {PageHeader} from '../../components/PageHeader';
import {InsuranceForm} from '../../components/InsuranceForm/InsuranceForm';
// import {useStyles} from './Insurance.styles';

export function Insurance() {
  // const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({...state, [anchor]: open});
  };

  return (
    <>
      <PageHeader title='Insurance'>
        <Button
          size='small'
          variant='outlined'
          onClick={toggleDrawer('right', true)}
        >
          New Insurance
        </Button>
      </PageHeader>
      <Grid container spacing={2}>
        <Grid item>
          <InsuranceCard />
        </Grid>
        <Grid item>
          <InsuranceCard />
        </Grid>
        <Grid item>
          <InsuranceCard />
        </Grid>
        <Grid item>
          <InsuranceCard />
        </Grid>
      </Grid>
      <Drawer
        anchor='right'
        open={state.right}
        PaperProps={{
          sx: {width: '50%'}
        }}
        onClose={toggleDrawer('right', false)}
      >
        <InsuranceForm
          initialValues={{
            description: '',
            premiumAmount: undefined,
            premiumMode: '',
            sumAssured: undefined,
            insurerName: '',
            insurancePlan: '',
            insuranceCompanyName: ''
          }}
          onSubmit={() => {}}
          onCancel={toggleDrawer('right', false)}
        />
      </Drawer>
    </>
  );
}
