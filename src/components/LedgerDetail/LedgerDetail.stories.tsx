import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';

import {LedgerDetail as LedgerDetailComponent} from './LedgerDetail';
import {LedgerDetailProps} from './types';

export default {
  title: 'Components/LedgerDetail',
  component: LedgerDetailComponent,
  argTypes: {onEdit: {action: 'clicked'}, onBack: {action: 'clicked'}}
} as Meta;

const Template: Story<LedgerDetailProps> = (args) => (
  <LedgerDetailComponent {...args} />
);

export const LedgerDetail = Template.bind({});
LedgerDetail.args = {
  ledger: {
    amount: 100,
    isExpense: false,
    description: 'Food',
    ledgerType: 'income',
    categoryName: 'food'
  },
  date: '03/02 Sun'
};
