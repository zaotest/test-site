/* 茶のくに八女ハーフマラソン LP — interactions */
(function () {
  "use strict";

  /* ---------- Hamburger menu ---------- */
  var hamburger = document.getElementById("navHamburger");
  var drawer    = document.getElementById("navDrawer");

  function openMenu() {
    hamburger.classList.add("is-open");
    drawer.classList.add("is-open");
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "メニューを閉じる");
    drawer.setAttribute("aria-hidden", "false");
    document.body.classList.add("nav-open");
  }

  function closeMenu() {
    hamburger.classList.remove("is-open");
    drawer.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "メニューを開く");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("nav-open");
  }

  hamburger.addEventListener("click", function () {
    hamburger.classList.contains("is-open") ? closeMenu() : openMenu();
  });

  /* ドロワー内リンクをタップしたら閉じる */
  drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ESCキーでも閉じる */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Nav background on scroll ---------- */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Scroll reveal animations ---------- */
  var animated = document.querySelectorAll("[data-animate], section");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    animated.forEach(function (el) { io.observe(el); });
  } else {
    animated.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Kurogi map modal ---------- */
  var kurogiBtn     = document.getElementById("openKurogiMap");
  var kurogiModal   = document.getElementById("kurogiModal");
  var kurogiOverlay = document.getElementById("kurogiModalOverlay");
  var kurogiClose   = document.getElementById("kurogiModalClose");

  if (kurogiBtn && kurogiModal) {
    kurogiBtn.addEventListener("click", function () {
      kurogiModal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
    function closeKurogiModal() {
      kurogiModal.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    kurogiClose.addEventListener("click", closeKurogiModal);
    kurogiOverlay.addEventListener("click", closeKurogiModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeKurogiModal();
    });
  }

  /* ---------- Course map modal ---------- */
  var openBtn   = document.getElementById("openCourseMap");
  var modal     = document.getElementById("courseModal");
  var overlay   = document.getElementById("courseModalOverlay");
  var closeBtn  = document.getElementById("courseModalClose");

  if (openBtn && modal) {
    openBtn.addEventListener("click", function () {
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });
    function closeModal() {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    q.addEventListener("click", function () {
      var open = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = null;
        }
      });
      if (open) {
        item.classList.remove("open");
        a.style.maxHeight = null;
      } else {
        item.classList.add("open");
        a.style.maxHeight = a.scrollHeight + "px";
      }
    });
  });

})();
