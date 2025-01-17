const sidebar = document.querySelector('.sidebar');

function showSideBar(e) {
	sidebar.style.display = 'flex';
}

function hideSideBar(e) {
	sidebar.style.display = 'none';
}

const showSidebarButton = document.querySelector('.show-sidebar-button');
const hideSidebarButton = document.querySelector('.hide-sidebar-button');

showSidebarButton.addEventListener('click', showSideBar);
hideSidebarButton.addEventListener('click', hideSideBar);