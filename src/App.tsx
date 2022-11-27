import {ContactsList} from './components/ContactsList/ContactsList';
import {ContactForm} from './components/ContactForm/ContactForm';
import {nanoid} from 'nanoid';
import {MouseEvent, useEffect, useState} from 'react';
import {IphoneWrapper} from './components/IphoneWrapper/IphoneWrapper';
import {HomeScreen} from './components/HomeScreen/HomeScreen';


export interface IContacts {
    id: string,
    name: string,
    number: string
}

export const App = () => {
    // @ts-ignore
    const localStorageState = JSON.parse(localStorage.getItem('contacts'))

    const [contacts, setContacts] = useState<IContacts[]>(localStorageState ||
        [])

    const [showApp, setShowApp] = useState(true)

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts])

    const addContact = (name: string, number: string) => {
        if (!contacts.map(contact => contact.name).includes(name)) {
            setContacts([...contacts, {id: nanoid(), name: name, number: number}])
        } else alert(`${name} is already in contacts`);
    };

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        setContacts(contacts.filter(d => d.id !== e.currentTarget.id));
    };

    const showAppHandler = () => {
        setShowApp(!showApp)
    }

    const currentTime = () => {
        const options: {} = {hour: '2-digit', minute: '2-digit'};
        const today = new Date();
        return today.toLocaleString('ua-UA', options)
    }

    return (
        <IphoneWrapper currentTime={currentTime()}>
            {showApp
                ?
                <HomeScreen showAppHandler={showAppHandler}
                            currentTime={currentTime()}
                />
                : <><ContactForm addContact={addContact}
                                 showAppHandler={showAppHandler}
                />
                    <ContactsList deleteUser={deleteUser}
                                  contacts={contacts}/></>}
        </IphoneWrapper>
    );
};



