async function fetchSkinData() {
    try {
        const response = await fetch('data.json'); // Данные из Python-скрипта
        const skins = await response.json();

        const tbody = document.getElementById('skin-data');
        skins.forEach(skin => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${skin.name}</td>
                <td>${skin.lowest_price}</td>
                <td>${skin.median_price}</td>
            `;
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

fetchSkinData();
