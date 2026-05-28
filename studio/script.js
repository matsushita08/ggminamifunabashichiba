/* ============================================================
   GOLD'S GYM 南船橋千葉店 スタジオLP - JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ---- FAQ アコーディオン ---- */
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const answerId = this.getAttribute('aria-controls');
      const answer   = document.getElementById(answerId);

      // 他を閉じる
      faqButtons.forEach(function (b) {
        b.setAttribute('aria-expanded', 'false');
        const aid = b.getAttribute('aria-controls');
        const ans = document.getElementById(aid);
        if (ans) ans.hidden = true;
      });

      // 自分をトグル
      if (!expanded) {
        this.setAttribute('aria-expanded', 'true');
        if (answer) answer.hidden = false;
      }
    });
  });

  /* ---- フローティングCTA 表示制御 ---- */
  var floatingCta = document.getElementById('floating-cta');
  var heroSection = document.getElementById('hero');

  function onScroll() {
    if (!floatingCta || !heroSection) return;
    var heroBottom = heroSection.getBoundingClientRect().bottom;
    if (heroBottom < 0) {
      floatingCta.classList.add('visible');
    } else {
      floatingCta.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- スクロールリビール アニメーション ---- */
  var revealEls = document.querySelectorAll(
    '.value-card, .lesson-card, .story-card, .safety-item, .lifestyle-item, .step, .empathy-item'
  );

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal', 'visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(function (el) {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  /* ---- スムーズスクロール (iOS Safari 対応) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
