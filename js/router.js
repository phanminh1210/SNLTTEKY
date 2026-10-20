const routes = {
    '/': 'pages/home.html',
    '/notifications': 'pages/notifications.html',
    '/messages': 'pages/messages.html',
    '/account': 'pages/account.html'
};

async function handleRouting() {
    // Lấy hash hiện tại từ URL (mặc định là '/' nếu trống)
    let path = window.location.hash.slice(1) || '/';
    let route = routes[path] || routes['/'];

    try {
        const response = await fetch(route);
        if (response.ok) {
            const html = await response.text();
            document.getElementById('app-content').innerHTML = html;
            updateActiveNav(path);
        } else {
            document.getElementById('app-content').innerHTML = '<h2>404 - Không tìm thấy trang</h2>';
        }
    } catch (error) {
        console.error('Lỗi khi tải trang:', error);
    }
}

// Cập nhật trạng thái active cho menu navigation
function updateActiveNav(path) {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === `#${path}`) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Lắng nghe sự thay đổi URL hash
window.addEventListener('hashchange', handleRouting);