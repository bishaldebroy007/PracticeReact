function Message() {
  const name = "Raj";
  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>No name given in the variable</h1>;
}

export default Message;
