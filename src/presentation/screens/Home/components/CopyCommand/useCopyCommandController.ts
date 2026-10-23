import { useEffect, useState } from 'react';

const COPIED_FEEDBACK_MS = 2000;

export function useCopyCommandController(command: string) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeout = setTimeout(() => setIsCopied(false), COPIED_FEEDBACK_MS);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  async function handleCopy() {
    await navigator.clipboard.writeText(command);
    setIsCopied(true);
  }

  return { isCopied, handleCopy };
}
