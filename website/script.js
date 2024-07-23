document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-button');

    function handleSearch(query) {
        if (query) {
            const url = `./${query}.html`; // 假設你的網頁都在根目錄下
            window.location.href = url;
        }
    }

    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        handleSearch(query);
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const query = searchInput.value.trim();
            handleSearch(query);
        }
    });
});
