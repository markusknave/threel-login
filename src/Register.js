import React from 'react';
import threel_api from './api';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.password !== this.state.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        threel_api.post('/auth/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            accountType: document.getElementById('accountType').value
        })
            .then(response => {
                console.log(`User registered`);
                alert("User registered successfully!");
            })
            .catch(error => {
                console.error(error);
            });
    };

    render() {
        return (
            <div className="App">
                <h1 className='text-center'>THREEL</h1>
                <div className="registerContainer mx-auto my-auto">
                    <h2 className='text-center'>REGISTER</h2>
                    <form className='form-group'>

                        <input
                            name='name'
                            type='text'
                            id='name'
                            placeholder='Username'
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            name='email'
                            type='email'
                            id='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            name='password'
                            id='password'
                            type='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            name='confirmPassword'
                            id='confirm-password'
                            type='password'
                            placeholder='Confirm Password'
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                            required
                        />

                        <select id="accountType" name="accountType">
                            <option value="" disabled defaultValue>Account Type</option>
                            <option value="listener">Listener</option>
                            <option value="artist">Artist</option>
                        </select>

                        <p className='mx-auto'>Already have an Account? <Link to="/login">Login Now!</Link></p>

                        <div className='mx-auto'>
                            <button type="submit" className="registerButton" onClick={this.handleSubmit}>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;