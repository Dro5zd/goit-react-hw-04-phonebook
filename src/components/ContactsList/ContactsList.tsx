import {Filter} from '../Filter/Filter';
import {
    ContactsAvatar,
    ContactsButton,
    ContactsItem,
    ContactsListWrapper,
    ContactsSpan,
    ContactsSpanWrapper,
    ContactsTitle,
    ContactsUl,
    DeleteIcon
} from './ContactsList.styled';
import {Notification} from '../Notification/Notification';
import {MouseEvent, useState} from 'react';
import {IContacts} from '../../App';


interface IContactsList {
    contacts: IContacts[],
    deleteUser: (e: MouseEvent<HTMLButtonElement>) => void
}

export const ContactsList = ({contacts, deleteUser}: IContactsList) => {

    const avatarCreator = (name: string) => {
        const nameSplit = name.split(' ');
        if (nameSplit.length > 1) {
            return nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
        } else {
            return nameSplit[0].charAt(0).toUpperCase();
        }
    };

    function getRandomHexColor() {

        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            // @ts-ignore
            .padStart(6, 0)}`;
    }

    const [filteredValue, setFilteredValue] = useState('')

    return (
        <ContactsListWrapper>
            <ContactsTitle>Contacts</ContactsTitle>
            <Filter setFilteredValue={setFilteredValue}/>
            {contacts.length !== 0 ?
                <ContactsUl>
                    {contacts.filter(item => {
                        return item.name.toLowerCase().includes(filteredValue);
                    })
                        .map(({id, name, number}) => {
                            return <ContactsItem key={id}>
                                <ContactsAvatar
                                    style={{backgroundColor: getRandomHexColor()}}>{avatarCreator(name)}</ContactsAvatar>
                                <ContactsSpanWrapper>
                                    <ContactsSpan type={'name'}>{name}</ContactsSpan>
                                    <ContactsSpan type={'number'}>{number}</ContactsSpan>
                                </ContactsSpanWrapper>
                                <ContactsButton id={id} onClick={deleteUser}><DeleteIcon/></ContactsButton>
                            </ContactsItem>;
                        })}
                </ContactsUl>
                : <Notification message="There is no contacts"/>}
        </ContactsListWrapper>
    )
        ;
}