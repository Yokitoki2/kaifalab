// Подставляет название и ссылки кнопок в зависимости от домена.
// Логику менять не нужно — все данные в config.js
document.addEventListener("DOMContentLoaded", () => {
    const host = window.location.hostname.toLowerCase().replace(/^www\./, "");

    const links = LINKS[host] || LINKS["default"];
    const name  = NAMES[host] || NAMES["default"];

    // Название сайта: все элементы с атрибутом data-site-name + заголовок вкладки
    document.querySelectorAll("[data-site-name]").forEach(el => { el.textContent = name; });
    document.title = name + " — доставка еды";

    // Кнопки: id="0" — бот, id="1" — меню, id="2" — помощь
    if (links) {
        for (let i = 0; i < 3; i++) {
            const btn = document.getElementById(i.toString());
            if (btn && links[i]) btn.href = links[i];
        }
    }
});
