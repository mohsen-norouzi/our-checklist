import { FC } from 'react';

type Props = {
  title: string;
};

export const CategoryItem: FC<Props> = (props) => {
  return <div>{props.title}</div>;
};
