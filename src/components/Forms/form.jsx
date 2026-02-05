import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const StyledForm = styled.form`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 450px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 8px;
  color: #334155;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
`;

const RadioGroup = styled.div`
  margin: 15px 0;
  display: flex;
  gap: 15px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  font-size: 14px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${props => props.disabled ? '#cbd5e1' : '#6366f1'};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export default class Form extends React.Component {
    state = {
        name: '',
        mail: '',
        message: '',
        experience: 'junior', 
        agree: false,
    }

 
    experiences = ["junior", "middle", "senior"];

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleCheckChange = (e) => {
        this.setState({ agree: e.target.checked });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const { name, mail, experience, agree } = this.state;
        
        if (!agree) {
            alert("Ви повинні погодитися з умовами!");
            return;
        }

        this.setState({
            message: `Користувач ${name} (${experience}) успішно зареєстрований!`
        });
    }

    render() {
        return (
            <Container>
                <StyledForm onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Ім'я</Label>
                        <Input
                            onChange={this.handleChange}
                            type="text"
                            name="name"
                            value={this.state.name}
                            required
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            onChange={this.handleChange}
                            type="email"
                            name="mail"
                            value={this.state.mail}
                            required
                        />
                    </FormGroup>

                    <Label>Що станеться, якщо ти спробуєш змінити state безпосередньо (наприклад, this.state.name = "Ivan") замість використання setState?</Label>
                    <RadioGroup>
                        {this.experiences.map((lvl) => (
                            <label key={lvl} style={{textTransform: 'capitalize', cursor: 'pointer'}}>
                                <input 
                                    type="radio" 
                                    name="experience" 
                                    value={lvl} 
                                    onChange={this.handleChange}
                                    checked={this.state.experience === lvl} 
                                />
                                {lvl}
                            </label>
                        ))}
                    </RadioGroup>

                    <CheckboxLabel>
                        <input 
                            onChange={this.handleCheckChange} 
                            type="checkbox" 
                            name="agree" 
                            checked={this.state.agree} 
                        />
                        Я погоджуюся з умовами використання
                    </CheckboxLabel>

                    <Button type="submit" disabled={!this.state.agree}>
                        Надіслати
                    </Button>
                </StyledForm>

                {this.state.message && (
                    <p style={{marginTop: '20px', color: '#6366f1', fontWeight: 'bold'}}>
                        {this.state.message}
                    </p>
                )}
            </Container>
        );
    }
}