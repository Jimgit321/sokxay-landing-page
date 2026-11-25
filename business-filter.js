const cards = [...document.querySelectorAll('.directory-card[data-sector]')];
const categoryLinks = document.querySelectorAll('.tile[data-sector]');
const search = document.querySelector('#company-search');
const status = document.querySelector('#sector-status');
const showAll = document.querySelector('#show-all');
let selectedSector = 'all';
let selectedLabel = '';

document.querySelectorAll('.directory-logo img').forEach((image) => {
  function useGroupEmblem() {
    image.src = 'assets/sokxay-emblem.svg';
    image.closest('.directory-logo').classList.add('directory-logo-fallback');
  }

  image.addEventListener('error', useGroupEmblem, { once: true });
  if (image.complete && image.naturalWidth === 0) useGroupEmblem();
});

function updateDirectory() {
  const query = search.value.trim().toLocaleLowerCase();
  let visibleCount = 0;
  let animIndex = 0;

  cards.forEach((card) => {
    const sectors = card.dataset.sector.split(' ');
    const sectorMatch = selectedSector === 'all' || sectors.includes(selectedSector)
      || (selectedSector === 'agriculture' && sectors.includes('services'));
    const queryMatch = card.querySelector('h3').textContent.toLocaleLowerCase().includes(query);
    const visible = sectorMatch && queryMatch;

    if (visible) {
      card.hidden = false;
      card.classList.remove('card-animated');
      void card.offsetWidth;
      card.style.animationDelay = `${Math.min(animIndex * 28, 280)}ms`;
      card.classList.add('card-animated');
      visibleCount += 1;
      animIndex += 1;
    } else {
      card.hidden = true;
      card.classList.remove('card-animated');
    }
  });

  const prefix = selectedSector === 'all' ? 'ທັງໝົດ' : selectedLabel;
  status.textContent = visibleCount
    ? prefix + ' · ' + visibleCount + ' ລາຍການ'
    : 'ບໍ່ພົບລາຍການທີ່ກົງກັນ';
  showAll.hidden = selectedSector === 'all' && !query;
}

function resetDirectory() {
  selectedSector = 'all';
  selectedLabel = '';
  search.value = '';
  categoryLinks.forEach((l) => l.classList.remove('active-tab'));
  updateDirectory();
}

categoryLinks.forEach((link) => {
  link.addEventListener('click', () => {
    categoryLinks.forEach((l) => l.classList.remove('active-tab'));
    link.classList.add('active-tab');
    selectedSector = link.dataset.sector;
    selectedLabel = link.querySelector('h3').textContent.trim();
    search.value = '';
    updateDirectory();
  });
});
search.addEventListener('input', updateDirectory);
showAll.addEventListener('click', resetDirectory);
document.querySelectorAll('a[href="#directory"]:not(.tile)').forEach((link) => {
  link.addEventListener('click', resetDirectory);
});
updateDirectory();
