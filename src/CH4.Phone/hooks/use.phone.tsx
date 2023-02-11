import { useState } from 'react';

export type UsePhone = ReturnType<typeof usePhone>;
export function usePhone() {
  const [isCalling, setIsCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCall = (phoneNumber: string) => {
    setIsCalling(true);
    setPhoneNumber(phoneNumber);
  };

  const handleHang = () => {
    setIsCalling(true);
    setPhoneNumber('');
  };

  return {
    isCalling,
    phoneNumber,
    handleCall,
    handleHang,
  };
}
