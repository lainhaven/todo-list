import { ProjectCollection } from "./projectcollection";
import { dom } from "./domcache";

export function renderProjects() {
  let projects = ProjectCollection.projects;
  const projectContainer = document.querySelector('.projects-container');
  const renderedProjects = document.querySelectorAll('.project');

  if (renderedProjects) {
    for (let i = 0; i < renderedProjects.length; i++) {
      renderedProjects[i].remove();
    }
  }

  for (let i = 0; i < projects.length; i++) {
    const button = document.createElement('button');
    const icon = document.createElement('img');
    const name = document.createElement('p');
    let id = String(projects[i].id);
    button.classList.add(`project`);
    button.classList.add(id);
    icon.src = projects[i].icon;
    name.textContent = projects[i].name;

    button.appendChild(icon);
    button.appendChild(name);
    projectContainer.appendChild(button);
  }
}

