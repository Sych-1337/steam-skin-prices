// Функция для загрузки данных из JSON
async function loadDataFromJSON() {
    try {
        const response = await fetch('data.json'); // Замените 'data.json' на путь к вашему JSON-файлу
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        populateTable(data); // Передаем данные в функцию для заполнения таблицы
    } catch (error) {
        console.error('Ошибка загрузки данных:', error);
    }
}

// Функция для заполнения таблицы
function populateTable(data) {
    const tbody = document.getElementById('skin-data');
    tbody.innerHTML = ""; // Очищаем таблицу перед добавлением новых данных

    data.forEach(skin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="${skin["ссылка"]}" target="_blank">Ссылка</a></td>
            <td>${skin["цена +-"]}</td>
            <td>${skin["название"]}</td>
            <td>${skin["количество "]}</td>
            <td>${skin["цена "]}</td>
            <td>${skin["цена общ"]}</td>
            <td>${skin["общ +-"]}</td>
            <td>${skin["Разница"]}</td>
            <td>${skin["Чистый "]}</td>
            <td>${skin["Профит %"]}</td>
        `;
        tbody.appendChild(row);
    });
}

// Загружаем данные после загрузки страницы
document.addEventListener('DOMContentLoaded', loadDataFromJSON);
