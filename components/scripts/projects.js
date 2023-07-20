const projects = [{
        title: "Project 1",
        description: "Description 1",
        tags: ["skill1", "skill2"],
        picture: "profile_pic.jpeg",
        link: "link.com"
    },
    {
        title: "Project 1",
        description: "Description 1",
        tags: ["skill1", "skill2"],
        picture: "profile_pic.jpeg",
    }
];

function renderProjects() {
    console.log("main");
    const projectsContainer = document.getElementById("projectContainer");
    projects.forEach((project) => {
        console.log(project.title);
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        const image = document.createElement("img");
        image.src = `components/assets/${project.picture}`;
        image.alt = `${project.title}`;

        const projectDetails = document.createElement("div");
        projectDetails.classList.add("project-details");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const tagsContainer = document.createElement("div");
        tagsContainer.classList.add("project-tags");

        project.tags.forEach((tag) => {
            const tagElement = document.createElement("span");
            tagElement.textContent = tag;
            tagsContainer.appendChild(tagElement);
        });

        projectDetails.appendChild(title);
        projectDetails.appendChild(description);
        projectDetails.appendChild(tagsContainer);

        projectCard.appendChild(image);
        projectCard.appendChild(projectDetails);

        if (project.link) {
            const learnMoreBtn = document.createElement("button");
            learnMoreBtn.classList.add("button-view");
            learnMoreBtn.textContent = "Github";
            learnMoreBtn.href = project.link;
            projectDetails.appendChild(learnMoreBtn);
        }

        projectContainer.appendChild(projectCard);

    });
}

renderProjects();