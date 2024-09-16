function navigate() {
    const url = 'http://127.0.0.1:5500/Day2/Bootstrap/landingPage.html';
    const navBarCollapsed = document.querySelector('.navbar-collapse');
    window.location.href = `${url}#${this.event.target.name}`;
    navBarCollapsed.classList.remove('show');
}