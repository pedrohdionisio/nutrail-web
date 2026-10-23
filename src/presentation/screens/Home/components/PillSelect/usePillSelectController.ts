import { useEffect, useId, useRef, useState } from 'react';

export function usePillSelectController<TValue extends string>(onChange: (value: TValue) => void) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  function handleToggle() {
    setIsOpen((current) => !current);
  }

  function handleSelect(value: TValue) {
    onChange(value);
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return {
    isOpen,
    containerRef,
    triggerRef,
    listId,
    handleToggle,
    handleSelect
  };
}
