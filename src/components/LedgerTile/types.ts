import {LedgerDailyDetails} from '../../routes/Dashboard/types';

export interface LedgerTileProps {
  onLedgerEntryClick: (ledgerEntryDetails: LedgerDailyDetails) => void;
  ledger: LedgerDailyDetails;
}
