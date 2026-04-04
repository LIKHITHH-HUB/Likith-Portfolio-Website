import ThreeDObject from "./ThreeDObject";

export default function HeroSection() {
  return (
    <section className="section">
      <div className="container" style={{display:"flex",justifyContent:"space-between"}}>

        <div>
          <p>Hi I'm</p>

          <h1 style={{
            fontSize:"60px",
            background:"linear-gradient(90deg,#a855f7,#ec4899)",
            WebkitBackgroundClip:"text",
            color:"transparent"
          }}>
            THANDLA LIKITH RAO
          </h1>

          <h2>FULL STACK WEB DEVELOPER</h2>
          <p>With AI Integrations</p>

          <div style={{marginTop:"20px",display:"flex",gap:"10px"}}>
            <a href="/LIKITH_RESUME.pdf" className="btn">Resume</a>
            <a href="https://github.com/LIKHITHH-HUB" className="btn">GitHub</a>
            <a href="https://linkedin.com" className="btn">LinkedIn</a>
          </div>
        </div>

        <div className="orbWrapper">
          <div className="orbGlow"></div>
          <div className="orbInner">
            <ThreeDObject />
          </div>
        </div>

      </div>
    </section>
  );
}