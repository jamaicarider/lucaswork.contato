import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './Project.css'

function MediaItem({ item }) {
  if (item.comingSoon) {
    return (
      <div className="media-item media-item--soon" data-testid="media-item-soon">
        <p>{item.caption || 'Em breve'}</p>
        <p>(coming soon)</p>
      </div>
    )
  }

  return (
    <div className="media-item" data-testid="media-item">
      {item.type === 'video' ? (
        <video src={item.src} controls playsInline muted loop />
      ) : (
        <img src={item.src} alt={item.caption || ''} loading="lazy" />
      )}
      {item.caption && <p className="media-item__caption">{item.caption}</p>}
    </div>
  )
}

export default function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  if (project.comingSoon && !project.media && !project.sections) {
    return (
      <main className="project project--soon" data-testid="project-soon">
        <p>{project.title}</p>
        <p>(coming soon)</p>
      </main>
    )
  }

  return (
    <main className="project" data-testid={`project-${project.slug}`}>
      <header className="project__header">
        <h1 data-testid="project-title">{project.title}</h1>
        {project.intro && <p className="project__intro">{project.intro}</p>}
      </header>

      {project.media && (
        <section className="project__section">
          <div className="project__gallery" data-testid="project-gallery">
            {project.media.map((item, i) => (
              <MediaItem key={i} item={item} />
            ))}
          </div>
        </section>
      )}

      {project.sections &&
        project.sections.map((section, sIdx) => (
          <section
            key={sIdx}
            className="project__section"
            data-testid={`project-section-${sIdx}`}
          >
            <div className="project__section-heading">
              <h2>{section.name}</h2>
              {section.role && <p>{section.role}</p>}
              {section.year && <p>{section.year}</p>}
            </div>
            <div className="project__gallery">
              {section.media.map((item, i) => (
                <MediaItem key={i} item={item} />
              ))}
            </div>
          </section>
        ))}
    </main>
  )
}
