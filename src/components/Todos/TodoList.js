// Это компонент объединяющий задачи
// и отображающий их в виде списка
import Todo from './Todo';

function TodoList(todos) {
  console.log(todos);
  return (
    <>
      <h1>TodoList</h1>

      <Todo />
      <Todo />
    </>
  );
}

export default TodoList;
