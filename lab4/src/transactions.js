import { generateId, formatDate } from './utils.js';

/** @type {Array<Object>} Массив транзакций */
let transactions = [];

/**
 * Добавляет транзакцию.
 * @param {number} amount - Сумма.
 * @param {string} category - Категория.
 * @param {string} description - Описание.
 * @returns {Object} Новая транзакция.
 */
export function addTransaction(amount, category, description) {
  const transaction = {
    id: generateId(),
    date: formatDate(new Date()),
    amount: parseFloat(amount),
    category,
    description,
  };
  transactions.push(transaction);
  return transaction;
}

/**
 * Удаляет транзакцию.
 * @param {string} id - ID транзакции.
 */
export function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
}

/**
 * Возвращает транзакции.
 * @returns {Array<Object>} Транзакции.
 */
export function getTransactions() {
  return transactions;
}

/**
 * Считает сумму транзакций.
 * @returns {number} Общая сумма.
 */
export function calculateTotal() {
  return transactions.reduce((sum, t) => sum + t.amount, 0);
}