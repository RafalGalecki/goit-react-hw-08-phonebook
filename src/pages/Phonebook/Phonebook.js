import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { fetchContacts } from 'redux/contacts/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { selectIsLoading } from 'redux/contacts/selectors';
import { selectError } from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';
//import css from './Phonebook.module.css';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <ContactsList />
      {!!isLoading && !error && <Loader />}
    </>
  );
}
