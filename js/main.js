let searchIcon = document.querySelector(".searchIcon");
let searchPage = document.querySelector(".scrol");
let c = 0;

searchIcon.addEventListener("click", () => {
    let isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (!isSmallScreen) {
        if (c === 0) {
            searchPage.style.top = "32px";
            c = 1;
        } else {
            searchPage.style.top = "-210px";
            c = 0;
        }
    } else {
        
    }
});
// ////////////////////////////////////////////////////////////////


let p_con = document.querySelector(".p_con");
let testimonial_image = document.querySelector(".testimonial-image img"); 
let testimonial_author = document.querySelector(".testimonial-author");
let nav_buttons = document.querySelectorAll(".nav-buttons div");

console.log(nav_buttons);
let au = "Aigars";

nav_buttons[0].addEventListener("click", () => {
  if (au === "Aigars") {
    testimonial_author.innerHTML = "John Doe";
    p_con.innerHTML = "Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.";
    testimonial_image.src = "imgs/mike-muller-150x150.jpg";
    testimonial_image.alt = "John Doe Image"; 
    au="John"
  }
  else{
    testimonial_author.innerHTML = "Aigars Silkalns";
    p_con.innerHTML = "Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper. </p>";
    testimonial_image.src = "imgs/Aigars-Silkalns-150x150.jpg";
    testimonial_image.alt = "Customer Image"; 
    au="Aigars"
  }
});

nav_buttons[1].addEventListener("click", () => {
  if (au === "Aigars") {
    testimonial_author.innerHTML = "John Doe";
    p_con.innerHTML = "Integer ut rutrum nulla, sit amet fringilla nisi. Nam nisl velit, vehicula at nibh sed, porttitor sollicitudin ante. Sed justo augue, vestibulum ut efficitur vitae, euismod et justo. Mauris sed mattis ante. Ut ligula lectus, consequat vitae neque ac, gravida hendrerit ante.";
    testimonial_image.src = "imgs/mike-muller-150x150.jpg";
    testimonial_image.alt = "John Doe Image"; 
     au="John"
  }
  else{
    testimonial_author.innerHTML = "Aigars Silkalns";
    p_con.innerHTML = "Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus dictum, augue tortor dictum ipsum, nec congue arcu lorem in nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus libero. Aliquam varius viverra ex, in venenatis magna ornare sit amet. Integer varius sit amet turpis eu ullamcorper. </p>";
    testimonial_image.src = "imgs/Aigars-Silkalns-150x150.jpg";
    testimonial_image.alt = "Customer Image"; 
    au="Aigars"
  }
});

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // عرض 4 صور في نفس الوقت
    spaceBetween: 30, // المسافة بين الصور
    loop: true, // تفعيل الحلقة المستمرة
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500, // التبديل التلقائي كل 2.5 ثانية
      disableOnInteraction: false, // استمرار التشغيل التلقائي حتى بعد التفاعل
    },
    breakpoints: {
      320: { // الشاشات الصغيرة جدًا
        slidesPerView: 1, // عرض 1 صورة
        spaceBetween: 20,
      },
      640: { // الشاشات الصغيرة
        slidesPerView: 1, // عرض 1 صورة
        spaceBetween: 20,
      },
      768: { // الشاشات المتوسطة
        slidesPerView: 2, // عرض 2 صورة
        spaceBetween: 30,
      },
      1024: { // الشاشات الكبيرة
        slidesPerView: 3, // عرض 3 صور
        spaceBetween: 40,
      },
      1200: { // الشاشات الكبيرة جداً
        slidesPerView: 4, // عرض 4 صور
        spaceBetween: 30,
      },
    },
  });