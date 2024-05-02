// Projects.jsx
import { useState, useEffect } from 'react';

function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulating fetching data
    setTimeout(() => {
      const fakeProjects = [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' },
      ];
      setProjects(fakeProjects);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Projects</h2>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>{project.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Projects;
