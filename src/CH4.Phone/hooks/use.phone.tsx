import { useState } from 'react';

export type UsePhone = ReturnType<typeof usePhone>;
export function usePhone() {
  const [isCalling, setIsCalling] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCall = () => {
    setIsCalling(phoneNumber);
    setPhoneNumber('');
    setTimeout(() => {
      handleHang();
    }, 5000);
  };

  const handleHang = () => {
    setIsCalling('');
  };

  return {
    isCalling,
    phoneNumber,
    setPhoneNumber,
    handleCall,
    handleHang,
  };
}
