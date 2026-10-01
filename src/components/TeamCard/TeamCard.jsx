import PropTypes from 'prop-types'
import { Globe } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from '../Icons/BrandIcons'
import './TeamCard.css'

function TeamCard({ name, role, photo, socialLinks = [] }) {
  const defaultPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=eef2ff&color=4f46e5&size=150`

  const iconMap = {
    in: <LinkedinIcon size={16} />,
    gh: <GithubIcon size={16} />,
    tw: <Globe size={16} />,
    dr: <Globe size={16} />,
  }

  return (
    <div className="team-card">
      <div className="team-card__photo">
        <img src={photo || defaultPhoto} alt={name} loading="lazy" />
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
      {socialLinks.length > 0 && (
        <div className="team-card__social">
          {socialLinks.map((social) => (
            <a key={social.icon + social.link} href={social.link} className="team-card__social-link" target="_blank" rel="noopener noreferrer" aria-label={`${name} en ${social.icon}`}>
              {iconMap[social.icon] || <Globe size={16} />}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photo: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string,
    link: PropTypes.string,
  })),
}

export default TeamCard
