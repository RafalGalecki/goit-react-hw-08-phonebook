import React from 'react';
import css from './ContactsListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';

const ContactsListElement = ({ contact }) => {
  const dispatch = useDispatch();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactLi} style={{ color: getRandomHexColor(), textShadow: '1px 1px black' }}>
      <span className={css.contact}>&#10047; {contact.name}:</span>
      <span className={css.contact}>{contact.number}</span>
      <button type="button" className={css.btnDelete} onClick={handleClick}>
        &#9760;
      </button>
    </div>
  );
};

ContactsListElement.propTypes = {
  contact: PropTypes.object,
};

export default ContactsListElement;
