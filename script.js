
const body = document.body



// Back to Top Button
const backToTop = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTop.classList.add("visible")
  } else {
    backToTop.classList.remove("visible")
  }
})

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Basic validation
    if (!data.name || !data.phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!")
      return
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(data.phone.replace(/[-\s]/g, ""))) {
      alert("Số điện thoại không hợp lệ!")
      return
    }

    console.log("Form submitted:", data)

    // Show success message
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.")
    contactForm.reset()
  })
}

// Hero Form Submission
const heroForm = document.getElementById("heroForm")
if (heroForm) {
  heroForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(heroForm)
    const data = Object.fromEntries(formData)

    // Basic validation
    if (!data.name || !data.phone) {
      alert("Vui lòng điền đầy đủ thông tin bắt buộc!")
      return
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/
    if (!phoneRegex.test(data.phone.replace(/[-\s]/g, ""))) {
      alert("Số điện thoại không hợp lệ!")
      return
    }

    console.log("Hero form submitted:", data)

    // Show success message
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.")
    heroForm.reset()
  })
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && href !== "") {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  })
})

// Simple Slider for Teachers Section (if needed)
function initSlider(sliderClass) {
  const slider = document.querySelector(sliderClass)
  if (!slider) return

  const items = slider.querySelectorAll(".teacher-item, .student-item")
  const currentIndex = 0

  // Add navigation if needed
  // This is a basic implementation
}

// Lazy Loading Images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute("data-src")
        }
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      fadeInObserver.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe sections for animation
document
  .querySelectorAll("section, .course-card, .teacher-card, .achievement-card, .reason-card")
  .forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    fadeInObserver.observe(element)
  })

// Header scroll effect
let lastScroll = 0
const header = document.querySelector(".site-header")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
  }

  lastScroll = currentScroll
})
// Promotional Deals Modal
const dealsModal = document.getElementById('dealsModal')
const dealsBtn = document.getElementById('dealsBtn')
const dealsClose = document.getElementById('dealsClose')
const dealsOverlay = document.querySelector('.deals-overlay')
const dealsGrid = document.getElementById('dealsGrid')



// Populate deals
function populateDeals() {
  dealsGrid.innerHTML = ''
  data.deals.forEach(deal => {
    const dealCard = document.createElement('div')
    dealCard.className = 'deal-card'
    dealCard.innerHTML = `
      <div class="deal-image">
        <img src="${deal.image}" alt="${deal.title}">
        <div class="deal-badge">${deal.badge}</div>
      </div>
      <div class="deal-info">
        <h4 class="deal-title">${deal.title}</h4>
        <div class="deal-prices">
          <span class="deal-price-original">${deal.originalPrice}</span>
          <span class="deal-price-discounted">${deal.discountedPrice}</span>
          <span class="deal-discount">${deal.discount}</span>
        </div>
        <p class="deal-description">${deal.description}</p>
        <ul class="deal-features">
          ${deal.features.map(feature => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              ${feature}
            </li>
          `).join('')}
        </ul>
      </div>
    `
    dealsGrid.appendChild(dealCard)
  })
}