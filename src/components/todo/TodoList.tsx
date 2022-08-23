import { FC, useEffect } from 'react';

import { TodoItem } from './TodoItem';
import { useGetTodosByCategoryQuery } from 'redux/slices/api-slice';
import { TodoForm } from './TodoForm';

type Props = {
  categoryId: number;
  color: string;
  updateStats: (total: number, done: number) => void;
};

export const TodoList: FC<Props> = (props) => {
  const { data: todosResult } = useGetTodosByCategoryQuery(props.categoryId);

  useEffect(() => {
    const total = todosResult?.data.length || 0;
    const done = todosResult?.data.filter((t) => t.done).length || 0;
    props.updateStats(total, done);
  }, [todosResult]);

  if (!todosResult || !todosResult.data) {
    return <h3>loading...</h3>;
  }

  return (
    <>
      {todosResult.data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} color={props.color} />
      ))}

      <TodoForm categoryId={props.categoryId} />
    </>
  );
};
