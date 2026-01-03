import { projectsData } from './projectData.js';

//get all project IDs in order
function getAllProjectIds() {
  return Object.keys(projectsData);
}

//get previous and next project IDs
function getAdjacentProjects(currentProjectId) {
  const projectIds = getAllProjectIds();
  const currentIndex = projectIds.indexOf(currentProjectId);
  
  if (currentIndex === -1) {
    return { prev: null, next: null };
  }
  
  //Get next project but if first one get last one
  const prevIndex = currentIndex === 0 ? projectIds.length - 1 : currentIndex - 1;
  const prevProjectId = projectIds[prevIndex];
  
  //Get next project but if last one get first one
  const nextIndex = currentIndex === projectIds.length - 1 ? 0 : currentIndex + 1;
  const nextProjectId = projectIds[nextIndex];
  
  return {
    prev: { id: prevProjectId, title: projectsData[prevProjectId].title },
    next: { id: nextProjectId, title: projectsData[nextProjectId].title }
  };
}

//function to generate project detail HTML
function generateProjectDetailHTML(projectId) {
  const project = projectsData[projectId];
  if (!project) return "";
  
  //get adjacent projects
  const adjacentProjects = getAdjacentProjects(projectId);

  return `
    <div class="project-detail-hero">
      <div class="project-detail-category">${project.category}</div>
      <h1 class="project-detail-title">${project.title}</h1>
      <p class="project-detail-description">${project.description}</p>
    </div>

    <div class="project-detail-meta">
      <div class="project-meta-item">
        <div class="project-meta-label">Role</div>
        <div class="project-meta-value">${project.meta.role}</div>
      </div>
      <div class="project-meta-item">
        <div class="project-meta-label">Year</div>
        <div class="project-meta-value">${project.meta.year}</div>
      </div>
      <div class="project-meta-item">
        <div class="project-meta-label">GitHub</div>
        <div class="project-meta-value">
          ${project.meta.github ? `<a href="${project.meta.github}" target="_blank">${project.meta.github.split('/').pop()}</a>` : 'N/A'}
        </div>
      </div>
      <div class="project-meta-item">
        <div class="project-meta-label">Technologies</div>
        <div class="project-meta-value">${project.meta.technologies}</div>
      </div>
    </div>

    ${project.heroImage ? `
    <div class="project-detail-full-image">
      <img src="${project.heroImage.url}" alt="${project.heroImage.alt || project.title}">
    </div>
    ` : ""}

    ${project.sections
      .map(
        (section) => `
      <div class="project-detail-section">
        <h2 class="project-detail-section-title">${section.title}</h2>
        <div class="project-detail-text">
          <p>${section.text}</p>
        </div>
      </div>
    `
      )
      .join("")}

    ${project.images && project.images.length > 0 ? `
    <div class="project-detail-grid">
      ${project.images.map((img, index) => `
        <div class="project-detail-image">
          <img src="${img.url}" alt="${img.alt || `${project.title} - Image ${index + 1}`}">
        </div>
      `).join("")}
    </div>
    ` : ""}

    <div class="project-detail-navigation">
      ${adjacentProjects.prev ? `
        <a href="#" class="project-nav-button prev" data-project="${adjacentProjects.prev.id}">
          <span class="project-nav-label">← Previous Project</span>
          <span class="project-nav-title">${adjacentProjects.prev.title}</span>
        </a>
      ` : '<div></div>'}
      
      ${adjacentProjects.next ? `
        <a href="#" class="project-nav-button next" data-project="${adjacentProjects.next.id}">
          <span class="project-nav-label">Next Project →</span>
          <span class="project-nav-title">${adjacentProjects.next.title}</span>
        </a>
      ` : '<div></div>'}
    </div>
  `;
}

//Initialize project detail functionality
export function initProjectDetail() {
  //Getting DOM elements when function is called 
  const projectCards = document.querySelectorAll(".project-card");
  const projectDetail = document.getElementById("projectDetail");
  const projectDetailContent = document.getElementById("projectDetailContent");
  const backButton = document.getElementById("backButton");
  const navLinks = document.querySelectorAll(".nav-links a");

  //Check if required elements exist
  if (!projectDetail || !projectDetailContent || !backButton) {
    console.error("Project detail elements not found in DOM");
    return;
  }

  //Function to open project detail
  function openProjectDetail(projectId) {
    const content = generateProjectDetailHTML(projectId);
    projectDetailContent.innerHTML = content;

    //Add class to body to prevent scrolling
    document.body.classList.add("project-detail-open");

    //Show detail view with animation
    requestAnimationFrame(() => {
      projectDetail.classList.add("active");
    });

    //Scroll to top of detail view
    projectDetail.scrollTop = 0;
    
    attachNavigationListeners();
  }

  //Function to close project detail
  function closeProjectDetail() {
    projectDetail.classList.remove("active");
    document.body.classList.remove("project-detail-open");
  }
  
  //Function to attach prev/next navigation buttons
  function attachNavigationListeners() {
    const prevButton = projectDetailContent.querySelector('.project-nav-button.prev');
    const nextButton = projectDetailContent.querySelector('.project-nav-button.next');
    
    if (prevButton) {
      prevButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = prevButton.getAttribute('data-project');
        if (projectId) {
          openProjectDetail(projectId);
        }
      });
    }
    
    if (nextButton) {
      nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = nextButton.getAttribute('data-project');
        if (projectId) {
          openProjectDetail(projectId);
        }
      });
    }
  }

  //Add click event to project cards
  projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = card.getAttribute("data-project");
      if (projectId) {
        openProjectDetail(projectId);
      }
    });
  });

  // Back button functionality
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    closeProjectDetail();
  });

  //Handle navigation links when project detail is open
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      //If project detail is open, close it first
      if (projectDetail.classList.contains("active")) {
        e.preventDefault();
        closeProjectDetail();
        
        //Wait for close animation to complete
        setTimeout(() => {
          const href = link.getAttribute("href");
          if (href && href.startsWith("#")) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }
        }, 400); 
      }
    });
  });
}