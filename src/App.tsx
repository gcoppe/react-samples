import { FC } from 'react';

import './style.css';
import { Test1 } from './test1';
import { Test4 } from './test4';
import Test2 from './test2';
import Test3Parent from './test3Parent';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Test4 />
    </>
  );
};
