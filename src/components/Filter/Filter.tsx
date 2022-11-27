import {FilterInput, FilterWrapper, SearchIcon} from './Filter.styled';
import {ChangeEvent, useState} from 'react';

interface IFilter {
    setFilteredValue: (value: string) => void
}

export const Filter = ({setFilteredValue}: IFilter) => {

    const [filter, setFilter] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setFilter(value.toLowerCase())
        setFilteredValue(value)
    };

    return (
        <FilterWrapper>
            <FilterInput
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="Search"
                value={filter}
                onChange={onChangeHandler}
            />
            <SearchIcon/>
        </FilterWrapper>
    );
}