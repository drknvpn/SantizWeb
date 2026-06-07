import LinkButton from './LinkButton';

/* ---------- Inline platform icons ---------- */
const IconVK = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.323c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconTelegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const IconMusic = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const IconYandex = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
    <path d="M12.535 2.005C6.604 1.978 1.747 6.791 1.72 12.722c-.027 5.931 4.786 10.788 10.717 10.815 5.931.027 10.788-4.786 10.815-10.717.027-5.932-4.786-10.788-10.717-10.815zm-1.57 15.567h-1.85V6.548h1.85v4.658h.034l3.75-4.658h2.153l-3.918 4.792 4.09 6.232h-2.22l-3.088-4.977-.803.972v4.005z" />
  </svg>
);

export default function ArtistPage() {
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-16 pb-24">
      <div className="w-full max-w-[420px] flex flex-col gap-5">

        {/* ───────── Artist Identity ───────── */}
        <div className="flex flex-col items-center text-center pt-8 pb-4">

          {/* Photo */}
          <div className="relative mb-6">
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(233,30,99,0.25) 0%, transparent 70%)',
                filter: 'blur(20px)',
                transform: 'scale(1.3)',
              }}
            />
            <img
              src="/1000x1000_(1)-no-bg-preview_(carve.photos).png"
              alt="Santiz"
              className="relative w-36 h-36 object-cover object-top rounded-full"
              style={{
                border: '1.5px solid rgba(233,30,99,0.3)',
                boxShadow: '0 0 0 4px rgba(233,30,99,0.07), 0 0 40px rgba(233,30,99,0.15)',
                filter: 'brightness(0.95) contrast(1.05)',
              }}
            />
            {/* VHS noise ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(255,255,255,0.06)',
                transform: 'scale(1.12)',
              }}
            />
          </div>

          {/* Logo */}
          <div className="vhs-logo mb-3">
            <img
              src="/image.png"
              alt="Santiz"
              className="w-52"
              style={{
                filter: 'drop-shadow(0 0 18px rgba(233,30,99,0.55)) drop-shadow(0 0 40px rgba(233,30,99,0.2))',
              }}
            />
          </div>

          {/* Name + origin */}
          <p
            className="text-sm font-medium mb-1"
            style={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.08em' }}
          >
            Егор Парамонов
          </p>
          <p
            className="text-xs"
            style={{ color: 'rgba(255,255,255,0.22)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            Сатпаев · 1998
          </p>
        </div>

        {/* ───────── Bio glass card ───────── */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-px" style={{ background: '#E91E63' }} />
            <span
              className="text-xs uppercase tracking-[0.35em] font-semibold"
              style={{ color: '#E91E63' }}
            >
              Биография
            </span>
          </div>

          <p
            className="leading-relaxed mb-6"
            style={{
              fontSize: 13.5,
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 300,
              lineHeight: '1.85',
            }}
          >
            Российский рэп-исполнитель и автор песен. Карьера — с 2018 года в рамках объединения{' '}
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>Second Squad</span>.
            Прорывные треки: «Rastafari», «Кайфуша», «Забытый бала», «No pasaran». Дебютный альбом{' '}
            <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>«52 герца»</span> — 2019.
            Тур по городам России и сольные концерты в Москве и Санкт-Петербурге. Продолжает работу
            над новой музыкой.
          </p>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-2 pt-5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {[
              { value: '2018', label: 'Дебют' },
              { value: '3', label: 'Альбома' },
              { value: '10M+', label: 'Сыграно' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-xl font-bold mb-0.5"
                  style={{ color: '#E91E63', letterSpacing: '-0.02em' }}
                >
                  {s.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: 'rgba(255,255,255,0.22)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── Слушать музыку ───────── */}
        <div>
          <SectionLabel>Слушать музыку</SectionLabel>
          <div className="flex flex-col gap-3">
            <LinkButton
              href="https://vk.com/azg_recordz"
              icon={<IconVK />}
              label="ВК Музыка"
              sublabel="ВКонтакте · azg_recordz"
              color="#0077FF"
              large
            />
            <LinkButton
              href="https://music.yandex.ru/search?text=santiz"
              icon={<IconYandex />}
              label="Яндекс Музыка"
              sublabel="Поиск: Santiz"
              color="#FFDB4D"
              large
            />
            <LinkButton
              href="https://www.youtube.com/@azg_santiz"
              icon={<IconMusic />}
              label="YouTube Music"
              sublabel="@azg_santiz"
              color="#FF0000"
              large
            />
          </div>
        </div>

        {/* ───────── Ссылки ───────── */}
        <div>
          <SectionLabel>Ссылки</SectionLabel>
          <div className="flex flex-col gap-2.5">
            <LinkButton
              href="https://vk.com/paramonov_yegor"
              icon={<IconVK />}
              label="ВКонтакте"
              sublabel="Личная страница · @paramonov_yegor"
              color="#0077FF"
            />
            <LinkButton
              href="https://vk.com/azg_recordz"
              icon={<IconVK />}
              label="Second Squad / AZG"
              sublabel="Сообщество · @azg_recordz"
              color="#0077FF"
            />
            <LinkButton
              href="https://www.youtube.com/@azg_santiz"
              icon={<IconYouTube />}
              label="YouTube"
              sublabel="Клипы и контент · @azg_santiz"
              color="#FF0000"
            />
            <LinkButton
              href="https://instagram.com/azg_santiz"
              icon={<IconInstagram />}
              label="Instagram"
              sublabel="Фото и истории · @azg_santiz"
              color="#E91E63"
            />
            <LinkButton
              href="https://t.me/azg_recordz"
              icon={<IconTelegram />}
              label="Telegram"
              sublabel="Новости и обновления · @azg_recordz"
              color="#26A5E4"
            />
          </div>
        </div>

        {/* ───────── Footer ───────── */}
        <div
          className="flex items-center justify-center gap-4 pt-6 pb-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <img src="/image.png" alt="Santiz" className="h-6 w-auto opacity-30" />
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>
            © 2026 Santiz
          </span>
        </div>

      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3 px-1">
      <span
        className="text-xs uppercase tracking-[0.35em] font-semibold"
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        {children}
      </span>
      <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
    </div>
  );
}
