import LinkButton from './LinkButton';

/* ---------- Icons ---------- */
const IconVK = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0 0 12.896 6.5h-2.474a1.982 1.982 0 0 0-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 0 1-1.272.503 21.54 21.54 0 0 1-2.498-4.543.693.693 0 0 0-.63-.403h-2.99a.508.508 0 0 0-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 0 0 .742-.742v-1.135a.73.73 0 0 1 1.23-.53l2.247 2.112a1.09 1.09 0 0 0 .746.295h2.953c1.424 0 1.424-.988.647-1.753-.546-.538-2.518-2.617-2.518-2.617a1.02 1.02 0 0 1-.078-1.32 3c.637-.84 1.68-2.212 2.122-2.8.603-.804 1.697-2.507.197-2.507z" />
  </svg>
);

const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconTelegram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.21 6.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const IconMusic = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
  </svg>
);

const IconYandex = () => (
  <svg viewBox="0 0 24 24" width={18} height={18}>
    <circle cx="12" cy="12" r="10" fill="#FFDB4D" />
    <text x="12" y="16" textAnchor="middle" fill="#000" fontSize="13" fontWeight="bold" fontFamily="Arial, sans-serif">Я</text>
  </svg>
);

export default function ArtistPage() {
  return (
    <div className="relative z-10 min-h-screen overflow-x-hidden">
      {/* ───────── Main Content ───────── */}
      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 md:px-6 py-20 pb-24 w-full max-w-full">
        <div className="w-full max-w-5xl flex flex-col gap-12 px-0 md:px-2">
          
          {/* ─────── Bio Section with Photo ───────── */}
          <section id="bio" className="scroll-mt-24 relative w-full">
            
           {/* Photo - large, at the top */}
<div className="relative flex justify-center mb-0 w-full">
  <div className="relative animate-fade-in">
    {/* Large glow behind photo */}
    <div
      className="absolute inset-0 pointer-events-none animate-pulse-glow"
      style={{
        background: 'radial-gradient(circle, rgba(233,30,99,0.5) 0%, transparent 70%)',
        filter: 'blur(60px)',
        transform: 'scale(2)',
      }}
    />
    
    {/* Photo - large size */}
    <img
      src="/1000x1000_(1)-no-bg-preview_(carve.photos).png"
      alt="Santiz"
      className="relative w-80 h-80 md:w-[550px] md:h-[550px] object-cover object-top animate-photo-appear max-w-full"
      style={{
        filter: 'brightness(0.95) contrast(1.05) drop-shadow(0 20px 80px rgba(233,30,99,0.4))',
      }}
    />
  </div>
</div>

            {/* Bio card - starts BELOW photo (no overlap) */}
            <div className="glass-card p-6 md:p-10 lg:p-14 mt-0 relative z-10 w-full mx-0">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px" style={{ background: '#E91E63' }} />
                <span
                  className="text-sm uppercase tracking-[0.35em] font-semibold"
                  style={{ color: '#E91E63' }}
                >
                  Биография
                </span>
              </div>

              <div className="space-y-6 max-w-none">
                {/* Intro */}
                <p
                  className="leading-relaxed"
                  style={{
                    fontSize: 16,
                    color: 'rgba(255,255,255,0.75)',
                    fontWeight: 300,
                    lineHeight: '1.9',
                  }}
                >
                  <strong style={{ color: 'rgba(255,255,255,0.95)', fontWeight: 600 }}>Santiz</strong> — российский рэп-исполнитель и автор песен, настоящее имя — <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Егор Парамонов</strong>. Родился 16 мая 1998 года в казахстанском городе Сатпаев.
                </p>

                {/* Early years */}
                <div>
                  <h3
                    className="text-sm uppercase tracking-wider font-semibold mb-3"
                    style={{ color: 'rgba(233,30,99,0.8)' }}
                  >
                    Ранние годы
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    Информация о детстве и формальном образовании Егора крайне скудна — артист сознательно избегает публичных обсуждений личной жизни. Известно, что он глубоко привязан к семье и часто упоминает о важности семейных ценностей в своих публикациях. Первые шаги в творчестве он делал самостоятельно, делясь песнями с узким кругом друзей и осваивая новые жанры и приёмы на практике.
                  </p>
                </div>

                {/* Career */}
                <div>
                  <h3
                    className="text-sm uppercase tracking-wider font-semibold mb-3"
                    style={{ color: 'rgba(233,30,99,0.8)' }}
                  >
                    Музыкальная карьера
                  </h3>
                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    Профессиональная карьера Santiz началась в <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>2018 году</strong> и с самого начала была связана с творческим объединением <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Second Squad</strong>, которое объединяет казахских рэперов.
                  </p>
                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    Прорыв произошёл летом 2018 года с выходом трека <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Rastafari»</strong>. Композиция быстро стала вирусной, однако была связана со скандалом: из-за попыток недобросовестных людей присвоить себе трек артисту пришлось полностью его перезаписать, чтобы сохранить авторские права.
                  </p>
                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    Успех был закреплён последующими синглами — <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Лечу»</strong>, <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Наш маленький мир»</strong>, <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Забытый бала»</strong> и <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«No pasaran»</strong>, которые получили положительные отзывы слушателей и упрочили его положение в хип-хоп-сообществе.
                  </p>
                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    В феврале 2019 года Santiz выпустил дебютный альбом <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«52 герца»</strong>, который распространялся через интернет для бесплатного скачивания. Как пояснил сам артист, все треки пластинки — это эмоционально заряженные истории из его жизни. В поддержку альбома был организован тур по городам России, включавший Астрахань, Ростов-на-Дону, Краснодар и Волгоград, а также большие сольные концерты в Москве и Санкт-Петербурге.
                  </p>
                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    В 2020 году артист выпустил синглы <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Моей семье»</strong> и <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Snippet»</strong>, а также хит <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>«Кайфуша»</strong>.
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    В начале 2023 года Santiz объявил о постепенном возвращении к активной творческой деятельности после перерыва. На 2025 год он продолжает работу над новой музыкой, оставаясь верным своему стилю, сочетающему личные истории, глубокие эмоции и мелодичную музыку.
                  </p>
                </div>

                {/* Personal life */}
                <div>
                  <h3
                    className="text-sm uppercase tracking-wider font-semibold mb-3"
                    style={{ color: 'rgba(233,30,99,0.8)' }}
                  >
                    Личная жизнь
                  </h3>
                  <p
                    className="leading-relaxed mb-4"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    Егор Парамонов сознательно ограждает свою личную жизнь от публичного обсуждения. Он активно ведёт Telegram-канал, где делится с поклонниками фотографиями с друзьями, кадрами из путешествий и моментами творческого процесса.
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.65)',
                      fontWeight: 300,
                      lineHeight: '1.85',
                    }}
                  >
                    Известно, что он исповедует ислам и регулярно поздравляет подписчиков с праздником Курбан-байрам. Также у него живёт рыжий кот, подобранный на улице. В свободное время увлекается футболом и любит фотографировать живописные места во время путешествий.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div
                className="grid grid-cols-3 gap-1 pt-5 w-full overflow-hidden"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {[
                  { value: '2018', label: 'Дебют' },
                  { value: '3', label: 'Альбома' },
                  { value: '10M+', label: 'Прослушиваний' },
                ].map((s) => (
                  <div key={s.label} className="text-center px-0.5 overflow-hidden">
                    <div
                      className="text-base md:text-lg font-bold mb-0.5"
                      style={{ color: '#E91E63', letterSpacing: '-0.02em' }}
                    >
                      {s.value}
                    </div>
                    <div
                      className="text-[9px] md:text-[10px] uppercase leading-none whitespace-nowrap overflow-hidden text-ellipsis"
                      style={{ 
                        color: 'rgba(255,255,255,0.22)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─────── Music Section ───────── */}
          <section id="music" className="scroll-mt-24 w-full">
            <div className="flex items-center gap-4 mb-6 px-2">
              <span
                className="text-xs uppercase tracking-[0.35em] font-semibold"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Слушать музыку
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-0">
              <LinkButton
                href="https://vk.com/azg_recordz"
                icon={<IconVK />}
                label="ВК Музыка"
                sublabel="azg_recordz"
                color="#0077FF"
              />
              <LinkButton
                href="https://music.yandex.ru/search?text=santiz"
                icon={<IconYandex />}
                label="Яндекс Музыка"
                sublabel="Santiz"
                color="#FFDB4D"
              />
              <LinkButton
                href="https://www.youtube.com/@azg_santiz"
                icon={<IconMusic />}
                label="YouTube Music"
                sublabel="@azg_santiz"
                color="#FF0000"
              />
            </div>
          </section>

          {/* ───────── Links Section ───────── */}
          <section id="links" className="scroll-mt-24 w-full">
            <div className="flex items-center gap-4 mb-6 px-2">
              <span
                className="text-xs uppercase tracking-[0.35em] font-semibold"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Социальные сети
              </span>
              <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-0">
              <LinkButton
                href="https://vk.com/paramonov_yegor"
                icon={<IconVK />}
                label="ВКонтакте"
                sublabel="@paramonov_yegor"
                color="#0077FF"
              />
              <LinkButton
                href="https://vk.com/azg_recordz"
                icon={<IconVK />}
                label="Second Squad / AZG"
                sublabel="@azg_recordz"
                color="#0077FF"
              />
              <LinkButton
                href="https://www.youtube.com/@azg_santiz"
                icon={<IconYouTube />}
                label="YouTube"
                sublabel="@azg_santiz"
                color="#FF0000"
              />
              <LinkButton
                href="https://instagram.com/azg_santiz"
                icon={<IconInstagram />}
                label="Instagram"
                sublabel="@azg_santiz"
                color="#E91E63"
              />
              <LinkButton
                href="https://t.me/azg_recordz"
                icon={<IconTelegram />}
                label="Telegram"
                sublabel="@azg_recordz"
                color="#26A5E4"
              />
            </div>
          </section>

          {/* ───────── Footer ──────── */}
<div
  className="flex flex-col items-center gap-5 pt-12 pb-6"
  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
>
  <div className="flex items-center gap-6">
    <a href="https://vk.com/paramonov_yegor" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: 'rgba(255,255,255,0.3)' }}>
      <IconVK />
    </a>
    <a href="https://www.youtube.com/@azg_santiz" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: 'rgba(255,255,255,0.3)' }}>
      <IconYouTube />
    </a>
    <a href="https://instagram.com/azg_santiz" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: 'rgba(255,255,255,0.3)' }}>
      <IconInstagram />
    </a>
    <a href="https://t.me/azg_recordz" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110" style={{ color: 'rgba(255,255,255,0.3)' }}>
      <IconTelegram />
    </a>
  </div>
  
  <div className="flex items-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
    <span>Сделано для</span>
    <span style={{ color: 'rgba(233,30,99,0.5)' }}>Santiz</span>
    <span>· 2026</span>
    <span style={{ color: 'rgba(255,255,255,0.1)' }}>|</span>
    <a 
      href="https://your-portfolio-link.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="transition-colors duration-300 hover:text-white"
      style={{ color: 'rgba(255,255,255,0.25)' }}
    >
      by Your Name
    </a>
  </div>
</div>
</div>
