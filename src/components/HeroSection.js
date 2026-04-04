import ThreeDObject from "./ThreeDObject";

export default function HeroSection() {
  return (
    <section id="home" className="section">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* LEFT */}
        <div style={{ maxWidth: "600px" }}>
          <p>Hi I'm</p>

          <h1 style={{
            fontSize: "50px",
            background: "linear-gradient(90deg,#a855f7,#ec4899)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}>
            THANDLA LIKITH RAO
          </h1>

          <h2>FULL STACK DEVELOPER</h2>
          <p>Building Scalable Web Applications With AI Integrates</p>

          <div style={{ marginTop: "30px", display: "flex", gap: "15px" }}>
            <a href="/LIKITH_RESUME.pdf" target="_blank" className="btn">
  View Resume
</a>
            <a href="/LIKITH_RESUME.pdf" download className="btn">
  Download Resume
</a>
            <a href="https://github.com/LIKHITHH-HUB" className="btn">GitHub</a>
            <a href="https://www.linkedin.com/in/thandla-likhith-in/" className="btn">LinkedIn</a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="orbWrapper">
  <div className="orbGlow"></div>

  <div className="orbInner">
    <img src="/Portfolio-pic.png" alt="profile" className="hero-img" />
  </div>
</div>

      </div>
    </section>
  );
}