import { createFileRoute } from '@tanstack/react-router'
import { ArrowDown, Check, Heart, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/Reveal'

export const Route = createFileRoute('/')({
  component: Landing,
})

const METRICS = [
  {
    value: '+45',
    label: 'Materias aprobadas',
    detail:
      'Desde las matemáticas y contabilidades de primer año hasta las finanzas y banca internacional del final.',
  },
  {
    value: '4+',
    label: 'Años de dedicación',
    detail:
      'Madrugadas, parciales, proyectos, semanas enteras de exámenes, turnos nocturnos de trabajo, administrar tu casa y mantener tus calificaciones.',
  },
  {
    value: '100%',
    label: 'De la meta cumplida',
    detail:
      'De la meta cumplida con la universidad, cumplida con tus padres y, más importante, cumplida al 100% con la promesa que te hiciste a ti misma.',
  },
]

const ANTOJOS = ['Alitas', 'Hamburguesas', 'Sushi', 'Carolina Cake', 'Chai']

function Landing() {
  const [selected, setSelected] = useState<string | null>(null)
  const [custom, setCustom] = useState('')

  const finalAntojo = custom.trim() || selected

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!finalAntojo) return
    const message = `Hola amor, quiero celebrar mi victoria sobre la universidad con: ${finalAntojo}.`
    window.location.assign(`https://wa.me/50768224782?text=${encodeURIComponent(message)}`)
  }

  return (
    <main className="premium-page">
      <div className="grain" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow">
                <Sparkles size={14} aria-hidden="true" />
                <span>Un recordatorio antes de entrar</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="hero-title">
                Respira.
                <span>Ya hiciste</span>
                lo difícil.
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="hero-lead">
                Hola amor, este es un mensaje de mí para ti. Quiero recordarte el recorrido
                extraordinario que ya hiciste.
              </p>
            </Reveal>

            <Reveal delay={340}>
              <div className="hero-note glass-panel">
                <span className="note-number">01</span>
                <p>
                  Quiero que hoy entres a la universidad con calma. Es un gran día y tienes todo un
                  futuro por estrenar.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="portrait-stage" aria-label="Retratos de Dai">
            <div className="portrait-orbit" aria-hidden="true" />
            <Reveal direction="scale" className="portrait-main-wrap">
              <figure className="portrait-frame portrait-main">
                <img
                  src="/images/dai-celebrando.webp"
                  alt="Dai sonriendo con una falda roja"
                  fetchPriority="high"
                />
                <figcaption>El mundo ya te está esperando</figcaption>
              </figure>
            </Reveal>
            <Reveal direction="right" delay={260} className="portrait-small-wrap portrait-top-wrap">
              <figure className="portrait-frame portrait-small portrait-top">
                <img src="/images/dai-retrato.webp" alt="Retrato de Dai sonriendo" />
              </figure>
            </Reveal>
            <Reveal direction="left" delay={380} className="portrait-small-wrap portrait-bottom-wrap">
              <figure className="portrait-frame portrait-small portrait-bottom">
                <img src="/images/dai-lluvia.webp" alt="Dai bajo un paraguas en la lluvia" />
              </figure>
            </Reveal>
            <div className="floating-seal" aria-hidden="true">
              <span>valiente</span>
              <Heart size={18} fill="currentColor" />
            </div>
          </div>
        </div>

        <a href="#trayectoria" className="scroll-cue" aria-label="Ir a la trayectoria">
          <span>Descubre todo lo que lograste</span>
          <ArrowDown size={17} aria-hidden="true" />
        </a>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>DISCIPLINA</span><i />
          <span>VALENTÍA</span><i />
          <span>CONSTANCIA</span><i />
          <span>PROPÓSITO</span><i />
          <span>DISCIPLINA</span><i />
          <span>VALENTÍA</span><i />
          <span>CONSTANCIA</span><i />
          <span>PROPÓSITO</span><i />
        </div>
      </div>

      <section id="trayectoria" className="section trajectory-section">
        <div className="section-shell">
          <div className="section-heading split-heading">
            <Reveal direction="left">
              <div>
                <p className="eyebrow muted">La evidencia</p>
                <h2>Tu esfuerzo tiene números.</h2>
              </div>
            </Reveal>
            <Reveal direction="right" delay={120}>
              <p className="section-intro">
                Y aun así, ninguna cifra alcanza a contar todas las veces que elegiste continuar y
                no rendirte.
              </p>
            </Reveal>
          </div>

          <div className="metrics-grid">
            {METRICS.map((metric, index) => (
              <Reveal key={metric.label} delay={index * 140} direction={index === 1 ? 'scale' : 'up'}>
                <article className={`metric-card glass-panel metric-${index + 1}`}>
                  <div className="metric-index">0{index + 1}</div>
                  <strong>{metric.value}</strong>
                  <h3>{metric.label}</h3>
                  <p>{metric.detail}</p>
                  <div className="metric-glint" aria-hidden="true" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section courage-section">
        <div className="section-shell courage-grid">
          <Reveal direction="left" className="story-image-wrap">
            <figure className="story-image glass-panel">
              <img src="/images/dai-retrato.webp" alt="Dai mirando hacia un lado y sonriendo" />
              <figcaption>
                <span>La mujer que llegó hasta aquí</span>
                <small>ya sabe avanzar incluso con nervios.</small>
              </figcaption>
            </figure>
          </Reveal>

          <div className="courage-copy">
            <Reveal direction="right">
              <p className="eyebrow muted">Sobre los nervios</p>
              <h2>Sentirlos no te hace menos preparada.</h2>
            </Reveal>
            <Reveal direction="right" delay={130}>
              <div className="glass-panel message-card">
                <span className="message-mark">“</span>
                <p>
                  Es normal sentir un nudo en el estómago. La universidad no te está regalando nada:
                  vas a entregar el resultado de años de disciplina, perseverancia y noches sin
                  dormir.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={260}>
              <div className="reassurance-line">
                <Check size={18} aria-hidden="true" />
                <p>
                  Una revisión académica es el reflejo de tus esfuerzos. No mide tu inteligencia, tu
                  talento ni tu futuro profesional. Entra con la frente en alto: la victoria ya es
                  tuya.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="faith-section">
        <div className="faith-photo" aria-hidden="true" />
        <div className="faith-overlay" aria-hidden="true" />
        <div className="faith-content">
          <Reveal direction="scale">
            <div className="faith-card glass-panel">
              <div className="quote-line shimmer" aria-hidden="true" />
              <blockquote>
                “Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque el
                Señor tu Dios estará contigo dondequiera que vayas.”
              </blockquote>
              <cite>Josué 1:9</cite>
              <p>
                Dios ha estado contigo en cada semestre, cada examen difícil y cada verano. En este
                último tramo también va de tu mano.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section celebration-section">
        <div className="celebration-halo" aria-hidden="true" />
        <div className="celebration-card glass-panel">
          <Reveal>
            <p className="eyebrow centered">La recompensa</p>
            <h2>¿Con qué celebramos tu victoria sobre la universidad?</h2>
            <p className="celebration-intro">
              Elige el primer antojo que te haga sonreír, porque verte sonreír no tiene precio.
            </p>
          </Reveal>

          <form onSubmit={handleSubmit} className="reward-form">
            <Reveal delay={140}>
              <div className="choice-list">
                {ANTOJOS.map((antojo) => (
                  <button
                    key={antojo}
                    type="button"
                    aria-pressed={selected === antojo}
                    onClick={() => {
                      setSelected(antojo)
                      setCustom('')
                    }}
                    className={selected === antojo ? 'choice active' : 'choice'}
                  >
                    {antojo}
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={240}>
              <label className="custom-choice">
                <span>O pide exactamente lo que quieres</span>
                <input
                  type="text"
                  value={custom}
                  onChange={(event) => {
                    setCustom(event.target.value)
                    setSelected(null)
                  }}
                  placeholder="Escribe tu propio antojo…"
                />
              </label>
            </Reveal>

            <Reveal delay={340}>
              <button type="submit" disabled={!finalAntojo} className="gold-button">
                <span>Confirmar antojo por WhatsApp</span>
                <Heart size={17} fill="currentColor" aria-hidden="true" />
              </button>
            </Reveal>
          </form>
        </div>
      </section>

      <footer>
        <span>Para ti, siempre</span>
        <Heart size={13} fill="currentColor" aria-hidden="true" />
      </footer>
    </main>
  )
}
