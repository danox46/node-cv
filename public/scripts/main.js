function loadProfile() {
  fetch("/api/v0/profile")
    .then((response) => response.json())
    .then((data) => {
      if (
        data.message === "success" &&
        Array.isArray(data.profile) &&
        data.profile.length > 0
      ) {
        const profile = data.profile[0];

        // Update profile details
        document.querySelectorAll(".full-name").forEach((element) => {
          element.textContent = profile.name + " " + profile.lastname;
        });

        document.querySelectorAll(".title").forEach((element) => {
          element.textContent = profile.currentTitle || "";
        });

        document.querySelectorAll(".email").forEach((element) => {
          element.textContent = profile.email;
        });

        document.querySelectorAll(".phone").forEach((element) => {
          element.textContent = profile.phoneNumber;
        });

        document.querySelectorAll(".address").forEach((element) => {
          element.textContent = profile.address;
        });

        document.querySelectorAll(".summary").forEach((element) => {
          element.textContent = profile.summary || "";
        });

        // Update social links in the footer
        const footerSocialLinks = document.querySelector(
          ".footer-social-links"
        );
        if (footerSocialLinks) {
          footerSocialLinks.innerHTML = ""; // Clear existing links

          profile.socialLinks.forEach((link) => {
            const anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.name;
            anchor.target = "_blank"; // Open in a new tab
            anchor.rel = "noopener noreferrer"; // Security best practice
            anchor.classList.add("social-link"); // Add a class for styling
            footerSocialLinks.appendChild(anchor);
          });
        }
      } else {
        console.error("Invalid profile data:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching profile data:", error);
    });
}

function loadExperiences() {
  fetch("/api/v0/experience")
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "success" && Array.isArray(data.experienceList)) {
        const containers = document.querySelectorAll(".experience-container");
        containers.forEach((container) => {
          container.innerHTML = ""; // Clear any existing content

          data.experienceList.forEach((experience) => {
            // Create a card for each experience
            const card = document.createElement("div");
            card.classList.add("card");

            // Dynamically build the card content
            let cardContent = `<h3>${experience.title}</h3>`;

            if (experience.company) {
              cardContent += `<p><strong>Company:</strong> ${experience.company}</p>`;
            }

            if (experience.startDate) {
              cardContent += `<p><strong>Start Date:</strong> ${new Date(
                experience.startDate
              ).toLocaleDateString()}</p>`;
            }

            if (experience.endDate) {
              cardContent += `<p><strong>End Date:</strong> ${new Date(
                experience.endDate
              ).toLocaleDateString()}</p>`;
            }

            if (experience.description) {
              cardContent += `<p><strong>Description:</strong> ${experience.description}</p>`;
            }

            if (
              experience.highlights &&
              experience.highlights.length > 0 &&
              experience.highlights.some((e) => e !== "")
            ) {
              cardContent += `
                <ul>
                  <strong>Highlights:</strong>
                  ${experience.highlights
                    .map((highlight) => `<li>${highlight}</li>`)
                    .join("")}
                </ul>`;
            }

            // Set the card's inner HTML
            card.innerHTML = cardContent;

            // Append the card to the container
            container.appendChild(card);
          });
        });
      } else {
        console.error("Invalid experience data:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching experiences:", error);
    });
}

function loadEducation() {
  fetch("/api/v0/education")
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "success" && Array.isArray(data.educationList)) {
        const containers = document.querySelectorAll(".education-container");
        containers.forEach((container) => {
          container.innerHTML = ""; // Clear any existing content

          data.educationList.forEach((education) => {
            // Create a card for each education
            const card = document.createElement("div");
            card.classList.add("card");

            // Dynamically build the card content
            let cardContent = `<h3>${education.degree}</h3>`;

            if (education.institution) {
              cardContent += `<p><strong>Institution:</strong> ${education.institution}</p>`;
            }

            if (education.startDate) {
              cardContent += `<p><strong>Start Date:</strong> ${new Date(
                education.startDate
              ).toLocaleDateString()}</p>`;
            }

            if (education.endDate) {
              cardContent += `<p><strong>End Date:</strong> ${new Date(
                education.endDate
              ).toLocaleDateString()}</p>`;
            }

            // Set the card's inner HTML
            card.innerHTML = cardContent;

            // Append the card to the container
            container.appendChild(card);
          });
        });
      } else {
        console.error("Invalid experience data:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching experiences:", error);
    });
}

function loadProjects() {
  fetch("/api/v0/project")
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "success" && Array.isArray(data.projectList)) {
        const containers = document.querySelectorAll(".project-container");
        containers.forEach((container) => {
          container.innerHTML = ""; // Clear any existing content

          data.projectList.forEach((project) => {
            // Create a card for each project
            const card = document.createElement("div");
            card.classList.add("card");

            // Dynamically build the card content
            let cardContent = `<h3>${project.title}</h3>`;

            if (project.description) {
              cardContent += `<p><strong>Description:</strong> ${project.description}</p>`;
            }

            if (project.startDate) {
              cardContent += `<p><strong>Start Date:</strong> ${new Date(
                project.startDate
              ).toLocaleDateString()}</p>`;
            }

            if (project.endDate) {
              cardContent += `<p><strong>End Date:</strong> ${new Date(
                project.endDate
              ).toLocaleDateString()}</p>`;
            }

            // Set the card's inner HTML
            card.innerHTML = cardContent;

            // Append the card to the container
            container.appendChild(card);
          });
        });
      } else {
        console.error("Invalid experience data:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching experiences:", error);
    });
}

function loadSkills() {
  fetch("/api/v0/skills")
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "success" && Array.isArray(data.skillsList)) {
        const containers = document.querySelectorAll(".skills-container");
        containers.forEach((container) => {
          container.innerHTML = ""; // Clear any existing content

          const list = document.createElement("ul");
          list.classList.add("skills-list");

          data.skillsList.forEach((skill) => {
            const listItem = document.createElement("li");
            listItem.classList.add("skill-item");

            // Dynamically build the list item content
            let skillContent = `<strong>${skill.title}</strong> - ${skill.expertise}`;

            if (skill.relatedEducation && skill.relatedEducation.length > 0) {
              skillContent += `<p><strong>Related Education:</strong> ${skill.relatedEducation.join(
                ", "
              )}</p>`;
            }

            if (skill.relatedExperience && skill.relatedExperience.length > 0) {
              skillContent += `<p><strong>Related Experience:</strong> ${skill.relatedExperience.join(
                ", "
              )}</p>`;
            }

            if (skill.searchLabels && skill.searchLabels.length > 0) {
              skillContent += `<p><strong>Search Labels:</strong> ${skill.searchLabels.join(
                ", "
              )}</p>`;
            }

            listItem.innerHTML = skillContent;
            list.appendChild(listItem);
          });

          container.appendChild(list);
        });
      } else {
        console.error("Invalid skills data:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching skills:", error);
    });
}

function loadPage() {
  loadProfile();
  loadExperiences();
  loadEducation();
  loadProjects();
  loadSkills();
}

loadPage();
