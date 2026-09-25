import Flag3D from "../components/Flag3D";

const pillars = [
  ["01", "Unity", "One team, one purpose, one standard."],
  ["02", "Discipline", "Consistency in training, conduct and character."],
  ["03", "Service", "Leadership expressed through responsibility."],
];

const training = [
  ["A", "Drill & Parade", "Precision, coordination and confidence under pressure."],
  ["B", "Physical Training", "Build stamina, strength and resilience through progressive training."],
  ["C", "Field Craft", "Practical skills, teamwork and decision-making in demanding environments."],
  ["D", "Leadership", "Take initiative, communicate clearly and be accountable for your team."],
];

const activities = [
  ["01", "Institutional Training", "Structured drills, parade practice and leadership development."],
  ["02", "Camps & Expeditions", "Outdoor training, camps and team-based challenges that test resilience."],
  ["03", "Community Service", "Contribute to campus and community initiatives with responsibility."],
  ["04", "Cadet Development", "Build confidence, discipline and a stronger sense of purpose."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home">
          <span className="brand-shield"><span>NCC</span></span>
          <span className="brand-text"><strong>NCC</strong><small>IIT ROORKEE</small></span>
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#training">Training</a>
          <a href="#activities">Activities</a>
          <a href="#batch">Batch</a>
          <a href="#contact" className="nav-cta">Contact</a>
        </nav>
        <button className="mobile-menu" aria-label="Open menu">☰</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-lines" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> NATIONAL CADET CORPS · IIT ROORKEE</p>
          <h1>Unity.<br /><em>Discipline.</em><br />Character.</h1>
          <p className="hero-description">
            A tradition of training, service and leadership — carried forward by the cadets of IIT Roorkee.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#about">Explore NCC <b>↗</b></a>
            <a className="button outline" href="#training">View training</a>
          </div>
          <div className="hero-meta">
            <span><b>01</b> IIT ROORKEE</span>
            <span><b>02</b> NCC · CADET LIFE</span>
          </div>
        </div>
        <div className="hero-visual">
          <Flag3D />
          <div className="visual-label">SERVICE BEFORE SELF</div>
          <div className="visual-badge">NCC<br /><span>IITR</span></div>
        </div>
        <div className="scroll">SCROLL <span /></div>
      </section>

      <section className="batch-bar" id="batch">
        <div className="batch-track">
          <span>NCC IIT ROORKEE</span><i>✦</i><span>CADET BATCH 2025—26</span><i>✦</i>
          <span>UNITY AND DISCIPLINE</span><i>✦</i><span>CADET BATCH 2025—26</span><i>✦</i>
          <span>NCC IIT ROORKEE</span><i>✦</i>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="kicker">01 / ABOUT THE CORPS</div>
        <div className="two-col">
          <h2>More than a uniform.<br /><span>A standard to live by.</span></h2>
          <div className="copy">
            <p className="lead">At IIT Roorkee, NCC brings technical education together with character, responsibility and leadership.</p>
            <p>Cadet life combines structured training, teamwork, physical readiness and service. Every drill is practice for a larger lesson: showing up, staying composed and taking responsibility.</p>
          </div>
        </div>
        <div className="pillars">
          {pillars.map(([num, title, text]) => (
            <article key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section training" id="training">
        <div className="kicker">02 / TRAINING</div>
        <div className="section-head"><h2>Train with purpose.</h2><p>Progress is built through repetition, responsibility and the willingness to be challenged.</p></div>
        <div className="training-grid">
          {training.map(([letter, title, text], index) => (
            <article className={`training-card card-${index}`} key={letter}>
              <span className="card-letter">{letter}</span><h3>{title}</h3><p>{text}</p><span className="card-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section activities" id="activities">
        <div className="kicker">03 / CADET LIFE</div>
        <div className="activity-layout">
          <div className="activity-title"><h2>Where<br /><span>character</span><br />takes shape.</h2><p>From the parade ground to community service, every experience adds another layer.</p></div>
          <div className="activity-list">
            {activities.map(([num, title, text]) => (
              <article key={num}><span>{num}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="quote-inner">
          <span className="quote-mark">“</span>
          <blockquote>Ask not what the country can do for you.<br /><em>Ask what you can do for the country.</em></blockquote>
          <p>— John F. Kennedy</p>
        </div>
      </section>

      <section className="section join">
        <div className="join-panel">
          <div><div className="kicker light">04 / THE NEXT PARADE</div><h2>Ready to<br /><span>step forward?</span></h2></div>
          <div className="join-copy"><p>Stay connected with NCC IIT Roorkee for training updates, events and opportunities to serve.</p><a className="button light-button" href="#contact">Get in touch <b>↗</b></a></div>
        </div>
      </section>

      <footer id="contact">
        <div className="footer-main">
          <div className="footer-brand"><span className="brand-shield large"><span>NCC</span></span><div><h3>NCC · IIT ROORKEE</h3><p>Unity and Discipline</p></div></div>
          <div className="footer-links">
            <div><span>Explore</span><a href="#about">About</a><a href="#training">Training</a><a href="#activities">Activities</a></div>
            <div><span>Connect</span><a href="#batch">Batch 2025—26</a><a href="#contact">Contact</a><a href="#home">Back to top ↑</a></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 NCC IIT Roorkee</span><span>National Cadet Corps · IIT Roorkee</span></div>
      </footer>
    </main>
  );
}