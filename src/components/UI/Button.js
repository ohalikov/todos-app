function Button({ setStateClick, children }) {
  console.log(setStateClick, children);
  return <button onClick={setStateClick}>{children}</button>;
}

export default Button;
