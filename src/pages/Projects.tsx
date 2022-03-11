import "../sass/projects.sass";

function Projects() {
  return (
    <div className="projects">
      <header className="projects-header">
        <div className="projects-navbar">
          <ul>
            <li>
              <a href="https://rickroll.com/">Projects link</a>
            </li>
          </ul>
        </div>
        <h1>Projects</h1>
        <p>Here's a list of some of the projects I've worked on.</p>
      </header>
      <div className="projects-content">
        <div className="projects-content-item">
          <h2>
            <a href="https://rickroll.com/">Test</a>
          </h2>
          <p>This is a test don't mind me and this works just fine nice</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
