import Image from 'next/image';

export function Home() {
  return (
    <main className='flex min-h-dvh items-center justify-center px-5'>
      <Image alt='Nutrail' height={46} priority src='/logo.svg' width={159} />
    </main>
  );
}
