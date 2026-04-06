export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">

        <h1 className="title">Projects</h1>

        {/* ===== SMARTFILL ===== */}
        <div className="project-row smartfill">

          <div className="project-image">
            <img src="/smartfill.png" alt="SmartFill AI" />
          </div>

          <div className="project-content">
            <h2>SmartFill AI – Form Auto-Filling</h2>

            <p>
              Built an AI-powered form automation system that predicts and fills user inputs using 
              intelligent suggestions. Reduced manual typing effort by <b>40–60%</b> with real-time 
              dynamic data handling and optimized UX.
            </p>

            <p>
              Implemented REST APIs and scalable architecture to handle dynamic form data efficiently 
              with fast response and clean UI interaction.
            </p>

            <div className="tags">
              <span>Html5</span>
              <span>Css3</span>
              <span>JavaScript</span>
              <span>Open AI</span>
            </div>

            <div className="buttons">
              <a href="https://github.com/LIKHITHH-HUB/smartfill-ai-form" className="btn github">GitHub</a>
              <a href="https://smartfill-ai-form.vercel.app/" className="btn demo">Live Demo</a>
            </div>
          </div>

        </div>


        {/* ===== DIARY ===== */}
        <div className="project-row reverse diary">

          <div className="project-image">
            <img src="/diary.png" alt="Diary App" />
          </div>

          <div className="project-content">
            <h2>EchoNote PersonalDiary Application</h2>

            <p>
              Developed a full-stack diary application with secure authentication and complete 
              <b> CRUD operations </b> for managing daily entries.
            </p>

            <p>
              Built RESTful APIs and integrated MySQL database for structured storage, ensuring 
              reliable data handling and smooth user experience.
            </p>
            <p>
              Deployed a responsive, interactive application with optimized backend handling and real-world edge
case management
            </p>

            <div className="tags">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MySQL</span>
            </div>

            <div className="buttons">
              <a href="https://github.com/LIKHITHH-HUB/My-Diary" className="btn github">GitHub</a>
              <a href="https://likhithh-hub.github.io/My-Diary/" className="btn demo">Live Demo</a>
            </div>
          </div>

        </div>


        {/* ===== EXPENSE ===== */}
        <div className="project-row expense">

          <div className="project-image">
            <img src="/expense.png" alt="Expense Tracker" />
          </div>

          <div className="project-content">
            <h2>Expense Tracker</h2>

            <p>
              Designed a responsive expense tracking application with categorized data management 
              and real-time updates for daily financial tracking.
            </p>

            <p>
              Implemented interactive dashboard with charts and insights, focusing on usability, 
              performance, and clean UI design.
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="buttons">
              <a href="https://github.com/LIKHITHH-HUB" className="btn github">GitHub</a>
              <a href="https://likhithh-hub.github.io/expense-Tracker/" className="btn demo">Live Demo</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}