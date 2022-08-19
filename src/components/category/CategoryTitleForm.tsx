import React, { FC, useEffect, useState } from 'react';

import { useDebounce } from 'hooks';
import { Input } from '@mui/material';

type Props = {
  title: string;
  onUpdate: (title: string) => void;
};

export const CategoryTitleForm: FC<Props> = (props) => {
  const [title, setTitle] = useState(props.title);
  const debouncedTitle = useDebounce<string>(title, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (debouncedTitle.trim() !== '') {
      props.onUpdate(title);
    }
  }, [debouncedTitle]);

  return <Input className='w-full px-5' disableUnderline value={title} onChange={handleChange} />;
};
