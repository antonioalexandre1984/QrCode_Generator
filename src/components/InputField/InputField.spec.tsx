import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { InputField } from './';
import { UserContext } from '../Contexts/UserContext';


describe('InputField component', () => {

    it('should update name and validation state when invalid input is provided', () => {
        const { getByLabelText, queryByText } = render(
            <UserContext.Provider
                value={{
                    userName: 'john',
                    linkedin: '',
                    github: '',
                    qrCodeData: '',
                    isGithubValid: true,
                    isLinkedinValid: true,
                    isNameValid: false,
                    setUserName: () => { },
                    setLinkedin: () => { },
                    setGithub: () => { },
                    handleNameChange: () => { },
                    handleGithubChange: () => { },
                    handleLinkedinChange: () => { },
                    setQRCodeData: () => { }
                }}
            >
                <InputField />
            </UserContext.Provider>
        );
        const nameInput = getByLabelText('Enter your name') as HTMLInputElement;
        fireEvent.change(nameInput, { target: { value: 'john' } });
        expect(nameInput.value).toBe('john');
        expect(queryByText('Please enter a valid name')).toBeInTheDocument();
    });


    it('should update Github user and validation state when invalid input is provided', () => {
        const { getByLabelText, queryByText } = render(
            <UserContext.Provider
                value={{
                    userName: '',
                    linkedin: '',
                    github: 'john',
                    qrCodeData: '',
                    isGithubValid: false,
                    isLinkedinValid: true,
                    isNameValid: false,
                    setUserName: () => { },
                    setLinkedin: () => { },
                    setGithub: () => { },
                    handleNameChange: () => { },
                    handleGithubChange: () => { },
                    handleLinkedinChange: () => { },
                    setQRCodeData: () => { }
                }}
            >
                <InputField />
            </UserContext.Provider>
        );
        const githubInput = getByLabelText('Enter your Github user') as HTMLInputElement;
        fireEvent.change(githubInput, { target: { value: 'john' } });
        expect(githubInput.value).toBe('john');
        expect(queryByText('Please enter a valid Github username')).toBeInTheDocument();
    });


    it('should update Linkedin user and validation state when valid input is provided', () => {
        const { getByLabelText, queryByText } = render(
            <UserContext.Provider
                value={{
                    userName: '',
                    linkedin: 'john',
                    github: '',
                    qrCodeData: '',
                    isGithubValid: true,
                    isLinkedinValid: false,
                    isNameValid: false,
                    setUserName: () => { },
                    setLinkedin: () => { },
                    setGithub: () => { },
                    handleNameChange: () => { },
                    handleGithubChange: () => { },
                    handleLinkedinChange: () => { },
                    setQRCodeData: () => { }
                }}
            >
                <InputField />
            </UserContext.Provider>
        );
        const linkedinInput = getByLabelText('Enter your Linkedin user') as HTMLInputElement;
        fireEvent.change(linkedinInput, { target: { value: 'john' } });
        expect(linkedinInput.value).toBe('john');
        expect(queryByText('Please enter a valid Linkedin username')).toBeInTheDocument();
    });
});
