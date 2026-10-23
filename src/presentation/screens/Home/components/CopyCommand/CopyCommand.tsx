'use client';

import { Check, Copy } from 'lucide-react';
import type { ICopyCommandProps } from './CopyCommandTypes';
import { useCopyCommandController } from './useCopyCommandController';

export function CopyCommand({ command, copyLabel, copiedLabel }: ICopyCommandProps) {
  const { isCopied, handleCopy } = useCopyCommandController(command);

  return (
    <div className='shadow-line flex items-center gap-3 rounded-2xl bg-white py-2 pr-2 pl-4'>
      <code className='text-body-sm min-w-0 flex-1 truncate font-mono text-lime-900'>
        <span className='text-gray-600 select-none'>$ </span>
        {command}
      </code>

      <button
        aria-live='polite'
        className='text-body-sm inline-flex h-9 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-3 font-semibold text-lime-900 transition-colors hover:bg-gray-200'
        onClick={handleCopy}
        type='button'
      >
        {isCopied ? <Check className='size-4 text-lime-700' /> : <Copy className='size-4' />}
        {isCopied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}
