import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/phonebook/phonebook-operations';
import s from './ContactListItem.module.scss';

function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  const onDeleteContact = () => dispatch(removeContact(id));

  return (
    <li className={s.item}>
      <p>
        {name}: {number}
        <button className={s.btn} onClick={onDeleteContact} type="button">
          Delete
        </button>
      </p>
    </li>
  );
}

export default ContactListItem;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
