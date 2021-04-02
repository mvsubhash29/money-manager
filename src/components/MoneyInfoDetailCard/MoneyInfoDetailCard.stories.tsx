import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';

import {
  MoneyInfoDetailCard as MoneyInfoDetailCardComponent,
  MoneyInfoDetailCardProps
} from './MoneyInfoDetailCard';

export default {
  title: 'Components/MoneyInfoDetailCard',
  component: MoneyInfoDetailCardComponent,
  argTypes: {onEdit: {action: 'clicked'}, onBack: {action: 'clicked'}}
} as Meta;

const Template: Story<MoneyInfoDetailCardProps> = (args) => (
  <MoneyInfoDetailCardComponent {...args} />
);

export const MoneyInfoDetailCard = Template.bind({});
MoneyInfoDetailCard.args = {
  ledger: {
    amount: 100,
    isExpense: false,
    description: 'Food',
    ledgerType: 'income',
    categoryName: 'food'
  },
  date: '03/02 Sun'
};
