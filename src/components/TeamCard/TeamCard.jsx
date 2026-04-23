import './TeamCard.css'

function TeamCard({ name, role, photo, socialLinks = [] }) {
  const defaultPhoto = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2563eb&color=fff&size=150`
  
  return (
    <div className="team-card">
      <div className="team-card__photo">
        <img src={photo || defaultPhoto} alt={name} />
      </div>
      <h3 className="team-card__name">{name}</h3>
      <p className="team-card__role">{role}</p>
      {socialLinks.length > 0 && (
        <div className="team-card__social">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.link} className="team-card__social-link" target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export default TeamCard