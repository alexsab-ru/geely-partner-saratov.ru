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
//string 2025-12-31T23:59:59+04:00
export const TIMER = { title: 'До конца акции осталось',subtitle: '', endtime: `${YEAR}-${MONTH}-${LAST_DAY}T23:59:59+04:00`, btnName: 'Зафиксировать цену', show: false };
// Объект для бегущей строки
export const MARQUEE = { title: `Тотальная распродажа до ${LAST_DAY}.${MONTH}.${YEAR}`, count: 8, speed: 20, show: false };
// Ссылка яндекс-виджета
export const LINK_WIDGET = 'https://yandex.ru/map-widget/v1/-/';
// Ссылка организации для виджета
export const LINK_WIDGET_ORGNIZATION = '';
// Ссылки под хедером
import { groupArrayByKey } from '@/js/utils/groupArrayByKey';
import modelsData from '@/data/models.json';
const groupModelsByBrand = groupArrayByKey(modelsData.filter(model => model.show), 'mark_id');
const children = Object.keys(groupModelsByBrand).reduce((acc, key) => {
	acc[key] = groupModelsByBrand[key].map(model => ( { url: `models/${model.id}/`, name: `${model.name.toUpperCase()}`, thumb: model.thumb } ) );
	return acc;
}, {});

export const LINKS_MENU = [
	{url: 'cars/', name: 'Авто в наличии'},
	// {url: 'catalog/', name: 'Каталог'},
	// {url: 'used_cars/', name: 'Авто с пробегом'},
	{ 
		url: 'models/', 
		name: 'Модели',
		children
	},
	{url: 'for-owners/', name: 'Владельцам'},
	// {url: 'trade-in/', name: 'Оценка автомобиля'},
	{url: 'special-offers/', name: 'Спецпредложения'},
	// {url: 'news/', name: 'Новости'},
	{url: 'test-drive/', name: 'Запись на тест-драйв'},
	{url: 'service-request/', name: 'Запись на сервис'},
	{url: '#services', name: 'Услуги'},
	{url: 'contacts/', name: 'Контакты'},
];
// Коллекции
export const COLLECTIONS = [
	{name: 'special-offers', title: 'Спецпредложения'},
	{name: 'for-owners', title: 'Владельцам'},
];
// Текстовая строка над хедером
export const HEADER_TOP_LINE = '';
// Текст согласия в формах
export const AGREE_LABEL = '<span>Даю согласие на обработку своих персональных данных на условиях, указанных</span> <a href="/privacy-policy" class="!m-0 underline transition-all hover:no-underline" target="_blank">здесь</a>';
// Текст информации в футере
import salonsData from '@/data/salons.json';
const salons = salonsData.filter(salon => !salon?.type || salon?.type.includes('footer_info'));
const phones = PHONE ? [`<a class="whitespace-nowrap" href="tel:${phoneFormat(PHONE)}">${PHONE}</a>`] : salons.map((salon) => { return `<span>${salon.name}</span> <a class="whitespace-nowrap" href="tel:${phoneFormat(salon.phone)}">${salon.phone}</a>` });

export const FOOTER_INFO = '<sup>*</sup> Вся представленная на сайте информация, касающаяся автомобилей и сервисного обслуживания, носит информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. Все цены, указанные на данном сайте, носят информационный характер. Для получения подробной информации просьба обращаться к менеджерам отдела продаж по номеру телефона '+phones.join(', ')+'. Опубликованная на данном сайте информация может быть изменена в любое время без предварительного уведомления.';
