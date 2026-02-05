import React, { Component } from 'react';
import { StyledForm, Input, Button } from './Styles';

class TodoEditor extends Component {
  state = { textValue: '' };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textValue.trim() === '') return;
    this.props.onAdd(this.state.textValue);
    this.setState({ textValue: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Input 
          type="text" 
          value={this.state.textValue} 
          onChange={this.handleChange} 
          placeholder="Що потрібно зробити?"
        />
        <Button type="submit">Додати завдання</Button>
      </StyledForm>
    );
  }
}
export default TodoEditor;