// Это форма для создания Todo (задач)
import Button from '../UI/Button';

import styles from './TodoForm.module.css';

function TodoForm({ addTodo }) {
  return (
    <>
      <form>
        <input type="text" placeholder="Enter new todo" />
        <Button setStateClick={addTodo}>Submit</Button>
      </form>
    </>
  );
}

export default TodoForm;
