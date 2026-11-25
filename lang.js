/**
 * Sokxay Group - Bilingual Language Switcher (Lao / English)
 */
(function() {
  const SVG_UR = '<svg class="ui-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="8 7 17 7 17 16"></polyline></svg>';
  const SVG_R = '<svg class="ui-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>';
  const SVG_U = '<svg class="ui-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>';

  const DICT = {
    lo: {
      'nav.home': 'ໜ້າຫຼັກ',
      'nav.business': 'ທຸລະກິດ',
      'nav.about': 'ກ່ຽວກັບເຮົາ',
      'nav.leadership': 'ຄະນະບໍລິຫານ',
      'nav.news': 'ຂ່າວສານ',
      'nav.contact': 'ຕິດຕໍ່',
      'hero.h1': 'ກຸ່ມບໍລິສັດ ໂຊກໄຊ<br><span>ເຕີບໂຕໄປນຳກັນ</span>',
      'hero.p': 'ຜູ້ນຳດ້ານການຄ້າ ແລະ ການລົງທຶນ<br>ທີ່ເຊື່ອມຕໍ່ໂອກາດສູ່ອະນາຄົດ',
      'hero.btn1': 'ສຳຫຼວດທຸລະກິດຂອງເຮົາ',
      'hero.btn2': 'ຕິດຕໍ່ພວກເຮົາ',
      'stat1.title': 'ປີແຫ່ງການເຕີບໂຕ',
      'stat1.desc': 'ເລີ່ມຕົ້ນທຸລະກິດຕັ້ງແຕ່ປີ 2005',
      'stat2.title': 'ກຸ່ມທຸລະກິດໃນເຄືອ',
      'stat2.desc': 'ການຄ້າ, ການເງິນ, ໂລຈິສຕິກ ແລະ ອື່ນໆ',
      'stat3.title': 'ແຂວງທົ່ວປະເທດ',
      'stat3.desc': 'ເຄືອຂ່າຍການບໍລິການຄອບຄຸມທົ່ວລາວ',
      'biz.title': 'ຫຼາກຫຼາຍທຸລະກິດ<br>ພາຍໃຕ້ກຸ່ມໂຊກໄຊ',
      'biz.desc': 'ສຳຫຼວດຂະແໜງທຸລະກິດ ແລະ ໂຄງການທີ່ເຊື່ອມຕໍ່ການຄ້າ, ການລົງທຶນ ແລະ ການບໍລິການ',
      'biz.tile1': 'ການຄ້າ ແລະ<br>ຈັດຈຳໜ່າຍ',
      'biz.tile2': 'ການເງິນ ແລະ<br>ປະກັນໄພ',
      'biz.tile3': 'ຂົນສົ່ງ ແລະ<br>ໂລຈິສຕິກ',
      'biz.tile4': 'ກໍ່ສ້າງ ແລະ<br>ການຜະລິດ',
      'biz.tile5': 'ອະສັງຫາລິມະຊັບ',
      'biz.tile6': 'ອາຫານ ແລະ<br>ເຄື່ອງດື່ມ',
      'biz.tile7': 'ເທັກໂນໂລຢີ<br>ແລະ ດິຈິຕອນ',
      'biz.tile8': 'ກະສິກຳ ແລະ<br>ທຸລະກິດອື່ນໆ',
      'biz.under': 'ຂະແໜງທຸລະກິດຫຼັກຂອງ ກຸ່ມບໍລິສັດ ໂຊກໄຊ',
      'biz.all': 'ເບິ່ງໂຄງການທັງໝົດ <span>›</span>',
      'dir.title': 'ຮູ້ຈັກທຸລະກິດຂອງເຮົາ',
      'dir.desc': 'ເຄືອຂ່າຍທຸລະກິດ ແລະ ບໍລິສັດໃນເຄືອ ກຸ່ມບໍລິສັດ ໂຊກໄຊ',
      'dir.all': 'ເບິ່ງທັງໝົດ <span>' + SVG_UR + '</span>',
      'about.title': 'ຮູ້ຈັກ<br>ກຸ່ມບໍລິສັດໂຊກໄຊ',
      'about.intro': 'ຈາກຈຸດເລີ່ມຕົ້ນໃນປີ 2005 ສູ່ກຸ່ມທຸລະກິດທີ່ຫຼາກຫຼາຍ.',
      'about.body': 'ກຸ່ມບໍລິສັດ ໂຊກໄຊ ເປັນທຸລະກິດຂອງຄົນລາວ ທີ່ດຳເນີນງານດ້ານການຄ້າ, ການລົງທຶນ ແລະ ການບໍລິການ ພ້ອມທັງສ້າງຄວາມຮ່ວມມືກັບຄູ່ຮ່ວມງານທັງພາຍໃນ ແລະ ຕ່າງປະເທດ.',
      'about.btn': 'ກ່ຽວກັບພວກເຮົາ',
      'lead.title': 'ຄະນະບໍລິຫານ<br>ກຸ່ມບໍລິສັດໂຊກໄຊ',
      'lead.desc': 'ຮູ້ຈັກຄະນະຜູ້ບໍລິຫານຂອງພວກເຮົາ',
      'lead.all': 'ເບິ່ງຄະນະບໍລິຫານ <span>›</span>',
      'news.title': 'ຂ່າວສານ<br>ແລະ ກິດຈະກຳ',
      'news.all': 'ເບິ່ງຂ່າວທັງໝົດ ' + SVG_UR,
      'news.read': 'ອ່ານເພີ່ມເຕີມ ' + SVG_UR,
      'contact.title': 'ມາສ້າງໂອກາດ<br>ໄປພ້ອມກັນ',
      'contact.desc': 'ຕິດຕໍ່ກຸ່ມບໍລິສັດໂຊກໄຊ ເພື່ອສອບຖາມຂໍ້ມູນ ແລະ ຄວາມຮ່ວມມືທາງທຸລະກິດ',
      'contact.btn': 'ຕິດຕໍ່ພວກເຮົາ',
      'foot.head': 'ສຳນັກງານໃຫຍ່',
      'foot.addr': 'ບ້ານທາດຫຼວງກາງ, ໜ່ວຍ 5,<br>ຖະໜົນກຳແພງເມືອງ, ເມືອງໄຊເສດຖາ,<br>ນະຄອນຫຼວງວຽງຈັນ',
      'foot.contact': 'ຕິດຕໍ່',
      'foot.follow': 'ຕິດຕາມພວກເຮົາ',
      'foot.top': 'ກັບຂຶ້ນເທິງ ' + SVG_U,
      'menu.open': 'ເປີດເມນູ',
      'menu.close': 'ປິດເມນູ'
    },
    en: {
      'nav.home': 'Home',
      'nav.business': 'Businesses',
      'nav.about': 'About Us',
      'nav.leadership': 'Leadership',
      'nav.news': 'News',
      'nav.contact': 'Contact',
      'hero.h1': 'Sokxay Group<br><span>Growing Together</span>',
      'hero.p': 'Leading in trade and investment,<br>connecting opportunities to the future.',
      'hero.btn1': 'Explore Our Businesses',
      'hero.btn2': 'Contact Us',
      'stat1.title': 'Years of Growth',
      'stat1.desc': 'Pioneering business since 2005',
      'stat2.title': 'Core Business Sectors',
      'stat2.desc': 'Trade, Finance, Logistics & more',
      'stat3.title': 'Provinces Nationwide',
      'stat3.desc': 'Service network across Laos',
      'biz.title': 'Diverse Businesses<br>Under Sokxay Group',
      'biz.desc': 'Explore business sectors connecting trade, investment, and essential services',
      'biz.tile1': 'Trade &<br>Distribution',
      'biz.tile2': 'Financial<br>Services',
      'biz.tile3': 'Logistics &<br>Warehousing',
      'biz.tile4': 'Construction &<br>Manufacturing',
      'biz.tile5': 'Real Estate &<br>Development',
      'biz.tile6': 'Food &<br>Beverage',
      'biz.tile7': 'Technology &<br>Digital',
      'biz.tile8': 'Agriculture &<br>Enterprises',
      'biz.under': 'Core Business Sectors of Sokxay Group',
      'biz.all': 'View All Projects <span>›</span>',
      'dir.title': 'Our Affiliated Companies',
      'dir.desc': 'Featured subsidiaries and corporate projects under Sokxay Group',
      'dir.all': 'View All <span>' + SVG_UR + '</span>',
      'about.title': 'Discover<br>Sokxay Group',
      'about.intro': 'From our roots in 2005 into a diverse, forward-looking conglomerate.',
      'about.body': 'Sokxay Group is a proudly 100% Lao-owned enterprise operating in trade, investment, and services, actively collaborating with domestic and international partners.',
      'about.btn': 'About Our Group',
      'lead.title': 'Executive Leadership<br>Sokxay Group',
      'lead.desc': 'Meet the leadership team shaping our strategic growth',
      'lead.all': 'View Leadership Team <span>›</span>',
      'news.title': 'News &<br>Events',
      'news.all': 'All News ' + SVG_UR,
      'news.read': 'Read More ' + SVG_UR,
      'contact.title': 'Let’s Create Opportunities<br>Together',
      'contact.desc': 'Get in touch with Sokxay Group for inquiries, partnerships, and collaborations',
      'contact.btn': 'Contact Us',
      'foot.head': 'Headquarters',
      'foot.addr': 'That Luang Kang Village, Unit 5,<br>Kamphaengmeuang Rd, Xaysettha District,<br>Vientiane Capital, Lao PDR',
      'foot.contact': 'Contact Us',
      'foot.follow': 'Follow Us',
      'foot.top': 'Back to Top ' + SVG_U,
      'menu.open': 'Open menu',
      'menu.close': 'Close menu'
    }
  };

  function applyLanguage(lang) {
    if (!DICT[lang]) return;
    localStorage.setItem('sokxay_lang', lang);
    document.documentElement.lang = lang;

    // Toggle button active visual states
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const isLao = btn.textContent.includes('ລາວ');
      const shouldActive = (lang === 'lo' && isLao) || (lang === 'en' && !isLao);
      btn.classList.toggle('active', shouldActive);
      btn.setAttribute('aria-pressed', shouldActive ? 'true' : 'false');
    });

    // 1. Update elements with explicit data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (DICT[lang][key]) {
        el.innerHTML = DICT[lang][key];
      }
    });

    // 2. Direct selector updates for seamless zero-config toggle
    const map = [
      // Navigation
      { sel: '.navigation nav a:nth-child(1)', key: 'nav.home' },
      { sel: '.navigation nav a:nth-child(2)', key: 'nav.business' },
      { sel: '.navigation nav a:nth-child(3)', key: 'nav.about' },
      { sel: '.navigation nav a:nth-child(4)', key: 'nav.leadership' },
      { sel: '.navigation nav a:nth-child(5)', key: 'nav.news' },
      { sel: '.navigation nav a:nth-child(6)', key: 'nav.contact' },

      // Hero
      { sel: '.hero h1', key: 'hero.h1' },
      { sel: '.hero p', key: 'hero.p' },
      { sel: '.hero-actions .button.white', key: 'hero.btn1', iconKeep: true },
      { sel: '.hero-actions .button.outline', key: 'hero.btn2', iconKeep: true },

      // Highlights
      { sel: '.highlights .highlight:nth-child(1) strong', key: 'stat1.title' },
      { sel: '.highlights .highlight:nth-child(1) p', key: 'stat1.desc' },
      { sel: '.highlights .highlight:nth-child(2) strong', key: 'stat2.title' },
      { sel: '.highlights .highlight:nth-child(2) p', key: 'stat2.desc' },
      { sel: '.highlights .highlight:nth-child(3) strong', key: 'stat3.title' },
      { sel: '.highlights .highlight:nth-child(3) p', key: 'stat3.desc' },

      // Businesses
      { sel: '.section.business h2', key: 'biz.title' },
      { sel: '.section.business .center > p', key: 'biz.desc' },
      { sel: '.business-grid .tile:nth-child(1) h3', key: 'biz.tile1' },
      { sel: '.business-grid .tile:nth-child(2) h3', key: 'biz.tile2' },
      { sel: '.business-grid .tile:nth-child(3) h3', key: 'biz.tile3' },
      { sel: '.business-grid .tile:nth-child(4) h3', key: 'biz.tile4' },
      { sel: '.business-grid .tile:nth-child(5) h3', key: 'biz.tile5' },
      { sel: '.business-grid .tile:nth-child(6) h3', key: 'biz.tile6' },
      { sel: '.business-grid .tile:nth-child(7) h3', key: 'biz.tile7' },
      { sel: '.business-grid .tile:nth-child(8) h3', key: 'biz.tile8' },
      { sel: '.section.business .under-grid p', key: 'biz.under' },
      { sel: '.section.business .under-grid a', key: 'biz.all' },

      // Directory
      { sel: '.directory-heading h2', key: 'dir.title' },
      { sel: '.directory-heading p', key: 'dir.desc' },
      { sel: '.directory-heading > a', key: 'dir.all' },

      // About
      { sel: '.about-copy h2', key: 'about.title' },
      { sel: '.about-copy .intro', key: 'about.intro' },
      { sel: '.about-copy p:not(.intro)', key: 'about.body' },
      { sel: '.about-copy .button', key: 'about.btn', iconKeep: true },

      // Leadership
      { sel: '.leadership h2', key: 'lead.title' },
      { sel: '.leadership .center > p', key: 'lead.desc' },
      { sel: '.leadership .under-grid a', key: 'lead.all' },

      // News
      { sel: '.news .section-row h2', key: 'news.title' },
      { sel: '.news .section-row .text-link', key: 'news.all' },

      // Contact
      { sel: '.contact h2', key: 'contact.title' },
      { sel: '.contact .center > p', key: 'contact.desc' },
      { sel: '.contact .button', key: 'contact.btn', iconKeep: true },

      // Footer
      { sel: '.foot-grid > div:nth-child(2) strong', key: 'foot.head' },
      { sel: '.foot-grid > div:nth-child(2) p', key: 'foot.addr' },
      { sel: '.foot-grid > div:nth-child(3) strong', key: 'foot.contact' },
      { sel: '.foot-grid > div:nth-child(4) strong', key: 'foot.follow' },
      { sel: '.foot-bottom > a', key: 'foot.top' }
    ];

    map.forEach(item => {
      const el = document.querySelector(item.sel);
      if (!el) return;
      const text = DICT[lang][item.key];
      if (!text) return;

      if (item.iconKeep) {
        const icon = el.querySelector('.btn-icon');
        el.innerHTML = text + (icon ? ' ' + icon.outerHTML : '');
      } else {
        el.innerHTML = text;
      }
    });

    syncMobileMenu(lang);
  }

  let mobileDrawerEl = null;
  let menuToggleEl = null;

  function setMobileMenuState(open) {
    if (!mobileDrawerEl || !menuToggleEl) return;
    const isOpen = Boolean(open);
    const lang = document.documentElement.lang === 'en' ? 'en' : 'lo';
    mobileDrawerEl.classList.toggle('is-open', isOpen);
    mobileDrawerEl.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    menuToggleEl.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuToggleEl.setAttribute('aria-label', DICT[lang][isOpen ? 'menu.close' : 'menu.open']);
    document.body.classList.toggle('nav-open', isOpen);
  }

  function syncMobileMenu(lang) {
    const activeLang = DICT[lang] ? lang : (document.documentElement.lang === 'en' ? 'en' : 'lo');
    if (menuToggleEl) {
      const isOpen = menuToggleEl.getAttribute('aria-expanded') === 'true';
      menuToggleEl.setAttribute('aria-label', DICT[activeLang][isOpen ? 'menu.close' : 'menu.open']);
    }
    if (!mobileDrawerEl) return;
    const mobileNav = mobileDrawerEl.querySelector('.mobile-nav');
    const desktopLinks = document.querySelectorAll('.navigation nav a');
    if (mobileNav && desktopLinks.length) {
      mobileNav.innerHTML = '';
      desktopLinks.forEach((src) => {
        const link = document.createElement('a');
        link.href = src.getAttribute('href') || '#';
        if (src.hasAttribute('aria-current')) {
          link.setAttribute('aria-current', src.getAttribute('aria-current'));
        }
        const label = document.createElement('span');
        label.textContent = src.textContent.trim();
        const arrow = document.createElement('b');
        arrow.setAttribute('aria-hidden', 'true');
        arrow.innerHTML = SVG_R;
        link.appendChild(label);
        link.appendChild(arrow);
        link.addEventListener('click', () => setMobileMenuState(false));
        mobileNav.appendChild(link);
      });
    }
  }

  function initMobileMenu() {
    const headerRight = document.querySelector('.header-right');
    const desktopNav = document.querySelector('.navigation nav');
    if (!headerRight || !desktopNav) return;

    if (!document.querySelector('.menu-toggle')) {
      menuToggleEl = document.createElement('button');
      menuToggleEl.type = 'button';
      menuToggleEl.className = 'menu-toggle';
      menuToggleEl.setAttribute('aria-expanded', 'false');
      menuToggleEl.setAttribute('aria-controls', 'mobileNavDrawer');
      menuToggleEl.setAttribute('aria-label', DICT.lo['menu.open']);
      menuToggleEl.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">' +
        '<line class="line-top" x1="4" y1="7" x2="20" y2="7"></line>' +
        '<line class="line-mid" x1="4" y1="12" x2="20" y2="12"></line>' +
        '<line class="line-bot" x1="4" y1="17" x2="20" y2="17"></line>' +
        '</svg>';
      headerRight.appendChild(menuToggleEl);
    } else {
      menuToggleEl = document.querySelector('.menu-toggle');
    }

    if (!document.getElementById('mobileNavDrawer')) {
      mobileDrawerEl = document.createElement('div');
      mobileDrawerEl.className = 'mobile-drawer';
      mobileDrawerEl.id = 'mobileNavDrawer';
      mobileDrawerEl.setAttribute('aria-hidden', 'true');
      mobileDrawerEl.innerHTML =
        '<div class="mobile-drawer-backdrop"></div>' +
        '<div class="mobile-drawer-panel">' +
        '<nav class="mobile-nav" aria-label="Mobile navigation"></nav>' +
        '<div class="mobile-drawer-meta">' +
        '<div class="mobile-drawer-tagline">' +
        '<span>LEADING IN TRADE &amp; INVESTMENT</span>' +
        '<span class="dots" aria-hidden="true"><i></i><i></i><i></i><i></i></span>' +
        '</div>' +
        '</div>' +
        '</div>';
      document.body.appendChild(mobileDrawerEl);
    } else {
      mobileDrawerEl = document.getElementById('mobileNavDrawer');
    }

    menuToggleEl.addEventListener('click', () => {
      const isOpen = menuToggleEl.getAttribute('aria-expanded') === 'true';
      setMobileMenuState(!isOpen);
    });

    const backdrop = mobileDrawerEl.querySelector('.mobile-drawer-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => setMobileMenuState(false));
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawerEl.classList.contains('is-open')) {
        setMobileMenuState(false);
        menuToggleEl.focus();
      }
    });

    const desktopQuery = window.matchMedia('(min-width: 961px)');
    const handleResize = (mq) => {
      if (mq.matches) setMobileMenuState(false);
    };
    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener('change', handleResize);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(handleResize);
    }
  }

  // Smooth Tab & Page Navigation Transitions
  function initTabTransitions() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#') || href.startsWith('http://') || href.startsWith('https://') ||
          href.startsWith('mailto:') || href.startsWith('tel:') || link.target === '_blank') {
        return;
      }

      const currentUrl = (window.location.pathname.split('/').pop() || 'index.html').split('#')[0];
      const targetUrl = href.split('#')[0];

      if (targetUrl === currentUrl || targetUrl === '') {
        return;
      }

      if ('startViewTransition' in document) {
        return;
      }

      e.preventDefault();
      document.body.classList.add('page-leaving');
      setTimeout(() => {
        window.location.href = href;
      }, 150);
    });

    window.addEventListener('pageshow', () => {
      document.body.classList.remove('page-leaving');
      setMobileMenuState(false);
    });
  }

  // Bind click events to all lang-btn elements
  function initLanguageSwitcher() {
    initMobileMenu();

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const isLao = this.textContent.includes('ລາວ');
        applyLanguage(isLao ? 'lo' : 'en');
      });
    });

    const saved = localStorage.getItem('sokxay_lang') || 'lo';
    applyLanguage(saved);
    initTabTransitions();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
  } else {
    initLanguageSwitcher();
  }
})();
