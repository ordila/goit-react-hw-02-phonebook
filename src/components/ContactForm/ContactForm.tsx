import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactProps } from './ContactForm.types';
import { INITIAL_STATE } from '../../constants/initialStateForm';

export default class ContactForm extends Component<ContactProps> {
  state = { ...INITIAL_STATE };

  onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, number } = this.state;
    const { onAdd } = this.props;
    const isValidateForm = this.validateForm();

    if (!isValidateForm) return;

    onAdd({ id: nanoid(), name, number });
    this.setState({ ...INITIAL_STATE });
  };

  validateForm = () => {
    const { name, number } = this.state;

    if (!name || !number) {
      alert('Заповніть усі поля');
      return false;
    }
    return true;
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="text"
          value={this.state.name}
          name="name"
          onChange={this.onChangeInput}
        />
        <input
          type="tel"
          value={this.state.number}
          name="number"
          onChange={this.onChangeInput}
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}
