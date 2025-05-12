/**
 * Генерирует уникальный ID.
 * @returns {string} Уникальный идентификатор.
 */
export function generateId() {
  return Math.random().toString(36).slice(2, 11);
}

/**
 * Форматирует дату в ДД.ММ.ГГГГ ЧЧ:ММ.
 * @param {Date} date - Дата.
 * @returns {string} Форматированная дата.
 */
export function formatDate(date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

/**
 * Возвращает первые 4 слова.
 * @param {string} text - Текст.
 * @returns {string} Краткое описание.
 */
export function getShortDescription(text) {
  return text.split(/\s+/).slice(0, 4).join(' ');
}