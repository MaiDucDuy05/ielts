// Render functions to dynamically generate HTML content from data.js

// Helper to create element with classes and attributes
function createElement(tag, options = {}) {
  const el = document.createElement(tag)
  if (options.classes) {
    options.classes.forEach((cls) => el.classList.add(cls))
  }
  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      el.setAttribute(key, value)
    }
  }
  if (options.html) {
    el.innerHTML = options.html
  }
  if (options.text) {
    el.textContent = options.text
  }
  return el
}

// Render Navigation Menu
function renderNav(navData) {
  const navMenu = document.querySelector(".nav-menu")
  navMenu.innerHTML = ""
  navData.menu.forEach((item) => {
    const li = createElement("li")
    const a = createElement("a", { attrs: { href: item.href } })
    if (item.class) a.classList.add(item.class)
    a.textContent = item.text
    li.appendChild(a)
    navMenu.appendChild(li)
  })
}

// Render Hero Section
function renderHero(heroData) {
  const heroTitle = document.querySelector(".hero-title")
  heroTitle.innerHTML = heroData.title

  const heroSubtitle = document.querySelector(".hero-subtitle")
  heroSubtitle.textContent = heroData.subtitle

  const heroDescription = document.querySelector(".hero-description")
  heroDescription.textContent = heroData.description

  const btnPrimary = document.querySelector(".hero-buttons .btn-primary span")
  btnPrimary.textContent = heroData.buttonPrimary

  const btnOutline = document.querySelector(".hero-buttons .btn-outline")
  btnOutline.textContent = heroData.buttonOutline

  // Stats Bar
  const statsGrid = document.querySelector(".stats-grid")
  statsGrid.innerHTML = ""
  heroData.stats.forEach((stat) => {
    const statItem = createElement("div", { classes: ["stat-item"] })
    const statIcon = createElement("div", { classes: ["stat-icon"], text: stat.icon })
    const statContent = createElement("div", { classes: ["stat-content"] })
    const statNumber = createElement("h3", { classes: ["stat-number"], text: stat.number })
    const statLabel = createElement("p", { classes: ["stat-label"], text: stat.label })

    statContent.appendChild(statNumber)
    statContent.appendChild(statLabel)
    statItem.appendChild(statIcon)
    statItem.appendChild(statContent)
    statsGrid.appendChild(statItem)
  })
}

// Render About Section
function renderAbout(aboutData) {
  const sectionLabel = document.querySelector("#about .section-label")
  sectionLabel.textContent = aboutData.label

  const sectionTitle = document.querySelector("#about .section-title")
  sectionTitle.textContent = aboutData.title

  const sectionSubtitle = document.querySelector("#about .section-subtitle")
  sectionSubtitle.textContent = aboutData.subtitle

  const aboutIntro = document.querySelector(".about-intro")
  aboutIntro.innerHTML = `<strong>MindUp</strong> ${aboutData.intro}`

  // Update image if provided
  if (aboutData.image) {
    const aboutImage = document.querySelector(".about-image img")
    if (aboutImage) {
      aboutImage.src = aboutData.image
      aboutImage.alt = "About MindUp"
    }
  }

  // Features
  const featuresContainer = document.querySelector(".about-features")
  featuresContainer.innerHTML = ""
  aboutData.features.forEach((feature) => {
    const featureItem = createElement("div", { classes: ["feature-item"] })
    const featureIcon = createElement("div", { classes: ["feature-icon"] })
    featureIcon.innerHTML = `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
        <path d="M12 20L18 26L28 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    const featureContent = createElement("div", { classes: ["feature-content"] })
    const featureTitle = createElement("h4", { text: feature.title })
    const featureDesc = createElement("p", { text: feature.description })

    featureContent.appendChild(featureTitle)
    featureContent.appendChild(featureDesc)
    featureItem.appendChild(featureIcon)
    featureItem.appendChild(featureContent)
    featuresContainer.appendChild(featureItem)
  })

  // Badge
  const badgeNumber = document.querySelector(".about-badge .badge-number")
  const badgeText = document.querySelector(".about-badge .badge-text")
  badgeNumber.textContent = aboutData.badge.number
  badgeText.textContent = aboutData.badge.text
}

// Render Method Section
function renderMethod(methodData) {
  const sectionLabel = document.querySelector("#method .section-label")
  sectionLabel.textContent = methodData.label

  const sectionTitle = document.querySelector("#method .section-title")
  sectionTitle.textContent = methodData.title

  const sectionSubtitle = document.querySelector("#method .section-subtitle")
  sectionSubtitle.textContent = methodData.subtitle

  const methodSteps = document.querySelector(".method-steps")
  methodSteps.innerHTML = ""
  methodData.steps.forEach((step) => {
    const stepDiv = createElement("div", { classes: ["method-step"] })
    const stepNumber = createElement("div", { classes: ["step-number"], text: step.number })
    const stepContent = createElement("div", { classes: ["step-content"] })
    const stepTitle = createElement("h3", { text: step.title })
    const stepDesc = createElement("p", { text: step.description })
    const stepIcon = createElement("div", { classes: ["step-icon"] })

    // Use emoji from original HTML for icons
    // switch (step.number) {
    //   case "01":
    //     stepIcon.textContent = "📋"
    //     break
    //   case "02":
    //     stepIcon.textContent = "📚"
    //     break
    //   case "03":
    //     stepIcon.textContent = "✍️"
    //     break
    //   case "04":
    //     stepIcon.textContent = "📈"
    //     break
    //   default:
    //     stepIcon.textContent = ""
    // }

    stepContent.appendChild(stepTitle)
    stepContent.appendChild(stepDesc)
    stepDiv.appendChild(stepNumber)
    stepDiv.appendChild(stepContent)
    stepDiv.appendChild(stepIcon)
    methodSteps.appendChild(stepDiv)
  })
}

// Render Reasons Section
function renderReasons(reasonsData) {
  const sectionLabel = document.querySelector("#reasons .section-label")
  sectionLabel.textContent = reasonsData.label

  const sectionTitle = document.querySelector("#reasons .section-title")
  sectionTitle.textContent = reasonsData.title

  const reasonsGrid = document.querySelector(".reasons-grid")
  reasonsGrid.innerHTML = ""
  reasonsData.cards.forEach((card) => {
    const cardDiv = createElement("div", { classes: ["reason-card"] })
    const numberDiv = createElement("div", { classes: ["reason-number"], text: card.number })
    const iconDiv = createElement("div", { classes: ["reason-icon"], text: card.icon })
    const titleH3 = createElement("h3", { text: card.title })
    const descP = createElement("p", { text: card.description })

    cardDiv.appendChild(numberDiv)
    cardDiv.appendChild(iconDiv)
    cardDiv.appendChild(titleH3)
    cardDiv.appendChild(descP)
    reasonsGrid.appendChild(cardDiv)
  })
}

// Render Courses Section
function renderCourses(coursesData) {
  const sectionLabel = document.querySelector("#courses .section-label")
  sectionLabel.textContent = coursesData.label

  const sectionTitle = document.querySelector("#courses .section-title")
  sectionTitle.textContent = coursesData.title

  const sectionSubtitle = document.querySelector("#courses .section-subtitle")
  sectionSubtitle.textContent = coursesData.subtitle

  const coursesGrid = document.querySelector(".courses-grid")
  coursesGrid.innerHTML = ""

  const coursesList = coursesData.list

  coursesList.forEach((course, index) => {
    const courseCard = createElement("div", { classes: ["course-card"] })

    // Add featured class for second course (most popular)
    if (index === 1) {
      courseCard.classList.add("featured")
    }

    const badgeDiv = createElement("div", { classes: ["course-badge"] })
    badgeDiv.textContent = course.badge || course.subtitle || "Khóa học"

    const levelDiv = createElement("div", { classes: ["course-level"] })
    levelDiv.textContent = course.level || course.duration || ""

    const titleH3 = createElement("h3", { classes: ["course-title"] })
    titleH3.textContent = course.title

    const targetP = createElement("p", { classes: ["course-target"] })
    targetP.textContent = course.target || course.objective || course.description || ""

    const featuresUl = createElement("ul", { classes: ["course-features"] })
    course.features.forEach((feature) => {
      const li = createElement("li")
      li.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7 10L9 12L13 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span>${feature}</span>
      `
      featuresUl.appendChild(li)
    })

    const priceDiv = createElement("div", { classes: ["course-price"] })
    if (course.price) {
      if (course.originalPrice) {
        priceDiv.innerHTML = `
          <span class="original-price">${course.originalPrice}</span>
          <strong>${course.price}</strong>
        `
      } else {
        priceDiv.innerHTML = `<strong>${course.price}</strong>`
      }
    }

    const footerDiv = createElement("div", { classes: ["course-footer"] })
    const btn = createElement("a", {
      classes: ["btn", "btn-primary", "btn-block"],
      attrs: { href: "#contact" },
    })
    btn.innerHTML = `
      <span>Đăng ký ngay</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    footerDiv.appendChild(btn)

    courseCard.appendChild(badgeDiv)
    courseCard.appendChild(levelDiv)
    courseCard.appendChild(titleH3)
    courseCard.appendChild(targetP)
    courseCard.appendChild(featuresUl)
    if (course.price) courseCard.appendChild(priceDiv)
    courseCard.appendChild(footerDiv)

    coursesGrid.appendChild(courseCard)
  })
}

// Render Teachers Section
function renderTeachers(teachersData) {
  const sectionLabel = document.querySelector("#teachers .section-label")
  sectionLabel.textContent = teachersData.label

  const sectionTitle = document.querySelector("#teachers .section-title")
  sectionTitle.textContent = teachersData.title

  const sectionSubtitle = document.querySelector("#teachers .section-subtitle")
  sectionSubtitle.textContent = teachersData.subtitle

  const teachersGrid = document.querySelector(".teachers-grid")
  teachersGrid.innerHTML = ""
  teachersData.list.forEach((teacher) => {
    const teacherCard = createElement("div", { classes: ["teacher-card"] })
    const teacherImage = createElement("div", { classes: ["teacher-image"] })

    // Add image if provided
    if (teacher.image) {
      const img = createElement("img", { attrs: { src: teacher.image, alt: teacher.name } })
      teacherImage.appendChild(img)
    }

    // Create badge
    const badgeDiv = createElement("div", { classes: ["teacher-badge"] })
    const badgeScore = createElement("span", { classes: ["badge-score"], text: teacher.score })
    const badgeLabel = createElement("span", { classes: ["badge-label"], text: "IELTS" })
    badgeDiv.appendChild(badgeScore)
    badgeDiv.appendChild(badgeLabel)

    teacherImage.appendChild(badgeDiv)

    const teacherInfo = createElement("div", { classes: ["teacher-info"] })
    const nameH3 = createElement("h3", { classes: ["teacher-name"], text: teacher.name })
    const titleP = createElement("p", { classes: ["teacher-title"], text: teacher.title })
    const achievementsUl = createElement("ul", { classes: ["teacher-achievements"] })
    teacher.achievements.forEach((ach) => {
      const li = createElement("li", { text: ach })
      achievementsUl.appendChild(li)
    })

    teacherInfo.appendChild(nameH3)
    teacherInfo.appendChild(titleP)
    teacherInfo.appendChild(achievementsUl)

    teacherCard.appendChild(teacherImage)
    teacherCard.appendChild(teacherInfo)

    teachersGrid.appendChild(teacherCard)
  })
}

// Render Achievements Section
function renderAchievements(achievementsData) {
  const sectionLabel = document.querySelector("#achievements .section-label")
  sectionLabel.textContent = achievementsData.label

  const sectionTitle = document.querySelector("#achievements .section-title")
  sectionTitle.textContent = achievementsData.title

  const sectionSubtitle = document.querySelector("#achievements .section-subtitle")
  sectionSubtitle.textContent = achievementsData.subtitle

  const achievementsSection = document.querySelector("#achievements .container")

  // Remove existing testimonials, caseStudies, and achievements-grid if they exist
  const existingTestimonials = achievementsSection.querySelector(".testimonials-section")
  if (existingTestimonials) existingTestimonials.remove()

  const existingCaseStudies = achievementsSection.querySelector(".case-studies-section")
  if (existingCaseStudies) existingCaseStudies.remove()

  const existingGrid = achievementsSection.querySelector(".achievements-grid")
  if (existingGrid) existingGrid.remove()

  // Render Testimonials
  if (achievementsData.testimonials && achievementsData.testimonials.length > 0) {
    const testimonialsSection = createElement("div", { classes: ["testimonials-section"] })
    const testimonialsTitle = createElement("h3", { classes: ["section-subtitle"], text: "" })
    testimonialsSection.appendChild(testimonialsTitle)

    const testimonialsGrid = createElement("div", { classes: ["testimonials-grid"] })
    achievementsData.testimonials.forEach((testimonial) => {
      const testimonialCard = createElement("div", { classes: ["testimonial-card"] })

      if (testimonial.image) {
        const img = createElement("img", { attrs: { src: testimonial.image, alt: testimonial.name } })
        testimonialCard.appendChild(img)
      }

      const testimonialContent = createElement("div", { classes: ["testimonial-content"] })
      const nameP = createElement("p", { classes: ["testimonial-name"], text: testimonial.name })
      const contentP = createElement("p", { classes: ["testimonial-text"], text: testimonial.content })

      testimonialContent.appendChild(nameP)
      testimonialContent.appendChild(contentP)
      testimonialCard.appendChild(testimonialContent)
      testimonialsGrid.appendChild(testimonialCard)
    })

    testimonialsSection.appendChild(testimonialsGrid)
    achievementsSection.appendChild(testimonialsSection)
  }

  // Render Case Studies
  if (achievementsData.caseStudies && achievementsData.caseStudies.length > 0) {
    const caseStudiesSection = createElement("div", { classes: ["case-studies-section"] })
    const caseStudiesTitle = createElement("h3", { classes: ["section-subtitle"], text: "" })
    caseStudiesSection.appendChild(caseStudiesTitle)

    const caseStudiesGrid = createElement("div", { classes: ["case-studies-grid"] })
    achievementsData.caseStudies.forEach((caseStudy) => {
      const caseStudyCard = createElement("div", { classes: ["case-study-card"] })

      if (caseStudy.image) {
        const img = createElement("img", { attrs: { src: caseStudy.image, alt: caseStudy.name } })
        caseStudyCard.appendChild(img)
      }

      const caseStudyContent = createElement("div", { classes: ["case-study-content"] })
      const nameH4 = createElement("h4", { text: caseStudy.name })
      const ageJobP = createElement("p", { text: `${caseStudy.age} tuổi, ${caseStudy.job}` })
      const goalP = createElement("p", { classes: ["goal"], text: `Mục tiêu: ${caseStudy.goal}` })
      const methodP = createElement("p", { classes: ["method"], text: `Phương pháp: ${caseStudy.method}` })
      const resultP = createElement("p", { classes: ["result"], text: `Kết quả: ${caseStudy.result}` })

      const badgeDiv = createElement("div", { classes: ["case-study-badge", caseStudy.badge] })
      badgeDiv.innerHTML = caseStudy.badge === "gold" ? "🏆" : "🥈"
      const badgeScore = createElement("span", { classes: ["badge-score"], text: caseStudy.score })
      badgeDiv.appendChild(badgeScore)

      caseStudyContent.appendChild(nameH4)
      caseStudyContent.appendChild(ageJobP)
      caseStudyContent.appendChild(goalP)
      caseStudyContent.appendChild(methodP)
      caseStudyContent.appendChild(resultP)
      caseStudyContent.appendChild(badgeDiv)
      caseStudyCard.appendChild(caseStudyContent)
      caseStudiesGrid.appendChild(caseStudyCard)
    })

    caseStudiesSection.appendChild(caseStudiesGrid)
    achievementsSection.appendChild(caseStudiesSection)
  }

}

// Render Contact Section
function renderContact(contactData) {
  const contactTitle = document.querySelector("#contact .contact-title")
  contactTitle.textContent = contactData.title

  const contactSubtitle = document.querySelector("#contact .contact-subtitle")
  contactSubtitle.textContent = contactData.subtitle

  const benefitsContainer = document.querySelector(".contact-benefits")
  benefitsContainer.innerHTML = ""
  contactData.benefits.forEach((benefit) => {
    const benefitItem = createElement("div", { classes: ["benefit-item"] })
    const iconDiv = createElement("div", { classes: ["benefit-icon"], text: "✓" })
    const p = createElement("p", { text: benefit })
    benefitItem.appendChild(iconDiv)
    benefitItem.appendChild(p)
    benefitsContainer.appendChild(benefitItem)
  })

  // Contact details
  const hotlineLink = document.querySelector(".detail-value[href^='tel:']")
  hotlineLink.textContent = contactData.details.hotline
  hotlineLink.setAttribute("href", `tel:${contactData.details.hotline.replace(/-/g, "")}`)

  const emailLink = document.querySelector(".detail-value[href^='mailto:']")
  emailLink.textContent = contactData.details.email
  emailLink.setAttribute("href", `mailto:${contactData.details.email}`)

  const addressText = document.querySelector(".detail-value:not(a)")
  addressText.textContent = contactData.details.address

  // Form button and note
  const submitBtnSpan = document.querySelector(".contact-form button span")
  submitBtnSpan.textContent = contactData.form.submitText

  const formNote = document.querySelector(".form-note")
  formNote.textContent = contactData.form.note
}

// Render Footer Section


// Main render function to call all
function renderAll() {
  if (!window.data) {
    console.error("Data object not found.")
    return
  }
  renderNav(window.data.nav)
  renderHero(window.data.hero)
  renderAbout(window.data.about)
  renderMethod(window.data.method)
  renderReasons(window.data.reasons)
  renderCourses(window.data.courses)
  renderTeachers(window.data.teachers)
  renderAchievements(window.data.achievements)
  renderContact(window.data.contact)
}

// Run render on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderAll()
})
