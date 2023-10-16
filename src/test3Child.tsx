export default function Test3Child(props) {
  const message = 'hello from child';

  return (
    <div onClick={() => props.handleCallback(message)}>
      Click on me to display message from child
    </div>
  );
}
