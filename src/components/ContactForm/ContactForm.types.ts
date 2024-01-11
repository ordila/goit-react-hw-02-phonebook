export interface ContactProps {
  onAdd: (contact: ContactSingle) => void;
}

export interface ContactSingle {
  id: string;
  name: string;
  number: string;
}
