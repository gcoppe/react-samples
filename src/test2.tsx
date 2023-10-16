import React, { useCallback } from 'react';

const Test2 = () => {
  const [users, setUsers] = React.useState([
    { id: '1', name: 'Mark' },
    { id: '2', name: 'Jack' },
  ]);

  const [text, setText] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleAddUser = () => {
    setUsers([
      ...users,
      { id: Math.floor(Math.random() * 10000).toString(), name: text },
    ]);
  };

  const handleRemove = useCallback((id) => {
    setUsers(users.filter((user) => user.id !== id));
  }, [users]);

  console.log('The Component Render: Test2');
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleAddUser}>
        Add User
      </button>

      <List list={users} onRemove={handleRemove} />
    </div>
  );
}

export default Test2;

const List = React.memo(({ list, onRemove }) => {
  console.log('The Component Render: List');
  return (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </ul>
  );
});

const ListItem = React.memo(({ item, onRemove }) => {
  console.log('The Component Render: ListItem');
  return (
    <li>
      {item.name}
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );
});
