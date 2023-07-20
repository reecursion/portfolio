const projects = [{
        title: "paintApp",
        description: "A Simple Java Paint Application coded on NetBeans IDE, making use of Scene Builder to create the GUI.",
        tags: ["Java", "NetBeans"],
        picture: "paintapp.png",
        link: "https://github.com/reecursion/paintApp"
    },
    {
        title: "HAART: E-Commerce for underrepresented artisans",
        description: "End Semester Project done as a part of the Course work for Mini Project Lab and Internet Programming Lab",
        tags: ["ReactJS", "NodeJS", "HTML", "CSS"],
        picture: "profile_pic.jpeg",
    },
    {
        title: "MegaBytes",
        description: "Working Frontend prototype for the E-Commerce platform designed for D2C Design Heist",
        tags: ["HTML", "CSS"],
        picture: "megabytes.png",
        link: "https://github.com/reecursion/MegaBytes"
    },
    {
        title: "Hospital Database Management",
        description: "A Hospital database to store and manipulate patient's records and their blood test details.",
        tags: ["C++"],
        picture: "profile_pic.jpeg",
        link: "https://github.com/reecursion/Hospital-Database-Management"
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
            const projectButtons = document.createElement("div");
            projectButtons.classList.add("project-buttons");
            projectButtons.appendChild(learnMoreBtn);
            projectDetails.appendChild(projectButtons);
        }

        projectContainer.appendChild(projectCard);

    });
}

renderProjects();