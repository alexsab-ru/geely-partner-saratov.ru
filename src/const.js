import { phoneFormat } from '@/js/utils/numbers.format';
import { LAST_DAY, MONTH, YEAR } from '@/js/utils/date';
// Название сайта по умолчанию
export const SITE_NAME = 'Джили Партнер Авто';
// Юр лицо
export const LEGAL_ENTITY = 'ООО "Саратов-Авто-Люкс"';
// ИНН
export const LEGAL_INN = '6450932950';
// Город
export const LEGAL_CITY = 'г. Саратов';
// где? в Саратове
export const LEGAL_CITY_WHERE = 'Саратове';
// Описание сайта по умолчанию
export const SITE_DESCR = 'Официальный дилерский центр Geely в Саратове';
// Телефон по умолчанию
export const PHONE = '+7 (8452) 24-25-25';
// Бренд
export const BRAND = 'Geely';
// Конечное время для таймера
//string 2024-04-26 or 2024-04-26 23:59:59 or December 31 2015 or December 31 2015 23:59:59 GMT+02:00
export const TIMER_ENDTIME = '';
// Объект для бегущей строки
export const MARQUEE = {title: 'Тотальная распродажа до', dateTo: `${LAST_DAY}.${MONTH}.${YEAR}`, count: [1,2,3,4,5,6,7,8], show: false };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';
// Ссылка организации для виджета
export const LINK_WIDGET_ORGNIZATION = '';
// Ссылки под хедером
export const LINKS_MENU = [
	{url: 'cars/', name: 'Авто в наличии'},
	{url: 'models/', name: 'Модели'},
	{url: 'for-owners/', name: 'Владельцам'},
	{url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Я согласен на</span><a href="/privacy-policy" class="underline transition-all hover:no-underline !m-0" target="_blank">обработку персональных данных</a>';
// Текст информации в футере
import salons from '@/data/salons.json';
const phones = PHONE ? [`<a class="whitespace-nowrap" href="tel:${phoneFormat(PHONE)}">${PHONE}</a>`] : salons.map((salon) => { return `<span>${salon.name}</span> <a class="whitespace-nowrap" href="tel:${phoneFormat(salon.phone)}">${salon.phone}</a>` });

export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона '+phones.join(', ')+'. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
