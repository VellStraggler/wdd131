function changeTheme(selectedTheme) {
    const body = document.body;
  
    if (selectedTheme === 'dark') {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }
  