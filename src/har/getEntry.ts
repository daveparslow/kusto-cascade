import { Entry, PartialEntry } from "./Har.types";

export function getEntry(entry?: PartialEntry): Entry {
  
  return {
    startedDateTime: entry?.startedDateTime || '2015-12-16T12:14:12.967Z',
    time: entry?.time || 0,
    request: {
      method: 'GET',
      url: entry?.request?.url ?? '',
      httpVersion: '',
      headers: [],
      queryString: [],
      cookies: [],
      headersSize: -1,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: '',
      headers: [
        {
          name: 'Cache-Control',
          value: 'public'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'application/javascript',
        text: ''
      },
      redirectURL: '',
      headersSize: -1,
      bodySize: 0
    },
    cache: {},
    timings: {
      blocked: -1,
      dns: -1,
      connect: -1,
      send: 0,
      wait: -1,
      receive: -1,
      ssl: -1
    }
  };
}
