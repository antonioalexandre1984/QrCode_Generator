import { ChangeEvent, createContext, useState } from "react";

interface UserContextProps {
    userName: string;
    linkedin: string;
    github: string;
    isGithubValid: boolean;
    isLinkedinValid: boolean;
    isNameValid: boolean;
    qrCodeData: string;
    setQRCodeData: (context: string) => void;
    setUserName: (context: string) => void;
    setGithub: (context: string) => void;
    setLinkedin: (context: string) => void;
    handleNameChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleGithubChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleLinkedinChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserProvider({ children }) {

    const [userName, setUserName] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');

    const [isNameValid, setIsNameValid] = useState(true);
    const [isGithubValid, setIsGithubValid] = useState(true);
    const [isLinkedinValid, setIsLinkedinValid] = useState(true);
    const [qrCodeData, setQRCodeData] = useState('');


    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (!inputValue) {
            setIsNameValid(false);
            setUserName('');
            setQRCodeData('');
            return;
        }

        const isValid = /^[a-zA-Z0-9]*$/.test(inputValue);

        setIsNameValid(isValid);
        setUserName(isValid ? inputValue : '');
        setQRCodeData(isValid ? inputValue : '');
    };

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGithub(e.target.value);
        if (e.target.value === '') {
            setIsGithubValid(true);
        } else if (e.target.value.match(/^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/)) {
            setIsGithubValid(true);
        } else {
            setIsGithubValid(false);
        }
    };

    const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLinkedin(e.target.value);
        if (e.target.value === '') {
            setIsLinkedinValid(true);
        } else if (e.target.value.match(/^[a-zA-Z0-9\-]+$/)) {
            setIsLinkedinValid(true);
        } else {
            setIsLinkedinValid(false);
        }
    };

    return (
        <UserContext.Provider value={{
            github,
            linkedin,
            userName,
            setUserName,
            setGithub,
            setLinkedin,
            isGithubValid,
            isLinkedinValid,
            isNameValid,
            handleNameChange,
            handleGithubChange,
            handleLinkedinChange,
            qrCodeData,
            setQRCodeData
        }}>
            {children}
        </UserContext.Provider>
    );
}


