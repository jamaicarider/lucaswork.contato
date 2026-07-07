import { useParams, Navigate } from 'react-router-dom'
import { projects } from '../data/projects'
import './Project.css'

export default function Project() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  return (
    <main className="project">
      <div className="project__frame">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project__caption">
        <p>{project.author}</p>
        <p>{project.subtitle}</p>
        <p>{project.place}</p>
      </div>
    </main>
  )
}
