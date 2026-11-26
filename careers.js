(function() {
  const CAREERS_DICT = {
    lo: {
      'car.bc': 'ສະໝັກງານ',
      'car.title': 'ຮ່ວມງານກັບພວກເຮົາ',
      'car.introKicker': 'CAREERS AT SOKXAY',
      'car.introH2': 'ສ້າງອະນາຄົດທາງອາຊີບ<br>ໄປພ້ອມກັບກຸ່ມໂຊກໄຊ',
      'car.introP': 'ພວກເຮົາກຳລັງຊອກຫາບຸກຄະລາກອນທີ່ມີຄວາມຕັ້ງໃຈ, ກ້າຄິດກ້າເຮັດ ແລະ ພ້ອມຮຽນຮູ້ສິ່ງໃໝ່ ເພື່ອຮ່ວມຂັບເຄື່ອນທຸລະກິດໃນເຄືອກຸ່ມບໍລິສັດໂຊກໄຊ ໃນຫຼາກຫຼາຍຂະແໜງການທົ່ວປະເທດລາວ.',
      'car.jobsH2': 'ຕຳແໜ່ງງານທີ່ເປີດຮັບ',
      'car.jobsP': 'ເລືອກໝວດໝູ່ສາຍງານທີ່ທ່ານສົນໃຈ ຫຼື ກົດສະໝັກຕຳແໜ່ງທີ່ເໝາະສົມກັບທ່ານ.',
      'car.fAll': 'ທັງໝົດ',
      'car.fFinance': 'ການເງິນ ແລະ ບັນຊີ',
      'car.fTech': 'ເຕັກໂນໂລຢີ',
      'car.fLogistics': 'ໂລຈິສຕິກ',
      'car.fTrade': 'ການຄ້າ ແລະ ການຕະຫຼາດ',
      'car.fHr': 'ບໍລິຫານ ແລະ HR',
      'car.fullTime': 'ເຕັມເວລາ',
      'car.locVte': 'ນະຄອນຫຼວງວຽງຈັນ',
      'car.applyBtn': 'ສະໝັກຕຳແໜ່ງນີ້',
      'car.reqTitle': 'ຄຸນສົມບັດທີ່ຕ້ອງການ',
      'car.r1q1': 'ຈົບປະລິນຍາຕີ ຫຼື ຊັ້ນສູງ ສາຂາບັນຊີ, ການເງິນ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'car.r1q2': 'ມີປະສົບການດ້ານບັນຊີລາຍຮັບ-ລາຍຈ່າຍ ແລະ ໃຊ້ Excel / ໂປຣແກຣມບັນຊີໄດ້ຄ່ອງແຄ້ວ',
      'car.r1q3': 'ມີຄວາມລະອຽດຮອບຄອບ, ຊື່ສັດ ແລະ ຄວາມຮັບຜິດຊອບຕໍ່ກຳນົດເວລາສູງ',
      'car.r2q1': 'ຈົບສາຂາ IT, ວິທະຍາສາດຄອມພິວເຕີ ຫຼື ມີຜົນງານພັດທະນາລະບົບຕົວຈິງ',
      'car.r2q2': 'ມີທັກສະ HTML, CSS, JavaScript ແລະ ລະບົບ Backend ຫຼື ຖານຂໍ້ມູນ (SQL / API)',
      'car.r2q3': 'ມັກຮຽນຮູ້ເຕັກໂນໂລຢີໃໝ່, ແກ້ໄຂບັນຫາໄດ້ດີ ແລະ ເຮັດວຽກເປັນທີມ',
      'car.r3q1': 'ຈົບສາຂາໂລຈິສຕິກ, ການຈັດການຊັບພະຍາກອນ ຫຼື ສາຂາທີ່ກ່ຽວຂ້ອງ',
      'car.r3q2': 'ເຂົ້າໃຈລະບົບຄຸ້ມຄອງສາງສິນຄ້າ (Stock), ເອກະສານຂົນສົ່ງ ແລະ Excel',
      'car.r3q3': 'ປະສານງານຄ່ອງແຄ້ວ, ວາງແຜນເປັນລະບົບ ແລະ ແກ້ໄຂບັນຫາສະເພາະໜ້າໄດ້ດີ',
      'car.r4q1': 'ຈົບສາຂາບໍລິຫານທຸລະກິດ, ການຕະຫຼາດ ຫຼື ມີປະສົບການດ້ານການຂາຍ ແລະ ການຄ້າ',
      'car.r4q2': 'ມີທັກສະການສື່ສານ, ເຈລະຈາຕໍ່ລອງ ແລະ ສ້າງຄວາມສຳພັນກັບລູກຄ້າໄດ້ດີ',
      'car.r4q3': 'ກະຕືລືລົ້ນ, ມັກວຽກທ້າທາຍເປົ້າໝາຍ ແລະ ສາມາດອອກພົບລູກຄ້າໄດ້',
      'car.r5q1': 'ຈົບປະລິນຍາຕີ ສາຂາບໍລິຫານຊັບພະຍາກອນມະນຸດ, ບໍລິຫານທຸລະກິດ ຫຼື ກ່ຽວຂ້ອງ',
      'car.r5q2': 'ມີຄວາມຮູ້ດ້ານກົດໝາຍແຮງງານ, ການສັນຫາພະນັກງານ ແລະ ວຽກບໍລິຫານຫ້ອງການ',
      'car.r5q3': 'ມະນຸດສຳພັນດີ, ຮັກສາຄວາມລັບເອກະສານ ແລະ ໃຊ້ໂປຣແກຣມຫ້ອງການໄດ້ຄ່ອງແຄ້ວ',
      'car.r6q1': 'ຈົບສາຂາການຕະຫຼາດ, ນິເທດສາດ ຫຼື ມີປະສົບການບໍລິຫານແຄມເປນອອນລາຍ',
      'car.r6q2': 'ວາງແຜນ Content, ນຳໃຊ້ Facebook / TikTok Ads ແລະ ວິເຄາະສະຖິຕິໄດ້',
      'car.r6q3': 'ມີຫົວຄິດສ້າງສັນ, ຕິດຕາມເທຣນສື່ສັງຄົມ ແລະ ສື່ສານລາວ-ອັງກິດໄດ້ດີ',
      'car.formH2': 'ສົ່ງໃບສະໝັກງານອອນລາຍ',
      'car.formLead': 'ກະລຸນາປ້ອນຂໍ້ມູນສ່ວນຕົວ ແລະ ເລືອກຕຳແໜ່ງທີ່ທ່ານຕ້ອງການສະໝັກ ທີມງານ HR ຈະຕິດຕໍ່ກັບຫາທ່ານ.',
      'car.lblName': 'ຊື່ ແລະ ນາມສະກຸນ *',
      'car.lblPhone': 'ເບີໂທລະສັບ / WhatsApp *',
      'car.lblEmail': 'ອີເມວ',
      'car.lblPos': 'ຕຳແໜ່ງທີ່ຕ້ອງການສະໝັກ *',
      'car.lblMsg': 'ປະສົບການເຮັດວຽກ ແລະ ຄວາມສາມາດໂດຍຫຍໍ້',
      'car.lblCv': 'ແນບໄຟລ໌ CV / Resume (PDF, DOC, DOCX)',
      'car.cvPrompt': 'ເລືອກໄຟລ໌ CV / Resume ຂອງທ່ານ (ທາງເລືອກ)',
      'car.submitBtn': 'ສົ່ງໃບສະໝັກງານ',
      'car.formNote': 'ຂໍ້ມູນຂອງທ່ານຈະຖືກໃຊ້ເພື່ອພິຈາລະນາຮັບສະໝັກພະນັກງານໃນກຸ່ມບໍລິສັດໂຊກໄຊ.',
      'car.hrH3': 'ຕິດຕໍ່ຝ່າຍຊັບພະຍາກອນມະນຸດ (HR)',
      'car.hrP': 'ທ່ານສາມາດສົ່ງ CV ຫຼື ສອບຖາມຂໍ້ມູນຕຳແໜ່ງງານເພີ່ມເຕີມໄດ້ໂດຍກົງຜ່ານຊ່ອງທາງລຸ່ມນີ້.',
      'car.hrAddrLbl': 'ສຳນັກງານໃຫຍ່',
      'car.hrAddr': 'ບ້ານທາດຫຼວງກາງ, ໜ່ວຍ 5, ຖະໜົນກຳແພງເມືອງ, ເມືອງໄຊເສດຖາ, ນະຄອນຫຼວງວຽງຈັນ',
      'car.hrTelLbl': 'ໂທລະສັບ',
      'car.hrEmailLbl': 'ອີເມວ HR / ບໍລິສັດ',
      'car.hrHoursLbl': 'ເວລາເຮັດວຽກ',
      'car.hrHours': 'ວັນຈັນ - ວັນສຸກ · 08:00 - 17:00',
      'car.hrDirectBtn': 'ສົ່ງ CV ຜ່ານອີເມວໂດຍກົງ',
      'car.countUnit': 'ຕຳແໜ່ງ',
      'car.optGeneral': 'ສະໝັກທົ່ວໄປ / ຕຳແໜ່ງອື່ນໆ (General Application)',
      'car.phName': 'ຕົວຢ່າງ: ທ້າວ ສົມຊາຍ ພົມມະຈັນ',
      'car.phPhone': '020 xxxx xxxx',
      'car.phEmail': 'name@example.com',
      'car.phMsg': 'ບອກເລົ່າປະສົບການ, ວຸດທິການສຶກສາ ຫຼື ຈຸດເດັ່ນຂອງທ່ານ...',
      'car.resTitle': 'ບັນທຶກຂໍ້ມູນໃບສະໝັກສຳເລັດ!',
      'car.resDesc': 'ຂອບໃຈທີ່ສົນໃຈຮ່ວມງານກັບກຸ່ມບໍລິສັດໂຊກໄຊ. ກົດປຸ່ມລຸ່ມນີ້ເພື່ອສົ່ງຂໍ້ມູນໃບສະໝັກໄປຍັງອີເມວ HR (ຢ່າລືມແນບໄຟລ໌ CV ໃນອີເມວຫາກມີ).',
      'car.resMail': 'ເປີດອີເມວເພື່ອສົ່ງຫາ HR',
      'car.resCopy': 'ຄັດລອກຂໍ້ມູນໃບສະໝັກ',
      'car.resCopied': 'ຄັດລອກຂໍ້ມູນແລ້ວ ✓'
    },
    en: {
      'car.bc': 'Careers',
      'car.title': 'Join Our Team',
      'car.introKicker': 'CAREERS AT SOKXAY',
      'car.introH2': 'Build Your Career<br>With Sokxay Group',
      'car.introP': 'We are looking for dedicated, proactive, and curious professionals to help drive growth across Sokxay Group’s diverse business sectors throughout Lao PDR.',
      'car.jobsH2': 'Open Positions',
      'car.jobsP': 'Filter by department or choose an open role to apply directly.',
      'car.fAll': 'All Roles',
      'car.fFinance': 'Finance & Accounting',
      'car.fTech': 'Technology',
      'car.fLogistics': 'Logistics',
      'car.fTrade': 'Trade & Marketing',
      'car.fHr': 'Admin & HR',
      'car.fullTime': 'Full-time',
      'car.locVte': 'Vientiane Capital',
      'car.applyBtn': 'Apply Now',
      'car.reqTitle': 'Requirements',
      'car.r1q1': 'Bachelor’s degree or Higher Diploma in Accounting, Finance, or related field',
      'car.r1q2': 'Experience in financial recordkeeping and proficiency in Excel / accounting software',
      'car.r1q3': 'High attention to detail, integrity, and reliable deadline ownership',
      'car.r2q1': 'Degree in IT, Computer Science, or proven software/web development portfolio',
      'car.r2q2': 'Solid skills in HTML, CSS, JavaScript, plus backend/database APIs (SQL / REST)',
      'car.r2q3': 'Fast learner with strong problem-solving skills and collaborative teamwork',
      'car.r3q1': 'Degree or background in Logistics, Supply Chain, or Operations Management',
      'car.r3q2': 'Familiar with warehouse inventory control, dispatch paperwork, and Excel',
      'car.r3q3': 'Structured planner with clear coordination and calm on-site problem solving',
      'car.r4q1': 'Degree in Business or Marketing, or proven B2B sales / trade experience',
      'car.r4q2': 'Strong communication, negotiation, and long-term client relationship skills',
      'car.r4q3': 'Target-driven, proactive, and available for off-site client visits',
      'car.r5q1': 'Bachelor’s degree in Human Resources, Business Administration, or related field',
      'car.r5q2': 'Working knowledge of Lao labor law, recruitment workflows, and office admin',
      'car.r5q3': 'Approachable communicator with strong discretion and MS Office fluency',
      'car.r6q1': 'Background in Marketing, Communications, or hands-on digital campaign management',
      'car.r6q2': 'Skilled in content planning, Facebook / TikTok Ads, and performance analytics',
      'car.r6q3': 'Creative storyteller tuned into social trends with solid Lao & English copywriting',
      'car.formH2': 'Online Job Application',
      'car.formLead': 'Fill out your details and select the position you are applying for. Our HR team will review your application.',
      'car.lblName': 'Full Name *',
      'car.lblPhone': 'Phone / WhatsApp *',
      'car.lblEmail': 'Email Address',
      'car.lblPos': 'Position Applying For *',
      'car.lblMsg': 'Work Experience & Skills Summary',
      'car.lblCv': 'Attach CV / Resume (PDF, DOC, DOCX)',
      'car.cvPrompt': 'Choose your CV / Resume file (optional)',
      'car.submitBtn': 'Submit Application',
      'car.formNote': 'Your information will only be used for recruitment review within Sokxay Group.',
      'car.hrH3': 'Human Resources Contact',
      'car.hrP': 'You can also send your CV or ask recruitment questions directly through the channels below.',
      'car.hrAddrLbl': 'HEADQUARTERS',
      'car.hrAddr': 'That Luang Kang Village, Unit 5, Kamphaengmeuang Rd, Xaysettha District, Vientiane Capital',
      'car.hrTelLbl': 'PHONE',
      'car.hrEmailLbl': 'HR / COMPANY EMAIL',
      'car.hrHoursLbl': 'WORKING HOURS',
      'car.hrHours': 'Monday – Friday · 08:00 – 17:00',
      'car.hrDirectBtn': 'Email Your CV Directly',
      'car.countUnit': 'open roles',
      'car.optGeneral': 'General Application / Other Roles',
      'car.phName': 'e.g. Somxay Phommachan',
      'car.phPhone': '020 xxxx xxxx',
      'car.phEmail': 'name@example.com',
      'car.phMsg': 'Briefly share your education, experience, or key strengths...',
      'car.resTitle': 'Application Summary Ready!',
      'car.resDesc': 'Thank you for your interest in Sokxay Group. Click below to send your pre-filled application via email to our HR team (please attach your CV file if applicable).',
      'car.resMail': 'Send via Email to HR',
      'car.resCopy': 'Copy Application Details',
      'car.resCopied': 'Copied to Clipboard ✓'
    }
  };

  let activeDept = 'all';
  let lastSummaryText = '';

  function getLang() {
    return document.documentElement.lang === 'en' ? 'en' : 'lo';
  }

  function updateCount() {
    const lang = getLang();
    const cards = document.querySelectorAll('.job-card');
    let visible = 0;
    cards.forEach((card) => {
      const match = activeDept === 'all' || card.dataset.dept === activeDept;
      card.hidden = !match;
      if (match) visible += 1;
    });
    const countEl = document.getElementById('jobs-count');
    if (countEl) {
      countEl.textContent = `${visible} ${CAREERS_DICT[lang]['car.countUnit']}`;
    }
  }

  function applyCareersLang(lang) {
    const dict = CAREERS_DICT[lang] || CAREERS_DICT.lo;
    document.querySelectorAll('[data-c-i18n]').forEach((el) => {
      const key = el.getAttribute('data-c-i18n');
      if (dict[key]) el.innerHTML = dict[key];
    });
    const nameIn = document.getElementById('app-name');
    const phoneIn = document.getElementById('app-phone');
    const emailIn = document.getElementById('app-email');
    const msgIn = document.getElementById('app-msg');
    if (nameIn) nameIn.placeholder = dict['car.phName'];
    if (phoneIn) phoneIn.placeholder = dict['car.phPhone'];
    if (emailIn) emailIn.placeholder = dict['car.phEmail'];
    if (msgIn) msgIn.placeholder = dict['car.phMsg'];
    const genOpt = document.getElementById('opt-general');
    if (genOpt) genOpt.textContent = dict['car.optGeneral'];
    updateCount();
  }

  function initCareers() {
    const pills = document.querySelectorAll('.dept-pill');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        activeDept = pill.dataset.dept || 'all';
        updateCount();
      });
    });

    const posSelect = document.getElementById('app-position');
    const applySection = document.getElementById('apply');
    document.querySelectorAll('.job-apply-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const role = btn.getAttribute('data-role');
        if (posSelect && role) {
          posSelect.value = role;
        }
        if (applySection) {
          applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            document.getElementById('app-name')?.focus({ preventScroll: true });
          }, 450);
        }
      });
    });

    const fileInput = document.getElementById('app-cv');
    const fileLabel = document.getElementById('cv-file-name');
    if (fileInput && fileLabel) {
      fileInput.addEventListener('change', () => {
        const f = fileInput.files && fileInput.files[0];
        if (f) {
          const kb = Math.max(1, Math.round(f.size / 1024));
          fileLabel.textContent = `${f.name} (${kb} KB)`;
          fileLabel.removeAttribute('data-c-i18n');
        } else {
          const lang = getLang();
          fileLabel.setAttribute('data-c-i18n', 'car.cvPrompt');
          fileLabel.textContent = CAREERS_DICT[lang]['car.cvPrompt'];
        }
      });
    }

    const form = document.getElementById('careers-form');
    const resultBox = document.getElementById('apply-result');
    const mailBtn = document.getElementById('result-mailto');
    const copyBtn = document.getElementById('result-copy');

    if (form && resultBox) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;

        const lang = getLang();
        const dict = CAREERS_DICT[lang];
        const name = document.getElementById('app-name').value.trim();
        const phone = document.getElementById('app-phone').value.trim();
        const email = document.getElementById('app-email').value.trim() || '-';
        const pos = document.getElementById('app-position').value;
        const msg = document.getElementById('app-msg').value.trim() || '-';
        const cvFile = fileInput && fileInput.files && fileInput.files[0] ? fileInput.files[0].name : 'None';

        const subject = `[Job Application] ${pos} - ${name}`;
        lastSummaryText = [
          `Position: ${pos}`,
          `Full Name: ${name}`,
          `Phone / WhatsApp: ${phone}`,
          `Email: ${email}`,
          `CV Filename: ${cvFile}`,
          `Experience / Notes:\n${msg}`
        ].join('\n');

        if (mailBtn) {
          mailBtn.href = `mailto:info-sck@sokxaygroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lastSummaryText)}`;
        }
        if (copyBtn) {
          copyBtn.textContent = dict['car.resCopy'];
        }

        resultBox.hidden = false;
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const lang = getLang();
        if (!lastSummaryText) return;
        try {
          await navigator.clipboard.writeText(lastSummaryText);
          copyBtn.textContent = CAREERS_DICT[lang]['car.resCopied'];
          setTimeout(() => {
            copyBtn.textContent = CAREERS_DICT[getLang()]['car.resCopy'];
          }, 2400);
        } catch (_) {}
      });
    }

    applyCareersLang(getLang());
    document.addEventListener('sokxay:lang', (ev) => {
      applyCareersLang(ev.detail && ev.detail.lang ? ev.detail.lang : getLang());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCareers);
  } else {
    initCareers();
  }
})();
