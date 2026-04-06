export default function SkillsSection() {
  return (
    <section id="skills" className="section fade-in">
      <div className="container">

        <h1 className="title">Skills</h1>

        <div style={{
          display: "flex",
          gap: "40px",
          justifyContent: "center"
        }}>

          {/* FRONTEND */}
          <div className="glass skillCard">
            <div className="skillHeader blue">Frontend</div>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>

          {/* BACKEND */}
          <div className="glass skillCard">
            <div className="skillHeader green">Backend</div>

            <ul>
              <li>Java</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          {/* DATABASE */}
          <div className="glass skillCard">
            <div className="skillHeader pink">Database & Tools</div>

            <ul>
              <li>SQL</li>
              <li>MySQL</li>
              <li>GitHub</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}