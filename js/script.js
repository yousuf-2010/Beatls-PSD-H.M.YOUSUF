tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
  }

// navbar toggle codes starts here
document.addEventListener('DOMContentLoaded', () => {
    const toggleNav = document.getElementById('toggleNav');
    const closeNav = document.getElementById('closeNav');
    const navItemsSidebar = document.getElementById('navItemsSidebar');

    toggleNav.addEventListener('click', () => {
        navItemsSidebar.classList.remove('-translate-x-full');
        navItemsSidebar.classList.add('translate-x-0');
        navItemsSidebar.classList.remove('hidden');
    });

    closeNav.addEventListener('click', () => {
        navItemsSidebar.classList.remove('translate-x-0');
        navItemsSidebar.classList.add('-translate-x-full');
        setTimeout(() => {
            navItemsSidebar.classList.add('hidden');
        }, 300); // The timeout should match the transition duration
    });
});


// navbar toggle codes ends here

