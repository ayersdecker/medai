import React from 'react'
import assetUpload from '../assets/asset-upload.svg'
import aiImage from '../assets/ai-image.svg'
import socialSeo from '../assets/social-seo.svg'
import cloudLibrary from '../assets/cloud-library.svg'

interface LandingProps {
  onLogin: () => void
  onSignUp: () => void
}
const features = [
  {
    img: assetUpload,
    title: 'Brand Asset Uploads',
    desc: 'Store logos and media for on-brand creation.',
  },
  {
    img: aiImage,
    title: 'AI Content Generator',
    desc: 'Produce posts using your brand assets in seconds.',
  },
  {
    img: socialSeo,
    title: 'Social SEO Insights',
    desc: 'Optimize captions and hashtags for maximum reach.',
  },
  {
    img: cloudLibrary,
    title: 'Cloud Asset Library',
    desc: 'Access your creatives securely from anywhere.',
  },
]

export default function Landing({ onLogin, onSignUp }: LandingProps) {
  return (
    <section className="glass-card">
      <h1>Medai</h1>
      <p>Welcome to Medai, your AI partner for social media content.</p>
      <div className="feature-grid">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
      <div>
        <button type="button" onClick={onSignUp}>Get Started</button>
        <p>
          Already have an account?{' '}
          <button type="button" onClick={onLogin}>Log in</button>
        </p>
      </div>
    </section>
  )
}
