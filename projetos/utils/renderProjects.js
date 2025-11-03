import { PROJECTS } from '../constant.js';
import { createProjectCardTemplate } from '../templates/createProjectCardTemplate.js';

export function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');

  if (!projectsGrid) {
    console.error('Projects grid container not found');
    return;
  }

  projectsGrid.innerHTML = '';

  PROJECTS.forEach((project) => {
    const projectCard = createProjectCardTemplate(project);
    projectsGrid.appendChild(projectCard);
  });
}

