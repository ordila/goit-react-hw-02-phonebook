import { ContactSingle } from '../ContactForm/ContactForm.types';

export interface ContactListProps {
  contacts: ContactSingle[];
  onRemove: (id: string) => void;
}
