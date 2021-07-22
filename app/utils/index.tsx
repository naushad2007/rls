import { KeyboardEvent } from 'react';

export const handleKeyUp = (event: KeyboardEvent, onClick: Function) =>
  (event.key === 'Enter' || event.key === 'Space') && onClick();
