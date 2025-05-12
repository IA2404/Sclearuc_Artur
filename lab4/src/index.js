import { addTransaction, deleteTransaction, getTransactions, calculateTotal } from './transactions.js';
import { updateTable, updateTotal, showTransactionDetails, resetForm, showFormError } from './ui.js';

/**
 * Инициализирует приложение.
 */
function init() {
  document.querySelector('#transaction-form').addEventListener('submit', handleFormSubmit);
  document.querySelector('#transactions-table').addEventListener('click', handleTableClick);
  updateTable(getTransactions());
  updateTotal(calculateTotal());
}

/**
 * Обрабатывает форму.
 * @param {Event} e - Событие.
 */
function handleFormSubmit(e) {
  e.preventDefault();
  const amount = document.querySelector('#amount').value;
  const category = document.querySelector('#category').value;
  const description = document.querySelector('#description').value;

  if (!amount || amount === '0') return showFormError('Введите сумму (не 0).');
  if (!category) return showFormError('Выберите категорию.');
  if (!description.trim()) return showFormError('Введите описание.');

  addTransaction(amount, category, description);
  updateTable(getTransactions());
  updateTotal(calculateTotal());
  resetForm();
}

/**
 * Обрабатывает клики по таблице.
 * @param {Event} e - Событие.
 */
function handleTableClick(e) {
  const id = e.target.dataset.id;
  if (e.target.classList.contains('delete-btn') && id) {
    deleteTransaction(id);
    updateTable(getTransactions());
    updateTotal(calculateTotal());
    document.querySelector('#transaction-details').innerHTML = '';
    return;
  }

  const row = e.target.closest('tr');
  if (row && row.dataset.id) {
    const transaction = getTransactions().find(t => t.id === row.dataset.id);
    showTransactionDetails(transaction);
  }
}

init();