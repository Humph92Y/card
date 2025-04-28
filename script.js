const cards = document.querySelectorAll('.card');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalName = document.getElementById('modalName');
const modalCompany = document.getElementById('modalCompany');
const modalPosition = document.getElementById('modalPosition');
const modalPhone = document.getElementById('modalPhone');
const modalEmail = document.getElementById('modalEmail');
const modalWebsite = document.getElementById('modalWebsite');
const callLink = document.getElementById('callLink');
const smsLink = document.getElementById('smsLink');
const webLink = document.getElementById('webLink');
const closeModal = document.getElementById('closeModal');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const phone = card.getAttribute('data-phone').replace(/-/g, '');
    const website = card.getAttribute('data-website');

    modalImg.src = card.getAttribute('data-img');
    modalName.textContent = card.getAttribute('data-name');
    modalCompany.textContent = '소속: ' + card.getAttribute('data-company');
    modalPosition.textContent = '부서 및 직위: ' + card.getAttribute('data-position');
    modalPhone.textContent = '휴대폰: ' + card.getAttribute('data-phone');
    modalEmail.textContent = 'Email: ' + card.getAttribute('data-email');
    modalWebsite.textContent = '홈페이지: ' + website;

    callLink.href = `tel:${phone}`;
    smsLink.href = `sms:${phone}`;
    webLink.href = website;

    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
