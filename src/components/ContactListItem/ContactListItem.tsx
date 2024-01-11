import { FC } from 'react';
import { ContactListItemProps } from './ContactListItem.types';

export const ContactListItem: FC<ContactListItemProps> = ({
  name,
  number,
  onRemove,
  id,
}) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <li>
      {name} : {number} <button onClick={handleRemoveClick}>Delete</button>
    </li>
  );
};
