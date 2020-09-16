import { fromHar } from 'perf-cascade';

export type Har = Parameters<typeof fromHar>[0];

type GetElementType<T extends Array<any>> = T extends (infer U)[] ? U : never;
type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export type Log = PropType<Har, 'log'>;
export type Entry = GetElementType<PropType<Log, 'entries'>>;

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

export type PartialEntry = DeepPartial<Entry>;