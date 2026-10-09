const resources = [
  {
    title: "Computer Science Syllabus",
    type: "syllabus",
    department: "Computer Science",
    description: "Semester-wise course structure covering programming, DBMS, OS, and web development modules.",
    info: "6th Semester",
    link: "#"
  },
  {
    title: "Engineering Mathematics Notes",
    type: "notes",
    department: "General",
    description: "Short and well-structured notes for calculus, probability, matrices, and differential equations.",
    info: "120 pages",
    link: "#"
  },
  {
    title: "Previous Year Operating Systems Papers",
    type: "papers",
    department: "Computer Science",
    description: "Practice with past exams to understand question patterns, difficulty level, and key topics.",
    info: "10 papers",
    link: "#"
  },
  {
    title: "Electronics Circuit Design Syllabus",
    type: "syllabus",
    department: "Electronics",
    description: "Detailed academic plan for analog electronics, digital logic, and communication topics.",
    info: "5th Semester",
    link: "#"
  },
  {
    title: "Thermodynamics Revision Notes",
    type: "notes",
    department: "Mechanical",
    description: "Clear revision points covering laws of thermodynamics, work transfer, and efficiency calculations.",
    info: "85 pages",
    link: "#"
  },
  {
    title: "Civil Engineering Final Exam Papers",
    type: "papers",
    department: "Civil",
    description: "Sample solutions and question sets based on previous university examinations for quick prep.",
    info: "12 papers",
    link: "#"
  },
  {
    title: "DBMS Notes and Lab Files",
    type: "notes",
    department: "Computer Science",
    description: "Concise notes with key concepts, normal forms, SQL commands, and common interview questions.",
    info: "90 pages",
    link: "#"
  },
  {
    title: "Communication Systems Question Bank",
    type: "papers",
    department: "Electronics",
    description: "Practice important questions designed from previous semesters and model exam patterns.",
    info: "8 sets",
    link: "#"
  },
  {
    title: "Mechanical Workshop Syllabus",
    type: "syllabus",
    department: "Mechanical",
    description: "Course outline covering machining, measuring tools, material testing, and workshop practices.",
    info: "3rd Semester",
    link: "#"
  }
];

const resourceGrid = document.getElementById("resource-grid");
const filterButtons = document.querySelectorAll(".filter-btn");

function getTagClass(type) {
  if (type === "syllabus") return "tag-syllabus";
  if (type === "notes") return "tag-notes";
  return "tag-papers";
}

function renderResources(filter = "all") {
  const filteredResources =
    filter === "all"
      ? resources
      : resources.filter((resource) => resource.type === filter);

  resourceGrid.innerHTML = filteredResources
    .map(
      (resource) => `
        <article class="resource-card">
          <div class="card-top">
            <span class="resource-tag ${getTagClass(resource.type)}">${resource.type}</span>
            <span class="resource-department">${resource.department}</span>
          </div>
          <h3>${resource.title}</h3>
          <p>${resource.description}</p>
          <div class="resource-meta">
            <span>${resource.info}</span>
            <a href="${resource.link}">View</a>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderResources(button.dataset.filter);
  });
});

renderResources();

































