import React from 'react'

function Features() {

  const features = [
    {
      id: 1,
      emoji: "⚡",
      title: "Blazing Fast",
      description: "Deploy in seconds with our global edge network. P99 latency under 50ms guaranteed."
    },
    {
      id: 2,
      emoji: "🔒",
      title: "Secure by Default",
      description: "SOC2 compliant. End-to-end encryption. Role-based access control built in."
    },
    {
      id: 3,
      emoji: "🧩",
      title: "Modular API",
      description: "Pick only what you need. Our composable API adapts to your stack seamlessly."
    },
    {
      id: 4,
      emoji: "📊",
      title: "Live Analytics",
      description: "Real-time dashboards and alerts. Know what's happening before your users do."
    },
    {
      id: 5,
      emoji: "🌍",
      title: "Global CDN",
      description: "200+ edge locations worldwide. Your users are always close to the data."
    },
    {
      id: 6,
      emoji: "🤝",
      title: "Team Tools",
      description: "Comments, approvals, and audit logs. Built for teams, not lone wolves."
    }
  ];

  return (
    <div className='features-section'>
      <div className='features-heading-section'>
        <span className="heading-top">WHAT YOU GET</span>
        <div className="features-heading-description">
          <h2 className="heading-features">Everything you need.<br />Nothing you don't.</h2>
          <p className="description">
            Six pillars that keep your product healthy and fast at any scale.
          </p>
        </div>
      </div>
      <div className="features-cards">
        {
          features.map( (feature) => (
            <div className='feature-card'>
              <div className="feature-id">0{feature.id}</div>
              <div className="feature-emoji">{feature.emoji}</div>
              <h2 className="feature-title">{feature.title}</h2>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Features