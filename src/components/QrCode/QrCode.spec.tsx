import React from 'react';
import { render } from '@testing-library/react';
import { UserContext } from '../Contexts/UserContext';
import { QrCode } from './';

describe('QrCode component', () => {

    test('renders QR code with input data', () => {
        const mockContextData = {
            userName: 'John Doe',
            linkedin: '',
            github: '',
            qrCodeData: 'John Doe',
            isGithubValid: true,
            isLinkedinValid: true,
            isNameValid: true,
            setUserName: () => { },
            setLinkedin: () => { },
            setGithub: () => { },
            handleNameChange: () => { },
            handleGithubChange: () => { },
            handleLinkedinChange: () => { },
            setQRCodeData: () => { }
        };

        const { container } = render(
            <UserContext.Provider value={mockContextData}>
                <QrCode />
            </UserContext.Provider>
        );

        const qrCode = container.querySelector('canvas');
        expect(qrCode).not.toBeNull();
    });

    /*  test('renders QR code with the correct URL and parameters', () => {
            const mockContextData = {
                userName: 'john_doe',
                linkedin: 'linkedin.com/in/johndoe',
                github: 'github.com/johndoe',
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
            };
            const { container } = render(
                <UserContext.Provider value={mockContextData}>
                    <QrCode />
                </UserContext.Provider>
            );
            const qrCode = container.querySelector('canvas');
            expect(qrCode).not.toBeNull();
            expect(qrCode.getAttribute('data-value')).toEqual('http://127.0.0.1:5173/john_doe?linkedin=linkedin.com%2Fin%2Fjohndoe&github=github.com%2Fjohndoe');
            expect(qrCode.getAttribute('data-includeMargin')).toEqual('true');
            expect(qrCode.style.width).toEqual('105%');
            expect(qrCode.style.height).toEqual('105%');
        });  */


    /*    test('should render QR Code with correct URL', () => {
          const mockContextValue = {
              userName: 'john',
              linkedin: 'john',
              github: 'john',
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
              setQRCodeData: () => { },
          };
  
          render(
              <UserContext.Provider value={mockContextValue}>
                  <QrCode />
              </UserContext.Provider>
          );
  
          const qrCode = screen.getByRole('img', { name: 'QR code' });
          const urlLink = screen.getByText('Ver URL');
  
          // Verifica se o QR Code foi renderizado corretamente
          expect(qrCode).toBeInTheDocument();
  
          // Verifica se o link gerado na URL é o esperado
          expect(urlLink).toHaveAttribute(
              'href',
              'http://127.0.0.1:5173/john?linkedin=john&github=john'
          );
  
          // Verifica se a URL gerada é a esperada
          const url = queryString.stringifyUrl({
              url: 'http://127.0.0.1:5173/john',
              query: { linkedin: 'john', github: 'john' },
          });
          expect(qrCode).toHaveAttribute('src', `data:image/png;base64,${QRCode.toDataURL(url)}`);
      });  */

    /*    test('should generate a correct URL based on UserContext data', () => {
          const mockContextValue = {
              userName: 'john',
              linkedin: 'john',
              github: 'john',
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
              setQRCodeData: () => { },
          };
  
          render(
              <UserContext.Provider value={mockContextValue}>
                  <QrCode />
              </UserContext.Provider>
          );
  
          const qrCode = screen.getByRole('img', { name: 'QR code' });
          const urlLink = screen.getByText('Ver URL');
  
          expect(qrCode).toBeInTheDocument();
          expect(urlLink).toHaveAttribute(
              'href',
              'http://127.0.0.1:5173/john?linkedin=john&github=john'
          );
      });  */



    /*     it('should render the QRCode and URL link elements', () => {
            const mockContextValue = {
                userName: 'john',
                linkedin: 'john-doe',
                github: 'john-doe',
                qrCodeData: '',
                isGithubValid: true,
                isLinkedinValid: true,
                isNameValid: true,
                setUserName: () => { },
                setLinkedin: () => { },
                setGithub: () => { },
                handleNameChange: () => { },
                handleGithubChange: () => { },
                handleLinkedinChange: () => { },
                setQRCodeData: () => { }
            };
            render(
                <UserContext.Provider value={mockContextValue}>
                    <QrCode />
                </UserContext.Provider>
            );
            const qrCode = screen.getByRole('img', { name: 'QR code' });
            const urlLink = screen.getByText('Ver URL');
            expect(qrCode).toBeInTheDocument();
            expect(urlLink).toBeInTheDocument();
        }); */

    /*    it('should open a new tab when clicking on the URL link', () => {
           const mockContextValue = {
               userName: 'john',
               linkedin: 'john-doe',
               github: 'john-doe',
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
           };
           render(
               <UserContext.Provider value={mockContextValue}>
                   <QrCode />
               </UserContext.Provider>
           );
           const urlLink = screen.getByText('Ver URL');
           userEvent.click(urlLink);
           expect(window.open).toHaveBeenCalledWith('http://127.0.0.1:5173/john?linkedin=johndoe&github=johndoe', '_blank');
       }); */
}); 
