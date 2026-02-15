import './App.css'
import moonrockLogo from './moonrock phtot.png'

function App() {
  return (
    <div className="moonrock-site">
      {/* Space background layers */}
      <div className="space-bg">
        <div className="stars"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>
        <div className="nebula nebula-1"></div>
        <div className="nebula nebula-2"></div>
        <div className="nebula nebula-3"></div>
        <div className="moon-target" aria-hidden="true">
          <div className="moon-glow"></div>
          <div className="moon-circle">🌙</div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="floating-elements">
        <div className="float-rock rock-1">🪨</div>
        <div className="float-rock rock-2">🌑</div>
        <div className="float-rock rock-3">🪨</div>
        <div className="float-leaf leaf-1">
          <svg viewBox="0 0 32 32" fill="currentColor" className="leaf-svg">
            <path d="M16 2C12 8 6 12 6 16c0 4 4 10 10 14s10-4 10-10c0-6-4-12-10-18z" opacity="0.85"/>
          </svg>
        </div>
        <div className="float-leaf leaf-2">
          <svg viewBox="0 0 32 32" fill="currentColor" className="leaf-svg">
            <path d="M16 2C12 8 6 12 6 16c0 4 4 10 10 14s10-4 10-10c0-6-4-12-10-18z" opacity="0.85"/>
          </svg>
        </div>
        <div className="float-leaf leaf-3">
          <svg viewBox="0 0 32 32" fill="currentColor" className="leaf-svg">
            <path d="M16 2C12 8 6 12 6 16c0 4 4 10 10 14s10-4 10-10c0-6-4-12-10-18z" opacity="0.85"/>
          </svg>
        </div>
      </div>

      {/* Animated rocket */}
      <div className="rocket-container">
        <div className="rocket">
          <svg viewBox="0 0 64 128" className="rocket-svg">
            <defs>
              <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="50%" stopColor="#00cc6a" />
                <stop offset="100%" stopColor="#00994d" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#00ff88" />
                <stop offset="50%" stopColor="#00ff88" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ellipse cx="32" cy="24" rx="12" ry="14" fill="url(#rocketGrad)" />
            <path d="M20 24 L32 80 L44 24 Z" fill="url(#rocketGrad)" />
            <ellipse cx="32" cy="80" rx="8" ry="4" fill="#00ff88" opacity="0.8" />
            <path d="M28 80 Q32 110 36 80" fill="url(#flameGrad)" className="flame" />
            <circle cx="32" cy="20" r="4" fill="#fff" opacity="0.9" />
          </svg>
        </div>
        <div className="smoke-trail"></div>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">
          <img src={moonrockLogo} alt="Moonrock" className="nav-logo-img" />
          <span>$MOONROCK</span>
        </div>
        <div className="nav-links">
          <a href="#lore">MOONROCK LORE</a>
          <a href="#roadmap">Flight Phases</a>
          <a href="#community">Smoke Circle</a>
        </div>
        <button className="nav-cta">COPY CA</button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img 
          src={moonrockLogo} 
          alt="Moonrock — To the moon" 
          className="hero-logo"
        />
        <div className="hero-badge">🚀 The Highest Memecoin in the Galaxy</div>
        <h1 className="hero-title">
          <span className="hero-line">ROLL IT.</span>
          <span className="hero-line">LIGHT IT.</span>
          <span className="hero-line hero-accent">SEND IT TO THE MOON.</span>
        </h1>
        <p className="hero-sub">
          $MOONROCK — Where the vibes are cosmic and the gains are astronomical. 
          Join the crew before we blast off. No cap. 🌙
        </p>
        <div className="hero-ctas">
          <button className="cta cta-primary">Ignite the Rocket</button>
          <button className="cta cta-secondary">Light the Launch</button>
        </div>
        <div className="hero-ticker">
          <span>$MOONROCK</span>
          <span className="ticker-price">TO THE MOON 🌙</span>
        </div>
      </header>

      {/* MOONROCK LORE */}
      <section id="lore" className="section lore">
        <h2 className="section-title">MOONROCK LORE</h2>
        <div className="lore-content">
          <p>Moonrock isn't just weed — it's the heavyweight champion of cannabis. 🌕🔥</p>
          <p>Made by coating a nug in concentrate and rolling it in kief, Moonrock is known for its intense potency and long-lasting high. It's dense, sticky, and packs a powerful punch, often delivering a slow build that lifts you into a relaxed, elevated state.</p>
          <p>Smooth, strong, and not for beginners — Moonrock is made for those ready to go higher. 🚀🌿</p>
        </div>
      </section>

      {/* Roadmap - Flight Phases */}
      <section id="roadmap" className="section roadmap">
        <h2 className="section-title">Flight Phases</h2>
        <p className="section-sub">Our journey to the moon</p>
        <div className="flight-timeline">
          <div className="flight-phase">
            <div className="phase-marker phase-done">✓</div>
            <div className="phase-content">
              <h3>Phase 1 — Launch Pad</h3>
              <p>Token creation, community build, website live. We're on the pad.</p>
            </div>
          </div>
          <div className="flight-phase">
            <div className="phase-marker phase-current">2</div>
            <div className="phase-content">
              <h3>Phase 2 — Ignition</h3>
              <p>DEX listing, CMC/CG, first 1K holders. Engines firing.</p>
            </div>
          </div>
          <div className="flight-phase">
            <div className="phase-marker">3</div>
            <div className="phase-content">
              <h3>Phase 3 — Ascension</h3>
              <p>CEX listings, partnerships, merch drop. Climbing fast.</p>
            </div>
          </div>
          <div className="flight-phase">
            <div className="phase-marker">4</div>
            <div className="phase-content">
              <h3>Phase 4 — Lunar Landing</h3>
              <p>Moon achieved. Celebrations. What's next? Mars.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community - The Smoke Circle */}
      <section id="community" className="section community">
        <h2 className="section-title">The Smoke Circle</h2>
        <p className="section-sub">Join the crew. Share the vibes. Hold for the moon.</p>
        <div className="smoke-circle">
          <div className="community-card">
            <div className="community-icon">🐦</div>
            <h3>Twitter / X</h3>
            <p>Dank memes and launch updates</p>
            <button className="community-btn">Follow</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">$MOONROCK</div>
        <p>To the moon. No cap. LFG. 🚀🌙</p>
        <p className="footer-disclaimer">Not financial advice. Memecoins are highly volatile. Only invest what you can afford to lose.</p>
      </footer>
    </div>
  )
}

export default App
