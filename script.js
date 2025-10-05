// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle")
const navMenu = document.querySelector(".nav-menu")
const body = document.body

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    menuToggle.classList.toggle("active")

    // Prevent body scroll when menu is open
    if (navMenu.classList.contains("active")) {
      body.style.overflow = "hidden"
    } else {
      body.style.overflow = ""
    }
  })

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".main-nav") && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      menuToggle.classList.remove("active")
      body.style.overflow = ""
    }
  })

  // Close menu when clicking on a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      menuToggle.classList.remove("active")
      body.style.overflow = ""
    })
  })
}

// Mobile Submenu Toggle
const menuItems = document.querySelectorAll(".menu-item.has-submenu > a")
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault()
      const parent = item.parentElement
      parent.classList.toggle("active")
    }
  })
})

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
