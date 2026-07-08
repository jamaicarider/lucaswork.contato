import { NavLink } from 'react-router-dom'
import { projects } from '../data/projects'
import './CornerNav.css'

// Sempre a mesma ordem, nos quatro cantos da tela:
// canto superior esquerdo -> Perfil
// canto superior direito, inferior esquerdo, inferior direito -> projetos, em ordem
const corners = [
  { label: 'UNTITLED (LUCAS)', to: '/', position: 'top-left' },
  ...projects.slice(0, 3).map((p, i) => ({
    label: `PROJECT ${p.number}`,
    to: `/${p.slug}`,
    position: ['top-right', 'bottom-left', 'bottom-right'][i],
  })),
]

export default function CornerNav() {
  return (
    <nav className="corner-nav" aria-label="Navegação principal">
      {corners.map((c) => (
        <NavLink
          key={c.to}
          to={c.to}
          end={c.to === '/'}
          className={({ isActive }) =>
            `corner-nav__item corner-nav__item--${c.position}` +
            (isActive ? ' corner-nav__item--active' : '')
          }
        >
          {c.label}
        </NavLink>
      ))}
    </nav>
  )
}
