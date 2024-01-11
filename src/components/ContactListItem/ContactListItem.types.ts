export interface ContactListItemProps {
  name: string;
  number: string;
  onRemove: (id: string) => void;
  id: string;
}
