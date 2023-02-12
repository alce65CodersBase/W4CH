import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

type KeyProps = {
  label: string;
  type?: string;
};

export function Key({ label, type = 'normal' }: KeyProps) {
  const { phoneNumber, setPhoneNumber } = useContext(AppContext);

  const handleClick = () => {
    if (label === 'delete') {
      setPhoneNumber('');
      return;
    }

    if (phoneNumber.length < 9) {
      setPhoneNumber(phoneNumber + label);
    }
  };

  return (
    <li>
      <button className={'key ' + type} onClick={handleClick}>
        {label}
      </button>
    </li>
  );
}
