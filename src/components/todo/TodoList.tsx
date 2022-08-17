import { FC } from 'react';

import { Todo } from 'model';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[] | undefined;
};

export const TodoList: FC<Props> = (props) => {
  if (!props.todos) {
    return <h3>no todos</h3>;
  }

  return (
    <>
      {props.todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}
    </>
  );
};
