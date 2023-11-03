import { useCallback, useState } from "preact/hooks";

export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const toggle = useCallback((toSet?: boolean) => {
    if (typeof toSet === 'undefined') {
      setIsOpen((state) => !state)
    } else {
      setIsOpen(toSet)
    }
  }, [])

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}