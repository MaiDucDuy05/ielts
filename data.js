// Data for MindUp IELTS Landing Page
const data = {
  // Hero Section
  hero: {
    title: "Trung tâm Anh Ngữ<br>MindUp",
    subtitle: "Học nhanh – Nhớ lâu – Tự tin bứt phá.",
    description: "Phương pháp ghi nhớ kết hợp độc quyền, biến tiếng Anh thành trải nghiệm sáng tạo và đầy cảm hứng",
    buttonPrimary: "ĐĂNG KÝ HỌC THỬ MIỄN PHÍ",
    buttonOutline: "XEM ƯU ĐÃI",
    stats: [
    ],
    form: {
      title: "Đăng ký tư vấn miễn phí",
      subtitle: "Nhận lộ trình học tập cá nhân hóa",
      fields: {
        name: { label: "Họ và tên", placeholder: "Nhập họ và tên", required: true },
        phone: { label: "Số điện thoại", placeholder: "Nhập số điện thoại", required: true },
        email: { label: "Email", placeholder: "Nhập địa chỉ email" },
        level: { label: "Khoá học", options: ["Khoá học", "FOUNDATION BREAKTHROUGH", "IELTS ACCELERATOR", "IELTS MASTER", "IELTS EXPERT"] },
        message: { label: "Ghi chú", placeholder: "Nhập ghi chú (nếu có)" }
      },
      submitText: "ĐĂNG KÝ NGAY",
      note: "* Thông tin của bạn sẽ được bảo mật tuyệt đối"
    }
  },

  // About Section
  about: {
    label: "Giới thiệu",
    title: "Về chúng tôi",
    subtitle: "MindUp - Nơi khơi dậy tiềm năng và đam mê học tập tiếng Anh",
    intro:
      "MindUp được thành lập với sứ mệnh mang đến trải nghiệm học tập tiếng Anh hiện đại và hiệu quả nhất cho người Việt Nam. Với đội ngũ giảng viên giàu kinh nghiệm, phương pháp giảng dạy khoa học và cam kết đầu ra rõ ràng, chúng tôi đã giúp hàng nghìn học viên chinh phục mục tiêu IELTS và tự tin sử dụng tiếng Anh trong cuộc sống.",
    image: "/public/classroom/6.jpg",
    features: [
      {
        title: "Phương pháp học tập khoa học",
        description: "Kết hợp lý thuyết và thực hành, tập trung phát triển 4 kỹ năng toàn diện",
      },
      {
        title: "Đội ngũ giảng viên chất lượng",
        description: "100% giảng viên có chứng chỉ 8.0+ IELTS và kinh nghiệm giảng dạy lâu năm",
      },
      {
        title: "Cam kết đầu ra rõ ràng",
        description: "Lộ trình học tập cá nhân hóa với mục tiêu cụ thể cho từng học viên",
      },
    ],
    badge: { number: "5+", text: "Năm kinh nghiệm" },
  },

  // Method Section

  // Reasons Section
  reasons: {
  label: "Tại sao chọn chúng tôi",
  title: "LÝ DO LỰA CHỌN MINDUP",
  cards: [
    {
      number: "01",
      icon: "",
      title: "Phương pháp học chủ động",
      description:
        "Áp dụng mô hình Active Learning, kết hợp linh hoạt giữa lý thuyết – thực hành – phản xạ. Giúp học viên ghi nhớ tự nhiên và sử dụng tiếng Anh thành thạo trong đời sống thực tế.",
    },
    {
      number: "02",
      icon: "",
      title: "Giảng viên 8.0+ IELTS",
      description:
        "Đội ngũ giảng viên giàu kinh nghiệm, đạt IELTS 8.0+ và từng giảng dạy tại các trung tâm quốc tế. Họ truyền cảm hứng, đồng hành và giúp bạn tiến bộ nhanh chóng.",
    },
    {
      number: "03",
      icon: "",
      title: "Lộ trình cá nhân hóa",
      description:
        "Mỗi học viên được thiết kế lộ trình riêng phù hợp với mục tiêu, trình độ và thời gian học. Theo dõi tiến độ dễ dàng, học đúng trọng tâm, đạt kết quả nhanh hơn.",
    },
    {
      number: "04",
      icon: "",
      title: "Cam kết đầu ra rõ ràng",
      description:
        "MindUp đảm bảo học viên đạt mục tiêu đầu ra như cam kết. Nếu chưa đạt, được học lại miễn phí cho đến khi hoàn thành mục tiêu.",
    },
    {
      number: "05",
      icon: "",
      title: "Cộng đồng học viên năng động",
      description:
        "Tham gia cộng đồng hàng ngàn học viên cùng mục tiêu, được chia sẻ kinh nghiệm, luyện tập giao tiếp và truyền cảm hứng học tập mỗi ngày.",
    },
    {
      number: "06",
      icon: "",
      title: "Hỗ trợ 1:1 tận tâm",
      description:
        "Đội ngũ tư vấn và giảng viên hỗ trợ 1 kèm 1 trong suốt quá trình học. Luôn sẵn sàng giải đáp, kèm cặp và giúp bạn vượt qua mọi khó khăn.",
    },
  ],
},



  // Courses Section
  courses: {
    label: "Khóa học",
    title: "CÁC KHÓA HỌC CHÍNH TẠI MINDUP",
    subtitle: "Chương trình học đa dạng, phù hợp với mọi trình độ từ cơ bản đến nâng cao",
    list: [
      {
        id: "1",
        title: "FOUNDATION BREAKTHROUGH",
        subtitle: "Phá Đảo Mất Gốc",
        badge: "Phá Đảo Mất Gốc",
        description: "Dành cho bạn bắt đầu từ con số 0, học mãi không nhớ, mất phương hướng.",
        features: [
          "Ứng dụng Trí nhớ Siêu tốc - Ghi nhớ 100 từ trong 20 phút",
          "Hệ thống Collocation thực chiến - Học từ vựng theo cụm",
          "Lộ trình Cá nhân hóa 1-1 - Mentor đồng hành sát sao",
        ],
        duration: "3-6 tháng",
        level: "Mất gốc → Cơ bản",
        schedule: "3 buổi/tuần",
        price: "4.000.000đ",
        originalPrice: "5.500.000đ",
        image: "/public/courses/1.png",
        color: "bg-green-50",
        logo: "/public/courses/logo1.png",
        objective: "Dành cho bạn bắt đầu từ con số 0, học mãi không nhớ, mất phương hướng.",
        outcome: [
          "Nắm vững nền tảng ngữ pháp và từ vựng cốt lõi",
          "Tự tin giao tiếp những chủ đề hằng ngày",
          "Sẵn sàng nền tảng để bước vào luyện thi IELTS 4.5+",
        ],
        target: "Học viên mất gốc, muốn xây dựng nền tảng vững chắc",
      },
      {
        id: "2",
        title: "IELTS ACCELERATOR",
        subtitle: "Tăng Tốc 4.5-5.5+",
        badge: "Tăng Tốc",
        description: "Đã có nền tảng cơ bản, muốn chinh phục mục tiêu IELTS để đi làm, du học.",
        features: [
          "Phương pháp Nghe chép chính tả & Take note keyword",
          "Luyện Nói phản xạ - Sửa lỗi phát âm chi tiết",
          "Chiến lược Reading & Writing cốt lõi",
        ],
        duration: "3-6 tháng",
        level: "4.5 - 5.5+",
        schedule: "3 buổi/tuần",
        price: "5.000.000đ",
        originalPrice: "6.500.000đ",
        image: "/public/courses/2.png",
        color: "bg-blue-50",
        logo: "/public/courses/logo2.png",
        objective: "Đã có nền tảng cơ bản, muốn chinh phục mục tiêu IELTS để đi làm, du học.",
        outcome: ["Đạt band điểm 4.5 - 5.5+", "Làm chủ kỹ năng Nghe - Nói cơ bản"],
        target: "Học viên có nền tảng, mục tiêu 4.5-5.5 IELTS",
      },
      {
        id: "3",
        title: "IELTS MASTER",
        subtitle: "Bứt Phá 6.0-6.5+",
        badge: "Bứt Phá",
        description: "Đã có band 4.5-5.0, muốn chinh phục 6.0-6.5+ để xét tuyển Đại học, săn học bổng.",
        features: [
          "Lộ trình Cá nhân hóa toàn diện",
          "Speaking & Writing chuyên sâu với Collocation, Idiom",
          "Kỹ thuật Phân tích đề nâng cao",
        ],
        duration: "3-6 tháng",
        level: "6.0 - 6.5+",
        schedule: "3 buổi/tuần",
        price: "5.500.000đ",
        originalPrice: "7.000.000đ",
        image: "/public/courses/3.png",
        color: "bg-purple-50",
        logo: "/public/courses/logo3.png",
        objective: "Đã có band 4.5-5.0, muốn chinh phục 6.0-6.5+ để xét tuyển Đại học, săn học bổng.",
        outcome: ["Đạt band điểm 6.0 - 6.5+", "Tự tin giao tiếp và thảo luận các chủ đề học thuật"],
        target: "Học viên band 4.5-5.0, mục tiêu 6.0-6.5+",
      },
      {
        id: "4",
        title: "IELTS EXPERT",
        subtitle: "Chuyên Gia 7.0+",
        badge: "Chuyên Gia",
        description: "Đã có nền tảng 6.0-6.5, mục tiêu săn học bổng lớn, định cư hoặc làm việc tại môi trường quốc tế.",
        features: [
          "Luyện đề Cambridge & Real Test",
          "Writing Advanced - Nâng band từ 6.0 lên 8.0",
          "Phản xạ Speaking 1-1 với giáo viên 8.0+",
        ],
        duration: "3-6 tháng",
        level: "7.0+",
        schedule: "3 buổi/tuần",
        price: "6.000.000đ",
        originalPrice: "8.000.000đ",
        image: "/public/courses/4.png",
        color: "bg-orange-50",
        logo: "/public/courses/logo3.png",
        objective: "Đã có nền tảng 6.0-6.5, mục tiêu săn học bổng lớn, định cư hoặc làm việc tại môi trường quốc tế.",
        outcome: ["Chinh phục band 7.0+", "Hoàn thiện kỹ năng học thuật ở cấp độ cao"],
        target: "Học viên band 6.0-6.5, mục tiêu 7.0+",
      },
    ],
  },

  // Teachers Section
  teachers: {
    label: "Giảng viên",
    title: "ĐỘI NGŨ GIẢNG VIÊN",
    subtitle: "Đội ngũ giảng viên nước ngoài giàu kinh nghiệm, tận tâm và có chứng chỉ quốc tế",
    list: [
      {
        id: "1",
        name: "Ms. Emily Johnson",
        title: "Giảng viên Tiếng Anh giao tiếp",
        image: "/public/teachers/Johnson.png",
        experience: "6 năm giảng dạy tiếng Anh tại Việt Nam và Thái Lan",
        certificates: ["Cử nhân Ngôn ngữ học - Đại học Manchester"],
        specialties: ["Phát âm chuẩn Anh – Anh", "Giao tiếp hàng ngày", "Thuyết trình"],
        rating: 5.0,
        bio: "Emily là giảng viên người Anh, với 6 năm kinh nghiệm giảng dạy tiếng Anh tại Việt Nam và Thái Lan. Cô đặc biệt mạnh về luyện phát âm và kỹ năng giao tiếp thực tế.",
        achievements: ["Chuyên gia phát âm Anh – Anh", "Được yêu thích bởi học viên người đi làm"],
      },
      {
        id: "2",
        name: "Ms. Sarah Miller",
        title: "Giảng viên IELTS & Academic English",
        image: "/public/teachers/Miller.png",
        experience: "8 năm đào tạo IELTS và tiếng Anh học thuật",
        certificates: ["Thạc sĩ TESOL - Đại học California"],
        specialties: ["IELTS Writing", "IELTS Speaking", "Tư duy phản biện"],
        rating: 5.0,
        bio: "Sarah là giảng viên người Mỹ với 8 năm kinh nghiệm đào tạo IELTS và Academic English. Cô nổi bật với chiến lược làm bài Writing & Speaking hiệu quả.",
        achievements: ["85% học viên đạt IELTS 7.0+", "Travel blogger từng đi 20+ quốc gia"],
      },
      {
        id: "3",
        name: "Ms. Anna Schmidt",
        title: "Giảng viên tiếng Anh thiếu nhi",
        image: "/public/teachers/Schmidt.png",
        experience: "5 năm dạy tiếng Anh cho trẻ em 6–12 tuổi tại châu Á",
        certificates: ["Cử nhân Giáo dục - Đại học Berlin"],
        specialties: ["Tiếng Anh thiếu nhi", "Học qua trò chơi", "Kể chuyện & Âm nhạc"],
        rating: 5.0,
        bio: "Anna là giảng viên người Đức, chuyên giảng dạy tiếng Anh thiếu nhi bằng phương pháp học qua trò chơi, âm nhạc và kể chuyện.",
        achievements: ["Tạo cảm hứng học tiếng Anh cho trẻ em", "Có thể hát các bài thiếu nhi Việt Nam"],
      },
      {
        id: "4",
        name: "Mr. James Anderson",
        title: "Giảng viên Business English",
        image: "/public/teachers/Anderson.png",
        experience: "10 năm trong kinh doanh quốc tế, 4 năm giảng dạy Business English",
        certificates: ["MBA - Đại học Sydney"],
        specialties: ["Tiếng Anh thương mại", "Đàm phán", "Viết email & Thuyết trình"],
        rating: 5.0,
        bio: "James là giảng viên người Úc, có 10 năm kinh nghiệm trong kinh doanh quốc tế và 4 năm giảng dạy Business English tại Việt Nam.",
        achievements: ["Đào tạo Business English cho nhiều công ty đa quốc gia", "Fan bóng đá - Manchester United"],
      },
      {
        id: "5",
        name: "Mr. David Brown",
        title: "Giảng viên phát âm & giao tiếp nâng cao",
        image: "/public/teachers/Brown.png",
        experience: "7 năm dạy tiếng Anh giao tiếp cho người đi làm tại Việt Nam",
        certificates: ["Cử nhân Ngôn ngữ & Văn học Anh - Đại học Toronto"],
        specialties: ["Phát âm tự nhiên", "Phản xạ giao tiếp", "Hội thoại quốc tế"],
        rating: 5.0,
        bio: "David là giảng viên người Canada, giúp học viên luyện accent tự nhiên và phản xạ giao tiếp nhanh trong môi trường quốc tế.",
        achievements: ["Đào tạo hơn 500 học viên đi làm", "Đam mê phượt xe máy tại Việt Nam"],
      },
    ],
  },

  // Achievements Section
  achievements: {
    label: "Thành tích",
    title: "BẢNG VÀNG THÀNH TÍCH",
    subtitle: "Tự hào với những thành tích xuất sắc của học viên MindUp",
    testimonials: [
      {
        id: "1",
        name: "Minh Anh, 20 tuổi",
        image: "/public/testimonials/1.JPG",
        content:
          "Trước đây mình học từ vựng toàn quên, giờ nhờ phương pháp của MindUp, chỉ 20 phút mình đã nhớ được gần 100 từ – mà đến giờ vẫn chưa quên!",
      },
      {
        id: "2",
        name: "Hải, 28 tuổi",
        image: "/public/testimonials/2.JPG",
        content:
          "Điều tuyệt nhất là lớp học không khô khan, phương pháp kết hợp khoa học ghi nhớ khiến mình tự tin dùng từ mới ngay trong giao tiếp.",
      },
      {
        id: "3",
        name: "Chị Hương, 32 tuổi",
        image: "/public/testimonials/3.JPG",
        content:
          "Con mình vốn ghét tiếng Anh, nhưng với cách học kiểu trò chơi của MindUp, bé nhớ từ nhanh mà lại thích học.",
      },
      {
        id: "4",
        name: "Mai, 19 tuổi",
        content: "Chỉ với 20 phút mỗi ngày, mình đã thuộc hàng trăm từ mà trước kia học mãi không nhớ.",
      },
      {
        id: "5",
        name: "Phong, 23 tuổi",
        content:
          "Phương pháp MindUp kết hợp khoa học ghi nhớ và thực hành liên tục – cực hiệu quả cho người đi làm bận rộn như mình.",
      },
      {
        id: "6",
        name: "Lan, 22 tuổi",
        content:
          "Không chỉ học tiếng Anh, mình còn được rèn tư duy học tập khoa học – đây là điểm khác biệt lớn của MindUp.",
      },
    ],
    caseStudies: [
      {
        name: "Nguyễn Hoàng Nam",
        age: 26,
        job: "Nhân viên marketing",
        goal: "IELTS 5.5 → 7.0 trong 6 tháng",
        method: "Ứng dụng kỹ thuật ghi nhớ độc quyền MindUp + luyện phản xạ giao tiếp hàng ngày",
        result: "Tăng vốn từ nhanh gấp 3 lần, đạt IELTS 7.0 và apply thành công học bổng Thạc sĩ Úc",
        image: "/public/testimonials/4.JPG",
        score: "7.0",
        badge: "gold",
      },
      {
        name: "Trần Minh Anh",
        age: 24,
        job: "Sinh viên IT",
        goal: "IELTS 6.0 → 8.0 trong 4 tháng",
        method: "Kết hợp phương pháp MindUp với luyện tập Speaking hàng ngày qua AI",
        result: "Cải thiện Speaking từ 5.5 lên 8.0, nhận offer làm việc tại Singapore",
        image: "/public/placeholder.svg?height=300&width=300",
        score: "8.0",
        badge: "gold",
      },
      {
        name: "Lê Thị Phương",
        age: 22,
        job: "Sinh viên Kinh tế",
        goal: "IELTS 5.0 → 7.5 trong 5 tháng",
        method: "Lộ trình cá nhân hóa với mentor 1-1, tập trung Writing & Speaking",
        result: "Đạt IELTS 7.5, nhận học bổng toàn phần du học Anh",
        image: "/public/placeholder.svg?height=300&width=300",
        score: "7.5",
        badge: "silver",
      },
    ],
    list: [
      {
        image: "/public/testimonials/4.JPG",
        name: "Nguyễn Hoàng Nam",
        school: "Nhân viên marketing",
        badge: "gold",
        score: "7.0",
        details: [
          { label: "Overall", value: "7.0" },
          { label: "Mục tiêu", value: "5.5 → 7.0" },
          { label: "Thời gian", value: "6 tháng" },
        ],
      },
      {
        image: "/public/placeholder.svg?height=200&width=200",
        name: "Trần Minh Anh",
        school: "Sinh viên IT",
        badge: "gold",
        score: "8.0",
        details: [
          { label: "Overall", value: "8.0" },
          { label: "Speaking", value: "8.0" },
          { label: "Thời gian", value: "4 tháng" },
        ],
      },
      {
        image: "/public/placeholder.svg?height=200&width=200",
        name: "Lê Thị Phương",
        school: "Sinh viên Kinh tế",
        badge: "silver",
        score: "7.5",
        details: [
          { label: "Overall", value: "7.5" },
          { label: "Writing", value: "7.5" },
          { label: "Thời gian", value: "5 tháng" },
        ],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "ĐĂNG KÝ KIỂM TRA TRÌNH ĐỘ MIỄN PHÍ",
    subtitle: "Nhận tư vấn lộ trình học tập phù hợp và trải nghiệm buổi học thử miễn phí",
    benefits: [
      "Kiểm tra trình độ đầu vào miễn phí",
      "Tư vấn lộ trình học tập cá nhân hóa",
      "Trải nghiệm buổi học thử miễn phí",
      "Nhận tài liệu học tập độc quyền",
    ],
    details: {
      hotline: "0969-435-240",
      email: "info@mindup.vn",
      address: "123 Đường ABC, Quận XYZ, TP.HCM",
    },
    form: {
      submitText: "ĐĂNG KÝ NGAY",
      note: "* Thông tin của bạn sẽ được bảo mật tuyệt đối",
    },
  },

  // Footer
  footer: {
    description: "Trung tâm Anh ngữ MindUp - Nơi khơi dậy tiềm năng và đam mê học tập tiếng Anh",
    links: {
      about: ["Giới thiệu", "Phương pháp học", "Đội ngũ giảng viên", "Thành tích học viên", "Liên hệ"],
      courses: ["Foundation", "Intermediate", "Advanced", "VIP 1-1", "Luyện thi IELTS"],
    },
    copyright: "&copy; 2025 MindUp. All rights reserved.",
  },

  // Deals Sections
  deals: {
    hero: {
      title: "🔥 Ưu Đãi Đặc Biệt - Tiết Kiệm Lên Đến 50%!",
      subtitle: "Đừng bỏ lỡ cơ hội học IELTS với giá siêu hời. Chương trình ưu đãi có hạn!",
      features: [
        "Giảm giá lên đến 50% cho các học viên đăng ký đầu tiên",
        "Tặng kèm tài liệu học tập độc quyền",
        "Hỗ trợ học phí trả góp 0%",
        "Đăng ký ngay nhận ưu đãi đặc biệt"
      ],
      cta: "Đăng Ký Ưu Đãi Ngay",
      image: "/public/courses/1.png",
      badge: "HOT DEAL"
    },
    middle: {
      title: "Khóa Học Nổi Bật",
      subtitle: "Hàng nghìn học viên đã thành công với chương trình học của chúng tôi",
      deals: [
        {
          title: "FOUNDATION BREAKTHROUGH",
          originalPrice: "5.500.000đ",
          discountedPrice: "4.000.000đ",
          discount: "27%",
          description: "Khóa nền tảng cho người mới bắt đầu, phá đảo mất gốc",
          image: "/public/courses/1.png",
          cta: "Đăng Ký Ngay"
        },
        {
          title: "IELTS ACCELERATOR",
          originalPrice: "6.500.000đ",
          discountedPrice: "5.000.000đ",
          discount: "23%",
          description: "Tăng tốc band điểm từ 4.5 lên 5.5+ chỉ trong 3 tháng",
          image: "/public/courses/2.png",
          cta: "Đăng Ký Ngay"
        },
        {
          title: "IELTS MASTER",
          originalPrice: "7.000.000đ",
          discountedPrice: "5.500.000đ",
          discount: "21%",
          description: "Bứt phá lên 6.0-6.5+ để xét tuyển đại học và học bổng",
          image: "/public/courses/3.png",
          cta: "Đăng Ký Ngay"
        }
      ]
    },
    footer: {
      title: "⏰ Ưu Đãi Có Hạn - Đừng Bỏ Lỡ!",
      subtitle: "Chương trình ưu đãi đặc biệt sẽ kết thúc trong:",
      cta: "Đăng Ký Ngay Trước Khi Quá Muộn",
      image: "/public/courses/4.png"
    }
  },

  // Navigation
  nav: {
    menu: [
      { text: "Trang chủ", href: "#home" },
      { text: "Về chúng tôi", href: "#about" },
      { text: "Khóa học", href: "#courses" },
      { text: "Giảng viên", href: "#teachers" },
      { text: "Thành tích", href: "#achievements" },
      { text: "Liên hệ", href: "#contact", class: "btn-nav" },
    ],
  },
}

// Make data available globally
window.data = data


