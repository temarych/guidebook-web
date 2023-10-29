import { useCallback, useState } from 'react';

export const useDisclosure = (defaultIsOpen: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const open   = useCallback(() => setIsOpen(true), []);
  const close  = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const handlers = {
    open,
    close,
    toggle,
    setIsOpen,
  };

  return [isOpen, handlers] as const;
};
