import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';

import {MoneyInfo as MoneyInfoComponent, MoneyInfoProps} from './MoneyInfo';

export default {
  title: 'Components/MoneyInfo',
  component: MoneyInfoComponent,
  argTypes: {onLedgerEntryClick: {action: 'clicked'}}
} as Meta;

const Template: Story<MoneyInfoProps> = (args) => (
  <MoneyInfoComponent {...args} />
);

export const MoneyInfo = Template.bind({});
MoneyInfo.args = {
  amount: 100,
  isExpense: false,
  description: 'Food'
};
