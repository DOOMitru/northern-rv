const sidebar = document.querySelector('.sidemenu');

function showSideBar(e) {
	sidebar.style.display = 'flex';
}

function hideSideBar(e) {
	sidebar.style.display = 'none';
}

const showSidebarButton = document.querySelector('.sidemenu-button');
const hideSidebarButton = document.querySelector('.sidemenu-close-btn');

showSidebarButton.addEventListener('click', showSideBar);
hideSidebarButton.addEventListener('click', hideSideBar);