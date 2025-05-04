document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements - General UI
  const loader = document.querySelector(".loader");
  const appContainer = document.querySelector(".app-container");
  const themeToggle = document.getElementById("theme-toggle");
  const toast = document.getElementById("toast");
  const toastTitle = document.querySelector(".toast-title");
  const toastText = document.querySelector(".toast-text");
  const toastClose = document.querySelector(".toast-close");
  const onboardingOverlay = document.getElementById("onboarding-overlay");
  const closeOnboarding = document.querySelector(".close-onboarding");
  const onboardingSteps = document.querySelectorAll(".onboarding-step");
  const onboardingPrev = document.getElementById("onboarding-prev");
  const onboardingNext = document.getElementById("onboarding-next");
  const onboardingFinish = document.getElementById("onboarding-finish");

  // Sidebar Elements
  const sidebar = document.getElementById("sidebar");
  const mobileSidebarToggle = document.getElementById("mobile-sidebar-toggle");
  const mobileSidebarOpen = document.getElementById("mobile-sidebar-open");
  const sectionItems = document.querySelectorAll(".section-item");
  const templateCards = document.querySelectorAll(".template-card");
  const carouselBtns = document.querySelectorAll(".carousel-btn");
  const colorSwatches = document.querySelectorAll(".color-swatch");
  const customColor = document.getElementById("custom-color");
  const fontSelector = document.getElementById("font-selector");
  const fontSizeSlider = document.getElementById("font-size");
  const fontSizeValue = document.getElementById("font-size-value");
  const spacingSlider = document.getElementById("spacing");
  const spacingValue = document.getElementById("spacing-value");

  // Editor Elements
  const editorSections = document.querySelectorAll(".editor-section");
  const currentSectionTitle = document.getElementById("current-section-title");
  const prevSectionBtn = document.getElementById("prev-section");
  const nextSectionBtn = document.getElementById("next-section");

  // AI Tool Elements
  const aiAnalyzeBtn = document.getElementById("ai-analyze-btn");
  const aiImproveBtn = document.getElementById("ai-improve-btn");
  const aiKeywordsBtn = document.getElementById("ai-keywords-btn");
  const aiLoadingOverlay = document.getElementById("ai-loading-overlay");
  const aiAnalysisModal = document.getElementById("ai-analysis-modal");
  const aiSuggestionsModal = document.getElementById("ai-suggestions-modal");
  const aiTabs = document.querySelectorAll(".ai-tab");
  const aiTabContents = document.querySelectorAll(".ai-tab-content");
  const useSuggestionBtns = document.querySelectorAll(".use-suggestion");
  const generateCustomBtn = document.getElementById("generate-custom");
  const customPrompt = document.getElementById("custom-prompt");

  // Preview Elements
  const previewContainer = document.querySelector(".preview-container");
  const previewToggle = document.getElementById("preview-toggle");
  const refreshPreview = document.getElementById("refresh-preview");
  const resumePreview = document.getElementById("resume-preview");

  // Form Elements - Personal
  const fullnameInput = document.getElementById("fullname");
  const jobTitleInput = document.getElementById("job-title");
  const locationInput = document.getElementById("location");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const websiteInput = document.getElementById("website");
  const linkedinInput = document.getElementById("linkedin");
  const addSocialLinkBtn = document.getElementById("add-social-link");
  const socialLinksContainer = document.getElementById(
    "social-links-container"
  );

  // Form Elements - Summary
  const summaryInput = document.getElementById("summary");
  const summaryCharCount = document.getElementById("summary-char-count");
  const aiSummarySuggest = document.getElementById("ai-summary-suggest");

  // Form Elements - Experience
  const addFirstExperienceBtn = document.getElementById("add-first-experience");
  const addExperienceBtn = document.getElementById("add-experience");
  const experienceItems = document.getElementById("experience-items");
  const experienceEmptyState = document.getElementById(
    "experience-empty-state"
  );
  const experienceActions = document.getElementById("experience-actions");
  const experienceModal = document.getElementById("experience-modal");

  // Form Elements - Education
  const addFirstEducationBtn = document.getElementById("add-first-education");
  const addEducationBtn = document.getElementById("add-education");
  const educationItems = document.getElementById("education-items");
  const educationEmptyState = document.getElementById("education-empty-state");
  const educationActions = document.getElementById("education-actions");

  // Form Elements - Skills
  const skillsInput = document.getElementById("skills-input");
  const addSkillBtn = document.getElementById("add-skill-btn");
  const skillsChips = document.getElementById("skills-chips");
  const skillSuggestionsList = document.getElementById(
    "skill-suggestions-list"
  );
  const refreshSuggestions = document.getElementById("refresh-suggestions");
  const showSkillLevels = document.getElementById("show-skill-levels");
  const skillLevelsContainer = document.getElementById(
    "skill-levels-container"
  );

  // Form Elements - Projects
  const addFirstProjectBtn = document.getElementById("add-first-project");
  const addProjectBtn = document.getElementById("add-project");
  const projectItems = document.getElementById("project-items");
  const projectsEmptyState = document.getElementById("projects-empty-state");
  const projectsActions = document.getElementById("projects-actions");

  // Form Elements - Languages
  const addFirstLanguageBtn = document.getElementById("add-first-language");
  const addLanguageBtn = document.getElementById("add-language");
  const languageItems = document.getElementById("language-items");
  const languagesEmptyState = document.getElementById("languages-empty-state");
  const languagesActions = document.getElementById("languages-actions");

  // Form Elements - Certifications
  const addFirstCertificationBtn = document.getElementById(
    "add-first-certification"
  );
  const addCertificationBtn = document.getElementById("add-certification");
  const certificationItems = document.getElementById("certification-items");
  const certificationsEmptyState = document.getElementById(
    "certifications-empty-state"
  );
  const certificationsActions = document.getElementById(
    "certifications-actions"
  );

  // Form Elements - Interests
  const interestsInput = document.getElementById("interests-input");
  const addInterestBtn = document.getElementById("add-interest-btn");
  const interestsChips = document.getElementById("interests-chips");
  const showInterests = document.getElementById("show-interests");

  // Form Elements - References
  const showReferences = document.getElementById("show-references");
  const referenceOptions = document.querySelectorAll(".reference-option");
  const referencesContainer = document.getElementById("references-container");
  const addFirstReferenceBtn = document.getElementById("add-first-reference");
  const addReferenceBtn = document.getElementById("add-reference");
  const referenceItems = document.getElementById("reference-items");
  const referencesEmptyState = document.getElementById(
    "references-empty-state"
  );

  // Save and Export Elements
  const saveBtn = document.getElementById("save-btn");
  const exportBtn = document.getElementById("export-btn");
  const downloadPdfBtn = document.getElementById("download-pdf-btn");
  const downloadDocxBtn = document.getElementById("download-docx-btn");
  const downloadTxtBtn = document.getElementById("download-txt-btn");
  const printBtn = document.getElementById("print-btn");
  const saveModal = document.getElementById("save-modal");
  const resumeNameInput = document.getElementById("resume-name");
  const resumeDescriptionInput = document.getElementById("resume-description");
  const confirmSaveBtn = document.getElementById("confirm-save");

  // Account Elements
  const accountBtn = document.getElementById("account-btn");
  const savedResumesList = document.querySelector(".saved-resumes-container");
  const newResumeBtn = document.getElementById("new-resume-btn");
  const importResumeBtn = document.getElementById("import-resume-btn");
  const importFileOverlay = document.getElementById("import-file-overlay");
  const closeImport = document.querySelector(".close-import");
  const importDropArea = document.getElementById("import-drop-area");
  const importFileInput = document.getElementById("import-file-input");
  const startImportBtn = document.getElementById("start-import");

  // Modal Elements
  const closeModalBtns = document.querySelectorAll(".close-modal");
  const modalCancelBtns = document.querySelectorAll(".modal-cancel");

  // State Management
  let currentSection = "personal";
  let currentTemplate = "professional";
  let primaryColor = "#3f51b5";
  let isFullScreenPreview = false;
  let currentOnboardingStep = 1;
  let currentExperienceIndex = null;
  let skills = [];
  let interests = [];
  let resumeData = {
    meta: {
      template: "professional",
      color: "#3f51b5",
      font: "Roboto",
      fontSize: 100,
      spacing: 100,
      name: "Untitled Resume",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    personal: {
      fullname: "",
      jobTitle: "",
      location: "",
      email: "",
      phone: "",
      website: "",
      linkedin: "",
      socialLinks: [],
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    skillLevels: {},
    projects: [],
    languages: [],
    certifications: [],
    interests: [],
    references: {
      show: false,
      availableOnRequest: true,
      items: [],
    },
  };

  // Sample Skill Suggestions by Category
  const skillSuggestions = {
    technical: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "HTML/CSS",
      "SQL",
      "MongoDB",
      "Git",
      "RESTful API",
      "AWS",
      "Docker",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Express.js",
      "Vue.js",
      "Angular",
      "CI/CD",
      "Java",
      "C#",
      ".NET",
      "PHP",
    ],
    design: [
      "UI/UX Design",
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "Sketch",
      "InDesign",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Responsive Design",
      "Visual Design",
      "Branding",
      "Typography",
    ],
    business: [
      "Project Management",
      "Agile",
      "Scrum",
      "Product Management",
      "Business Analysis",
      "Strategic Planning",
      "Team Leadership",
      "Budgeting",
      "Client Relations",
      "Marketing Strategy",
      "SEO",
      "Content Marketing",
      "CRM",
      "Sales",
    ],
    soft: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Critical Thinking",
      "Time Management",
      "Adaptability",
      "Leadership",
      "Creativity",
      "Attention to Detail",
      "Organization",
      "Conflict Resolution",
      "Emotional Intelligence",
    ],
  };

  // Initialize Application
  initializeApp();

  // App Initialization
  function initializeApp() {
    // Show loader initially
    setTimeout(() => {
      loader.classList.add("hidden");
      appContainer.classList.add("loaded");

      // Check if first visit
      const hasVisitedBefore = localStorage.getItem("hasVisitedBefore");
      if (!hasVisitedBefore) {
        showOnboarding();
        localStorage.setItem("hasVisitedBefore", "true");
      }

      // Load resume data if available
      loadResumeData();

      // Generate skill suggestions
      generateSkillSuggestions();

      // Update resume preview
      updateResumePreview();
    }, 1500);

    // Set up event listeners
    setupEventListeners();
  }

  // Set up event listeners
  function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener("click", toggleTheme);

    // Toast close
    toastClose.addEventListener("click", hideToast);

    // Onboarding navigation
    closeOnboarding.addEventListener("click", hideOnboarding);
    onboardingPrev.addEventListener("click", prevOnboardingStep);
    onboardingNext.addEventListener("click", nextOnboardingStep);
    onboardingFinish.addEventListener("click", hideOnboarding);

    // Sidebar navigation
    mobileSidebarToggle.addEventListener("click", toggleSidebar);
    mobileSidebarOpen.addEventListener("click", openSidebar);

    // Section navigation
    sectionItems.forEach((item) => {
      item.addEventListener("click", () => {
        const section = item.getAttribute("data-section");
        navigateToSection(section);
      });
    });

    // Template selection
    templateCards.forEach((card) => {
      card.addEventListener("click", () => {
        const template = card.getAttribute("data-template");
        changeTemplate(template);
      });
    });

    // Carousel navigation
    carouselBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const direction = btn.classList.contains("prev") ? -1 : 1;
        scrollTemplatesCarousel(direction);
      });
    });

    // Color theme selection
    colorSwatches.forEach((swatch) => {
      swatch.addEventListener("click", () => {
        const color = swatch.getAttribute("data-color");
        if (color === "custom") {
          customColor.click();
        } else {
          changeColorTheme(color);
        }
      });
    });

    // Custom color picker
    customColor.addEventListener("input", () => {
      changeColorTheme(customColor.value);
    });

    // Font selection
    fontSelector.addEventListener("change", () => {
      changeFontFamily(fontSelector.value);
    });

    // Font size slider
    fontSizeSlider.addEventListener("input", () => {
      changeFontSize(fontSizeSlider.value);
      fontSizeValue.textContent = `${fontSizeSlider.value}%`;
    });

    // Spacing slider
    spacingSlider.addEventListener("input", () => {
      changeSpacing(spacingSlider.value);
      spacingValue.textContent = `${spacingSlider.value}%`;
    });

    // Section navigation in the editor
    prevSectionBtn.addEventListener("click", navigateToPrevSection);
    nextSectionBtn.addEventListener("click", navigateToNextSection);

    // Preview toggle
    previewToggle.addEventListener("click", toggleFullScreenPreview);
    refreshPreview.addEventListener("click", updateResumePreview);

    // Personal section
    fullnameInput.addEventListener("input", updatePersonalInfo);
    jobTitleInput.addEventListener("input", updatePersonalInfo);
    locationInput.addEventListener("input", updatePersonalInfo);
    emailInput.addEventListener("input", updatePersonalInfo);
    phoneInput.addEventListener("input", updatePersonalInfo);
    websiteInput.addEventListener("input", updatePersonalInfo);
    linkedinInput.addEventListener("input", updatePersonalInfo);
    addSocialLinkBtn.addEventListener("click", addSocialLink);

    // Summary section
    summaryInput.addEventListener("input", () => {
      updateSummary();
      countCharacters(summaryInput, summaryCharCount, 1500);
    });
    aiSummarySuggest.addEventListener("click", showAISuggestions);

    // Experience section
    addFirstExperienceBtn.addEventListener("click", showExperienceModal);
    addExperienceBtn.addEventListener("click", showExperienceModal);
    document
      .getElementById("save-experience")
      .addEventListener("click", saveExperience);

    // Education section
    addFirstEducationBtn.addEventListener("click", addEducation);
    addEducationBtn.addEventListener("click", addEducation);

    // Skills section
    skillsInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addSkill(skillsInput.value);
      }
    });
    addSkillBtn.addEventListener("click", () => addSkill(skillsInput.value));
    refreshSuggestions.addEventListener("click", generateSkillSuggestions);
    showSkillLevels.addEventListener("change", toggleSkillLevels);

    // Projects section
    addFirstProjectBtn.addEventListener("click", addProject);
    addProjectBtn.addEventListener("click", addProject);

    // Languages section
    addFirstLanguageBtn.addEventListener("click", addLanguage);
    addLanguageBtn.addEventListener("click", addLanguage);

    // Certifications section
    addFirstCertificationBtn.addEventListener("click", addCertification);
    addCertificationBtn.addEventListener("click", addCertification);

    // Interests section
    interestsInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addInterest(interestsInput.value);
      }
    });
    addInterestBtn.addEventListener("click", () =>
      addInterest(interestsInput.value)
    );
    showInterests.addEventListener("change", toggleInterestsSection);

    // References section
    showReferences.addEventListener("change", toggleReferencesSection);
    referenceOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const referenceType = option.getAttribute("data-option");
        setReferenceType(referenceType);
      });
    });
    addFirstReferenceBtn.addEventListener("click", addReference);
    addReferenceBtn.addEventListener("click", addReference);

    // Save and export
    saveBtn.addEventListener("click", showSaveModal);
    confirmSaveBtn.addEventListener("click", saveResume);
    exportBtn.addEventListener("click", () => {
      // Dropdown toggle handled by CSS, buttons have their own handlers
    });
    downloadPdfBtn.addEventListener("click", downloadPDF);
    downloadDocxBtn.addEventListener("click", downloadDOCX);
    downloadTxtBtn.addEventListener("click", downloadTXT);
    printBtn.addEventListener("click", printResume);

    // Import
    importResumeBtn.addEventListener("click", showImportFileOverlay);
    closeImport.addEventListener("click", hideImportFileOverlay);
    importDropArea.addEventListener("click", () => importFileInput.click());
    importDropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      importDropArea.classList.add("active");
    });
    importDropArea.addEventListener("dragleave", () => {
      importDropArea.classList.remove("active");
    });
    importDropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      importDropArea.classList.remove("active");
      handleFileImport(e.dataTransfer.files);
    });
    importFileInput.addEventListener("change", () => {
      handleFileImport(importFileInput.files);
    });

    // AI tools
    aiAnalyzeBtn.addEventListener("click", analyzeResume);
    aiImproveBtn.addEventListener("click", improveContent);
    aiKeywordsBtn.addEventListener("click", optimizeForATS);

    // AI tabs in modal
    aiTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const tabId = tab.getAttribute("data-tab");
        changeAITab(tabId);
      });
    });

    // Use suggestion buttons
    useSuggestionBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const suggestion = e.target.previousElementSibling.textContent;
        useSuggestion(suggestion);
      });
    });

    // Custom prompt generation
    generateCustomBtn.addEventListener("click", () => {
      generateCustomSuggestion(customPrompt.value);
    });

    // Modal close buttons
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        closeModal(modal);
      });
    });

    modalCancelBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        closeModal(modal);
      });
    });

    // Rich text editor buttons
    const editorBtns = document.querySelectorAll(".editor-btn");
    editorBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.classList.contains("ai-suggestion")) {
          showAISuggestions("job-description");
        } else {
          const command = btn.getAttribute("data-command");
          document.execCommand(command, false, null);
        }
      });
    });

    // Section navigation via buttons
    document
      .getElementById("personal-next")
      .addEventListener("click", () => navigateToSection("summary"));
    document
      .getElementById("summary-prev")
      .addEventListener("click", () => navigateToSection("personal"));
    document
      .getElementById("summary-next")
      .addEventListener("click", () => navigateToSection("experience"));
    document
      .getElementById("experience-prev")
      .addEventListener("click", () => navigateToSection("summary"));
    document
      .getElementById("experience-next")
      .addEventListener("click", () => navigateToSection("education"));
    document
      .getElementById("education-prev")
      .addEventListener("click", () => navigateToSection("experience"));
    document
      .getElementById("education-next")
      .addEventListener("click", () => navigateToSection("skills"));
    document
      .getElementById("skills-prev")
      .addEventListener("click", () => navigateToSection("education"));
    document
      .getElementById("skills-next")
      .addEventListener("click", () => navigateToSection("projects"));
    document
      .getElementById("projects-prev")
      .addEventListener("click", () => navigateToSection("skills"));
    document
      .getElementById("projects-next")
      .addEventListener("click", () => navigateToSection("languages"));
    document
      .getElementById("languages-prev")
      .addEventListener("click", () => navigateToSection("projects"));
    document
      .getElementById("languages-next")
      .addEventListener("click", () => navigateToSection("certifications"));
    document
      .getElementById("certifications-prev")
      .addEventListener("click", () => navigateToSection("languages"));
    document
      .getElementById("certifications-next")
      .addEventListener("click", () => navigateToSection("interests"));
    document
      .getElementById("interests-prev")
      .addEventListener("click", () => navigateToSection("certifications"));
    document
      .getElementById("interests-next")
      .addEventListener("click", () => navigateToSection("references"));
    document
      .getElementById("references-prev")
      .addEventListener("click", () => navigateToSection("interests"));
    document
      .getElementById("references-finalize")
      .addEventListener("click", finalizeResume);
  }

  // Theme Functions
  function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    }
  }

  // Load saved theme
  function loadSavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  // Toast Notification
  function showToast(title, message, type = "success") {
    toastTitle.textContent = title;
    toastText.textContent = message;

    const toastIcon = document.querySelector(".toast-icon i");
    if (type === "success") {
      toastIcon.className = "fas fa-check-circle";
      toastIcon.style.color = "var(--success-color)";
    } else if (type === "error") {
      toastIcon.className = "fas fa-exclamation-circle";
      toastIcon.style.color = "var(--error-color)";
    } else if (type === "warning") {
      toastIcon.className = "fas fa-exclamation-triangle";
      toastIcon.style.color = "var(--warning-color)";
    } else if (type === "info") {
      toastIcon.className = "fas fa-info-circle";
      toastIcon.style.color = "var(--info-color)";
    }

    toast.classList.add("active");

    setTimeout(() => {
      hideToast();
    }, 5000);
  }

  function hideToast() {
    toast.classList.remove("active");
  }

  // Onboarding
  function showOnboarding() {
    onboardingOverlay.classList.add("active");
    updateOnboardingStep();
  }

  function hideOnboarding() {
    onboardingOverlay.classList.remove("active");
  }

  function updateOnboardingStep() {
    onboardingSteps.forEach((step) => {
      const stepNumber = parseInt(step.getAttribute("data-step"));
      step.classList.toggle("active", stepNumber === currentOnboardingStep);
    });

    onboardingPrev.disabled = currentOnboardingStep === 1;

    if (currentOnboardingStep === onboardingSteps.length) {
      onboardingNext.style.display = "none";
      onboardingFinish.style.display = "block";
    } else {
      onboardingNext.style.display = "block";
      onboardingFinish.style.display = "none";
    }
  }

  function nextOnboardingStep() {
    if (currentOnboardingStep < onboardingSteps.length) {
      currentOnboardingStep++;
      updateOnboardingStep();
    }
  }

  function prevOnboardingStep() {
    if (currentOnboardingStep > 1) {
      currentOnboardingStep--;
      updateOnboardingStep();
    }
  }

  // Sidebar Functions
  function toggleSidebar() {
    sidebar.classList.toggle("active");
  }

  function openSidebar() {
    sidebar.classList.add("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
  }

  // Section Navigation
  function navigateToSection(section) {
    currentSection = section;

    // Update active section in sidebar
    sectionItems.forEach((item) => {
      item.classList.toggle(
        "active",
        item.getAttribute("data-section") === section
      );
    });

    // Show active section in editor
    editorSections.forEach((editorSection) => {
      editorSection.classList.toggle(
        "active",
        editorSection.id === `${section}-section`
      );
    });

    // Update section title
    const sectionTitles = {
      personal: "Personal Information",
      summary: "Professional Summary",
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      languages: "Languages",
      certifications: "Certifications",
      interests: "Interests & Hobbies",
      references: "References",
    };

    currentSectionTitle.textContent = sectionTitles[section];

    // Update navigation buttons
    const sectionOrder = [
      "personal",
      "summary",
      "experience",
      "education",
      "skills",
      "projects",
      "languages",
      "certifications",
      "interests",
      "references",
    ];
    const currentIndex = sectionOrder.indexOf(section);

    prevSectionBtn.disabled = currentIndex === 0;
    nextSectionBtn.disabled = currentIndex === sectionOrder.length - 1;

    // Close sidebar on mobile after navigation
    if (window.innerWidth < 992) {
      closeSidebar();
    }

    // Update section status
    updateSectionStatus(section);
  }

  function navigateToNextSection() {
    const sectionOrder = [
      "personal",
      "summary",
      "experience",
      "education",
      "skills",
      "projects",
      "languages",
      "certifications",
      "interests",
      "references",
    ];
    const currentIndex = sectionOrder.indexOf(currentSection);

    if (currentIndex < sectionOrder.length - 1) {
      navigateToSection(sectionOrder[currentIndex + 1]);
    }
  }

  function navigateToPrevSection() {
    const sectionOrder = [
      "personal",
      "summary",
      "experience",
      "education",
      "skills",
      "projects",
      "languages",
      "certifications",
      "interests",
      "references",
    ];
    const currentIndex = sectionOrder.indexOf(currentSection);

    if (currentIndex > 0) {
      navigateToSection(sectionOrder[currentIndex - 1]);
    }
  }

  function updateSectionStatus(section) {
    const sectionItem = document.querySelector(
      `.section-item[data-section="${section}"]`
    );
    const sectionStatus = sectionItem.querySelector(".section-status");

    // Check if section has content
    let hasContent = false;

    switch (section) {
      case "personal":
        hasContent =
          fullnameInput.value.trim() !== "" &&
          emailInput.value.trim() !== "" &&
          phoneInput.value.trim() !== "";
        break;
      case "summary":
        hasContent = summaryInput.value.trim() !== "";
        break;
      case "experience":
        hasContent = resumeData.experience.length > 0;
        break;
      case "education":
        hasContent = resumeData.education.length > 0;
        break;
      case "skills":
        hasContent = resumeData.skills.length > 0;
        break;
      case "projects":
        hasContent = resumeData.projects.length > 0;
        break;
      case "languages":
        hasContent = resumeData.languages.length > 0;
        break;
      case "certifications":
        hasContent = resumeData.certifications.length > 0;
        break;
      case "interests":
        hasContent = resumeData.interests.length > 0;
        break;
      case "references":
        hasContent =
          resumeData.references.items.length > 0 ||
          (resumeData.references.show &&
            resumeData.references.availableOnRequest);
        break;
    }

    if (hasContent) {
      sectionStatus.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else {
      sectionStatus.innerHTML = "";
    }
  }

  // Template Functions
  function changeTemplate(template) {
    currentTemplate = template;

    // Update active template card
    templateCards.forEach((card) => {
      card.classList.toggle(
        "active",
        card.getAttribute("data-template") === template
      );
    });

    // Update resume preview
    const resumeElement = document.querySelector(".resume");
    resumeElement.className = `resume ${template}`;

    // Restructure content based on template
    restructureResumeContent(template);

    // Update resume data
    resumeData.meta.template = template;

    // Update preview
    updateResumePreview();
  }

  function restructureResumeContent(template) {
    const resumeElement = document.querySelector(".resume");

    if (template === "creative" || template === "tech") {
      // Two-column layout with sidebar
      resumeElement.innerHTML = `
                  <div class="resume-sidebar">
                      <div class="contact-info">
                          <div class="contact-item">
                              <i class="fas fa-envelope"></i>
                              <span id="preview-email">email@example.com</span>
                          </div>
                          <div class="contact-item">
                              <i class="fas fa-phone"></i>
                              <span id="preview-phone">(123) 456-7890</span>
                          </div>
                          <div class="contact-item">
                              <i class="fas fa-map-marker-alt"></i>
                              <span id="preview-location">City, State</span>
                          </div>
                          <div class="contact-item">
                              <i class="fas fa-globe"></i>
                              <span id="preview-website">website.com</span>
                          </div>
                          <div class="contact-item">
                              <i class="fab fa-linkedin"></i>
                              <span id="preview-linkedin">LinkedIn</span>
                          </div>
                      </div>
                      <div class="sidebar-section">
                          <h3 class="sidebar-title">Skills</h3>
                          <div id="preview-skills" class="skills-list">
                              <p class="empty-section-placeholder">No skills added yet</p>
                          </div>
                      </div>
                      <div class="sidebar-section">
                          <h3 class="sidebar-title">Languages</h3>
                          <div id="preview-languages">
                              <p class="empty-section-placeholder">No languages added yet</p>
                          </div>
                      </div>
                      <div class="sidebar-section">
                          <h3 class="sidebar-title">Interests</h3>
                          <div id="preview-interests">
                              <p class="empty-section-placeholder">No interests added yet</p>
                          </div>
                      </div>
                  </div>
                  <div class="resume-main">
                      <div class="resume-header">
                          <h1 id="preview-name">Your Name</h1>
                          <p id="preview-title">Your Professional Title</p>
                      </div>
                      <div id="preview-summary-section" class="main-section">
                          <h2 class="section-title">Professional Summary</h2>
                          <p id="preview-summary">A brief summary of your professional background and career goals.</p>
                      </div>
                      <div id="preview-experience-section" class="main-section">
                          <h2 class="section-title">Work Experience</h2>
                          <div id="preview-experience" class="section-content">
                              <p class="empty-section-placeholder">No work experience added yet</p>
                          </div>
                      </div>
                      <div id="preview-education-section" class="main-section">
                          <h2 class="section-title">Education</h2>
                          <div id="preview-education" class="section-content">
                              <p class="empty-section-placeholder">No education added yet</p>
                          </div>
                      </div>
                      <div id="preview-projects-section" class="main-section">
                          <h2 class="section-title">Projects</h2>
                          <div id="preview-projects" class="section-content">
                              <p class="empty-section-placeholder">No projects added yet</p>
                          </div>
                      </div>
                      <div id="preview-certifications-section" class="main-section">
                          <h2 class="section-title">Certifications</h2>
                          <div id="preview-certifications" class="section-content">
                              <p class="empty-section-placeholder">No certifications added yet</p>
                          </div>
                      </div>
                      <div id="preview-references-section" class="main-section">
                          <h2 class="section-title">References</h2>
                          <div id="preview-references" class="section-content">
                              <p class="references-available">References available upon request</p>
                          </div>
                      </div>
                  </div>
              `;
    } else if (template === "executive") {
      // Executive template with special header
      resumeElement.innerHTML = `
                  <div class="resume-header">
                      <div class="header-top">
                          <div class="header-left">
                              <h1 id="preview-name">Your Name</h1>
                          </div>
                          <div class="header-right">
                              <p id="preview-title">Your Professional Title</p>
                          </div>
                      </div>
                      <div class="contact-info">
                          <span id="preview-email"><i class="fas fa-envelope"></i> email@example.com</span>
                          <span id="preview-phone"><i class="fas fa-phone"></i> (123) 456-7890</span>
                          <span id="preview-location"><i class="fas fa-map-marker-alt"></i> City, State</span>
                          <span id="preview-website"><i class="fas fa-globe"></i> website.com</span>
                          <span id="preview-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</span>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-summary-section" class="resume-section">
                      <h2 class="section-title">Professional Summary</h2>
                      <p id="preview-summary">A brief summary of your professional background and career goals.</p>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-experience-section" class="resume-section">
                      <h2 class="section-title">Work Experience</h2>
                      <div id="preview-experience" class="section-content">
                          <p class="empty-section-placeholder">No work experience added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-education-section" class="resume-section">
                      <h2 class="section-title">Education</h2>
                      <div id="preview-education" class="section-content">
                          <p class="empty-section-placeholder">No education added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-skills-section" class="resume-section">
                      <h2 class="section-title">Skills</h2>
                      <div id="preview-skills" class="section-content skills-list">
                          <p class="empty-section-placeholder">No skills added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-projects-section" class="resume-section">
                      <h2 class="section-title">Projects</h2>
                      <div id="preview-projects" class="section-content">
                          <p class="empty-section-placeholder">No projects added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-certifications-section" class="resume-section">
                      <h2 class="section-title">Certifications</h2>
                      <div id="preview-certifications" class="section-content">
                          <p class="empty-section-placeholder">No certifications added yet</p>
                      </div>
                  </div>
                  <div id="preview-languages-section" class="resume-section">
                      <h2 class="section-title">Languages</h2>
                      <div id="preview-languages" class="section-content">
                          <p class="empty-section-placeholder">No languages added yet</p>
                      </div>
                  </div>
                  <div id="preview-interests-section" class="resume-section">
                      <h2 class="section-title">Interests</h2>
                      <div id="preview-interests" class="section-content">
                          <p class="empty-section-placeholder">No interests added yet</p>
                      </div>
                  </div>
                  <div id="preview-references-section" class="resume-section">
                      <h2 class="section-title">References</h2>
                      <div id="preview-references" class="section-content">
                          <p class="references-available">References available upon request</p>
                      </div>
                  </div>
              `;
    } else if (template === "elegant") {
      // Elegant template with dividers
      resumeElement.innerHTML = `
                  <div class="resume-header">
                      <h1 id="preview-name">YOUR NAME</h1>
                      <p id="preview-title">Your Professional Title</p>
                      <div class="contact-info">
                          <span id="preview-email"><i class="fas fa-envelope"></i> email@example.com</span>
                          <span id="preview-phone"><i class="fas fa-phone"></i> (123) 456-7890</span>
                          <span id="preview-location"><i class="fas fa-map-marker-alt"></i> City, State</span>
                          <span id="preview-website"><i class="fas fa-globe"></i> website.com</span>
                          <span id="preview-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</span>
                      </div>
                  </div>
                  <div class="elegant-divider">
                      <div class="divider-line"></div>
                      <div class="divider-ornament">✦</div>
                      <div class="divider-line"></div>
                  </div>
                  <div id="preview-summary-section" class="resume-section">
                      <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
                      <p id="preview-summary">A brief summary of your professional background and career goals.</p>
                  </div>
                  <div class="elegant-divider">
                      <div class="divider-line"></div>
                      <div class="divider-ornament">✦</div>
                      <div class="divider-line"></div>
                  </div>
                  <div id="preview-experience-section" class="resume-section">
                      <h2 class="section-title">EXPERIENCE</h2>
                      <div id="preview-experience" class="section-content">
                          <p class="empty-section-placeholder">No work experience added yet</p>
                      </div>
                  </div>
                  <div class="elegant-divider">
                      <div class="divider-line"></div>
                      <div class="divider-ornament">✦</div>
                      <div class="divider-line"></div>
                  </div>
                  <div id="preview-education-section" class="resume-section">
                      <h2 class="section-title">EDUCATION</h2>
                      <div id="preview-education" class="section-content">
                          <p class="empty-section-placeholder">No education added yet</p>
                      </div>
                  </div>
                  <div class="elegant-divider">
                      <div class="divider-line"></div>
                      <div class="divider-ornament">✦</div>
                      <div class="divider-line"></div>
                  </div>
                  <div id="preview-skills-section" class="resume-section">
                      <h2 class="section-title">SKILLS</h2>
                      <div id="preview-skills" class="section-content skills-list">
                          <p class="empty-section-placeholder">No skills added yet</p>
                      </div>
                  </div>
                  <div class="elegant-divider">
                      <div class="divider-line"></div>
                      <div class="divider-ornament">✦</div>
                      <div class="divider-line"></div>
                  </div>
                  <div id="preview-projects-section" class="resume-section">
                      <h2 class="section-title">PROJECTS</h2>
                      <div id="preview-projects" class="section-content">
                          <p class="empty-section-placeholder">No projects added yet</p>
                      </div>
                  </div>
                  <div class="elegant-divider">
                      <div class="divider-line"></div>
                      <div class="divider-ornament">✦</div>
                      <div class="divider-line"></div>
                  </div>
                  <div id="preview-certifications-section" class="resume-section">
                      <h2 class="section-title">CERTIFICATIONS</h2>
                      <div id="preview-certifications" class="section-content">
                          <p class="empty-section-placeholder">No certifications added yet</p>
                      </div>
                  </div>
                  <div id="preview-languages-section" class="resume-section">
                      <h2 class="section-title">LANGUAGES</h2>
                      <div id="preview-languages" class="section-content">
                          <p class="empty-section-placeholder">No languages added yet</p>
                      </div>
                  </div>
                  <div id="preview-interests-section" class="resume-section">
                      <h2 class="section-title">INTERESTS</h2>
                      <div id="preview-interests" class="section-content">
                          <p class="empty-section-placeholder">No interests added yet</p>
                      </div>
                  </div>
                  <div id="preview-references-section" class="resume-section">
                      <h2 class="section-title">REFERENCES</h2>
                      <div id="preview-references" class="section-content">
                          <p class="references-available">References available upon request</p>
                      </div>
                  </div>
              `;
    } else if (template === "academic") {
      // Academic template
      resumeElement.innerHTML = `
                  <div class="resume-header">
                      <div class="header-title">CURRICULUM VITAE</div>
                      <h1 id="preview-name">Your Name</h1>
                      <p id="preview-title">Your Professional Title</p>
                      <div class="contact-info">
                          <span id="preview-email"><i class="fas fa-envelope"></i> email@example.com</span>
                          <span id="preview-phone"><i class="fas fa-phone"></i> (123) 456-7890</span>
                          <span id="preview-location"><i class="fas fa-map-marker-alt"></i> City, State</span>
                          <span id="preview-website"><i class="fas fa-globe"></i> website.com</span>
                          <span id="preview-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</span>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-summary-section" class="resume-section">
                      <h2 class="section-title">Research Interests</h2>
                      <p id="preview-summary">A brief summary of your research interests and professional background.</p>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-education-section" class="resume-section">
                      <h2 class="section-title">Education</h2>
                      <div id="preview-education" class="section-content">
                          <p class="empty-section-placeholder">No education added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-experience-section" class="resume-section">
                      <h2 class="section-title">Professional Experience</h2>
                      <div id="preview-experience" class="section-content">
                          <p class="empty-section-placeholder">No work experience added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-projects-section" class="resume-section">
                      <h2 class="section-title">Research Projects</h2>
                      <div id="preview-projects" class="section-content">
                          <p class="empty-section-placeholder">No projects added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-certifications-section" class="resume-section">
                      <h2 class="section-title">Publications</h2>
                      <div id="preview-certifications" class="section-content">
                          <p class="empty-section-placeholder">No publications added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-skills-section" class="resume-section">
                      <h2 class="section-title">Skills & Competencies</h2>
                      <div id="preview-skills" class="section-content skills-list">
                          <p class="empty-section-placeholder">No skills added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-languages-section" class="resume-section">
                      <h2 class="section-title">Languages</h2>
                      <div id="preview-languages" class="section-content">
                          <p class="empty-section-placeholder">No languages added yet</p>
                      </div>
                  </div>
                  <div class="divider"></div>
                  <div id="preview-references-section" class="resume-section">
                      <h2 class="section-title">References</h2>
                      <div id="preview-references" class="section-content">
                          <p class="references-available">References available upon request</p>
                      </div>
                  </div>
              `;
    } else {
      // Default template structure
      resumeElement.innerHTML = `
                  <div class="resume-header">
                      <h1 id="preview-name">Your Name</h1>
                      <p id="preview-title">Your Professional Title</p>
                      <div class="contact-info">
                          <span id="preview-email"><i class="fas fa-envelope"></i> email@example.com</span>
                          <span id="preview-phone"><i class="fas fa-phone"></i> (123) 456-7890</span>
                          <span id="preview-location"><i class="fas fa-map-marker-alt"></i> City, State</span>
                          <span id="preview-website"><i class="fas fa-globe"></i> website.com</span>
                          <span id="preview-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</span>
                      </div>
                  </div>
                  <div id="preview-summary-section" class="resume-section">
                      <h2 class="section-title">Professional Summary</h2>
                      <p id="preview-summary">A brief summary of your professional background and career goals.</p>
                  </div>
                  <div id="preview-experience-section" class="resume-section">
                      <h2 class="section-title">Work Experience</h2>
                      <div id="preview-experience" class="section-content">
                          <p class="empty-section-placeholder">No work experience added yet</p>
                      </div>
                  </div>
                  <div id="preview-education-section" class="resume-section">
                      <h2 class="section-title">Education</h2>
                      <div id="preview-education" class="section-content">
                          <p class="empty-section-placeholder">No education added yet</p>
                      </div>
                  </div>
                  <div id="preview-skills-section" class="resume-section">
                      <h2 class="section-title">Skills</h2>
                      <div id="preview-skills" class="section-content skills-list">
                          <p class="empty-section-placeholder">No skills added yet</p>
                      </div>
                  </div>
                  <div id="preview-projects-section" class="resume-section">
                      <h2 class="section-title">Projects</h2>
                      <div id="preview-projects" class="section-content">
                          <p class="empty-section-placeholder">No projects added yet</p>
                      </div>
                  </div>
                  <div id="preview-languages-section" class="resume-section">
                      <h2 class="section-title">Languages</h2>
                      <div id="preview-languages" class="section-content">
                          <p class="empty-section-placeholder">No languages added yet</p>
                      </div>
                  </div>
                  <div id="preview-certifications-section" class="resume-section">
                      <h2 class="section-title">Certifications</h2>
                      <div id="preview-certifications" class="section-content">
                          <p class="empty-section-placeholder">No certifications added yet</p>
                      </div>
                  </div>
                  <div id="preview-interests-section" class="resume-section">
                      <h2 class="section-title">Interests</h2>
                      <div id="preview-interests" class="section-content">
                          <p class="empty-section-placeholder">No interests added yet</p>
                      </div>
                  </div>
                  <div id="preview-references-section" class="resume-section">
                      <h2 class="section-title">References</h2>
                      <div id="preview-references" class="section-content">
                          <p class="references-available">References available upon request</p>
                      </div>
                  </div>
              `;
    }
  }

  function scrollTemplatesCarousel(direction) {
    const container = document.querySelector(".templates-container");
    const cardWidth = 130; // Card width + gap
    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth",
    });
  }

  // Color Theme Functions
  function changeColorTheme(color) {
    primaryColor = color;
    document.documentElement.style.setProperty("--primary-color", color);

    // Generate darker and lighter variants
    const darkerColor = adjustColor(color, -30);
    const lighterColor = adjustColor(color, 50);

    document.documentElement.style.setProperty("--primary-dark", darkerColor);
    document.documentElement.style.setProperty("--primary-light", lighterColor);

    // Update active color swatch
    colorSwatches.forEach((swatch) => {
      swatch.classList.toggle(
        "active",
        swatch.getAttribute("data-color") === color ||
          (swatch.classList.contains("custom") && customColor.value === color)
      );
    });

    // Update custom color input
    customColor.value = color;

    // Update resume data
    resumeData.meta.color = color;
  }

  function adjustColor(hex, percent) {
    // Convert hex to RGB
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    // Adjust color
    r = Math.max(0, Math.min(255, r + percent));
    g = Math.max(0, Math.min(255, g + percent));
    b = Math.max(0, Math.min(255, b + percent));

    // Convert back to hex
    return `#${r
      .toString(16)
      .padStart(
        2,
        "0"
      )}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  }

  // Font Functions
  function changeFontFamily(font) {
    document.documentElement.style.setProperty(
      "--font-primary",
      `'${font}', sans-serif`
    );

    // Update resume data
    resumeData.meta.font = font;
  }

  function changeFontSize(size) {
    const resumeElement = document.querySelector(".resume");
    resumeElement.style.fontSize = `${size / 100}em`;

    // Update resume data
    resumeData.meta.fontSize = parseInt(size);
  }

  function changeSpacing(spacing) {
    const resumeElement = document.querySelector(".resume");
    resumeElement.style.lineHeight = `${(spacing / 100) * 1.5}`;

    // Update resume data
    resumeData.meta.spacing = parseInt(spacing);
  }

  // Preview Functions
  function toggleFullScreenPreview() {
    const previewContent = document.querySelector(".preview-content");
    previewContent.classList.toggle("fullscreen");

    // Update icon
    const icon = previewToggle.querySelector("i");
    if (previewContent.classList.contains("fullscreen")) {
      icon.className = "fas fa-compress";
      isFullScreenPreview = true;
    } else {
      icon.className = "fas fa-expand";
      isFullScreenPreview = false;
    }
  }

  function updateResumePreview() {
    // Personal Info
    const previewName = document.getElementById("preview-name");
    const previewTitle = document.getElementById("preview-title");
    const previewEmail = document.getElementById("preview-email");
    const previewPhone = document.getElementById("preview-phone");
    const previewLocation = document.getElementById("preview-location");
    const previewWebsite = document.getElementById("preview-website");
    const previewLinkedin = document.getElementById("preview-linkedin");

    if (previewName)
      previewName.textContent = resumeData.personal.fullname || "Your Name";
    if (previewTitle)
      previewTitle.textContent =
        resumeData.personal.jobTitle || "Your Professional Title";

    if (currentTemplate === "creative" || currentTemplate === "tech") {
      if (previewEmail)
        previewEmail.textContent =
          resumeData.personal.email || "email@example.com";
      if (previewPhone)
        previewPhone.textContent =
          resumeData.personal.phone || "(123) 456-7890";
      if (previewLocation)
        previewLocation.textContent =
          resumeData.personal.location || "City, State";
      if (previewWebsite)
        previewWebsite.textContent =
          resumeData.personal.website || "website.com";
      if (previewLinkedin)
        previewLinkedin.textContent =
          resumeData.personal.linkedin || "LinkedIn";
    } else {
      if (previewEmail)
        previewEmail.innerHTML = resumeData.personal.email
          ? `<i class="fas fa-envelope"></i> ${resumeData.personal.email}`
          : '<i class="fas fa-envelope"></i> email@example.com';

      if (previewPhone)
        previewPhone.innerHTML = resumeData.personal.phone
          ? `<i class="fas fa-phone"></i> ${resumeData.personal.phone}`
          : '<i class="fas fa-phone"></i> (123) 456-7890';

      if (previewLocation)
        previewLocation.innerHTML = resumeData.personal.location
          ? `<i class="fas fa-map-marker-alt"></i> ${resumeData.personal.location}`
          : '<i class="fas fa-map-marker-alt"></i> City, State';

      if (previewWebsite)
        previewWebsite.innerHTML = resumeData.personal.website
          ? `<i class="fas fa-globe"></i> ${resumeData.personal.website}`
          : '<i class="fas fa-globe"></i> website.com';

      if (previewLinkedin)
        previewLinkedin.innerHTML = resumeData.personal.linkedin
          ? `<i class="fab fa-linkedin"></i> ${resumeData.personal.linkedin}`
          : '<i class="fab fa-linkedin"></i> LinkedIn';
    }

    // Summary
    const previewSummary = document.getElementById("preview-summary");
    if (previewSummary) {
      previewSummary.textContent =
        resumeData.summary ||
        "A brief summary of your professional background and career goals.";
    }

    // Experience
    updateExperiencePreview();

    // Education
    updateEducationPreview();

    // Skills
    updateSkillsPreview();

    // Projects
    updateProjectsPreview();

    // Languages
    updateLanguagesPreview();

    // Certifications
    updateCertificationsPreview();

    // Interests
    updateInterestsPreview();

    // References
    updateReferencesPreview();

    // Update resume score
    updateResumeScore();
  }

  // Form Input Functions - Personal
  function updatePersonalInfo() {
    // Update resume data
    resumeData.personal.fullname = fullnameInput.value;
    resumeData.personal.jobTitle = jobTitleInput.value;
    resumeData.personal.location = locationInput.value;
    resumeData.personal.email = emailInput.value;
    resumeData.personal.phone = phoneInput.value;
    resumeData.personal.website = websiteInput.value;
    resumeData.personal.linkedin = linkedinInput.value;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("personal");
  }

  function addSocialLink() {
    const socialLinkHtml = `
              <div class="form-row social-link-row">
                  <div class="form-group">
                      <label>Platform</label>
                      <select class="social-platform">
                          <option value="github">GitHub</option>
                          <option value="twitter">Twitter</option>
                          <option value="instagram">Instagram</option>
                          <option value="facebook">Facebook</option>
                          <option value="youtube">YouTube</option>
                          <option value="medium">Medium</option>
                          <option value="behance">Behance</option>
                          <option value="dribbble">Dribbble</option>
                          <option value="other">Other</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label>URL/Username</label>
                      <div class="input-container">
                          <i class="fab fa-github input-icon social-icon"></i>
                          <input type="text" class="social-url" placeholder="e.g. github.com/username">
                      </div>
                  </div>
                  <button class="btn icon-btn remove-social-link" title="Remove">
                      <i class="fas fa-times"></i>
                  </button>
              </div>
          `;

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = socialLinkHtml;
    const socialLinkRow = tempContainer.firstElementChild;

    socialLinksContainer.appendChild(socialLinkRow);

    // Set up event listeners
    const socialPlatform = socialLinkRow.querySelector(".social-platform");
    const socialIcon = socialLinkRow.querySelector(".social-icon");
    const socialUrl = socialLinkRow.querySelector(".social-url");
    const removeSocialLink = socialLinkRow.querySelector(".remove-social-link");

    socialPlatform.addEventListener("change", () => {
      const platform = socialPlatform.value;
      const platformIcons = {
        github: "fa-github",
        twitter: "fa-twitter",
        instagram: "fa-instagram",
        facebook: "fa-facebook",
        youtube: "fa-youtube",
        medium: "fa-medium",
        behance: "fa-behance",
        dribbble: "fa-dribbble",
        other: "fa-link",
      };

      socialIcon.className = `fab ${platformIcons[platform]} input-icon social-icon`;

      updateSocialLinks();
    });

    socialUrl.addEventListener("input", updateSocialLinks);

    removeSocialLink.addEventListener("click", () => {
      socialLinkRow.remove();
      updateSocialLinks();
    });
  }

  function updateSocialLinks() {
    const socialLinks = [];
    const socialLinkRows = document.querySelectorAll(".social-link-row");

    socialLinkRows.forEach((row) => {
      const platform = row.querySelector(".social-platform").value;
      const url = row.querySelector(".social-url").value;

      if (url.trim() !== "") {
        socialLinks.push({
          platform,
          url,
        });
      }
    });

    resumeData.personal.socialLinks = socialLinks;

    // Update resume preview
    // Note: Social links usually require template adjustment to display correctly
  }

  // Form Input Functions - Summary
  function updateSummary() {
    resumeData.summary = summaryInput.value;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("summary");
  }

  function countCharacters(inputElement, counterElement, limit) {
    const count = inputElement.value.length;
    counterElement.textContent = count;

    if (count > limit) {
      counterElement.classList.add("over");
      counterElement.classList.remove("limit");
    } else if (count > limit * 0.8) {
      counterElement.classList.add("limit");
      counterElement.classList.remove("over");
    } else {
      counterElement.classList.remove("limit", "over");
    }
  }

  // Form Input Functions - Experience
  function showExperienceModal(index = null) {
    currentExperienceIndex = index;

    // Reset form
    const expJobTitle = document.getElementById("exp-job-title");
    const expCompany = document.getElementById("exp-company");
    const expStartDate = document.getElementById("exp-start-date");
    const expEndDate = document.getElementById("exp-end-date");
    const expCurrentJob = document.getElementById("exp-current-job");
    const expLocation = document.getElementById("exp-location");
    const expDescriptionEditor = document.getElementById(
      "exp-description-editor"
    );

    if (index !== null) {
      // Edit existing experience
      const experience = resumeData.experience[index];
      expJobTitle.value = experience.jobTitle;
      expCompany.value = experience.company;
      expStartDate.value = experience.startDate;
      expEndDate.value = experience.endDate;
      expCurrentJob.checked = experience.currentJob;
      expLocation.value = experience.location;
      expDescriptionEditor.innerHTML = experience.description;

      if (experience.currentJob) {
        expEndDate.disabled = true;
      } else {
        expEndDate.disabled = false;
      }
    } else {
      // New experience
      expJobTitle.value = "";
      expCompany.value = "";
      expStartDate.value = "";
      expEndDate.value = "";
      expCurrentJob.checked = false;
      expLocation.value = "";
      expDescriptionEditor.innerHTML = "";
      expEndDate.disabled = false;
    }

    // Current job checkbox event
    expCurrentJob.addEventListener("change", function () {
      expEndDate.disabled = this.checked;
      if (this.checked) {
        expEndDate.value = "";
      }
    });

    // Show modal
    experienceModal.classList.add("active");
  }

  function saveExperience() {
    const expJobTitle = document.getElementById("exp-job-title").value;
    const expCompany = document.getElementById("exp-company").value;
    const expStartDate = document.getElementById("exp-start-date").value;
    const expEndDate = document.getElementById("exp-end-date").value;
    const expCurrentJob = document.getElementById("exp-current-job").checked;
    const expLocation = document.getElementById("exp-location").value;
    const expDescription = document.getElementById(
      "exp-description-editor"
    ).innerHTML;

    // Validate required fields
    if (
      !expJobTitle ||
      !expCompany ||
      !expStartDate ||
      (!expEndDate && !expCurrentJob)
    ) {
      showToast(
        "Missing Information",
        "Please fill in all required fields",
        "error"
      );
      return;
    }

    const experienceItem = {
      jobTitle: expJobTitle,
      company: expCompany,
      startDate: expStartDate,
      endDate: expCurrentJob ? "" : expEndDate,
      currentJob: expCurrentJob,
      location: expLocation,
      description: expDescription,
    };

    if (currentExperienceIndex !== null) {
      // Update existing
      resumeData.experience[currentExperienceIndex] = experienceItem;
    } else {
      // Add new
      resumeData.experience.push(experienceItem);
    }

    // Close modal
    experienceModal.classList.remove("active");

    // Update UI
    renderExperienceItems();
    experienceEmptyState.style.display = "none";
    experienceActions.style.display = "flex";

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("experience");
  }

  function renderExperienceItems() {
    experienceItems.innerHTML = "";

    resumeData.experience.forEach((item, index) => {
      const experienceCard = document.createElement("div");
      experienceCard.className = "card";

      const formattedStartDate = formatDate(item.startDate);
      const formattedEndDate = item.currentJob
        ? "Present"
        : formatDate(item.endDate);

      experienceCard.innerHTML = `
                  <div class="card-header">
                      <h3>${item.jobTitle}</h3>
                      <div class="card-actions">
                          <button class="btn icon-btn edit-experience" data-index="${index}" title="Edit">
                              <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn icon-btn delete-experience" data-index="${index}" title="Delete">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-content">
                      <div class="card-meta">
                          <div class="meta-item">
                              <i class="fas fa-building"></i> ${item.company}
                          </div>
                          <div class="meta-item">
                              <i class="fas fa-calendar"></i> ${formattedStartDate} - ${formattedEndDate}
                          </div>
                          ${
                            item.location
                              ? `<div class="meta-item">
                              <i class="fas fa-map-marker-alt"></i> ${item.location}
                          </div>`
                              : ""
                          }
                      </div>
                      <div class="card-description">
                          ${item.description}
                      </div>
                  </div>
              `;

      experienceItems.appendChild(experienceCard);

      // Add event listeners
      const editBtn = experienceCard.querySelector(".edit-experience");
      const deleteBtn = experienceCard.querySelector(".delete-experience");

      editBtn.addEventListener("click", () => {
        showExperienceModal(index);
      });

      deleteBtn.addEventListener("click", () => {
        deleteExperience(index);
      });
    });
  }

  function deleteExperience(index) {
    resumeData.experience.splice(index, 1);

    // Update UI
    renderExperienceItems();

    if (resumeData.experience.length === 0) {
      experienceEmptyState.style.display = "flex";
      experienceActions.style.display = "none";
    }

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("experience");
  }

  function updateExperiencePreview() {
    const previewExperience = document.getElementById("preview-experience");

    if (!previewExperience) return;

    if (resumeData.experience.length === 0) {
      previewExperience.innerHTML =
        '<p class="empty-section-placeholder">No work experience added yet</p>';
      return;
    }

    previewExperience.innerHTML = "";

    resumeData.experience.forEach((experience) => {
      const jobItem = document.createElement("div");
      jobItem.className = "job-item";

      const formattedStartDate = formatDate(experience.startDate);
      const formattedEndDate = experience.currentJob
        ? "Present"
        : formatDate(experience.endDate);

      if (currentTemplate === "professional" || currentTemplate === "modern") {
        jobItem.innerHTML = `
                      <div class="job-header">
                          <div>
                              <div class="job-title">${
                                experience.jobTitle
                              }</div>
                              <div class="company">${experience.company}${
          experience.location ? ` | ${experience.location}` : ""
        }</div>
                          </div>
                          <div class="job-date">${formattedStartDate} - ${formattedEndDate}</div>
                      </div>
                      <div class="job-description">${
                        experience.description
                      }</div>
                  `;
      } else if (currentTemplate === "minimal") {
        jobItem.innerHTML = `
                      <div class="job-title">${experience.jobTitle} | ${
          experience.company
        }</div>
                      <div class="job-date">${formattedStartDate} - ${formattedEndDate}${
          experience.location ? ` | ${experience.location}` : ""
        }</div>
                      <div class="job-description">${
                        experience.description
                      }</div>
                  `;
      } else if (currentTemplate === "creative" || currentTemplate === "tech") {
        jobItem.innerHTML = `
                      <div class="job-title">${experience.jobTitle}</div>
                      <div class="company">${experience.company} | ${formattedStartDate} - ${formattedEndDate}</div>
                      <div class="job-description">${experience.description}</div>
                  `;
      } else if (currentTemplate === "executive") {
        jobItem.innerHTML = `
                      <div class="job-title">${experience.jobTitle}</div>
                      <div class="company">${experience.company} | ${experience.location}</div>
                      <div class="job-date">${formattedStartDate} - ${formattedEndDate}</div>
                      <div class="job-description">${experience.description}</div>
                  `;
      } else if (currentTemplate === "elegant") {
        jobItem.innerHTML = `
                      <div class="job-title">${experience.jobTitle}</div>
                      <div class="company">${experience.company}</div>
                      <div class="job-date">${formattedStartDate} - ${formattedEndDate}</div>
                      <div class="job-description">${experience.description}</div>
                  `;
      } else if (currentTemplate === "academic") {
        jobItem.innerHTML = `
                      <div class="job-title">${experience.jobTitle}</div>
                      <div class="company">${experience.company}</div>
                      <div class="job-date">${formattedStartDate} - ${formattedEndDate}${
          experience.location ? ` | ${experience.location}` : ""
        }</div>
                      <div class="job-description">${
                        experience.description
                      }</div>
                  `;
      }

      previewExperience.appendChild(jobItem);
    });
  }

  // Form Input Functions - Education
  function addEducation() {
    const educationHtml = `
              <div class="card education-card">
                  <div class="card-header">
                      <input type="text" class="edu-degree-input" placeholder="Degree e.g. Bachelor of Science">
                      <div class="card-actions">
                          <button class="btn icon-btn delete-education" title="Delete">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-content">
                      <div class="form-row">
                          <div class="form-group">
                              <label>Field of Study</label>
                              <input type="text" class="edu-field-input" placeholder="e.g. Computer Science">
                          </div>
                          <div class="form-group">
                              <label>School</label>
                              <input type="text" class="edu-school-input" placeholder="e.g. University of Technology">
                          </div>
                      </div>
                      <div class="form-row">
                          <div class="form-group">
                              <label>Location</label>
                              <input type="text" class="edu-location-input" placeholder="e.g. New York, NY">
                          </div>
                          <div class="form-group">
                              <label>GPA (optional)</label>
                              <input type="text" class="edu-gpa-input" placeholder="e.g. 3.8/4.0">
                          </div>
                      </div>
                      <div class="form-row">
                          <div class="form-group">
                              <label>Start Date</label>
                              <input type="month" class="edu-start-date-input">
                          </div>
                          <div class="form-group">
                              <label>End Date</label>
                              <input type="month" class="edu-end-date-input">
                          </div>
                          <div class="form-group checkbox-group">
                              <input type="checkbox" class="edu-current-input" id="edu-current-${Date.now()}">
                              <label for="edu-current-${Date.now()}">Current education</label>
                          </div>
                      </div>
                      <div class="form-group">
                          <label>Description (optional)</label>
                          <textarea class="edu-description-input" rows="3" placeholder="Achievements, activities, courses..."></textarea>
                      </div>
                  </div>
              </div>
          `;

    // Add to DOM
    educationEmptyState.style.display = "none";
    educationActions.style.display = "flex";

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = educationHtml;
    const educationCard = tempContainer.firstElementChild;

    educationItems.appendChild(educationCard);

    // Set up event listeners
    const degreeInput = educationCard.querySelector(".edu-degree-input");
    const fieldInput = educationCard.querySelector(".edu-field-input");
    const schoolInput = educationCard.querySelector(".edu-school-input");
    const locationInput = educationCard.querySelector(".edu-location-input");
    const gpaInput = educationCard.querySelector(".edu-gpa-input");
    const startDateInput = educationCard.querySelector(".edu-start-date-input");
    const endDateInput = educationCard.querySelector(".edu-end-date-input");
    const currentEduInput = educationCard.querySelector(".edu-current-input");
    const descriptionInput = educationCard.querySelector(
      ".edu-description-input"
    );
    const deleteButton = educationCard.querySelector(".delete-education");

    // Input change handlers
    [
      degreeInput,
      fieldInput,
      schoolInput,
      locationInput,
      gpaInput,
      startDateInput,
      endDateInput,
      descriptionInput,
    ].forEach((input) => {
      input.addEventListener("input", updateEducationData);
    });

    currentEduInput.addEventListener("change", function () {
      endDateInput.disabled = this.checked;
      if (this.checked) {
        endDateInput.value = "";
      }
      updateEducationData();
    });

    deleteButton.addEventListener("click", function () {
      educationCard.remove();
      updateEducationData();

      if (educationItems.children.length === 0) {
        educationEmptyState.style.display = "flex";
        educationActions.style.display = "none";
      }
    });
  }

  function updateEducationData() {
    const educationData = [];
    const educationCards = document.querySelectorAll(".education-card");

    educationCards.forEach((card) => {
      const degree = card.querySelector(".edu-degree-input").value;
      const field = card.querySelector(".edu-field-input").value;
      const school = card.querySelector(".edu-school-input").value;
      const location = card.querySelector(".edu-location-input").value;
      const gpa = card.querySelector(".edu-gpa-input").value;
      const startDate = card.querySelector(".edu-start-date-input").value;
      const endDate = card.querySelector(".edu-end-date-input").value;
      const current = card.querySelector(".edu-current-input").checked;
      const description = card.querySelector(".edu-description-input").value;

      educationData.push({
        degree,
        field,
        school,
        location,
        gpa,
        startDate,
        endDate,
        current,
        description,
      });
    });

    resumeData.education = educationData;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("education");
  }

  function updateEducationPreview() {
    const previewEducation = document.getElementById("preview-education");

    if (!previewEducation) return;

    if (resumeData.education.length === 0) {
      previewEducation.innerHTML =
        '<p class="empty-section-placeholder">No education added yet</p>';
      return;
    }

    previewEducation.innerHTML = "";

    resumeData.education.forEach((education) => {
      const eduItem = document.createElement("div");
      eduItem.className = "education-item";

      const formattedStartDate = formatDate(education.startDate);
      const formattedEndDate = education.current
        ? "Present"
        : formatDate(education.endDate);

      if (currentTemplate === "professional" || currentTemplate === "modern") {
        eduItem.innerHTML = `
                      <div class="edu-header">
                          <div>
                              <div class="degree">${education.degree}${
          education.field ? ` in ${education.field}` : ""
        }</div>
                              <div class="institution">${education.school}${
          education.location ? `, ${education.location}` : ""
        }</div>
                          </div>
                          <div class="edu-date">${formattedStartDate} - ${formattedEndDate}</div>
                      </div>
                      ${
                        education.gpa
                          ? `<div class="edu-gpa">GPA: ${education.gpa}</div>`
                          : ""
                      }
                      ${
                        education.description
                          ? `<div class="edu-description">${education.description}</div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "minimal") {
        eduItem.innerHTML = `
                      <div class="degree">${education.degree}${
          education.field ? ` in ${education.field}` : ""
        }</div>
                      <div class="institution">${education.school}${
          education.location ? `, ${education.location}` : ""
        }</div>
                      <div class="edu-date">${formattedStartDate} - ${formattedEndDate}</div>
                      ${
                        education.gpa
                          ? `<div class="edu-gpa">GPA: ${education.gpa}</div>`
                          : ""
                      }
                      ${
                        education.description
                          ? `<div class="edu-description">${education.description}</div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "creative" || currentTemplate === "tech") {
        eduItem.innerHTML = `
                      <div class="degree">${education.degree}${
          education.field ? ` in ${education.field}` : ""
        }</div>
                      <div class="institution">${
                        education.school
                      } | ${formattedStartDate} - ${formattedEndDate}</div>
                      ${
                        education.gpa
                          ? `<div class="edu-gpa">GPA: ${education.gpa}</div>`
                          : ""
                      }
                      ${
                        education.description
                          ? `<div class="edu-description">${education.description}</div>`
                          : ""
                      }
                  `;
      } else if (
        currentTemplate === "executive" ||
        currentTemplate === "academic"
      ) {
        eduItem.innerHTML = `
                      <div class="degree">${education.degree}${
          education.field ? ` in ${education.field}` : ""
        }</div>
                      <div class="institution">${education.school}</div>
                      <div class="edu-date">${formattedStartDate} - ${formattedEndDate}${
          education.location ? ` | ${education.location}` : ""
        }</div>
                      ${
                        education.gpa
                          ? `<div class="edu-gpa">GPA: ${education.gpa}</div>`
                          : ""
                      }
                      ${
                        education.description
                          ? `<div class="edu-description">${education.description}</div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "elegant") {
        eduItem.innerHTML = `
                      <div class="degree">${education.degree}${
          education.field ? ` in ${education.field}` : ""
        }</div>
                      <div class="institution">${education.school}</div>
                      <div class="edu-date">${formattedStartDate} - ${formattedEndDate}</div>
                      ${
                        education.gpa
                          ? `<div class="edu-gpa">GPA: ${education.gpa}</div>`
                          : ""
                      }
                      ${
                        education.description
                          ? `<div class="edu-description">${education.description}</div>`
                          : ""
                      }
                  `;
      }

      previewEducation.appendChild(eduItem);
    });
  }

  // Form Input Functions - Skills
  function addSkill(skillText) {
    if (!skillText || skillText.trim() === "") return;

    skillText = skillText.trim();

    // Check if skill already exists
    if (skills.includes(skillText)) {
      showToast(
        "Duplicate Skill",
        "This skill is already in your list",
        "warning"
      );
      return;
    }

    // Add to skills array
    skills.push(skillText);

    // Update resume data
    resumeData.skills = [...skills];

    // Clear input
    skillsInput.value = "";

    // Render skills chips
    renderSkillsChips();

    // Add skill level if enabled
    if (showSkillLevels.checked) {
      addSkillLevel(skillText);
    }

    // Update resume preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("skills");
  }

  function renderSkillsChips() {
    skillsChips.innerHTML = "";

    skills.forEach((skill) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.innerHTML = `
                  ${skill}
                  <span class="remove-chip" data-skill="${skill}">
                      <i class="fas fa-times"></i>
                  </span>
              `;

      skillsChips.appendChild(chip);

      // Add remove event
      const removeBtn = chip.querySelector(".remove-chip");
      removeBtn.addEventListener("click", () => {
        removeSkill(skill);
      });
    });
  }

  function removeSkill(skill) {
    // Remove from skills array
    const index = skills.indexOf(skill);
    if (index !== -1) {
      skills.splice(index, 1);
    }

    // Update resume data
    resumeData.skills = [...skills];

    // Remove skill level if exists
    if (resumeData.skillLevels[skill]) {
      delete resumeData.skillLevels[skill];
    }

    // Re-render skills chips
    renderSkillsChips();

    // Re-render skill levels
    renderSkillLevels();

    // Update resume preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("skills");
  }

  function generateSkillSuggestions() {
    skillSuggestionsList.innerHTML = "";

    // Get random skills from categories
    const getRandomItems = (array, count) => {
      const shuffled = [...array].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    // Select different categories based on the job title or already added skills
    let categoriesWeights = {
      technical: 3,
      design: 1,
      business: 1,
      soft: 2,
    };

    // Adjust weights based on job title
    const jobTitle = jobTitleInput.value.toLowerCase();
    if (
      jobTitle.includes("develop") ||
      jobTitle.includes("engineer") ||
      jobTitle.includes("programmer")
    ) {
      categoriesWeights.technical = 5;
      categoriesWeights.design = 1;
    } else if (
      jobTitle.includes("design") ||
      jobTitle.includes("ui") ||
      jobTitle.includes("ux")
    ) {
      categoriesWeights.design = 5;
      categoriesWeights.technical = 2;
    } else if (
      jobTitle.includes("manager") ||
      jobTitle.includes("director") ||
      jobTitle.includes("lead")
    ) {
      categoriesWeights.business = 4;
      categoriesWeights.soft = 3;
    }

    // Create weighted array of categories
    const weightedCategories = [];
    for (const [category, weight] of Object.entries(categoriesWeights)) {
      for (let i = 0; i < weight; i++) {
        weightedCategories.push(category);
      }
    }

    // Get 10 random skills avoiding duplicates with existing skills
    const suggestedSkills = [];
    const maxSuggestions = 10;

    while (suggestedSkills.length < maxSuggestions) {
      // Pick random category from weighted categories
      const randomCategory =
        weightedCategories[
          Math.floor(Math.random() * weightedCategories.length)
        ];
      const categorySkills = skillSuggestions[randomCategory];

      // Get a random skill from the category
      const randomSkill =
        categorySkills[Math.floor(Math.random() * categorySkills.length)];

      // Add if not already in skills or suggestions
      if (
        !skills.includes(randomSkill) &&
        !suggestedSkills.includes(randomSkill)
      ) {
        suggestedSkills.push(randomSkill);
      }

      // Prevent infinite loop if we can't find enough unique skills
      if (
        suggestedSkills.length === 0 &&
        skills.length >= categorySkills.length
      ) {
        break;
      }
    }

    // Render suggestions
    suggestedSkills.forEach((skill) => {
      const suggestionChip = document.createElement("div");
      suggestionChip.className = "suggestion-chip";
      suggestionChip.innerHTML = `
                  <i class="fas fa-plus"></i>
                  ${skill}
              `;

      suggestionChip.addEventListener("click", () => {
        addSkill(skill);
      });

      skillSuggestionsList.appendChild(suggestionChip);
    });
  }

  function toggleSkillLevels() {
    if (showSkillLevels.checked) {
      skillLevelsContainer.classList.remove("disabled");
      renderSkillLevels();
    } else {
      skillLevelsContainer.classList.add("disabled");
    }

    updateResumePreview();
  }

  function addSkillLevel(skill) {
    // Initialize skill level if not exists
    if (!resumeData.skillLevels[skill]) {
      resumeData.skillLevels[skill] = 3; // Default level (1-5)
    }

    renderSkillLevels();
  }

  function renderSkillLevels() {
    skillLevelsContainer.innerHTML = "";

    if (skills.length === 0) {
      skillLevelsContainer.innerHTML = `
                  <div class="empty-state-inline">
                      <p>Add skills above to set proficiency levels</p>
                  </div>
              `;
      return;
    }

    skills.forEach((skill) => {
      const skillLevel = resumeData.skillLevels[skill] || 3;

      const skillLevelItem = document.createElement("div");
      skillLevelItem.className = "skill-level-item";
      skillLevelItem.innerHTML = `
                  <div class="skill-name">${skill}</div>
                  <div class="skill-rating" data-skill="${skill}">
                      <div class="rating-dot ${
                        skillLevel >= 1 ? "filled" : ""
                      }" data-level="1"></div>
                      <div class="rating-dot ${
                        skillLevel >= 2 ? "filled" : ""
                      }" data-level="2"></div>
                      <div class="rating-dot ${
                        skillLevel >= 3 ? "filled" : ""
                      }" data-level="3"></div>
                      <div class="rating-dot ${
                        skillLevel >= 4 ? "filled" : ""
                      }" data-level="4"></div>
                      <div class="rating-dot ${
                        skillLevel >= 5 ? "filled" : ""
                      }" data-level="5"></div>
                  </div>
              `;

      skillLevelsContainer.appendChild(skillLevelItem);

      // Add event listeners to dots
      const ratingDots = skillLevelItem.querySelectorAll(".rating-dot");
      ratingDots.forEach((dot) => {
        dot.addEventListener("click", () => {
          const level = parseInt(dot.getAttribute("data-level"));
          updateSkillLevel(skill, level);
        });
      });
    });
  }

  function updateSkillLevel(skill, level) {
    resumeData.skillLevels[skill] = level;

    // Update UI
    const skillRating = document.querySelector(
      `.skill-rating[data-skill="${skill}"]`
    );
    if (skillRating) {
      const dots = skillRating.querySelectorAll(".rating-dot");
      dots.forEach((dot) => {
        const dotLevel = parseInt(dot.getAttribute("data-level"));
        dot.classList.toggle("filled", dotLevel <= level);
      });
    }

    // Update preview
    updateResumePreview();
  }

  function updateSkillsPreview() {
    const previewSkills = document.getElementById("preview-skills");

    if (!previewSkills) return;

    if (resumeData.skills.length === 0) {
      previewSkills.innerHTML =
        '<p class="empty-section-placeholder">No skills added yet</p>';
      return;
    }

    previewSkills.innerHTML = "";

    if (currentTemplate === "minimal") {
      resumeData.skills.forEach((skill) => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.textContent = skill;
        previewSkills.appendChild(skillItem);
      });
    } else if (currentTemplate === "modern") {
      resumeData.skills.forEach((skill) => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";

        if (showSkillLevels.checked && resumeData.skillLevels[skill]) {
          const level = resumeData.skillLevels[skill];
          skillItem.textContent = `${skill}`;

          // Add visual indicator for level
          const levelIndicator = document.createElement("div");
          levelIndicator.className = "skill-level-indicator";

          for (let i = 1; i <= 5; i++) {
            const dot = document.createElement("span");
            dot.className = i <= level ? "level-dot filled" : "level-dot";
            levelIndicator.appendChild(dot);
          }

          skillItem.appendChild(levelIndicator);
        } else {
          skillItem.textContent = skill;
        }

        previewSkills.appendChild(skillItem);
      });
    } else {
      resumeData.skills.forEach((skill) => {
        const skillItem = document.createElement("div");
        skillItem.className = "skill-item";
        skillItem.textContent = skill;
        previewSkills.appendChild(skillItem);
      });
    }
  }

  // Form Input Functions - Projects
  function addProject() {
    const projectHtml = `
              <div class="card project-card">
                  <div class="card-header">
                      <input type="text" class="project-name-input" placeholder="Project Name">
                      <div class="card-actions">
                          <button class="btn icon-btn delete-project" title="Delete">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-content">
                      <div class="form-row">
                          <div class="form-group">
                              <label>Project URL (optional)</label>
                              <input type="url" class="project-url-input" placeholder="e.g. github.com/username/project">
                          </div>
                          <div class="form-group">
                              <label>Date (optional)</label>
                              <input type="month" class="project-date-input">
                          </div>
                      </div>
                      <div class="form-group">
                          <label>Description</label>
                          <textarea class="project-description-input" rows="3" placeholder="Describe the project, technologies used, and your role..."></textarea>
                      </div>
                      <div class="form-group">
                          <label>Technologies Used (comma separated)</label>
                          <input type="text" class="project-tech-input" placeholder="e.g. React, Node.js, MongoDB">
                      </div>
                  </div>
              </div>
          `;

    // Add to DOM
    projectsEmptyState.style.display = "none";
    projectsActions.style.display = "flex";

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = projectHtml;
    const projectCard = tempContainer.firstElementChild;

    projectItems.appendChild(projectCard);

    // Set up event listeners
    const nameInput = projectCard.querySelector(".project-name-input");
    const urlInput = projectCard.querySelector(".project-url-input");
    const dateInput = projectCard.querySelector(".project-date-input");
    const descriptionInput = projectCard.querySelector(
      ".project-description-input"
    );
    const techInput = projectCard.querySelector(".project-tech-input");
    const deleteButton = projectCard.querySelector(".delete-project");

    // Input change handlers
    [nameInput, urlInput, dateInput, descriptionInput, techInput].forEach(
      (input) => {
        input.addEventListener("input", updateProjectsData);
      }
    );

    deleteButton.addEventListener("click", function () {
      projectCard.remove();
      updateProjectsData();

      if (projectItems.children.length === 0) {
        projectsEmptyState.style.display = "flex";
        projectsActions.style.display = "none";
      }
    });
  }

  function updateProjectsData() {
    const projectsData = [];
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach((card) => {
      const name = card.querySelector(".project-name-input").value;
      const url = card.querySelector(".project-url-input").value;
      const date = card.querySelector(".project-date-input").value;
      const description = card.querySelector(
        ".project-description-input"
      ).value;
      const technologies = card
        .querySelector(".project-tech-input")
        .value.split(",")
        .map((tech) => tech.trim())
        .filter((tech) => tech !== "");

      projectsData.push({
        name,
        url,
        date,
        description,
        technologies,
      });
    });

    resumeData.projects = projectsData;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("projects");
  }

  function updateProjectsPreview() {
    const previewProjects = document.getElementById("preview-projects");

    if (!previewProjects) return;

    if (resumeData.projects.length === 0) {
      previewProjects.innerHTML =
        '<p class="empty-section-placeholder">No projects added yet</p>';
      return;
    }

    previewProjects.innerHTML = "";

    resumeData.projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.className = "project-item";

      const projectNameHtml = project.url
        ? `<a href="${project.url}" target="_blank" class="project-name">${project.name}</a>`
        : `<div class="project-name">${project.name}</div>`;

      if (currentTemplate === "professional" || currentTemplate === "modern") {
        projectItem.innerHTML = `
                      <div class="project-header">
                          <div>${projectNameHtml}</div>
                          ${
                            project.date
                              ? `<div class="project-date">${formatDate(
                                  project.date
                                )}</div>`
                              : ""
                          }
                      </div>
                      <div class="project-description">${
                        project.description
                      }</div>
                      ${
                        project.technologies.length > 0
                          ? `<div class="project-tech">
                              ${project.technologies
                                .map(
                                  (tech) =>
                                    `<span class="tech-item">${tech}</span>`
                                )
                                .join("")}
                          </div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "minimal") {
        projectItem.innerHTML = `
                      <div>${projectNameHtml}</div>
                      ${
                        project.date
                          ? `<div class="project-date">${formatDate(
                              project.date
                            )}</div>`
                          : ""
                      }
                      <div class="project-description">${
                        project.description
                      }</div>
                      ${
                        project.technologies.length > 0
                          ? `<div class="project-tech">
                              Technologies: ${project.technologies.join(", ")}
                          </div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "creative" || currentTemplate === "tech") {
        projectItem.innerHTML = `
                      <div>${projectNameHtml}</div>
                      ${
                        project.date
                          ? `<div class="project-date">${formatDate(
                              project.date
                            )}</div>`
                          : ""
                      }
                      <div class="project-description">${
                        project.description
                      }</div>
                      ${
                        project.technologies.length > 0
                          ? `<div class="project-tech">
                              ${project.technologies
                                .map(
                                  (tech) =>
                                    `<span class="tech-item">${tech}</span>`
                                )
                                .join("")}
                          </div>`
                          : ""
                      }
                  `;
      } else {
        projectItem.innerHTML = `
                      <div>${projectNameHtml}</div>
                      ${
                        project.date
                          ? `<div class="project-date">${formatDate(
                              project.date
                            )}</div>`
                          : ""
                      }
                      <div class="project-description">${
                        project.description
                      }</div>
                      ${
                        project.technologies.length > 0
                          ? `<div class="project-tech">
                              Technologies: ${project.technologies.join(", ")}
                          </div>`
                          : ""
                      }
                  `;
      }

      previewProjects.appendChild(projectItem);
    });
  }

  // Form Input Functions - Languages
  function addLanguage() {
    const languageHtml = `
              <div class="card language-card">
                  <div class="card-header">
                      <input type="text" class="language-name-input" placeholder="Language Name e.g. English">
                      <div class="card-actions">
                          <button class="btn icon-btn delete-language" title="Delete">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-content">
                      <div class="form-group">
                          <label>Proficiency Level</label>
                          <select class="language-level-input">
                              <option value="Native">Native</option>
                              <option value="Fluent">Fluent</option>
                              <option value="Advanced">Advanced</option>
                              <option value="Intermediate">Intermediate</option>
                              <option value="Basic">Basic</option>
                          </select>
                      </div>
                  </div>
              </div>
          `;

    // Add to DOM
    languagesEmptyState.style.display = "none";
    languagesActions.style.display = "flex";

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = languageHtml;
    const languageCard = tempContainer.firstElementChild;

    languageItems.appendChild(languageCard);

    // Set up event listeners
    const nameInput = languageCard.querySelector(".language-name-input");
    const levelInput = languageCard.querySelector(".language-level-input");
    const deleteButton = languageCard.querySelector(".delete-language");

    // Input change handlers
    [nameInput, levelInput].forEach((input) => {
      input.addEventListener("input", updateLanguagesData);
      input.addEventListener("change", updateLanguagesData);
    });

    deleteButton.addEventListener("click", function () {
      languageCard.remove();
      updateLanguagesData();

      if (languageItems.children.length === 0) {
        languagesEmptyState.style.display = "flex";
        languagesActions.style.display = "none";
      }
    });
  }

  function updateLanguagesData() {
    const languagesData = [];
    const languageCards = document.querySelectorAll(".language-card");

    languageCards.forEach((card) => {
      const name = card.querySelector(".language-name-input").value;
      const level = card.querySelector(".language-level-input").value;

      if (name.trim() !== "") {
        languagesData.push({
          name,
          level,
        });
      }
    });

    resumeData.languages = languagesData;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("languages");
  }

  function updateLanguagesPreview() {
    const previewLanguages = document.getElementById("preview-languages");

    if (!previewLanguages) return;

    if (resumeData.languages.length === 0) {
      previewLanguages.innerHTML =
        '<p class="empty-section-placeholder">No languages added yet</p>';
      return;
    }

    previewLanguages.innerHTML = "";

    resumeData.languages.forEach((language) => {
      const languageItem = document.createElement("div");
      languageItem.className = "language-item";

      if (currentTemplate === "professional" || currentTemplate === "modern") {
        languageItem.innerHTML = `
                      <span class="language-name">${language.name}</span>
                      <span class="language-level">${language.level}</span>
                  `;
      } else if (currentTemplate === "minimal") {
        languageItem.innerHTML = `
                      <span class="language-name">${language.name} - ${language.level}</span>
                  `;
      } else if (currentTemplate === "creative" || currentTemplate === "tech") {
        languageItem.innerHTML = `
                      <div class="language-name">${language.name} - ${language.level}</div>
                  `;
      } else {
        languageItem.innerHTML = `
                      <span class="language-name">${language.name}</span>
                      <span class="language-level">${language.level}</span>
                  `;
      }

      previewLanguages.appendChild(languageItem);
    });
  }

  // Form Input Functions - Certifications
  function addCertification() {
    const certificationHtml = `
              <div class="card certification-card">
                  <div class="card-header">
                      <input type="text" class="certification-name-input" placeholder="Certification Name">
                      <div class="card-actions">
                          <button class="btn icon-btn delete-certification" title="Delete">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-content">
                      <div class="form-row">
                          <div class="form-group">
                              <label>Issuing Organization</label>
                              <input type="text" class="certification-issuer-input" placeholder="e.g. Microsoft, AWS, Google">
                          </div>
                          <div class="form-group">
                              <label>Date Earned</label>
                              <input type="month" class="certification-date-input">
                          </div>
                      </div>
                      <div class="form-row">
                          <div class="form-group">
                              <label>Expiration Date (optional)</label>
                              <input type="month" class="certification-expiry-input">
                          </div>
                          <div class="form-group checkbox-group">
                              <input type="checkbox" class="certification-noexpiry-input" id="cert-noexpiry-${Date.now()}">
                              <label for="cert-noexpiry-${Date.now()}">No Expiration</label>
                          </div>
                      </div>
                      <div class="form-group">
                          <label>Credential ID (optional)</label>
                          <input type="text" class="certification-id-input" placeholder="e.g. ABC123XYZ">
                      </div>
                      <div class="form-group">
                          <label>Credential URL (optional)</label>
                          <input type="url" class="certification-url-input" placeholder="e.g. certification-verify.com/abc123">
                      </div>
                  </div>
              </div>
          `;

    // Add to DOM
    certificationsEmptyState.style.display = "none";
    certificationsActions.style.display = "flex";

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = certificationHtml;
    const certificationCard = tempContainer.firstElementChild;

    certificationItems.appendChild(certificationCard);

    // Set up event listeners
    const nameInput = certificationCard.querySelector(
      ".certification-name-input"
    );
    const issuerInput = certificationCard.querySelector(
      ".certification-issuer-input"
    );
    const dateInput = certificationCard.querySelector(
      ".certification-date-input"
    );
    const expiryInput = certificationCard.querySelector(
      ".certification-expiry-input"
    );
    const noExpiryInput = certificationCard.querySelector(
      ".certification-noexpiry-input"
    );
    const idInput = certificationCard.querySelector(".certification-id-input");
    const urlInput = certificationCard.querySelector(
      ".certification-url-input"
    );
    const deleteButton = certificationCard.querySelector(
      ".delete-certification"
    );

    // Input change handlers
    [nameInput, issuerInput, dateInput, expiryInput, idInput, urlInput].forEach(
      (input) => {
        input.addEventListener("input", updateCertificationsData);
      }
    );

    noExpiryInput.addEventListener("change", function () {
      expiryInput.disabled = this.checked;
      if (this.checked) {
        expiryInput.value = "";
      }
      updateCertificationsData();
    });

    deleteButton.addEventListener("click", function () {
      certificationCard.remove();
      updateCertificationsData();

      if (certificationItems.children.length === 0) {
        certificationsEmptyState.style.display = "flex";
        certificationsActions.style.display = "none";
      }
    });
  }

  function updateCertificationsData() {
    const certificationsData = [];
    const certificationCards = document.querySelectorAll(".certification-card");

    certificationCards.forEach((card) => {
      const name = card.querySelector(".certification-name-input").value;
      const issuer = card.querySelector(".certification-issuer-input").value;
      const date = card.querySelector(".certification-date-input").value;
      const expiry = card.querySelector(".certification-expiry-input").value;
      const noExpiry = card.querySelector(
        ".certification-noexpiry-input"
      ).checked;
      const id = card.querySelector(".certification-id-input").value;
      const url = card.querySelector(".certification-url-input").value;

      if (name.trim() !== "") {
        certificationsData.push({
          name,
          issuer,
          date,
          expiry,
          noExpiry,
          id,
          url,
        });
      }
    });

    resumeData.certifications = certificationsData;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("certifications");
  }

  function updateCertificationsPreview() {
    const previewCertifications = document.getElementById(
      "preview-certifications"
    );

    if (!previewCertifications) return;

    if (resumeData.certifications.length === 0) {
      previewCertifications.innerHTML =
        '<p class="empty-section-placeholder">No certifications added yet</p>';
      return;
    }

    previewCertifications.innerHTML = "";

    resumeData.certifications.forEach((certification) => {
      const certItem = document.createElement("div");
      certItem.className = "certification-item";

      const certNameHtml = certification.url
        ? `<a href="${certification.url}" target="_blank" class="cert-name">${certification.name}</a>`
        : `<div class="cert-name">${certification.name}</div>`;

      const certDateHtml = formatDate(certification.date);
      const certExpiryHtml = certification.noExpiry
        ? "No Expiration"
        : certification.expiry
        ? `Expires: ${formatDate(certification.expiry)}`
        : "";

      if (currentTemplate === "professional" || currentTemplate === "modern") {
        certItem.innerHTML = `
                      <div class="cert-header">
                          <div>
                              ${certNameHtml}
                              <div class="cert-issuer">${
                                certification.issuer
                              }</div>
                          </div>
                          <div class="cert-date">${certDateHtml}</div>
                      </div>
                      ${
                        certification.id
                          ? `<div class="cert-id">Credential ID: ${certification.id}</div>`
                          : ""
                      }
                      ${
                        certExpiryHtml
                          ? `<div class="cert-expiry">${certExpiryHtml}</div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "minimal") {
        certItem.innerHTML = `
                      ${certNameHtml}
                      <div class="cert-issuer">${
                        certification.issuer
                      } | ${certDateHtml}</div>
                      ${
                        certification.id
                          ? `<div class="cert-id">Credential ID: ${certification.id}</div>`
                          : ""
                      }
                      ${
                        certExpiryHtml
                          ? `<div class="cert-expiry">${certExpiryHtml}</div>`
                          : ""
                      }
                  `;
      } else if (currentTemplate === "creative" || currentTemplate === "tech") {
        certItem.innerHTML = `
                      ${certNameHtml}
                      <div class="cert-issuer">${
                        certification.issuer
                      } | ${certDateHtml}</div>
                      ${
                        certification.id
                          ? `<div class="cert-id">Credential ID: ${certification.id}</div>`
                          : ""
                      }
                      ${
                        certExpiryHtml
                          ? `<div class="cert-expiry">${certExpiryHtml}</div>`
                          : ""
                      }
                  `;
      } else {
        certItem.innerHTML = `
                      ${certNameHtml}
                      <div class="cert-issuer">${certification.issuer}</div>
                      <div class="cert-date">${certDateHtml}</div>
                      ${
                        certification.id
                          ? `<div class="cert-id">Credential ID: ${certification.id}</div>`
                          : ""
                      }
                      ${
                        certExpiryHtml
                          ? `<div class="cert-expiry">${certExpiryHtml}</div>`
                          : ""
                      }
                  `;
      }

      previewCertifications.appendChild(certItem);
    });
  }

  // Form Input Functions - Interests
  function addInterest(interestText) {
    if (!interestText || interestText.trim() === "") return;

    interestText = interestText.trim();

    // Check if interest already exists
    if (interests.includes(interestText)) {
      showToast(
        "Duplicate Interest",
        "This interest is already in your list",
        "warning"
      );
      return;
    }

    // Add to interests array
    interests.push(interestText);

    // Update resume data
    resumeData.interests = [...interests];

    // Clear input
    interestsInput.value = "";

    // Render interests chips
    renderInterestsChips();

    // Update resume preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("interests");
  }

  function renderInterestsChips() {
    interestsChips.innerHTML = "";

    interests.forEach((interest) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.innerHTML = `
                  ${interest}
                  <span class="remove-chip" data-interest="${interest}">
                      <i class="fas fa-times"></i>
                  </span>
              `;

      interestsChips.appendChild(chip);

      // Add remove event
      const removeBtn = chip.querySelector(".remove-chip");
      removeBtn.addEventListener("click", () => {
        removeInterest(interest);
      });
    });
  }

  function removeInterest(interest) {
    // Remove from interests array
    const index = interests.indexOf(interest);
    if (index !== -1) {
      interests.splice(index, 1);
    }

    // Update resume data
    resumeData.interests = [...interests];

    // Re-render interests chips
    renderInterestsChips();

    // Update resume preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("interests");
  }

  function toggleInterestsSection() {
    resumeData.interests.show = showInterests.checked;
    updateResumePreview();
  }

  function updateInterestsPreview() {
    const previewInterests = document.getElementById("preview-interests");
    const interestsSection = document.getElementById(
      "preview-interests-section"
    );

    if (!previewInterests || !interestsSection) return;

    // Hide section if toggled off
    if (resumeData.interests.show === false) {
      interestsSection.style.display = "none";
      return;
    } else {
      interestsSection.style.display = "block";
    }

    if (resumeData.interests.length === 0) {
      previewInterests.innerHTML =
        '<p class="empty-section-placeholder">No interests added yet</p>';
      return;
    }

    previewInterests.innerHTML = "";

    if (currentTemplate === "minimal" || currentTemplate === "elegant") {
      // Minimal style as inline list
      const interestsList = document.createElement("div");
      interestsList.className = "interests-list";

      resumeData.interests.forEach((interest, index) => {
        const span = document.createElement("span");
        span.className = "interest-item";
        span.textContent = interest;

        interestsList.appendChild(span);

        if (index < resumeData.interests.length - 1) {
          const separator = document.createElement("span");
          separator.className = "interest-separator";
          separator.textContent = " • ";
          interestsList.appendChild(separator);
        }
      });

      previewInterests.appendChild(interestsList);
    } else {
      // Default style as list or grid
      resumeData.interests.forEach((interest) => {
        const interestItem = document.createElement("div");
        interestItem.className = "interest-item";
        interestItem.textContent = interest;
        previewInterests.appendChild(interestItem);
      });
    }
  }

  // Form Input Functions - References
  function toggleReferencesSection() {
    resumeData.references.show = showReferences.checked;
    updateResumePreview();
  }

  function setReferenceType(type) {
    // Update UI
    referenceOptions.forEach((option) => {
      option.classList.toggle(
        "active",
        option.getAttribute("data-option") === type
      );
    });

    // Update data
    resumeData.references.availableOnRequest = type === "available";

    // Show/hide references container
    referencesContainer.style.display = type === "provide" ? "block" : "none";

    // Update preview
    updateResumePreview();
  }

  function addReference() {
    const referenceHtml = `
              <div class="card reference-card">
                  <div class="card-header">
                      <input type="text" class="reference-name-input" placeholder="Reference Name">
                      <div class="card-actions">
                          <button class="btn icon-btn delete-reference" title="Delete">
                              <i class="fas fa-trash"></i>
                          </button>
                      </div>
                  </div>
                  <div class="card-content">
                      <div class="form-row">
                          <div class="form-group">
                              <label>Company</label>
                              <input type="text" class="reference-company-input" placeholder="e.g. ABC Corporation">
                          </div>
                          <div class="form-group">
                              <label>Job Title</label>
                              <input type="text" class="reference-title-input" placeholder="e.g. Senior Manager">
                          </div>
                      </div>
                      <div class="form-row">
                          <div class="form-group">
                              <label>Email</label>
                              <input type="email" class="reference-email-input" placeholder="e.g. john.doe@example.com">
                          </div>
                          <div class="form-group">
                              <label>Phone (optional)</label>
                              <input type="tel" class="reference-phone-input" placeholder="e.g. (123) 456-7890">
                          </div>
                      </div>
                      <div class="form-group">
                          <label>Relationship</label>
                          <input type="text" class="reference-relation-input" placeholder="e.g. Direct Manager, Colleague">
                      </div>
                  </div>
              </div>
          `;

    // Add to DOM
    referencesEmptyState.style.display = "none";

    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = referenceHtml;
    const referenceCard = tempContainer.firstElementChild;

    referenceItems.appendChild(referenceCard);

    // Set up event listeners
    const nameInput = referenceCard.querySelector(".reference-name-input");
    const companyInput = referenceCard.querySelector(
      ".reference-company-input"
    );
    const titleInput = referenceCard.querySelector(".reference-title-input");
    const emailInput = referenceCard.querySelector(".reference-email-input");
    const phoneInput = referenceCard.querySelector(".reference-phone-input");
    const relationInput = referenceCard.querySelector(
      ".reference-relation-input"
    );
    const deleteButton = referenceCard.querySelector(".delete-reference");

    // Input change handlers
    [
      nameInput,
      companyInput,
      titleInput,
      emailInput,
      phoneInput,
      relationInput,
    ].forEach((input) => {
      input.addEventListener("input", updateReferencesData);
    });

    deleteButton.addEventListener("click", function () {
      referenceCard.remove();
      updateReferencesData();

      if (referenceItems.children.length === 0) {
        referencesEmptyState.style.display = "flex";
      }
    });
  }

  function updateReferencesData() {
    const referencesData = [];
    const referenceCards = document.querySelectorAll(".reference-card");

    referenceCards.forEach((card) => {
      const name = card.querySelector(".reference-name-input").value;
      const company = card.querySelector(".reference-company-input").value;
      const title = card.querySelector(".reference-title-input").value;
      const email = card.querySelector(".reference-email-input").value;
      const phone = card.querySelector(".reference-phone-input").value;
      const relation = card.querySelector(".reference-relation-input").value;

      if (name.trim() !== "") {
        referencesData.push({
          name,
          company,
          title,
          email,
          phone,
          relation,
        });
      }
    });

    resumeData.references.items = referencesData;

    // Update preview
    updateResumePreview();

    // Update section status
    updateSectionStatus("references");
  }

  function updateReferencesPreview() {
    const previewReferences = document.getElementById("preview-references");
    const referencesSection = document.getElementById(
      "preview-references-section"
    );

    if (!previewReferences || !referencesSection) return;

    // Hide section if toggled off
    if (resumeData.references.show === false) {
      referencesSection.style.display = "none";
      return;
    } else {
      referencesSection.style.display = "block";
    }

    // Check if "available upon request"
    if (resumeData.references.availableOnRequest) {
      previewReferences.innerHTML =
        '<p class="references-available">References available upon request</p>';
      return;
    }

    // Check if empty
    if (resumeData.references.items.length === 0) {
      previewReferences.innerHTML =
        '<p class="empty-section-placeholder">No references added yet</p>';
      return;
    }

    // Render references
    previewReferences.innerHTML = "";

    resumeData.references.items.forEach((reference) => {
      const referenceItem = document.createElement("div");
      referenceItem.className = "reference-item";

      if (currentTemplate === "professional" || currentTemplate === "modern") {
        referenceItem.innerHTML = `
                      <div class="reference-name">${reference.name}</div>
                      <div class="reference-title">${reference.title} at ${
          reference.company
        }</div>
                      <div class="reference-relation">${
                        reference.relation
                      }</div>
                      <div class="reference-contact">
                          <span class="reference-email">${
                            reference.email
                          }</span>
                          ${
                            reference.phone
                              ? `<span class="reference-phone"> | ${reference.phone}</span>`
                              : ""
                          }
                      </div>
                  `;
      } else if (currentTemplate === "minimal") {
        referenceItem.innerHTML = `
                      <div class="reference-name">${reference.name} | ${
          reference.title
        }</div>
                      <div class="reference-company">${reference.company}</div>
                      <div class="reference-contact">${reference.email}${
          reference.phone ? ` | ${reference.phone}` : ""
        }</div>
                  `;
      } else {
        referenceItem.innerHTML = `
                      <div class="reference-name">${reference.name}</div>
                      <div class="reference-title">${reference.title} at ${
          reference.company
        }</div>
                      <div class="reference-relation">${
                        reference.relation
                      }</div>
                      <div class="reference-contact">
                          <span class="reference-email">${
                            reference.email
                          }</span>
                          ${
                            reference.phone
                              ? `<span class="reference-phone"> | ${reference.phone}</span>`
                              : ""
                          }
                      </div>
                  `;
      }

      previewReferences.appendChild(referenceItem);
    });
  }

  // Save and Export Functions
  function finalizeResume() {
    showSaveModal();
  }

  function showSaveModal() {
    saveModal.classList.add("active");

    if (!resumeData.meta.name || resumeData.meta.name === "Untitled Resume") {
      // Suggest a name based on job title and user name
      const name = resumeData.personal.fullname;
      const jobTitle = resumeData.personal.jobTitle;

      if (name && jobTitle) {
        resumeNameInput.value = `${name.split(" ")[0]}'s ${jobTitle} Resume`;
      } else if (jobTitle) {
        resumeNameInput.value = `${jobTitle} Resume`;
      } else if (name) {
        resumeNameInput.value = `${name}'s Resume`;
      } else {
        resumeNameInput.value = "My Resume";
      }
    } else {
      resumeNameInput.value = resumeData.meta.name;
    }

    resumeDescriptionInput.value = resumeData.meta.description || "";
  }

  function saveResume() {
    // Update resume metadata
    resumeData.meta.name = resumeNameInput.value || "Untitled Resume";
    resumeData.meta.description = resumeDescriptionInput.value || "";
    resumeData.meta.updatedAt = new Date().toISOString();

    // Generate unique ID if not exists
    if (!resumeData.meta.id) {
      resumeData.meta.id = generateUniqueId();
    }

    // Save to localStorage
    const resumes = JSON.parse(localStorage.getItem("resumes") || "[]");

    // Check if resume already exists
    const existingIndex = resumes.findIndex(
      (resume) => resume.meta.id === resumeData.meta.id
    );

    if (existingIndex !== -1) {
      // Update existing
      resumes[existingIndex] = resumeData;
    } else {
      // Add new
      resumes.push(resumeData);
    }

    localStorage.setItem("resumes", JSON.stringify(resumes));
    localStorage.setItem("currentResumeId", resumeData.meta.id);

    // Close modal
    saveModal.classList.remove("active");

    // Show toast
    showToast(
      "Resume Saved",
      "Your resume has been saved successfully",
      "success"
    );

    // Update saved resumes list
    updateSavedResumesList();
  }

  function downloadPDF() {
    // Prepare the resume element for export
    const resumeElement = document.querySelector(".resume");
    const originalTransform = resumeElement.style.transform;
    resumeElement.style.transform = "none";

    // Create options for html2pdf
    const options = {
      margin: 10,
      filename: `${resumeData.meta.name || "Resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate PDF
    html2pdf()
      .set(options)
      .from(resumeElement)
      .save()
      .then(() => {
        // Restore original transform
        resumeElement.style.transform = originalTransform;

        // Show toast
        showToast(
          "PDF Downloaded",
          "Your resume has been downloaded as a PDF",
          "success"
        );
      });
  }

  function downloadDOCX() {
    // Get the resume HTML content
    const resumeElement = document.querySelector(".resume");
    const content = resumeElement.innerHTML;

    // Convert HTML to DOCX
    const converted = htmlDocx.asBlob(content);

    // Create download link
    const url = window.URL.createObjectURL(converted);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resumeData.meta.name || "Resume"}.docx`;
    document.body.appendChild(a);
    a.click();

    // Clean up
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);

    // Show toast
    showToast(
      "DOCX Downloaded",
      "Your resume has been downloaded as a DOCX file",
      "success"
    );
  }

  function downloadTXT() {
    // Create a simple text representation of the resume
    let textContent = `${resumeData.personal.fullname || "Your Name"}\n`;
    textContent += `${resumeData.personal.jobTitle || "Your Title"}\n`;
    textContent += `${resumeData.personal.email || ""} | ${
      resumeData.personal.phone || ""
    } | ${resumeData.personal.location || ""}\n\n`;

    if (resumeData.summary) {
      textContent += `PROFESSIONAL SUMMARY\n`;
      textContent += `${resumeData.summary}\n\n`;
    }

    if (resumeData.experience.length > 0) {
      textContent += `WORK EXPERIENCE\n`;
      resumeData.experience.forEach((exp) => {
        textContent += `${exp.jobTitle} at ${exp.company}\n`;
        textContent += `${formatDate(exp.startDate)} - ${
          exp.currentJob ? "Present" : formatDate(exp.endDate)
        }\n`;
        // Convert HTML description to plain text (simplified)
        const description = exp.description.replace(/<[^>]*>/g, "");
        textContent += `${description}\n\n`;
      });
    }

    if (resumeData.education.length > 0) {
      textContent += `EDUCATION\n`;
      resumeData.education.forEach((edu) => {
        textContent += `${edu.degree} in ${edu.field}\n`;
        textContent += `${edu.school}, ${edu.location}\n`;
        textContent += `${formatDate(edu.startDate)} - ${
          edu.current ? "Present" : formatDate(edu.endDate)
        }\n\n`;
      });
    }

    if (resumeData.skills.length > 0) {
      textContent += `SKILLS\n`;
      textContent += resumeData.skills.join(", ") + "\n\n";
    }

    // Create download link
    const blob = new Blob([textContent], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resumeData.meta.name || "Resume"}.txt`;
    document.body.appendChild(a);
    a.click();

    // Clean up
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 0);

    // Show toast
    showToast(
      "TXT Downloaded",
      "Your resume has been downloaded as a text file",
      "success"
    );
  }

  function printResume() {
    window.print();
  }

  // Resume Management Functions
  function generateUniqueId() {
    return (
      "resume_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
    );
  }

  function loadResumeData() {
    // Check if there's a current resume
    const currentResumeId = localStorage.getItem("currentResumeId");
    const resumes = JSON.parse(localStorage.getItem("resumes") || "[]");

    if (currentResumeId && resumes.length > 0) {
      const currentResume = resumes.find(
        (resume) => resume.meta.id === currentResumeId
      );
      if (currentResume) {
        resumeData = currentResume;

        // Update UI elements with loaded data
        populateFormWithData();

        // Update preview
        updateResumePreview();
      }
    }

    // Update saved resumes list
    updateSavedResumesList();
  }

  function populateFormWithData() {
    // Personal Info
    fullnameInput.value = resumeData.personal.fullname || "";
    jobTitleInput.value = resumeData.personal.jobTitle || "";
    locationInput.value = resumeData.personal.location || "";
    emailInput.value = resumeData.personal.email || "";
    phoneInput.value = resumeData.personal.phone || "";
    websiteInput.value = resumeData.personal.website || "";
    linkedinInput.value = resumeData.personal.linkedin || "";

    // Social Links
    socialLinksContainer.innerHTML = "";
    if (
      resumeData.personal.socialLinks &&
      resumeData.personal.socialLinks.length > 0
    ) {
      resumeData.personal.socialLinks.forEach((link) => {
        addSocialLink();
        const latestRow = socialLinksContainer.lastElementChild;
        latestRow.querySelector(".social-platform").value = link.platform;
        latestRow.querySelector(".social-url").value = link.url;

        // Update icon
        const platformIcons = {
          github: "fa-github",
          twitter: "fa-twitter",
          instagram: "fa-instagram",
          facebook: "fa-facebook",
          youtube: "fa-youtube",
          medium: "fa-medium",
          behance: "fa-behance",
          dribbble: "fa-dribbble",
          other: "fa-link",
        };

        latestRow.querySelector(".social-icon").className = `fab ${
          platformIcons[link.platform]
        } input-icon social-icon`;
      });
    }

    // Summary
    summaryInput.value = resumeData.summary || "";
    countCharacters(summaryInput, summaryCharCount, 1500);

    // Experience
    experienceItems.innerHTML = "";
    if (resumeData.experience && resumeData.experience.length > 0) {
      experienceEmptyState.style.display = "none";
      experienceActions.style.display = "flex";
      renderExperienceItems();
    } else {
      experienceEmptyState.style.display = "flex";
      experienceActions.style.display = "none";
    }

    // Education
    educationItems.innerHTML = "";
    if (resumeData.education && resumeData.education.length > 0) {
      educationEmptyState.style.display = "none";
      educationActions.style.display = "flex";

      resumeData.education.forEach((education) => {
        addEducation();
        const latestCard = educationItems.lastElementChild;

        latestCard.querySelector(".edu-degree-input").value =
          education.degree || "";
        latestCard.querySelector(".edu-field-input").value =
          education.field || "";
        latestCard.querySelector(".edu-school-input").value =
          education.school || "";
        latestCard.querySelector(".edu-location-input").value =
          education.location || "";
        latestCard.querySelector(".edu-gpa-input").value = education.gpa || "";
        latestCard.querySelector(".edu-start-date-input").value =
          education.startDate || "";
        latestCard.querySelector(".edu-end-date-input").value =
          education.endDate || "";
        latestCard.querySelector(".edu-current-input").checked =
          education.current || false;
        latestCard.querySelector(".edu-description-input").value =
          education.description || "";

        if (education.current) {
          latestCard.querySelector(".edu-end-date-input").disabled = true;
        }
      });
    } else {
      educationEmptyState.style.display = "flex";
      educationActions.style.display = "none";
    }

    // Skills
    skills = [...(resumeData.skills || [])];
    renderSkillsChips();

    // Skill Levels
    showSkillLevels.checked = resumeData.meta.showSkillLevels || false;
    toggleSkillLevels();

    // Projects
    projectItems.innerHTML = "";
    if (resumeData.projects && resumeData.projects.length > 0) {
      projectsEmptyState.style.display = "none";
      projectsActions.style.display = "flex";

      resumeData.projects.forEach((project) => {
        addProject();
        const latestCard = projectItems.lastElementChild;

        latestCard.querySelector(".project-name-input").value =
          project.name || "";
        latestCard.querySelector(".project-url-input").value =
          project.url || "";
        latestCard.querySelector(".project-date-input").value =
          project.date || "";
        latestCard.querySelector(".project-description-input").value =
          project.description || "";
        latestCard.querySelector(".project-tech-input").value =
          project.technologies ? project.technologies.join(", ") : "";
      });
    } else {
      projectsEmptyState.style.display = "flex";
      projectsActions.style.display = "none";
    }

    // Languages
    languageItems.innerHTML = "";
    if (resumeData.languages && resumeData.languages.length > 0) {
      languagesEmptyState.style.display = "none";
      languagesActions.style.display = "flex";

      resumeData.languages.forEach((language) => {
        addLanguage();
        const latestCard = languageItems.lastElementChild;

        latestCard.querySelector(".language-name-input").value =
          language.name || "";
        latestCard.querySelector(".language-level-input").value =
          language.level || "Intermediate";
      });
    } else {
      languagesEmptyState.style.display = "flex";
      languagesActions.style.display = "none";
    }

    // Certifications
    certificationItems.innerHTML = "";
    if (resumeData.certifications && resumeData.certifications.length > 0) {
      certificationsEmptyState.style.display = "none";
      certificationsActions.style.display = "flex";

      resumeData.certifications.forEach((certification) => {
        addCertification();
        const latestCard = certificationItems.lastElementChild;

        latestCard.querySelector(".certification-name-input").value =
          certification.name || "";
        latestCard.querySelector(".certification-issuer-input").value =
          certification.issuer || "";
        latestCard.querySelector(".certification-date-input").value =
          certification.date || "";
        latestCard.querySelector(".certification-expiry-input").value =
          certification.expiry || "";
        latestCard.querySelector(".certification-noexpiry-input").checked =
          certification.noExpiry || false;
        latestCard.querySelector(".certification-id-input").value =
          certification.id || "";
        latestCard.querySelector(".certification-url-input").value =
          certification.url || "";

        if (certification.noExpiry) {
          latestCard.querySelector(
            ".certification-expiry-input"
          ).disabled = true;
        }
      });
    } else {
      certificationsEmptyState.style.display = "flex";
      certificationsActions.style.display = "none";
    }

    // Interests
    interests = [...(resumeData.interests || [])];
    renderInterestsChips();
    showInterests.checked = resumeData.meta.showInterests !== false;

    // References
    referenceItems.innerHTML = "";
    showReferences.checked = resumeData.references?.show !== false;

    // Set reference type
    if (resumeData.references?.availableOnRequest) {
      setReferenceType("available");
    } else {
      setReferenceType("provide");
    }

    if (
      resumeData.references?.items &&
      resumeData.references.items.length > 0
    ) {
      referencesEmptyState.style.display = "none";

      resumeData.references.items.forEach((reference) => {
        addReference();
        const latestCard = referenceItems.lastElementChild;

        latestCard.querySelector(".reference-name-input").value =
          reference.name || "";
        latestCard.querySelector(".reference-company-input").value =
          reference.company || "";
        latestCard.querySelector(".reference-title-input").value =
          reference.title || "";
        latestCard.querySelector(".reference-email-input").value =
          reference.email || "";
        latestCard.querySelector(".reference-phone-input").value =
          reference.phone || "";
        latestCard.querySelector(".reference-relation-input").value =
          reference.relation || "";
      });
    } else {
      referencesEmptyState.style.display = "flex";
    }

    // Template and Styling
    currentTemplate = resumeData.meta.template || "professional";
    templateCards.forEach((card) => {
      card.classList.toggle(
        "active",
        card.getAttribute("data-template") === currentTemplate
      );
    });

    // Make sure to restructure content when changing template
    restructureResumeContent(currentTemplate);

    // Apply saved color
    if (resumeData.meta.color) {
      changeColorTheme(resumeData.meta.color);
    }

    // Apply saved font
    if (resumeData.meta.font) {
      fontSelector.value = resumeData.meta.font;
      changeFontFamily(resumeData.meta.font);
    }

    // Apply saved font size
    if (resumeData.meta.fontSize) {
      fontSizeSlider.value = resumeData.meta.fontSize;
      fontSizeValue.textContent = `${resumeData.meta.fontSize}%`;
      changeFontSize(resumeData.meta.fontSize);
    }

    // Apply saved spacing
    if (resumeData.meta.spacing) {
      spacingSlider.value = resumeData.meta.spacing;
      spacingValue.textContent = `${resumeData.meta.spacing}%`;
      changeSpacing(resumeData.meta.spacing);
    }

    // Update all section statuses
    updateAllSectionStatuses();
  }

  function updateSavedResumesList() {
    const resumes = JSON.parse(localStorage.getItem("resumes") || "[]");

    if (resumes.length === 0) {
      savedResumesList.innerHTML = `<p class="empty-state">No saved resumes yet</p>`;
      return;
    }

    savedResumesList.innerHTML = "";

    // Sort by last updated
    resumes.sort(
      (a, b) => new Date(b.meta.updatedAt) - new Date(a.meta.updatedAt)
    );

    resumes.forEach((resume) => {
      const resumeItem = document.createElement("div");
      resumeItem.className = "dropdown-item resume-item";
      resumeItem.setAttribute("data-id", resume.meta.id);

      const date = new Date(resume.meta.updatedAt);
      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString(
        [],
        { hour: "2-digit", minute: "2-digit" }
      )}`;

      resumeItem.innerHTML = `
                  <div class="resume-item-details">
                      <div class="resume-item-name">${
                        resume.meta.name || "Untitled Resume"
                      }</div>
                      <div class="resume-item-date">Last edited: ${formattedDate}</div>
                  </div>
              `;

      savedResumesList.appendChild(resumeItem);

      // Add click event
      resumeItem.addEventListener("click", () => {
        loadResume(resume.meta.id);
      });
    });
  }

  function loadResume(id) {
    const resumes = JSON.parse(localStorage.getItem("resumes") || "[]");
    const resume = resumes.find((r) => r.meta.id === id);

    if (resume) {
      // Ask for confirmation if current resume has unsaved changes
      if (hasUnsavedChanges()) {
        if (
          !confirm(
            "You have unsaved changes. Are you sure you want to load another resume?"
          )
        ) {
          return;
        }
      }

      resumeData = resume;
      localStorage.setItem("currentResumeId", id);

      // Update UI
      populateFormWithData();

      // Update preview
      updateResumePreview();

      // Show toast
      showToast(
        "Resume Loaded",
        `"${resume.meta.name}" has been loaded`,
        "success"
      );
    }
  }

  function hasUnsavedChanges() {
    // Check if the current resume matches the saved one
    const currentResumeId = localStorage.getItem("currentResumeId");
    const resumes = JSON.parse(localStorage.getItem("resumes") || "[]");

    if (currentResumeId) {
      const savedResume = resumes.find((r) => r.meta.id === currentResumeId);
      if (savedResume) {
        // Compare timestamps
        return (
          new Date(resumeData.meta.updatedAt) >
          new Date(savedResume.meta.updatedAt)
        );
      }
    }

    return false;
  }

  // Import Functions
  function showImportFileOverlay() {
    importFileOverlay.classList.add("active");
  }

  function hideImportFileOverlay() {
    importFileOverlay.classList.remove("active");
    importFileInput.value = "";
    startImportBtn.disabled = true;
    importDropArea.classList.remove("active");
  }

  function handleFileImport(files) {
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];

    // Update UI to show selected file
    importDropArea.innerHTML = `
              <i class="fas fa-file-alt"></i>
              <h3>${file.name}</h3>
              <p>File selected</p>
          `;

    startImportBtn.disabled = false;

    // Add click event to import button
    startImportBtn.onclick = () => {
      processImportedFile(file);
    };
  }

  function processImportedFile(file) {
    // Show loading spinner
    const originalHtml = startImportBtn.innerHTML;
    startImportBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Processing...';
    startImportBtn.disabled = true;

    const reader = new FileReader();

    reader.onload = function (e) {
      try {
        const fileContent = e.target.result;
        const fileExtension = file.name.split(".").pop().toLowerCase();

        if (fileExtension === "json") {
          // Parse JSON file
          const importedData = JSON.parse(fileContent);

          // Validate it's a resume file
          if (importedData.meta && importedData.personal) {
            // Generate new ID to avoid conflicts
            importedData.meta.id = generateUniqueId();
            importedData.meta.importedAt = new Date().toISOString();

            // Update current resume data
            resumeData = importedData;

            // Save it
            const resumes = JSON.parse(localStorage.getItem("resumes") || "[]");
            resumes.push(resumeData);
            localStorage.setItem("resumes", JSON.stringify(resumes));
            localStorage.setItem("currentResumeId", resumeData.meta.id);

            // Update UI
            populateFormWithData();
            updateResumePreview();
            updateSavedResumesList();

            // Hide overlay
            hideImportFileOverlay();

            // Show success message
            showToast(
              "Import Successful",
              "Resume has been imported successfully",
              "success"
            );
          } else {
            throw new Error("Invalid resume file format");
          }
        } else {
          // For other file types, use AI parsing in a real implementation
          // Here we'll just show an error message
          throw new Error("Only JSON files are supported at this time");
        }
      } catch (error) {
        console.error("Import error:", error);
        showToast("Import Failed", error.message, "error");
      } finally {
        // Restore button
        startImportBtn.innerHTML = originalHtml;
        startImportBtn.disabled = false;
      }
    };

    reader.onerror = function () {
      showToast("Import Failed", "Could not read the file", "error");
      startImportBtn.innerHTML = originalHtml;
      startImportBtn.disabled = false;
    };

    if (file.type === "application/json") {
      reader.readAsText(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  // AI Features
  function analyzeResume() {
    showAILoading("Analyzing your resume...");

    // Simulate AI analysis (in a real app, this would call an API)
    setTimeout(() => {
      hideAILoading();
      showAIAnalysisResults();
    }, 2000);
  }

  function improveContent() {
    // For demo purposes, just show the AI suggestions modal
    showAISuggestions();
  }

  function optimizeForATS() {
    showAILoading("Optimizing your resume for ATS...");

    // Simulate AI optimization (in a real app, this would call an API)
    setTimeout(() => {
      hideAILoading();
      showAIAnalysisResults();
    }, 2000);
  }

  function showAILoading(message) {
    const loadingText = document.querySelector(".ai-loading-text");
    loadingText.textContent = message || "AI is processing your request...";
    aiLoadingOverlay.classList.add("active");
  }

  function hideAILoading() {
    aiLoadingOverlay.classList.remove("active");
  }

  function showAIAnalysisResults() {
    aiAnalysisModal.classList.add("active");
  }

  function showAISuggestions(type = "summary") {
    aiSuggestionsModal.classList.add("active");

    // Set active tab to first one
    const firstTab = document.querySelector(".ai-tab");
    if (firstTab) {
      changeAITab(firstTab.getAttribute("data-tab"));
    }
  }

  function changeAITab(tabId) {
    // Update active tab
    aiTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.getAttribute("data-tab") === tabId);
    });

    // Update active content
    aiTabContents.forEach((content) => {
      content.classList.toggle(
        "active",
        content.getAttribute("data-content") === tabId
      );
    });
  }

  function useSuggestion(suggestion) {
    // Use the selected suggestion
    summaryInput.value = suggestion;
    updateSummary();
    countCharacters(summaryInput, summaryCharCount, 1500);

    // Close the modal
    closeModal(aiSuggestionsModal);

    // Show toast
    showToast(
      "Suggestion Applied",
      "The AI suggestion has been applied to your resume",
      "success"
    );
  }

  function generateCustomSuggestion(prompt) {
    if (!prompt || prompt.trim() === "") {
      showToast("Empty Prompt", "Please enter a prompt for the AI", "warning");
      return;
    }

    // Show loading
    const originalHtml = generateCustomBtn.innerHTML;
    generateCustomBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Generating...';
    generateCustomBtn.disabled = true;

    // Simulate AI generation (in a real app, this would call an API)
    setTimeout(() => {
      // Add a new tab content with the generated suggestion
      const aiSuggestionsContent = document.querySelector(
        ".ai-suggestions-content"
      );

      const newTabContent = document.createElement("div");
      newTabContent.className = "ai-tab-content active";
      newTabContent.setAttribute("data-content", "custom");

      // Generate a custom summary based on the prompt
      let customSummary = "";

      if (prompt.toLowerCase().includes("longer")) {
        customSummary =
          "Detail-oriented software engineering professional with over 5 years of experience developing scalable applications and systems. Proficient in multiple programming languages with a focus on creating efficient, maintainable code. Demonstrated success improving application performance by 35% through architectural redesign and optimization techniques. Strong collaborator who thrives in team environments and consistently delivers projects on time and under budget. Passionate about staying current with emerging technologies and industry best practices.";
      } else if (prompt.toLowerCase().includes("shorter")) {
        customSummary =
          "Software engineer with 5 years of experience building scalable applications. Reduced loading times by 35% and boosted user engagement through clean code and architectural improvements. Adaptable team player with expertise in multiple languages and frameworks.";
      } else if (prompt.toLowerCase().includes("leadership")) {
        customSummary =
          "Forward-thinking technical leader with proven experience managing development teams and driving successful software projects. Led cross-functional groups to deliver enterprise applications on schedule and within budget constraints. Skilled at translating business requirements into technical solutions while mentoring junior developers. Combines strong technical expertise with exceptional communication abilities to bridge gaps between technical and non-technical stakeholders.";
      } else {
        customSummary =
          "Versatile software professional with 5+ years of experience creating innovative solutions across multiple platforms. Specialized in optimizing application performance and implementing responsive design principles. Successfully reduced system load times by 35% and increased user engagement by 20% through thoughtful architectural improvements. Known for quickly adapting to new technologies and collaborating effectively with cross-functional teams to deliver exceptional results.";
      }

      newTabContent.innerHTML = `
                  <div class="ai-suggestion">
                      <p>${customSummary}</p>
                      <button class="btn secondary-btn use-suggestion">Use This</button>
                  </div>
              `;

      // Replace existing custom tab content or add new
      const existingCustomTab = document.querySelector(
        '.ai-tab-content[data-content="custom"]'
      );
      if (existingCustomTab) {
        aiSuggestionsContent.replaceChild(newTabContent, existingCustomTab);
      } else {
        aiSuggestionsContent.appendChild(newTabContent);

        // Add custom tab button if not exists
        const tabsContainer = document.querySelector(".ai-suggestions-tabs");
        if (!document.querySelector('.ai-tab[data-tab="custom"]')) {
          const customTab = document.createElement("button");
          customTab.className = "ai-tab active";
          customTab.setAttribute("data-tab", "custom");
          customTab.textContent = "Custom";

          customTab.addEventListener("click", () => {
            changeAITab("custom");
          });

          tabsContainer.appendChild(customTab);
        }
      }

      // Update active tab
      aiTabs.forEach((tab) => {
        tab.classList.toggle(
          "active",
          tab.getAttribute("data-tab") === "custom"
        );
      });

      // Update active content
      aiTabContents.forEach((content) => {
        content.classList.toggle(
          "active",
          content.getAttribute("data-content") === "custom"
        );
      });

      // Add event listener to the new use button
      const newUseBtn = newTabContent.querySelector(".use-suggestion");
      newUseBtn.addEventListener("click", (e) => {
        const suggestion = e.target.previousElementSibling.textContent;
        useSuggestion(suggestion);
      });

      // Restore button
      generateCustomBtn.innerHTML = originalHtml;
      generateCustomBtn.disabled = false;
    }, 1500);
  }

  // Modal Functions
  function closeModal(modal) {
    modal.classList.remove("active");
  }

  // Helper Functions
  function formatDate(dateString) {
    if (!dateString) return "";

    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();

    return `${month} ${year}`;
  }

  function updateAllSectionStatuses() {
    const sections = [
      "personal",
      "summary",
      "experience",
      "education",
      "skills",
      "projects",
      "languages",
      "certifications",
      "interests",
      "references",
    ];

    sections.forEach((section) => {
      updateSectionStatus(section);
    });
  }

  function updateResumeScore() {
    const scoreCircle = document.querySelector(".circle");
    const scoreText = document.querySelector(".percentage");

    // Calculate score based on completeness
    let score = 0;
    let totalWeight = 0;

    // Required sections with weights
    const sections = {
      personal: { weight: 15, complete: false },
      summary: { weight: 15, complete: false },
      experience: { weight: 25, complete: false },
      education: { weight: 15, complete: false },
      skills: { weight: 15, complete: false },
      projects: { weight: 5, complete: false },
      languages: { weight: 5, complete: false },
      certifications: { weight: 3, complete: false },
      interests: { weight: 2, complete: false },
    };

    // Check each section
    if (
      resumeData.personal.fullname &&
      resumeData.personal.email &&
      resumeData.personal.phone
    ) {
      sections.personal.complete = true;
    }

    if (resumeData.summary && resumeData.summary.length > 50) {
      sections.summary.complete = true;
    }

    if (resumeData.experience && resumeData.experience.length > 0) {
      sections.experience.complete = true;
    }

    if (resumeData.education && resumeData.education.length > 0) {
      sections.education.complete = true;
    }

    if (resumeData.skills && resumeData.skills.length > 0) {
      sections.skills.complete = true;
    }

    if (resumeData.projects && resumeData.projects.length > 0) {
      sections.projects.complete = true;
    }

    if (resumeData.languages && resumeData.languages.length > 0) {
      sections.languages.complete = true;
    }

    if (resumeData.certifications && resumeData.certifications.length > 0) {
      sections.certifications.complete = true;
    }

    if (resumeData.interests && resumeData.interests.length > 0) {
      sections.interests.complete = true;
    }

    // Calculate score
    for (const section in sections) {
      totalWeight += sections[section].weight;
      if (sections[section].complete) {
        score += sections[section].weight;
      }
    }

    // Convert to percentage
    const percentage = Math.round((score / totalWeight) * 100);

    // Update UI
    scoreCircle.setAttribute("stroke-dasharray", `${percentage}, 100`);
    scoreText.textContent = `${percentage}%`;

    // Update tips based on score
    updateScoreTips(sections);
  }

  function updateScoreTips(sectionStatus) {
    const scoreTips = document.querySelector(".score-tips");
    scoreTips.innerHTML = "";

    // Add tips for incomplete sections
    const tips = [];

    if (!sectionStatus.personal.complete) {
      tips.push("Complete your personal information");
    }

    if (!sectionStatus.summary.complete) {
      tips.push("Add a detailed professional summary");
    }

    if (!sectionStatus.experience.complete) {
      tips.push("Add your work experience");
    }

    if (!sectionStatus.education.complete) {
      tips.push("Add your educational background");
    }

    if (!sectionStatus.skills.complete) {
      tips.push("Add relevant skills to your profile");
    }

    // Add experience improvement tips if experience exists
    if (sectionStatus.experience.complete && resumeData.experience.length > 0) {
      // Check for action verbs in descriptions
      const hasActionVerbs = resumeData.experience.some((exp) => {
        const actionVerbs = [
          "managed",
          "led",
          "created",
          "developed",
          "implemented",
          "designed",
          "increased",
          "decreased",
          "improved",
          "achieved",
        ];
        return actionVerbs.some((verb) =>
          exp.description.toLowerCase().includes(verb)
        );
      });

      if (!hasActionVerbs) {
        tips.push("Use action verbs in your experience descriptions");
      }

      // Check for measurable achievements
      const hasMeasurableAchievements = resumeData.experience.some((exp) => {
        return /\d+%|\d+ percent|\d+ times/i.test(exp.description);
      });

      if (!hasMeasurableAchievements) {
        tips.push("Add measurable achievements to your experience");
      }
    }

    // Limit to 3 tips
    const displayTips = tips.slice(0, 3);

    // Add tips to UI
    displayTips.forEach((tip) => {
      const tipItem = document.createElement("div");
      tipItem.className = "tip-item";
      tipItem.innerHTML = `
                  <i class="fas fa-info-circle"></i>
                  <span>${tip}</span>
              `;
      scoreTips.appendChild(tipItem);
    });

    // If no tips, add a congratulatory message
    if (displayTips.length === 0) {
      const tipItem = document.createElement("div");
      tipItem.className = "tip-item";
      tipItem.innerHTML = `
                  <i class="fas fa-check-circle"></i>
                  <span>Your resume looks great! Ready to download and share.</span>
              `;
      scoreTips.appendChild(tipItem);
    }
  }
});
