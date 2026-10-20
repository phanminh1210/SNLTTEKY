async function loadComponents() {
    try {
        // Tải Header
        const headerRes = await fetch('component/header.html');
        if (headerRes.ok) {
            document.getElementById('header-container').innerHTML = await headerRes.text();
        }

        // Tải Footer
        const footerRes = await fetch('component/footer.html');
        if (footerRes.ok) {
            document.getElementById('footer-container').innerHTML = await footerRes.text();
        }

        // Tải trang lần đầu tiên
        handleRouting();
    } catch (error) {
        console.error('Lỗi khi tải Header/Footer:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadComponents);