import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
// eslint-disable-next-line import/no-extraneous-dependencies
import {Story, Meta} from '@storybook/react/types-6-0';

import {LedgerTile as LedgerTileComponent} from './LedgerTile';
import {LedgerTileProps} from './types';

export default {
  title: 'Components/LedgerTile',
  component: LedgerTileComponent,
  argTypes: {onLedgerEntryClick: {action: 'clicked'}}
} as Meta;

const Template: Story<LedgerTileProps> = (args) => (
  <LedgerTileComponent {...args} />
);

export const LedgerTile = Template.bind({});
LedgerTile.args = {
  ledger: {
    categoryName: 'Food',
    amount: 100,
    description: 'Food',
    ledgerType: 'income'
  }
};
