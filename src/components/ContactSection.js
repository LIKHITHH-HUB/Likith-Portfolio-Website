export default function ContactSection() {
  return (
    <section id="contact" className="section contact-section">

      <div className="contact-wrapper">

        <h1 className="contact-title">Contact Me</h1>

        <div className="contact-container">

          {/* EMAIL CARD */}
          <a 
            href="mailto:likhithrao2223@gmail.com"
            className="contact-card email"
          >
            <h2>Email</h2>
            <p>likhithrao2223@gmail.com</p>
          </a>

          {/* LINKEDIN CARD */}
          <a 
            href="https://www.linkedin.com/in/thandla-likhith-in/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card linkedin"
          >
            <h2>LinkedIn</h2>
            <p>THANDLA LIKITH RAO</p>
          </a>

        </div>

        <p className="contact-text">
          Let's create something amazing together! ✨
        </p>

      </div>

    </section>
  );
}