Вопросы к преподавателю.

1. (Файл src\components\Settings\Settings.tsx:93) Не понятно, откуда брать минимальное и максимальное значения цен. Судя по ответам сервера, фильтрация по цене происходит по значениям поля min_price объекта Route (/src/models/Route.ts). Я думаю, было бы хорошей практикой значениям min и max присвоить динамически минимальное и максимальное значения цен, хранящихся в БД, но при текущей работе сервера на стороне клиента придется получить весь список маршрутов, перебрать его с целью найти минимальное и максимальное значенния, что не очень сочетается с пагинацией. Пока установлены фиксированные значения.

2. (src\components\TrainRoutes\TrainRoutes.tsx:32 и :71) При сортировке по цене сервер отдает пустой массив.

3. (src\components\UI\ToggleSwitch\ToggleSwitch.tsx) Чекбоксы реализованы для 2х значений. По факту сервер работает с тремя значениями true, false и undefined. Нужно ли реализовывать состояние indeterminate, и если да, как его выполнить стилистически?

4. На макете есть изображение вагона, где, как я понимаю, выбираются места. Вот тут вообще не понятно, как это сверстать...