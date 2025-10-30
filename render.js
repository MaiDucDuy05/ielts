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

// Function to load component HTML and CSS
async function loadComponent(componentName) {
  try {
    const htmlResponse = await fetch(`components/${componentName}/component.html`)
    const cssResponse = await fetch(`components/${componentName}/component.css`)

    if (!htmlResponse.ok || !cssResponse.ok) {
      throw new Error(`Failed to load component: ${componentName}`)
    }

    const html = await htmlResponse.text()
    const css = await cssResponse.text()

    // Inject CSS into head
    const style = document.createElement('style')
    style.textContent = css
    document.head.appendChild(style)

    return html
  } catch (error) {
    console.error(`Error loading component ${componentName}:`, error)
    return null
  }
}

// Function to render component into container
function renderComponent(containerId, html) {
  const container = document.getElementById(containerId)
  if (container && html) {
    container.innerHTML = html
  }
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

    const menuToggle = document.querySelector(".menu-toggle")
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
}

// Render Hero Section
// function renderHero(heroData) {
//   const heroTitle = document.querySelector(".hero-title")
//   heroTitle.innerHTML = heroData.title

//   const heroSubtitle = document.querySelector(".hero-subtitle")
//   heroSubtitle.textContent = heroData.subtitle

//   const heroDescription = document.querySelector(".hero-description")
//   heroDescription.textContent = heroData.description

//   const btnPrimary = document.querySelector(".hero-buttons .btn-primary span")
//   btnPrimary.textContent = heroData.buttonPrimary

//   const btnOutline = document.querySelector(".hero-buttons .btn-outline")
//   btnOutline.textContent = heroData.buttonOutline
//   btnOutline.style.color = "#fff"  


//   // Render Hero Form
//   const heroForm = document.querySelector(".hero-form")
//   if (heroData.form) {
//     heroForm.innerHTML = `
//       <form id="heroForm" class="hero-contact-form">
//         <h3>${heroData.form.title}</h3>
//         <p>${heroData.form.subtitle}</p>
//         <div class="form-group">
//           <label for="hero-name">${heroData.form.fields.name.label} ${heroData.form.fields.name.required ? '<span class="required">*</span>' : ''}</label>
//           <input type="text" id="hero-name" name="name" placeholder="${heroData.form.fields.name.placeholder}" ${heroData.form.fields.name.required ? 'required' : ''}>
//         </div>
//         <div class="form-group">
//           <label for="hero-phone">${heroData.form.fields.phone.label} ${heroData.form.fields.phone.required ? '<span class="required">*</span>' : ''}</label>
//           <input type="tel" id="hero-phone" name="phone" placeholder="${heroData.form.fields.phone.placeholder}" ${heroData.form.fields.phone.required ? 'required' : ''}>
//         </div>
//         <div class="form-group">
//           <label for="hero-email">${heroData.form.fields.email.label}</label>
//           <input type="email" id="hero-email" name="email" placeholder="${heroData.form.fields.email.placeholder}">
//         </div>
//         <div class="form-group">
//           <label for="hero-level">${heroData.form.fields.level.label}</label>
//           <select id="hero-level" name="level">
//             ${heroData.form.fields.level.options.map(option => `<option value="${option}">${option}</option>`).join('')}
//           </select>
//         </div>
//         <div class="form-group">
//           <label for="hero-message">${heroData.form.fields.message.label}</label>
//           <textarea id="hero-message" name="message" rows="3" placeholder="${heroData.form.fields.message.placeholder}"></textarea>
//         </div>
//         <button type="submit" class="btn btn-primary btn-large btn-block">
//           <span>${heroData.form.submitText}</span>
//           <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//             <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//           </svg>
//         </button>
//         <p class="form-note">${heroData.form.note}</p>
//       </form>
//     `
//   }

//   // Stats Bar
//   const statsGrid = document.querySelector(".stats-grid")
//   statsGrid.innerHTML = ""
//   heroData.stats.forEach((stat) => {
//     const statItem = createElement("div", { classes: ["stat-item"] })
//     const statIcon = createElement("div", { classes: ["stat-icon"], text: stat.icon })
//     const statContent = createElement("div", { classes: ["stat-content"] })
//     const statNumber = createElement("h3", { classes: ["stat-number"], text: stat.number })
//     const statLabel = createElement("p", { classes: ["stat-label"], text: stat.label })

//     statContent.appendChild(statNumber)
//     statContent.appendChild(statLabel)
//     statItem.appendChild(statIcon)
//     statItem.appendChild(statContent)
//     statsGrid.appendChild(statItem)
//   })
// }

// Render About Section
function renderAbout(aboutData) {

  const sectionTitle = document.querySelector("#about .section-title")
  sectionTitle.textContent = aboutData.title

  const sectionSubtitle = document.querySelector("#about .section-subtitle")
  sectionSubtitle.textContent = aboutData.subtitle

  const aboutIntro = document.querySelector(".about-intro")
  aboutIntro.textContent = aboutData.intro

  // Update image
  const sliderTrack = document.querySelector("#about .about-image-slider");
  const imageWrapper = document.querySelector("#about .about-image-wrapper");

  if (sliderTrack && imageWrapper) {
      // Xóa slide cũ (nếu có)
      sliderTrack.innerHTML = ""; 

      let imageList = [];

      // 2. Kiểm tra xem data có mảng 'images' (mảng object)
      if (aboutData.images && Array.isArray(aboutData.images)) {
          imageList = aboutData.images;
      } 
      // Fallback: Nếu data chỉ có 1 'image' (string)
      else if (aboutData.image) { 
          // Tạo mảng object tương thích
          imageList = [{ url: aboutData.image, caption: "" }]; 
      }

      // 3. Tạo các slide item (Image + Caption)
      if (imageList.length > 0) {
          imageList.forEach(imageData => {
              // --- BẮT ĐẦU THAY ĐỔI ---

              // a. Tạo div bọc ngoài cho mỗi slide
              const slideItem = document.createElement('div');
              slideItem.className = 'slide-item';

              // b. Tạo thẻ <img>
              const img = document.createElement('img');
              img.src = imageData.url; // Lấy từ object
              img.alt = imageData.caption || "About MindUp Image"; // Dùng caption làm alt

              // c. Tạo thẻ <p> cho tiêu đề (caption)
              const caption = document.createElement('p');
              caption.className = 'slide-caption';
              caption.textContent = imageData.caption || ''; // Lấy từ object

              // d. Gắn img và caption vào div bọc
              slideItem.appendChild(img);
              
              // Chỉ thêm caption nếu nó tồn tại
              if (imageData.caption) {
                  slideItem.appendChild(caption);
              }

              // e. Gắn div bọc vào track
              sliderTrack.appendChild(slideItem);
              
              // --- KẾT THÚC THAY ĐỔI ---
          });
      }
      
      // 4. Ẩn/hiện nút nav nếu chỉ có 1 ảnh
      const nav = imageWrapper.querySelector('.slider-nav');
      if (nav) {
          nav.style.display = imageList.length > 1 ? 'flex' : 'none';
      }
  }

  // Features (Cập nhật Icon SVG)
  const featuresContainer = document.querySelector(".about-features")
  featuresContainer.innerHTML = ""
  
  // Icon list cho Features (Dùng icon liên quan đến học tập, chất lượng)
  const featureIcons = [
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H17v6"/></svg>`, // Khoa học/Phương pháp (Tập trung)
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87m-1-2.07v1.17m-1.5-.78v1.18"/></svg>`, // Giảng viên/Chất lượng (User Check)
      `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5a5.5 5.5 0 0 0-11 0c0 2.29 1.51 4.04 3 5.5l7 7z"/><line x1="12" y1="12" x2="12" y2="12"/></svg>` // Cam kết/Mục tiêu (Target)
  ];
  
  aboutData.features.forEach((feature, index) => {
    const featureItem = createElement("div", { classes: ["feature-item"] })
    const featureIcon = createElement("div", { classes: ["feature-icon"] })
    
    // Gán icon SVG theo thứ tự
    featureIcon.innerHTML = featureIcons[index % featureIcons.length];

    const featureContent = createElement("div", { classes: ["feature-content"] })
    const featureTitle = createElement("h4", { text: feature.title })
    const featureDesc = createElement("p", { text: feature.description })

    featureContent.appendChild(featureTitle)
    featureContent.appendChild(featureDesc)
    featureItem.appendChild(featureIcon)
    featureItem.appendChild(featureContent)
    featuresContainer.appendChild(featureItem)
  })



  // NEW: Render MVV Grid
  const mvvGrid = document.querySelector(".about-mvv-grid")
  if (mvvGrid) {
      mvvGrid.querySelector('.mission-card .mvv-description').textContent = aboutData.mission || "Sứ mệnh đang được cập nhật.";
      mvvGrid.querySelector('.vision-card .mvv-description').textContent = aboutData.vision || "Tầm nhìn đang được cập nhật.";
      mvvGrid.querySelector('.value-card .mvv-description').textContent = aboutData.coreValues || "Giá trị cốt lõi đang được cập nhật.";
  }

  initAboutSlider();
}

// Render Reasons Section
function renderReasons(reasonsData) {
  const sectionLabel = document.querySelector("#reasons .section-label")
  sectionLabel.textContent = reasonsData.label

  const sectionTitle = document.querySelector("#reasons .section-title")
  sectionTitle.textContent = reasonsData.title

  const sectionSubtitle = document.querySelector("#reasons .section-subtitle")
  sectionSubtitle.textContent = reasonsData.subtitle

  const reasonsGrid = document.querySelector(".reasons-grid")
  reasonsGrid.innerHTML = ""

  // Define icons for each reason
  const icons = {
    "01": `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`, // Lightbulb for method
    "02": `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 2l-1 1"/><path d="M22 8l-1-1"/><path d="M16 2l1 1"/><path d="M16 8l1-1"/></svg>`, // Users for teachers
    "03": `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>`, // Home for personalized path
    "04": `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M10 9a3 3 0 1 1 6 0c0 1.66-1.34 3-3 3s-3-1.34-3-3"/><path d="M2 9v1a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V9"/></svg>`, // Award for commitment
    "05": `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`, // Icon cho "Cộng đồng" (Users)
    "06": `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
  }

  reasonsData.cards.forEach((card, index) => {
    const cardDiv = createElement("div", { classes: ["reason-card"] })
    cardDiv.classList.add(`reason-card-${index + 1}`)

    const iconDiv = createElement("div", { classes: ["reason-icon"] })
    iconDiv.innerHTML = icons[card.number] || icons["01"]

    const numberDiv = createElement("div", { classes: ["reason-number"], text: card.number })
    const titleH3 = createElement("h3", { classes: ["reason-title"], text: card.title })
    const descP = createElement("p", { classes: ["reason-description"], text: card.description })

    cardDiv.appendChild(iconDiv)
    cardDiv.appendChild(numberDiv)
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
    const btnRegister = createElement("a", {
      classes: ["btn", "btn-primary"],
      attrs: { href: "#contact" },
    })
    btnRegister.innerHTML = `
      <span>Đăng ký ngay</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    const btnLearnMore = createElement("a", {
      classes: ["btn", "btn-outline"],
      attrs: { href: `https://mindup-vn.vercel.app/courses/${index+1}` },
    })
    btnLearnMore.innerHTML = `
      <span>Tìm hiểu thêm</span>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
    footerDiv.appendChild(btnRegister)
    footerDiv.appendChild(btnLearnMore)

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
  // const hotlineLink = document.querySelector(".detail-value[href^='tel:']")
  // hotlineLink.textContent = contactData.details.hotline
  // hotlineLink.setAttribute("href", `tel:${contactData.details.hotline.replace(/-/g, "")}`)

  // const emailLink = document.querySelector(".detail-value[href^='mailto:']")
  // emailLink.textContent = contactData.details.email
  // emailLink.setAttribute("href", `mailto:${contactData.details.email}`)

  // const addressText = document.querySelector(".detail-value:not(a)")
  // addressText.textContent = contactData.details.address

  // Form button and note
  const submitBtnSpan = document.querySelector(".contact-form button span")
  submitBtnSpan.textContent = contactData.form.submitText

  const formNote = document.querySelector(".form-note")
  formNote.textContent = contactData.form.note
}


// Render Deals Middle Section
function renderDealsMiddle(dealsData) {
  const methodSection = document.querySelector("#promotions-section")
  const dealsMiddleSection = createElement("section", { classes: ["deals-middle-section"] })
  dealsMiddleSection.innerHTML = `
    <div class="container">
      <div class="deals-middle-header">
        <h2 class="deals-middle-title">${dealsData.middle.title}</h2>
        <p class="deals-middle-subtitle">${dealsData.middle.subtitle}</p>
      </div>
      <div class="deals-middle-grid">
        ${dealsData.middle.deals.map(deal => `
          <div class="deals-middle-card">
            <div class="deal-image">
              <img src="${deal.image}" alt="${deal.title}">
              <div class="deal-discount-badge">-${deal.discount}</div>
            </div>
            <div class="deal-info">
              <h3 class="deal-title">${deal.title}</h3>
              <div class="deal-prices">
                <span class="deal-price-original">${deal.originalPrice}</span>
                <strong class="deal-price-discounted">${deal.discountedPrice}</strong>
              </div>
              <p class="deal-description">${deal.description}</p>
              <button class="btn btn-primary deal-cta" onclick="window.location.href='#contact'">${deal.cta}</button>
            </div>
          </div>
        `).join('')}

      </div>
      <div class="about-view-more">
        <a href="https://mindup-vn.vercel.app/courses" class="btn btn-outline btn-large">
          <span>Xem thêm</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  `
  methodSection.insertAdjacentElement('afterend', dealsMiddleSection)
}





// Main render function to load and render all components
async function renderAll() {
  if (!window.data) {
    console.error("Data object not found.")
    return
  }

  const components = [
    'header',
    'hero',
    'about',
    'reasons',
    'promotions',
    'courses',
    'achievements',
    'contact',
    'footer',
    "new",
  ]

  for (const component of components) {
    const html = await loadComponent(component)
    if (html) {
      renderComponent(component, html)
    }
  }

  // After loading components, render dynamic data
  renderNav(window.data.nav)
  // renderHero(window.data.hero)
  renderAbout(window.data.about)
  renderReasons(window.data.reasons)
  renderDealsMiddle(window.data.deals)
  renderCourses(window.data.courses)
  renderContact(window.data.contact)
}

// Run render on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  renderAll()
})


function initAboutSlider() {
    // Chọn đúng wrapper trong section #about
    const wrapper = document.querySelector('#about .about-image-wrapper');
    if (!wrapper) return;

    const slider = wrapper.querySelector('.about-image-slider');
    const nextBtn = wrapper.querySelector('.nav-next');
    const prevBtn = wrapper.querySelector('.nav-prev');

    // Bây giờ chúng ta có thể kiểm tra ảnh ngay lập tức
    const images = wrapper.querySelectorAll('.about-image-slider img');
    if (!slider || !images || images.length === 0) return;

    let currentIndex = 0;
    const totalImages = images.length;
    const slideInterval = 3000; // 3 giây
    let autoPlay;

    function goToSlide(index) {
        if (index < 0) index = totalImages - 1;
        else if (index >= totalImages) index = 0;
        
        slider.style.transform = `translateX(-${index * 100}%)`;
        currentIndex = index;
    }

    function startAutoPlay() {
        if (totalImages > 1) {
            autoPlay = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, slideInterval);
        }
    }

    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    startAutoPlay();
    wrapper.addEventListener('mouseenter', stopAutoPlay);
    wrapper.addEventListener('mouseleave', startAutoPlay);

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
}

