import { getShortDescription } from './utils.js';

/**
 * Создает строку таблицы.
 * @param {Object} transaction - Транзакция.
 * @returns {HTMLTableRowElement} Строка.
 */
export function renderTransactionRow(transaction) {
  const row = document.createElement('tr');
  row.dataset.id = transaction.id;
  row.classList.add(transaction.amount >= 0 ? 'positive' : 'negative');
  row.innerHTML = `
    <td>${transaction.date}</td>
    <td>${transaction.category}</td>
    <td>${getShortDescription(transaction.description)}</td>
    <td><button class="delete-btn" data-id="${transaction.id}">Удалить</button></td>
  `;
  return row;
}

/**
 * Обновляет таблицу.
 * @param {Array<Object>} transactions - Транзакции.
 */
export function updateTable(transactions) {
  const tbody = document.querySelector('#transactions-table tbody');
  tbody.innerHTML = '';
  transactions.forEach(t => tbody.appendChild(renderTransactionRow(t)));
}

/**
 * Обновляет сумму.
 * @param {number} total - Сумма.
 */
export function updateTotal(total) {
  document.querySelector('#total').textContent = `Сумма: ${total.toFixed(2)}`;
}

/**
 * Показывает детали.
 * @param {Object} transaction - Транзакция.
 */
export function showTransactionDetails(transaction) {
  document.querySelector('#transaction-details').innerHTML = `
    Дата: ${transaction.date}<br>
    Категория: ${transaction.category}<br>
    Сумма: ${transaction.amount}<br>
    Описание: ${transaction.description}
  `;
}

/**
 * Очищает форму.
 */
export function resetForm() {
  document.querySelector('#transaction-form').reset();
  document.querySelector('#form-error').textContent = '';
}

/**
 * Показывает ошибку.
 * @param {string} message - Сообщение.
 */
export function showFormError(message) {
  document.querySelector('#form-error').textContent = message;
}