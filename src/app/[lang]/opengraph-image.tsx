import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getDictionary } from 'shared/i18n/getDictionary';
import { DEFAULT_LOCALE, isLocale } from 'shared/i18n/locales';

const SIZE = { width: 1200, height: 630 };

interface ITitleWord {
  id: string;
  word: string;
  isAccent: boolean;
}

function toTitleWords({ titlePrefix, titleAccent, titleSuffix }: Record<string, string>) {
  const words: ITitleWord[] = [];
  let position = 0;

  for (const [part, isAccent] of [
    [titlePrefix, false],
    [titleAccent, true],
    [titleSuffix, false]
  ] as const) {
    for (const word of (part ?? '').split(' ').filter(Boolean)) {
      position += 1;
      words.push({ id: `${position}-${word}`, word, isAccent });
    }
  }

  return words;
}

function dataUri(file: Buffer, mimeType: string) {
  return `data:${mimeType};base64,${file.toString('base64')}`;
}

export function generateImageMetadata({ params }: { params: { lang: string } }) {
  const { shareImage } = getDictionary(isLocale(params.lang) ? params.lang : DEFAULT_LOCALE);

  return [{ id: 'default', alt: shareImage.alt, size: SIZE, contentType: 'image/png' }];
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { shareImage } = getDictionary(isLocale(lang) ? lang : DEFAULT_LOCALE);
  const [medium, bold, logo, home] = await Promise.all([
    readFile(join(process.cwd(), 'src/shared/assets/fonts/HostGrotesk-500.ttf')),
    readFile(join(process.cwd(), 'src/shared/assets/fonts/HostGrotesk-700.ttf')),
    readFile(join(process.cwd(), 'public/logo-dark.svg')),
    readFile(join(process.cwd(), 'public/media/home.png'))
  ]);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ecfbd2',
        backgroundImage:
          'radial-gradient(circle at 70% 120%, rgba(190, 242, 100, 0.95) 0%, rgba(190, 242, 100, 0.45) 35%, rgba(190, 242, 100, 0) 70%)',
        fontFamily: 'Host Grotesk',
        color: '#022c22'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: 720,
          padding: '64px 0 64px 72px'
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: ImageResponse only renders plain img elements */}
        <img alt='' height={56} src={dataUri(logo, 'image/svg+xml')} width={194} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -3.4
            }}
          >
            {toTitleWords(shareImage).map(({ id, word, isAccent }) => (
              <span key={id} style={{ marginRight: 20, color: isAccent ? '#64a30d' : '#022c22' }}>
                {word}
              </span>
            ))}
          </div>

          <div style={{ fontSize: 30, fontWeight: 500, lineHeight: 1.35, color: '#3f3f46' }}>
            {shareImage.description}
          </div>
        </div>

        <div
          style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 22, fontWeight: 500 }}
        >
          <span
            style={{
              padding: '8px 20px',
              borderRadius: 999,
              backgroundColor: '#bef264',
              fontWeight: 700
            }}
          >
            nutrail.app
          </span>
          <span style={{ color: '#71717a' }}>{shareImage.tags}</span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          position: 'absolute',
          top: 72,
          right: 96,
          width: 330,
          height: 640,
          padding: 10,
          paddingBottom: 0,
          borderTopLeftRadius: 52,
          borderTopRightRadius: 52,
          backgroundColor: '#ffffff',
          boxShadow: '0 24px 48px rgba(2, 44, 34, 0.22)'
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: ImageResponse only renders plain img elements */}
        <img
          alt=''
          src={dataUri(home, 'image/png')}
          style={{
            width: 310,
            height: 634,
            objectFit: 'cover',
            objectPosition: 'top',
            borderTopLeftRadius: 42,
            borderTopRightRadius: 42
          }}
        />
      </div>
    </div>,
    {
      ...SIZE,
      fonts: [
        { name: 'Host Grotesk', data: medium, style: 'normal', weight: 500 },
        { name: 'Host Grotesk', data: bold, style: 'normal', weight: 700 }
      ]
    }
  );
}
