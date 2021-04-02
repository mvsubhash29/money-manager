import {LedgerFormPayload} from '../actions/types';

export function ledgerSubmitFormService(
  payload: LedgerFormPayload
): Promise<LedgerFormPayload> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(payload);
  });
}
