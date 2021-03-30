import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';

import {MoneyInfo as MoneyInfoComponent} from './MoneyInfo';
import {LedgerDailyDetails} from '../../routes/Dashboard/types';

export default {
  title: 'Components/MoneyInfo',
  component: MoneyInfoComponent
} as Meta;

const Template: Story<LedgerDailyDetails> = (args) => (
  <MoneyInfoComponent {...args} />
);

export const MoneyInfo = Template.bind({});
MoneyInfo.args = {
  amount: 100,
  isExpense: false,
  description: 'Food'
};
