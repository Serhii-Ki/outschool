function toggleMenu() {
  const burger = document.querySelector('#burger');
  const mobileMenu = document.querySelector('#mobile-menu');
  const body = document.querySelector('body');

  burger.addEventListener('click',() => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    body.classList.toggle('overflow-hidden');
  });

  window.addEventListener('resize',() => {
    if(window.innerWidth > 767.99){
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      burger.classList.remove('active');
      body.classList.remove('overflow-hidden');
    }
  })
}

toggleMenu();

//tabs

function toggleTabs() {
  const tabs = document.querySelectorAll('.tab-trigger');
  const tabsContent = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click',() => {
      tabs.forEach(tab => tab.classList.remove('active'));
      tabsContent.forEach(tabContent => tabContent.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`#${tab.dataset.target}`).classList.add('active');
    });
  });
}

toggleTabs();