// Load configuration from config.json
fetch('config.json')
    .then(response => response.json())
    .then(config => {
        populateProfile(config.profile);
        populateHighlights(config.highlights);
        populateSkills(config.skills);
        populateProjects(config.projects);
        populateExperience(config.experience);
        populateEducation(config.education);
        populateCertifications(config.certifications);
        populateContact(config.profile, config.contact);
    })
    .catch(error => console.error('Error loading config:', error));

// Profile Section
function populateProfile(profile) {
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('profileTitle').textContent = profile.title;
    document.getElementById('profileAbout').textContent = profile.about;
    
    // Set up CV download
    if (profile.cv) {
        const cvLink = document.getElementById('cvDownload');
        cvLink.href = profile.cv;
        cvLink.download = profile.cv;
        cvLink.style.display = 'inline-block';
    }
}

// Highlights Section
function populateHighlights(highlights) {
    const container = document.getElementById('highlightsContainer');
    highlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'highlight-card';
        card.innerHTML = `
            <h3>${highlight.title}</h3>
            <p>${highlight.description}</p>
        `;
        container.appendChild(card);
    });
}

// Skills Section
function populateSkills(skills) {
    const container = document.getElementById('skillsContainer');
    skills.forEach(category => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${category.category}</h3>
            <ul>
                ${category.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;
        container.appendChild(card);
    });
}

// Projects Section
function populateProjects(projects) {
    const container = document.getElementById('projectsContainer');
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        const skillsHTML = project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
        card.innerHTML = `
            <div class="project-header">
                <h3>${project.title}</h3>
                <span class="project-category">${project.category}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <details>
                <summary>Learn more</summary>
                <p class="project-details">${project.details}</p>
                <div class="highlights-list">
                    <strong>Key achievements:</strong>
                    <ul>
                        ${project.highlights.map(h => `<li>${h}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-skills">
                    ${skillsHTML}
                </div>
            </details>
        `;
        container.appendChild(card);
    });
}

// Experience Section
function populateExperience(experience) {
    const container = document.getElementById('experienceContainer');
    experience.forEach(job => {
        const entry = document.createElement('div');
        entry.className = 'timeline-entry';
        entry.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${job.role}</h3>
                <p class="company">${job.company} • ${job.location}</p>
                <p class="period">${job.period}</p>
                <p class="description">${job.description}</p>
            </div>
        `;
        container.appendChild(entry);
    });
}

// Education Section
function populateEducation(education) {
    const container = document.getElementById('educationContainer');
    education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card';
        card.innerHTML = `
            <h3>${edu.degree}</h3>
            <p class="school">${edu.school}</p>
            <p class="meta">${edu.location} • ${edu.year}</p>
            <p class="highlights">${edu.highlights}</p>
        `;
        container.appendChild(card);
    });
}

// Certifications Section
function populateCertifications(certifications) {
    const container = document.getElementById('certificationsContainer');
    if (certifications && certifications.length > 0) {
        const title = document.createElement('h3');
        title.textContent = 'Certifications';
        title.style.marginTop = '2rem';
        container.appendChild(title);
        
        certifications.forEach(cert => {
            const card = document.createElement('div');
            card.className = 'cert-card';
            card.innerHTML = `
                <p><strong>${cert.name}</strong></p>
                <p class="issuer">${cert.issuer}</p>
            `;
            container.appendChild(card);
        });
    }
}

// Contact Section
function populateContact(profile, contact) {
    document.getElementById('contactMessage').textContent = contact.message;
    document.getElementById('contactCTA').textContent = contact.cta;
    
    // Set contact links
    document.getElementById('emailLink').href = `mailto:${profile.email}`;
    if (profile.linkedin) {
        document.getElementById('linkedinLink').href = profile.linkedin;
    }
    if (profile.github) {
        document.getElementById('githubLink').href = profile.github;
    }
}
