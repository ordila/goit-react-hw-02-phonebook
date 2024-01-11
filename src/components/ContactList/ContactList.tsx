import { FC } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { ContactListProps } from './ContactList.types';

const ContactList: FC<ContactListProps> = ({ contacts, onRemove }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};
export default ContactList;
