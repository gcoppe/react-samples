import { useState } from 'react';
import Test3Child from './test3Child';

export default function Test3Parent() {


  const [message, setMessage] = useState('Message1')

  function CallBack(childData) {
    return (
      <div>
        <p>Message from child {childData}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>TEST3 Parent to Child</h1>
      
      <Test3Child handleCallback={CallBack} />
    </div>
  );
}
