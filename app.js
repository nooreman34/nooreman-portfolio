/**
 * Noor Eman Portfolio Website - Interactive Script
 * Handles custom cursor, navigation effects, modals, and dynamic project details loading.
 */

// Project Gallery Database
const projectData = [
  {
    id: "exazar",
    title: "Exazar",
    category: "Jewelry Brand Visuals",
    description: "Premium jewelry campaign visuals, brand storytelling graphics, and luxury social media designs.",
    role: "Graphic Design, Branding, Visual Design, Website Graphics",
    tools: ["Photoshop", "Illustrator", "Canva", "AI Visual Direction"],
    gallery: [
      "./A Legacy Reawaken.png",
      "./A Silent Promise.png",
      "./Beyond ordinary.png",
      "./More Than Jewelry.png",
      "./The Unseen Path.png",
      "./Where Elegance hides.png"
    ]
  },
  {
    id: "nabz",
    title: "NABZ",
    category: "Blood Donation App Campaign",
    description: "Blood donation and emergency response awareness visuals with clean healthcare-focused design.",
    role: "Social Media Design, Campaign Design, Awareness Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    gallery: [
      "./project-images/nabz/blood.png",
      "./project-images/nabz/click.png",
      "./project-images/nabz/donor.png",
      "./project-images/nabz/minute.png",
      "./project-images/nabz/rawalpindi.png",
      "./project-images/nabz/someone.png"
    ]
  },
  {
    id: "energiko",
    title: "Energiko",
    category: "Solar Energy Brand Creatives",
    description: "Solar inverter and energy solution campaign visuals with clean green technology branding.",
    role: "Social Media Design, Product Campaign Design, Brand Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    gallery: [
      "./project-images/energiko/post 2.png",
      "./project-images/energiko/post 3.png",
      "./project-images/energiko/post 4.png",
      "./project-images/energiko/post 5.png",
      "./project-images/energiko/post 7.png",
      "./project-images/energiko/post 9.png",
      "./project-images/energiko/post 10.png"
    ]
  },
  {
    id: "maria",
    title: "Maria Legal & Corporate Solutions",
    category: "Legal & Corporate Branding",
    description: "Professional legal service graphics, corporate visual identity, and premium social media designs.",
    role: "Corporate Branding, Social Media Design, Legal Service Visuals",
    tools: ["Photoshop", "Illustrator", "Canva"],
    gallery: [
      "./maria-legal.jpg",
      "./maria post 1 insta-13.jpg",
      "./maria-post-3-insta-13.jpg",
      "./maria-post-6-insta.jpg",
      "./maria-post-8-insta.jpg",
      "./maria-post-10-insta.jpg",
      "./maria-post-12-insta.jpg"
    ]
  },
  {
    id: "ournex",
    title: "Ournex",
    category: "Skincare Product Campaign",
    description: "Beauty and skincare product visuals designed with soft premium product-focused branding.",
    role: "Product Design, Social Media Design, Beauty Campaign Visuals",
    tools: ["Photoshop", "Canva", "AI Product Visuals"],
    gallery: [
      "./project-images/ournex/advanced.png",
      "./project-images/ournex/aging.png",
      "./project-images/ournex/dull.png",
      "./project-images/ournex/good.png",
      "./project-images/ournex/skincare.png",
      "./project-images/ournex/targeted.png",
      "./project-images/ournex/time.png"
    ]
  },
  {
    id: "wirasat",
    title: "Wirasat",
    category: "Real Estate & Lifestyle Campaigns",
    description: "Real estate, resort, expo, and tourism promotional visuals with strong campaign presentation.",
    role: "Real Estate Campaign Design, Social Media Design, Promotional Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    gallery: [
      "./wirasat.jpg",
      "./WIRASAT sialkot event post 1.jpg",
      "./wirasat post 3.jpg",
      "./wirasat post-05.jpg",
      "./wirasat post-10.jpg",
      "./wirasat post-13.jpg",
      "./wirasat post-14.jpg",
      "./wirasat post-16.jpg",
      "./wirasat post-17.jpg",
      "./wirasat post-21.jpg",
      "./wirasat post-8.jpg",
      "./youth international day post.jpg"
    ]
  },
  {
    id: "zerodust",
    title: "ZeroDust",
    category: "Cleaning Services Company Profile",
    description: "Company profile, service presentation, and professional cleaning brand visual design.",
    role: "Company Profile Design, Brand Presentation, Service Visuals",
    tools: ["Photoshop", "Canva", "Presentation Design"],
    gallery: [
      "./zerodust.jpg",
      "./company profile-01.jpg",
      "./company profile-02.jpg",
      "./company profile-03.jpg",
      "./company profile-04.jpg",
      "./company profile-05.jpg",
      "./company profile-06.jpg",
      "./company profile-07.jpg",
      "./company profile-08.jpg",
      "./company profile-09.jpg",
      "./mockup.png"
    ]
  }
];

function initApp() {
  // --- CUSTOM CURSOR ---
  const cursorDot = document.querySelector(".custom-cursor");
  const cursorGlow = document.querySelector(".custom-cursor-glow");

  if (cursorDot && cursorGlow) {
    document.addEventListener("mousemove", (e) => {
      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;

      // Delay glow follow effect
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });

    // Add hover triggers
    const hoverables = document.querySelectorAll("a, button, .project-card, .hero-media-card, .modal-close-btn");
    hoverables.forEach(item => {
      item.addEventListener("mouseenter", () => {
        cursorDot.style.width = "12px";
        cursorDot.style.height = "12px";
        cursorDot.style.backgroundColor = "var(--accent-red)";

        cursorGlow.style.width = "60px";
        cursorGlow.style.height = "60px";
        cursorGlow.style.backgroundColor = "rgba(230, 0, 37, 0.25)";
        cursorGlow.style.borderColor = "rgba(230, 0, 37, 0.8)";
      });
      item.addEventListener("mouseleave", () => {
        cursorDot.style.width = "8px";
        cursorDot.style.height = "8px";
        cursorDot.style.backgroundColor = "var(--text-white)";

        cursorGlow.style.width = "40px";
        cursorGlow.style.height = "40px";
        cursorGlow.style.backgroundColor = "rgba(192, 0, 104, 0.15)";
        cursorGlow.style.borderColor = "rgba(192, 0, 104, 0.4)";
      });
    });
  }

  // --- HEADER SCROLL EFFECT ---
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- MOBILE NAV TOGGLE ---
  const navToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-links a");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    navItems.forEach(item => {
      item.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  // --- ACTIVE NAV LINK SCROLL TRACKING ---
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("href") === `#${current}`) {
        item.classList.add("active");
      }
    });
  });

  // --- SCROLL REVEAL ANIMATIONS ---
  // Apply staggered animation delays to cards dynamically
  document.querySelectorAll(".skills-grid, .services-grid, .projects-grid, .about-cards-grid, .contact-grid").forEach((grid) => {
    const cards = grid.querySelectorAll(".skill-card, .service-card, .project-card, .about-sub-card, .contact-item");
    cards.forEach((card, index) => {
      card.classList.add("reveal");
      card.style.transitionDelay = `${index * 120}ms`;
    });
  });

  const revealElements = document.querySelectorAll(".reveal, .reveal-scale");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- HERO BACKGROUND VIDEO SCROLL OBSERVATION ---
  const heroVideo = document.getElementById("heroVideo");
  const heroSection = document.querySelector(".hero");
  const enableSoundBtn = document.getElementById("enable-sound-btn");
  let soundEnabled = false;

  if (heroVideo) {
    // Attempt unmuted play first, fallback to muted if blocked
    heroVideo.muted = false;
    heroVideo.volume = 1;
    heroVideo.play()
      .then(() => {
        soundEnabled = true;
        if (enableSoundBtn) enableSoundBtn.classList.add("hidden");
      })
      .catch(() => {
        // Fallback to muted autoplay
        heroVideo.muted = true;
        heroVideo.volume = 0;
        heroVideo.play().catch(() => { });
      });

    // Option A: Enable sound button listener
    if (enableSoundBtn) {
      enableSoundBtn.addEventListener("click", () => {
        heroVideo.muted = false;
        heroVideo.volume = 1;
        heroVideo.play()
          .then(() => {
            soundEnabled = true;
            enableSoundBtn.classList.add("hidden");
          })
          .catch((err) => {
            console.error("Audio playback failed on user click:", err);
            // Fallback: keep button visible
            heroVideo.muted = true;
            heroVideo.volume = 0;
            heroVideo.play().catch(() => { });
          });
      });
    }

    if (heroSection) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.40) {
              if (soundEnabled) {
                heroVideo.muted = false;
                heroVideo.volume = 1;
              } else {
                heroVideo.muted = true;
                heroVideo.volume = 0;
              }
              heroVideo.play().catch(() => { });
            } else {
              heroVideo.pause();
            }
          });
        },
        { threshold: [0, 0.40] }
      );
      videoObserver.observe(heroSection);
    }

    // Tab visibility change events
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        heroVideo.pause();
      } else {
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          const isVisible = (rect.top < window.innerHeight && rect.bottom > 0);
          if (isVisible) {
            if (soundEnabled) {
              heroVideo.muted = false;
              heroVideo.volume = 1;
            } else {
              heroVideo.muted = true;
              heroVideo.volume = 0;
            }
            heroVideo.play().catch(() => { });
          }
        }
      }
    });
  }

  // --- PROJECT DETAIL MODAL ---
  const projectModal = document.getElementById("project-modal");
  const projectCloseBtn = projectModal ? projectModal.querySelector(".modal-close-btn") : null;

  function openProjectModal(projectId) {
    const project = projectData.find(item => item.id === projectId);
    if (!project) {
      console.warn(`Project not found for ID: ${projectId}`);
      return;
    }
    if (!projectModal) return;

    // Populate modal fields
    projectModal.querySelector(".project-detail-cat").textContent = project.category;
    projectModal.querySelector(".project-detail-title").textContent = project.title;
    projectModal.querySelector(".project-detail-desc").textContent = project.description;
    projectModal.querySelector(".project-detail-role").textContent = project.role;

    // Behance button link
    const behanceBtn = projectModal.querySelector(".modal-behance-btn");
    if (behanceBtn) {
      behanceBtn.href = project.behanceUrl || "https://www.behance.net/nooreman543";
    }

    // Tools list
    const toolsContainer = projectModal.querySelector(".project-detail-tools");
    if (toolsContainer) {
      toolsContainer.innerHTML = "";
      project.tools.forEach(tool => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = tool;
        toolsContainer.appendChild(tag);
      });
    }

    // Gallery images
    const galleryContainer = projectModal.querySelector(".project-detail-gallery");
    if (galleryContainer) {
      galleryContainer.innerHTML = "";
      project.gallery.forEach(imgSrc => {
        const galleryItem = document.createElement("div");
        galleryItem.className = "gallery-item";

        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = `${project.title} campaign screen`;
        img.loading = "lazy";

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
      });
    }

    // Activate modal
    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  }

  // Bind click event to "View Case Study" buttons
  const projectButtons = document.querySelectorAll(".project-view-btn");
  projectButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling up to the card if there's any other handler
      const projectId = button.dataset.project || button.getAttribute("data-project");
      openProjectModal(projectId);
    });
  });

  // Also allow clicking the project card to open it using the button's data-project
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const button = card.querySelector(".project-view-btn");
      if (button) {
        const projectId = button.dataset.project || button.getAttribute("data-project");
        openProjectModal(projectId);
      }
    });
  });

  if (projectCloseBtn) projectCloseBtn.addEventListener("click", closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // --- KEYBOARD ACCESSIBILITY (ESC key to close modals) ---
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
/* =========================================================
   FINAL FORCE FIX - PROJECT CASE STUDY MODAL
   This intercepts project clicks before old mixed logic runs.
   ========================================================= */

const finalProjectData = [
  {
    id: "exazar",
    title: "Exazar",
    category: "Jewelry Brand Visuals",
    description: "Premium jewelry campaign visuals, brand storytelling graphics, and luxury social media designs. This campaign visualizes timeless elegance, matching high-end jewelry with dark cinematic luxury accents.",
    role: "Graphic Design, Branding, Visual Design, Website Graphics",
    tools: ["Photoshop", "Illustrator", "Canva", "AI Visual Direction"],
    gallery: [
      "./A Legacy Reawaken.png",
      "./A Silent Promise.png",
      "./Beyond ordinary.png",
      "./More Than Jewelry.png",
      "./The Unseen Path.png",
      "./Where Elegance hides.png"
    ]
  },
  {
    id: "nabz",
    title: "NABZ",
    category: "Blood Donation App Campaign",
    description: "Blood donation and emergency response awareness visuals with clean healthcare-focused design, urgency-based messaging, and social impact presentation.",
    role: "Social Media Design, Campaign Design, Awareness Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    gallery: [
      "./nabz.jpg",
      "./post 1.png",
      "./post 2.png",
      "./post 3.png",
      "./post 4.png",
      "./post 5.png",
      "./post 6.png",
      "./post7.png"
    ]
  },
  {
    id: "energiko",
    title: "Energiko",
    category: "Solar Energy Brand Creatives",
    description: "Solar inverter and energy solution campaign visuals with clean green technology branding, product-focused layouts, and energy-saving communication.",
    role: "Social Media Design, Product Campaign Design, Brand Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    gallery: [
      "./energiko.jpg",
      "./energiko-thumbnail.png",
      "./post 11.png",
      "./post 14.png"
    ]
  },
  {
    id: "maria",
    title: "Maria Legal & Corporate Solutions",
    category: "Legal & Corporate Branding",
    description: "Professional legal service graphics, corporate visual identity, and premium social media designs for business, legal, and compliance communication.",
    role: "Corporate Branding, Social Media Design, Legal Service Visuals",
    tools: ["Photoshop", "Illustrator", "Canva"],
    gallery: [
      "./maria-legal.jpg",
      "./maria post 1 insta-13.jpg",
      "./maria-post-3-insta-13.jpg",
      "./maria-post-6-insta.jpg",
      "./maria-post-8-insta.jpg",
      "./maria-post-10-insta.jpg",
      "./maria-post-12-insta.jpg"
    ]
  },
  {
    id: "ournex",
    title: "Ournex",
    category: "Skincare Product Campaign",
    description: "Beauty and skincare product visuals designed with soft premium product-focused branding, clean product presentation, and feminine luxury styling.",
    role: "Product Design, Social Media Design, Beauty Campaign Visuals",
    tools: ["Photoshop", "Canva", "AI Product Visuals"],
    gallery: [
      "./ournex.jpg",
      "./Orunex thumbnail.png"
    ]
  },
  {
    id: "wirasat",
    title: "Wirasat",
    category: "Real Estate & Lifestyle Campaigns",
    description: "Real estate, resort, expo, and tourism promotional visuals with strong campaign presentation, premium location-based storytelling, and lifestyle-focused design.",
    role: "Real Estate Campaign Design, Social Media Design, Promotional Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    gallery: [
      "./wirasat.jpg",
      "./WIRASAT sialkot event post 1.jpg",
      "./wirasat post 3.jpg",
      "./wirasat post-05.jpg",
      "./wirasat post-10.jpg",
      "./wirasat post-13.jpg",
      "./wirasat post-14.jpg",
      "./wirasat post-16.jpg",
      "./wirasat post-17.jpg",
      "./wirasat post-21.jpg",
      "./wirasat post-8.jpg",
      "./youth international day post.jpg"
    ]
  },
  {
    id: "zerodust",
    title: "ZeroDust",
    category: "Cleaning Services Company Profile",
    description: "Company profile, service presentation, and professional cleaning brand visual design with a clean blue-green corporate identity.",
    role: "Company Profile Design, Brand Presentation, Service Visuals",
    tools: ["Photoshop", "Canva", "Presentation Design"],
    gallery: [
      "./zerodust.jpg",
      "./company profile-01.jpg",
      "./company profile-02.jpg",
      "./company profile-03.jpg",
      "./company profile-04.jpg",
      "./company profile-05.jpg",
      "./company profile-06.jpg",
      "./company profile-07.jpg",
      "./company profile-08.jpg",
      "./company profile-09.jpg",
      "./mockup.png"
    ]
  }
];

function openFinalProjectModal(projectId) {
  const project = finalProjectData.find(item => item.id === projectId);

  if (!project) {
    console.warn("Project not found:", projectId);
    return;
  }

  let modal = document.querySelector("#projectModal") || document.querySelector(".project-modal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "projectModal";
    modal.className = "project-modal";
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="project-modal-overlay"></div>

    <div class="project-modal-content">
      <button class="project-modal-close" type="button" aria-label="Close Project">×</button>

      <div class="project-modal-layout">
        <div class="project-modal-info">
          <p class="project-modal-category">${project.category}</p>
          <h2 class="project-modal-title">${project.title}</h2>
          <p class="project-modal-description">${project.description}</p>

          <div class="project-modal-meta">
            <div>
              <h4>Role</h4>
              <p>${project.role}</p>
            </div>

            <div>
              <h4>Tools</h4>
              <div class="project-modal-tools">
                ${project.tools.map(tool => `<span>${tool}</span>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="project-modal-gallery">
          ${project.gallery.map((image, index) => `
            <img src="${image}" alt="${project.title} project image ${index + 1}" loading="lazy">
          `).join("")}
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".project-modal-close");
  const overlay = modal.querySelector(".project-modal-overlay");

  function closeFinalProjectModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }

  closeBtn.addEventListener("click", closeFinalProjectModal);
  overlay.addEventListener("click", closeFinalProjectModal);
}

/* Capture phase: stops old mixed modal click code before it runs */
document.addEventListener(
  "click",
  function (event) {
    const button = event.target.closest("[data-project]");

    if (!button) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const projectId = button.getAttribute("data-project");
    openFinalProjectModal(projectId);
  },
  true
);