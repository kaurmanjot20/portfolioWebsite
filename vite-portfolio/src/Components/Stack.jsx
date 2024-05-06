function Stack() {
  const stacks = [
    { id: 1, name: 'Stack 1' },
    { id: 2, name: 'Stack 2' },
    { id: 3, name: 'Stack 3' },
  ];

  return (
    <div>
      <h2>Stacks</h2>
      <ul>
        {stacks.map((stack) => (
          <li key={stack.id}>{stack.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Stack;
