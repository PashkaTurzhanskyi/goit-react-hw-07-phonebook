import React from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'redux/selectors';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const changedContacts = () =>
    filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <List>
      {changedContacts().map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  changedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
