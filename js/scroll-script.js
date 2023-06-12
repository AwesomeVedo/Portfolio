const tabs = document.querySelectorAll('.tab');
const navLinks = document.querySelectorAll('nav a');
const main = document.querySelector('main');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    const targetTabId = navLink.dataset.tab;
    const targetTab = document.getElementById(targetTabId);
    tabs.forEach(tab => tab.classList.remove('active'));
    targetTab.classList.add('active');
    const currentTabIndex = Array.from(tabs).findIndex(tab => tab.id === targetTabId);
    main.style.transition = 'transform 0.3s ease';
    main.style.transform = `translateX(-${currentTabIndex * 33.33333333333}%)`;
  });
});
