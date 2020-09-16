import { getEntry } from './getEntry';
import { Entry, Har } from './Har.types';

export function getHar(entries?: Entry[]): Har {
  if (!entries || entries.length < 1) {
    entries = [getEntry({request: { url: 'No results'}})];
  }

  const har: Har = {
    log: {
      version: '1.2',
      creator: {
        name: 'WebInspector',
        version: ''
      },
      pages: [],
      entries
    }
  };

  return har;
}
