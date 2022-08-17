import { FC } from 'react';

import { TodoList } from 'components/todo/TodoList';
import { useGetTodosQuery } from 'api/api-slice';

type Props = {
  title: string;
};

export const CategoryItem: FC<Props> = (props) => {
  const { data: todosResult, isLoading } = useGetTodosQuery();

  return (
    <div>
      <h3>{props.title}</h3>
      <TodoList todos={todosResult?.data} />
      <hr />
    </div>
  );
};
