export default function AboutSection() {
  return (
    <section id="about" className="section fade-in">
      <div className="container">

        <h1 className="title">About Me</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >

          {/* IMAGE */}
          <div className="glass about-box">
            <img
              src="/Portfolio-pic-2.png"
              alt="Profile"
              className="about-img"
            />
          </div>

          {/* TEXT */}
          <div className="glass">
            <p className="about-text">
              I am a B.Tech Computer Science (2026 Graduate) from G. Pullaiah College of Engineering,
              with a strong focus on Full Stack Web Development. I build scalable, user-centric web
              applications using modern technologies such as React, Node.js, and MySQL.
            </p>

            <p className="about-text">
              I have hands-on experience developing real-world projects involving CRUD operations,
              REST API development, authentication systems, and AI-based integrations. I prioritize
              clean UI design, performance optimization, and solving practical problems through code.
            </p>

            <p className="about-text">
              As a fresher, I am driven to apply engineering principles to real-world business challenges through practical development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}