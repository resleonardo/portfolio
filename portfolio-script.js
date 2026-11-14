// PORTFOLIO INFORMATION(EDITABLE)
const SITE_CONFIG = {
brandName: "My Portfolio",
ownerName: "Reselean 'Res' Alijah Leonardo",
roleTitle: "Amateur Front End Developer / Student",
availability: "Open for Front-End Commissions",

bio: "I build clean, responsive, and beginner-friendly websites using HTML, CSS, and JavaScript. Whether you need a personal portfolio, a school project landing page, a multi-paged website, or a simple website layout built from scratch, I turn your ideas into structured, mobile-ready web pages.",

background: "I am an Amateur Front-End Developer and student based in Pasig City, Philippines. I focus on writing semantic HTML, responsive CSS layouts, and interactive vanilla JavaScript while building practical web projects alongside my studies.",

location: "Pasig City, Philippines",
turnaround: "3 – 7 Days per Landing Page",
email: "reselean.leonardo06@gmail.com",
facebookUrl: "https://www.facebook.com/reselean.leonardo06",
githubUrl: "https://github.com/resleonardo"
};

// SKILLS
const SKILLS_DATA = [
{
  id: "html",
  name: "HTML5",
  tag: "Structure",
  level: "90%",
  summary: "Semantic, accessible, and well-structured page architecture.",
  detailTitle: "HTML5 — Semantic & Accessible Markup",
  detailDesc: "Every website starts with clean document structure so search engines, screen readers, and browsers interpret your content reliably.",
  deliverables: [
    "Semantic sections (<header>, <main>, <section>, <footer>)",
    "Accessible navigation, links, and ARIA attributes",
    "Clean, well-commented code ready for easy editing",
    "Organized heading hierarchy and responsive meta tags"
  ]
},
{
  id: "css",
  name: "CSS3",
  tag: "Styling",
  level: "85%",
  summary: "Responsive Flexbox & Grid layouts with custom color themes.",
  detailTitle: "CSS3 — Responsive Layouts & Custom Themes",
  detailDesc: "From mobile phones to desktop monitors, I craft cohesive visual systems using CSS variables, Flexbox, and CSS Grid.",
  deliverables: [
    "Mobile-first responsive breakpoints & hamburger menus",
    "Custom CSS variable (:root) color palettes",
    "Modern CSS Grid & Flexbox card layouts",
    "Smooth hover transitions and micro-interactions"
  ]
},
{
  id: "javascript",
  name: "JavaScript",
  tag: "Interactivity",
  level: "80%",
  summary: "Dynamic DOM manipulation, event handling, and interactive UI.",
  detailTitle: "JavaScript (ES6+) — DOM & Client-Side Logic",
  detailDesc: "I bring static pages to life using pure vanilla JavaScript—handling navigation toggles, live content updates, and scroll interactions without heavy frameworks.",
  deliverables: [
    "Interactive mobile hamburger drawers & scroll-spy links",
    "Dynamic DOM rendering from structured data",
    "Interactive skill tabs & UI state toggles",
    "Smooth scroll-to-top button behavior"
  ]
}
];

// PROFILE INITIALIZATION
function loadProfileContent() {
document.getElementById("headerBrand").textContent = SITE_CONFIG.brandName;
document.getElementById("footerBrand").textContent = SITE_CONFIG.ownerName;
document.getElementById("heroName").textContent = SITE_CONFIG.ownerName;
document.getElementById("infoFullName").textContent = SITE_CONFIG.ownerName;
document.getElementById("heroRole").textContent = SITE_CONFIG.roleTitle;
document.getElementById("heroAvailability").textContent = SITE_CONFIG.availability;
document.getElementById("heroBio").textContent = SITE_CONFIG.bio;
document.getElementById("aboutBackground").textContent = SITE_CONFIG.background;
document.getElementById("heroLocation").textContent = SITE_CONFIG.location;
document.getElementById("heroTurnaround").textContent = SITE_CONFIG.turnaround;

// CONTACTS AND SOCIAL LINKS
const emailLink = document.getElementById("contactEmailLink");
emailLink.href = `mailto:${SITE_CONFIG.email}`;
document.getElementById("contactEmailDisplay").textContent = SITE_CONFIG.email;
document.getElementById("contactFacebookLink").href = SITE_CONFIG.facebookUrl;
document.getElementById("contactGithubLink").href = SITE_CONFIG.githubUrl;

document.getElementById("footerYear").textContent = new Date().getFullYear();
}

// HAMBURGER AND NAVIGATION
function setupNavigation() {
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id], footer[id]");

// Toggle mobile menu on hamburger click
hamburgerBtn.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  hamburgerBtn.classList.toggle("open", isOpen);
  hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close mobile menu when any link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  });
});

// Close mobile menu on Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu.classList.contains("open")) {
    navMenu.classList.remove("open");
    hamburgerBtn.classList.remove("open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  }
});

// Highlight active section link on scroll
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 140;

  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    }
  });
});
}

//SKILLS INTERACTION
function setupSkillsSection() {
const skillsGrid = document.getElementById("skillsGrid");
const detailTitle = document.getElementById("skillDetailTitle");
const detailDesc = document.getElementById("skillDetailDesc");
const detailDeliverables = document.getElementById("skillDetailDeliverables");

function renderSkillDetail(skill) {
  detailTitle.textContent = skill.detailTitle;
  detailDesc.textContent = skill.detailDesc;
  detailDeliverables.innerHTML = "";

  skill.deliverables.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    detailDeliverables.appendChild(li);
  });
}

SKILLS_DATA.forEach((skill, index) => {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `skill-card${index === 0 ? " active" : ""}`;
  card.setAttribute("role", "tab");
  card.setAttribute("aria-selected", index === 0 ? "true" : "false");

  card.innerHTML = `
    <div class="skill-top">
      <span class="skill-tag">${skill.tag}</span>
      <span class="skill-level">${skill.level}</span>
    </div>
    <h3>${skill.name}</h3>
    <p>${skill.summary}</p>
    <div class="progress-track">
      <div class="progress-fill" style="width: ${skill.level};"></div>
    </div>
  `;

  card.addEventListener("click", () => {
    document.querySelectorAll(".skill-card").forEach((c) => {
      c.classList.remove("active");
      c.setAttribute("aria-selected", "false");
    });
    card.classList.add("active");
    card.setAttribute("aria-selected", "true");
    renderSkillDetail(skill);
  });

  skillsGrid.appendChild(card);
});

// Load initial skill detail
renderSkillDetail(SKILLS_DATA[0]);
}

//BACK TO TOP BUTTON
function setupBackToTop() {
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
}

//RUN EVERYTHING
document.addEventListener("DOMContentLoaded", () => {
loadProfileContent();
setupNavigation();
setupSkillsSection();
setupBackToTop();
});