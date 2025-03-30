function loadProfileForEditing() {
  fetch("/api/v0/profile")
    .then((response) => response.json())
    .then((data) => {
      if (
        data.message === "success" &&
        Array.isArray(data.profile) &&
        data.profile.length > 0
      ) {
        const profile = data.profile[0];

        // Populate the form fields with the current profile data
        document.getElementById("name").value = profile.name;
        document.getElementById("lastname").value = profile.lastname;
        document.getElementById("email").value = profile.email;
        document.getElementById("phoneNumber").value = profile.phoneNumber;
        document.getElementById("currentTitle").value =
          profile.currentTitle || "";
        document.getElementById("address").value = profile.address;
        document.getElementById("summary").value = profile.summary || "";

        // Populate social links
        const socialLinksContainer = document.getElementById(
          "social-links-container"
        );
        socialLinksContainer.innerHTML = ""; // Clear existing links
        profile.socialLinks.forEach((link, index) => {
          addSocialLinkField(socialLinksContainer, link.name, link.url, index);
        });
      } else {
        console.error("Invalid profile data:", data);
      }
    })
    .catch((error) => {
      console.error("Error fetching profile data:", error);
    });
}

function addSocialLinkField(
  container,
  name = "",
  url = "",
  index = Date.now()
) {
  const socialLinkDiv = document.createElement("div");
  socialLinkDiv.classList.add("social-link");
  socialLinkDiv.dataset.index = index;

  socialLinkDiv.innerHTML = `
    <label for="social-name-${index}">Name:</label>
    <input type="text" id="social-name-${index}" name="socialLinks[${index}][name]" value="${name}" required />

    <label for="social-url-${index}">URL:</label>
    <input type="url" id="social-url-${index}" name="socialLinks[${index}][url]" value="${url}" required />

    <button type="button" class="remove-social-link">Remove</button>
  `;

  // Add event listener to remove button
  socialLinkDiv
    .querySelector(".remove-social-link")
    .addEventListener("click", () => {
      container.removeChild(socialLinkDiv);
    });

  container.appendChild(socialLinkDiv);
}

document.getElementById("add-social-link").addEventListener("click", () => {
  const socialLinksContainer = document.getElementById(
    "social-links-container"
  );
  addSocialLinkField(socialLinksContainer);
});

document.getElementById("profile-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Gather form data
  const formData = new FormData(event.target);
  const profile = {
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    currentTitle: formData.get("currentTitle"),
    address: formData.get("address"),
    summary: formData.get("summary"),
    socialLinks: [],
  };

  // Gather social links
  const socialLinksContainer = document.getElementById(
    "social-links-container"
  );
  socialLinksContainer.querySelectorAll(".social-link").forEach((linkDiv) => {
    const name = linkDiv.querySelector("input[name*='[name]']").value;
    const url = linkDiv.querySelector("input[name*='[url]']").value;
    profile.socialLinks.push({ name, url });
  });

  // Send updated profile to the server
  fetch("/api/v0/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "success") {
        alert("Profile updated successfully!");
      } else {
        console.error("Error updating profile:", data);
        alert("Failed to update profile.");
      }
    })
    .catch((error) => {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    });
});

// Cache for all sections
let cachedData = {
  experience: [],
  education: [],
  projects: [],
  skills: [],
};

// Schema definitions for each section
const sectionSchemas = {
  experience: {
    required: ["title", "company"],
    optional: ["startDate", "endDate", "description", "highlights"],
  },
  education: {
    required: ["institution", "degree"],
    optional: ["startDate", "endDate"],
  },
  project: {
    required: ["title"],
    optional: ["description", "assets", "startDate", "endDate"],
  },
  skills: {
    required: ["title", "expertise"],
    optional: ["relatedEducation", "relatedExperience", "searchLabels"],
  },
};

// Load data for all sections
function loadData(section) {
  fetch(`/api/v0/${section}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "success" && Array.isArray(data[`${section}List`])) {
        cachedData[section] = data[`${section}List`]; // Cache the data
        renderSection(section, data[`${section}List`]);
      } else {
        console.error(`Invalid ${section} data:`, data);
      }
    })
    .catch((error) => {
      console.error(`Error fetching ${section} data:`, error);
    });
}

// Render a section (e.g., experience, education, projects, skills)
function renderSection(section, items) {
  const container = document.querySelector(`.${section}-container`);
  container.innerHTML = ""; // Clear existing content

  // Add "Add New" button
  const addButton = document.createElement("button");
  addButton.textContent = `Add New ${
    section.charAt(0).toUpperCase() + section.slice(1)
  }`;
  addButton.classList.add("add-item");
  addButton.addEventListener("click", () => openEditModal(section));
  container.appendChild(addButton);

  // Render existing items
  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Dynamically generate the card content based on the schema
    let cardContent = `<h3>${item.title || item.name || item.institution}</h3>`;
    [
      ...sectionSchemas[section].required,
      ...sectionSchemas[section].optional,
    ].forEach((key) => {
      if (item[key]) {
        const value = Array.isArray(item[key])
          ? item[key].join(", ") // Join arrays into a comma-separated string
          : item[key];
        cardContent += `<p><strong>${
          key.charAt(0).toUpperCase() + key.slice(1)
        }:</strong> ${value}</p>`;
      }
    });

    // Add Edit and Delete buttons
    cardContent += `
      <button class="edit-item" data-id="${item._id}" data-section="${section}">Edit</button>
      <button class="delete-item" data-id="${item._id}" data-section="${section}">Delete</button>
    `;
    card.innerHTML = cardContent;

    container.appendChild(card);
  });

  // Add event listeners to edit buttons
  document
    .querySelectorAll(`.edit-item[data-section="${section}"]`)
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemId = event.target.dataset.id;
        const section = event.target.dataset.section;
        openEditModal(section, itemId);
      });
    });

  // Add event listeners to delete buttons
  document
    .querySelectorAll(`.delete-item[data-section="${section}"]`)
    .forEach((button) => {
      button.addEventListener("click", (event) => {
        const itemId = event.target.dataset.id;
        const section = event.target.dataset.section;
        deleteItem(section, itemId);
      });
    });
}

// Open the modal dynamically (for both adding and editing)
function openEditModal(section, itemId = null) {
  const item = itemId
    ? cachedData[section].find((i) => i._id === itemId)
    : null;

  // Set the modal title
  document.getElementById("modal-title").textContent = itemId
    ? `Edit ${section}`
    : `Add New ${section}`;

  // Set the section name as a data attribute on the modal
  document.getElementById("edit-modal").setAttribute("data-section", section);

  // Populate the modal fields dynamically based on the schema
  const modalFields = document.getElementById("modal-fields");
  modalFields.innerHTML = ""; // Clear existing fields

  [
    ...sectionSchemas[section].required,
    ...sectionSchemas[section].optional,
  ].forEach((key) => {
    const value = item ? item[key] || "" : "";
    const label = document.createElement("label");
    label.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}:`;
    label.setAttribute("for", `modal-${key}`);

    const input =
      Array.isArray(value) ||
      key === "highlights" ||
      key === "assets" ||
      key === "searchLabels"
        ? document.createElement("textarea")
        : document.createElement("input");

    input.id = `modal-${key}`;
    input.name = key;
    input.value = Array.isArray(value) ? value.join(", ") : value;
    input.required = sectionSchemas[section].required.includes(key); // Only required fields are marked as required

    modalFields.appendChild(label);
    modalFields.appendChild(input);
  });

  // Set the hidden ID field
  document.getElementById("item-id").value = itemId || "";

  // Show the modal
  document.getElementById("edit-modal").classList.remove("hidden");
}

// Handle form submission for adding or editing items
document.getElementById("edit-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const section = document
    .getElementById("edit-modal")
    .getAttribute("data-section");
  const itemId = formData.get("_id");
  const updatedItem = {};

  formData.forEach((value, key) => {
    updatedItem[key] =
      key === "highlights" || key === "assets" || key === "searchLabels"
        ? value.split(",").map((v) => v.trim())
        : value;
  });

  const method = itemId ? "PATCH" : "POST"; // Use POST for adding, PUT for editing
  const endpoint = `/api/v0/${section}`;
  if (!itemId) {
    delete updatedItem._id;
  }
  // Send the updated or new item to the server
  fetch(endpoint, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "updated" || data.message === "created") {
        if (!itemId && data._id) {
          // If adding a new item, set the returned _id
          updatedItem._id = data._id;
        }
        alert(
          `${section.charAt(0).toUpperCase() + section.slice(1)} ${
            itemId ? "updated" : "added"
          } successfully!`
        );
        document.getElementById("edit-modal").classList.add("hidden");
        loadData(section); // Reload the section
      } else {
        console.error(
          `Error ${itemId ? "updating" : "adding"} ${section}:`,
          data
        );
        alert(`Failed to ${itemId ? "update" : "add"} ${section}.`);
      }
    })
    .catch((error) => {
      console.error(
        `Error ${itemId ? "updating" : "adding"} ${section}:`,
        error
      );
      alert(`Failed to ${itemId ? "update" : "add"} ${section}.`);
    });
});

// Delete an item
function deleteItem(section, itemId) {
  if (!confirm("Are you sure you want to delete this item?")) return;

  fetch(`/api/v0/${section}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: itemId }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.message === "deleted") {
        alert(
          `${
            section.charAt(0).toUpperCase() + section.slice(1)
          } deleted successfully!`
        );
        loadData(section); // Reload the section
      } else {
        console.error(`Error deleting ${section}:`, data);
        alert(`Failed to delete ${section}.`);
      }
    })
    .catch((error) => {
      console.error(`Error deleting ${section}:`, error);
      alert(`Failed to delete ${section}.`);
    });
}

// Close the modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("edit-modal").classList.add("hidden");
});

// Load all sections when the page loads
["experience", "education", "project", "skills"].forEach((section) =>
  loadData(section)
);

// Load the profile data into the form when the page loads
loadProfileForEditing();
