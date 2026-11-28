/* =====================================================================
   НАСТРОЙКИ САЙТОВ — РЕДАКТИРУЙТЕ ТОЛЬКО ЭТОТ ФАЙЛ
   ---------------------------------------------------------------------
   Ключ — домен сайта (без www и без https://), маленькими буквами.
   Значение — массив из 3 ссылок строго по порядку:
       [0] Телеграм бот   [1] Меню   [2] Помощь

   Этот файл одинаковый во всех репозиториях: каждый сайт сам
   берёт свою строку по домену, на котором его открыли.
   ===================================================================== */

const LINKS = {
    "kaifalab.online":     ["https://t.me/kaif_food_bot", "https://kaifmenu.online/", "https://t.me/kaif_food_help"],

    // Ссылки по умолчанию (если домена нет в списке)
    "default":             ["https://t.me/kaif_food_bot", "https://t.me/kaif_food_menu", "https://t.me/kaif_food_help"]
};

/* Название, которое показывается на сайте для каждого домена */
const NAMES = {
    "kaifaclub.online":    "Kaif Food",
    "kaifalab.online":     "Kaif Food",
    "kaifalife.online":    "Kaif Food",
    "kaifamarket.online":  "Kaif Food",
    "kaifaplace.online":   "Kaif Food",
    "kaifashop.online":    "Kaif Food",
    "kayfamix.online":     "Kaif Food",

    "default":             "Kaif Food"
};
