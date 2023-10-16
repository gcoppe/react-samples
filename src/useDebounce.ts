import React from 'react';
import { debounceTime, Subject } from 'rxjs';

export const useDebounce = <T = any>(
  time: number,
  defaultValue: T
): [T, (v: T) => void] => {
  let [value, setValue] = React.useState<T>(defaultValue);
  let [value$] = React.useState(() => new Subject<T>());
  React.useEffect(() => {
    let sub = value$.pipe(debounceTime(time)).subscribe(setValue);
    return () => sub.unsubscribe();
  }, [time, value$]);
  return [value, (v) => value$.next(v)];
};
