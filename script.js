// Пример данных. Реальные данные можно подгружать из файла `data.json`.
const skins = [
    {
        link: "https://steamcommunity.com/market/listings/730/AK-47%20|%20Redline",
        price_diff: "+$2.00",
        name: "AK-47 | Redline (Field-Tested)",
        quantity: 5,
        price: "$15.00",
        total_price: "$75.00",
        total_diff: "+$10.00",
        net: "$65.00",
        profit_percent: "15%"
    },
    {
        link: "https://steamcommunity.com/market/listings/730/AWP%20|%20Dragon%20Lore",
        price_diff: "-$5.00",
        name: "AWP | Dragon Lore (Factory New)",
        quantity: 1,
        price: "$1,200.00",
        total_price: "$1,200.00",
        total_diff: "-$50.00",
        net: "$1,150.00",
        profit_percent: "-4%"
    }
];

// Функция для заполнения таблицы
function populateTable(data) {
    const tbody = document.getElementById('skin-data');
    tbody.innerHTML = ""; // Очищаем таблицу перед добавлением новых данных

    data.forEach(skin => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="${skin.link}" target="_blank">Ссылка</a></td>
            <td>${skin.price_diff}</td>
            <td>${skin.name}</td>
            <td>${skin.quantity}</td>
            <td>${skin.price}</td>
            <td>${skin.total_price}</td>
            <td>${skin.total_diff}</td>
            <td>${skin.net}</td>
            <td>${skin.profit_percent}</td>
        `;
        tbody.appendChild(row);
    });
}

// Заполняем таблицу данными
populateTable(skins);
