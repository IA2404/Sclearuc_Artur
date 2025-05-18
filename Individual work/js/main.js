import { initEvents } from './events.js';
import { renderTasks } from './dom.js';
import { filterTasks } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('task-list')) {
    console.error('Task list element not found');
    return;
  }
  initEvents();
  renderTasks(filterTasks('all'));
});