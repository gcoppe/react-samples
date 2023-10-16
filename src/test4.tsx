import { useState, useMemo, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { useDebounce2 } from './useDebounceTimer';

export function Test4() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  const [search, setSearch] = useDebounce(500, '');
  //  const [search2, search3] = useDebounce2([value, value2], 500);
  const search2 = useDebounce2(value, 500);
  const search3 = useDebounce2(value2, 200);

  const onChange = (event) => {
    setValue(event.target.value);
    setValue2('2' + event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <h2> Searching : {search} </h2>
      <h2> Searching2 : {search2} </h2>
      <h2> Searching3 : {search3} </h2>
    </div>
  );
}
