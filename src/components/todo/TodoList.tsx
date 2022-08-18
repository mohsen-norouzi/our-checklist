import { FC } from 'react';

import { Todo } from 'model';
import { TodoItem } from './TodoItem';
import { useGetTodosByCategoryQuery } from 'api/api-slice';

type Props = {
  categoryId: number;
  color: string;
};

export const TodoList: FC<Props> = (props) => {
  const { data: todosResult, isLoading } = useGetTodosByCategoryQuery(props.categoryId);

  if (!todosResult || !todosResult.data) {
    return <h3>loading...</h3>;
  }

  if (!todosResult.data.length) {
    return <p>no todos</p>;
  }

  return (
    <>
      {todosResult.data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} color={props.color} />
      ))}
    </>
  );
};
