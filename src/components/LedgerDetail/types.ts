import {LedgerDailyDetails} from '../../routes/Dashboard/types';

export interface LedgerDetailProps {
  onEdit: () => void;
  onBack: () => void;
  ledger: LedgerDailyDetails;
  date: string;
}
