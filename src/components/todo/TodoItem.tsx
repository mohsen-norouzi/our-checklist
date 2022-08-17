import { FC } from 'react';

type Props = {
  title: string;
};

export const TodoItem: FC<Props> = (props) => {
  return (
    <div>
      <h1>{'> ' + props.title}</h1>
    </div>
  );
};
