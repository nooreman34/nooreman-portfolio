/**
 * Noor Eman Portfolio Website - Interactive Script
 * Handles custom cursor, navigation effects, modals, and dynamic project details loading.
 */

// Project Gallery Database
const PROJECTS_DATA = {
  exazar: {
    title: "Exazar",
    category: "Jewelry Brand Visuals",
    role: "Graphic Design, Branding, Visual Design, Website Graphics",
    tools: ["Photoshop", "Illustrator", "Canva", "AI Visual Direction"],
    description: "Premium jewelry campaign visuals, brand storytelling graphics, and luxury social media designs.",
    thumbnail: "exazar-thumbnail.png",
    images: [
      "./A Legacy Reawaken.png",
      "./A Silent Promise.png",
      "./Beyond ordinary.png",
      "./More Than Jewelry.png",
      "./The Unseen Path.png",
      "./Where Elegance hides.png"
    ]
  },
  nabz: {
    title: "NABZ",
    category: "Blood Donation App Campaign",
    role: "Social Media Design, Campaign Design, Awareness Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    description: "Blood donation and emergency response awareness visuals with clean healthcare-focused design.",
    thumbnail: "nabz-thumbnail.png",
    images: [
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
  energiko: {
    title: "Energiko",
    category: "Solar Energy Brand Creatives",
    role: "Social Media Design, Product Campaign Design, Brand Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    description: "Solar inverter and energy solution campaign visuals with clean green technology branding.",
    thumbnail: "energiko-thumbnail.png",
    images: [
      "./energiko.jpg",
      "./post 11.png",
      "./post 14.png",
      "./energiko-thumbnail.png"
    ]
  },
  maria: {
    title: "Maria Legal & Corporate Solutions",
    category: "Legal & Corporate Branding",
    role: "Corporate Branding, Social Media Design, Legal Service Visuals",
    tools: ["Photoshop", "Illustrator", "Canva"],
    description: "Professional legal service graphics, corporate visual identity, and premium social media designs.",
    thumbnail: "maria-legal-thumbnail.png",
    images: [
      "./maria-legal.jpg",
      "./maria post 1 insta-13.jpg",
      "./maria-post-3-insta-13.jpg",
      "./maria-post-4-instajpg",
      "./maria-post-6-insta.jpg",
      "./maria-post-8-insta.jpg",
      "./maria-post-10-insta.jpg",
      "./maria-post-12-insta.jpg"
    ]
  },
  ournex: {
    title: "Ournex",
    category: "Skincare Product Campaign",
    role: "Product Design, Social Media Design, Beauty Campaign Visuals",
    tools: ["Photoshop", "Canva", "AI Product Visuals"],
    description: "Beauty and skincare product visuals designed with soft premium product-focused branding.",
    thumbnail: "Orunex thumbnail.png",
    images: [
      "./ournex.jpg",
      "./Orunex thumbnail.png"
    ]
  },
  wirasat: {
    title: "Wirasat",
    category: "Real Estate & Lifestyle Campaigns",
    role: "Real Estate Campaign Design, Social Media Design, Promotional Visuals",
    tools: ["Photoshop", "Canva", "AI Visual Direction"],
    description: "Real estate, resort, expo, and tourism promotional visuals with strong campaign presentation.",
    thumbnail: "wirasat thumbnail.png",
    images: [
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
  zerodust: {
    title: "ZeroDust",
    category: "Cleaning Services Company Profile",
    role: "Company Profile Design, Brand Presentation, Service Visuals",
    tools: ["Photoshop", "Canva", "Presentation Design"],
    description: "Company profile, service presentation, and professional cleaning brand visual design.",
    thumbnail: "zerodust thumbnail.png",
    images: [
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
};

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
        heroVideo.play().catch(() => {});
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
            heroVideo.play().catch(() => {});
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
              heroVideo.play().catch(() => {});
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
            heroVideo.play().catch(() => {});
          }
        }
      }
    });
  }

  // --- PROJECT DETAIL MODAL ---
  const projectCards = document.querySelectorAll(".project-card");
  const projectModal = document.getElementById("project-modal");
  const projectCloseBtn = projectModal ? projectModal.querySelector(".modal-close-btn") : null;

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data || !projectModal) return;

    // Populate modal fields
    projectModal.querySelector(".project-detail-cat").textContent = data.category;
    projectModal.querySelector(".project-detail-title").textContent = data.title;
    projectModal.querySelector(".project-detail-desc").textContent = data.description;
    projectModal.querySelector(".project-detail-role").textContent = data.role;
    
    // Behance button link
    const behanceBtn = projectModal.querySelector(".modal-behance-btn");
    if (behanceBtn) {
      behanceBtn.href = data.behanceUrl || "https://www.behance.net/nooreman543";
    }
    
    // Tools list
    const toolsContainer = projectModal.querySelector(".project-detail-tools");
    toolsContainer.innerHTML = "";
    data.tools.forEach(tool => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = tool;
      toolsContainer.appendChild(tag);
    });

    // Gallery images
    const galleryContainer = projectModal.querySelector(".project-detail-gallery");
    galleryContainer.innerHTML = "";
    data.images.forEach(imgSrc => {
      const galleryItem = document.createElement("div");
      galleryItem.className = "gallery-item";
      
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = `${data.title} campaign screen`;
      img.loading = "lazy";
      
      galleryItem.appendChild(img);
      galleryContainer.appendChild(galleryItem);
    });

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

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openProjectModal(id);
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
