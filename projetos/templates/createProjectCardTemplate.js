export function createProjectCardTemplate(project) {
  const card = document.createElement('div');
  card.id = project.id;
  card.className = 'card project-card';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'card-image-container';

  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.imageAlt;
  image.className = 'card-image';

  imageContainer.appendChild(image);

  const cardContent = document.createElement('div');
  cardContent.className = 'card-content';

  const badgesTagsContainer = document.createElement('div');
  badgesTagsContainer.className = 'badges-tags-container';

  project.tags.forEach((tag) => {
    const tagElement = document.createElement('span');
    tagElement.className = `tag ${tag.type} tag-small`;
    tagElement.textContent = tag.label;
    badgesTagsContainer.appendChild(tagElement);
  });

  project.badges.forEach((badge) => {
    const badgeElement = document.createElement('span');
    badgeElement.className = `badge ${badge.type} badge-small`;
    badgeElement.textContent = badge.label;
    badgesTagsContainer.appendChild(badgeElement);
  });

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = project.title;

  const description = document.createElement('p');
  description.className = 'card-description';
  description.textContent = project.description;

  const progressContainer = document.createElement('div');
  progressContainer.className = 'project-progress';

  const progressHeader = document.createElement('div');
  progressHeader.className = 'progress-header';

  const progressLabel = document.createElement('span');
  progressLabel.className = 'progress-label';
  progressLabel.textContent = 'Progresso';

  const progressPercentage = document.createElement('span');
  progressPercentage.className = 'progress-percentage';
  progressPercentage.textContent = `${project.progress.percentage}%`;

  progressHeader.appendChild(progressLabel);
  progressHeader.appendChild(progressPercentage);

  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-container';

  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = `${project.progress.percentage}%`;

  progressBarContainer.appendChild(progressBar);

  const progressStats = document.createElement('div');
  progressStats.className = 'progress-stats';

  const collected = document.createElement('span');
  collected.textContent = `Arrecadado: R$ ${project.progress.collected.toLocaleString('pt-BR')}`;

  const goal = document.createElement('span');
  goal.textContent = `Objetivo: R$ ${project.progress.goal.toLocaleString('pt-BR')}`;

  progressStats.appendChild(collected);
  progressStats.appendChild(goal);

  progressContainer.appendChild(progressHeader);
  progressContainer.appendChild(progressBarContainer);
  progressContainer.appendChild(progressStats);

  const donationButton = document.createElement('button');
  donationButton.type = 'button';
  donationButton.className = 'btn btn-primary donation-btn';
  donationButton.setAttribute('data-project', project.title);
  donationButton.textContent = 'Doe Agora';

  cardContent.appendChild(badgesTagsContainer);
  cardContent.appendChild(title);
  cardContent.appendChild(description);
  cardContent.appendChild(progressContainer);
  cardContent.appendChild(donationButton);

  card.appendChild(imageContainer);
  card.appendChild(cardContent);

  return card;
}
