import { useEffect, useRef, useState } from 'react'

const sampleSites = {
  kinetix: {
    title: 'Kinetix Biomechanics & Sports Physiotherapy',
    summary: 'An interactive physiotherapy clinic website with a recovery protocol builder and booking flow.',
    badge: 'Sports physiotherapy',
    file: 'kinetix.html',
  },
  devon: {
    title: 'Devon Vance — Systems Architect',
    summary: 'A systems architecture portfolio with interactive engineering playbook and sponsorship tools.',
    badge: 'Systems architecture',
    file: 'devon-vance.html',
  },
} as const

type SampleKind = keyof typeof sampleSites

export function ReferenceWebsiteCard({ kind }: { kind: SampleKind }) {
  const site = sampleSites[kind]
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    const frame = requestAnimationFrame(() => dialog.classList.add('is-open'))
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = previousOverflow
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const closeDialog = () => {
    const dialog = dialogRef.current
    if (!dialog?.open) return
    dialog.classList.remove('is-open')
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 380)
  }

  const src = `${import.meta.env.BASE_URL}sample-websites/${site.file}`

  return (
    <>
      <button className={`sample-card sample-card--${kind}`} type="button" aria-haspopup="dialog" onClick={() => setIsOpen(true)}>
        <span className="sample-card__top">
          <span className="sample-badge">{site.badge}</span>
          <span className="sample-card__index">SAMPLE WEBSITE</span>
        </span>
        <span className="sample-card__title">{site.title}</span>
        <span className="sample-card__description">{site.summary}</span>
        <span className="sample-card__bottom">
          <span className="sample-card__trigger">Open website <span aria-hidden="true">↗</span></span>
          <span className="sample-card__note">ORIGINAL WEBSITE · UNMODIFIED</span>
        </span>
      </button>

      {isOpen && (
        <dialog
          className={`sample-dialog sample-dialog--${kind}`}
          ref={dialogRef}
          aria-label={site.title}
          onCancel={event => {
            event.preventDefault()
            closeDialog()
          }}
          onClick={event => {
            if (event.target === event.currentTarget) closeDialog()
          }}
        >
          <header className="sample-dialog__header">
            <h2>{site.title}</h2>
            <div className="sample-dialog__actions">
              <a className="sample-open-original" href={src} target="_blank" rel="noreferrer">Open in new tab ↗</a>
              <button className="sample-close" type="button" aria-label={`Close ${site.title}`} onClick={closeDialog}>×</button>
            </div>
          </header>
          <iframe className="sample-site-frame" src={src} title={site.title} />
        </dialog>
      )}
    </>
  )
}
