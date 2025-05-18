import { addTask, deleteTask, toggleTask, updateTask, filterTasks, searchTasks, tasks } from './data.js';
import { renderTasks, showError, openEditModal, closeEditModal } from './dom.js';

export function initEvents() {
  const form = document.getElementById('task-form');
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filters button');
  const editForm = document.getElementById('edit-form');
  const closeModalBtn = document.getElementById('close-modal');
  let currentFilter = 'all';

  if (!form || !searchInput || !editForm || !closeModalBtn) {
    console.error('Required elements not found');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('task-input');
    const title = input.value.trim();
    if (title) {
      addTask(title);
      renderTasks(filterTasks(currentFilter));
      input.value = '';
    } else {
      showError('Задача не может быть пустой');
    }
  });

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('edit-input');
    const title = input.value.trim();
    const id = Number(input.dataset.id);
    if (title && id) {
      updateTask(id, title);
      renderTasks(filterTasks(currentFilter));
      closeEditModal();
    } else {
      showError('Название задачи не может быть пустым');
    }
  });

  closeModalBtn.addEventListener('click', closeEditModal);

  document.getElementById('task-list').addEventListener('click', (e) => {
    const id = Number(e.target.dataset.id);
    if (!id) return; // Игнорировать клики без data-id
    if (e.target.classList.contains('delete-btn')) {
      deleteTask(id);
      renderTasks(filterTasks(currentFilter));
    } else if (e.target.type === 'checkbox') {
      toggleTask(id);
      renderTasks(filterTasks(currentFilter));
    } else if (e.target.tagName === 'SPAN') {
      const task = tasks.find(task => task.id === id);
      if (task) {
        openEditModal(task);
      } else {
        console.error('Task not found for ID:', id);
      }
    }
  });

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      currentFilter = button.dataset.filter;
      renderTasks(filterTasks(currentFilter));
    });
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    const filteredTasks = filterTasks(currentFilter);
    const searchedTasks = query ? searchTasks(query) : filteredTasks;
    renderTasks(searchedTasks);
  });
}