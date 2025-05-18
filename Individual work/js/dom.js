export function renderTasks(tasks) {
  const taskList = document.getElementById('task-list');
  if (!taskList) {
    console.error('Task list element not found');
    return;
  }
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <span data-id="${task.id}">${task.title}</span>
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} data-id="${task.id}">
        <button data-id="${task.id}" class="delete-btn">Удалить</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

export function showError(message) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = message;
  const container = document.querySelector('.container');
  if (container) {
    container.prepend(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
  }
}

export function openEditModal(task) {
  const modal = document.getElementById('modal');
  const editInput = document.getElementById('edit-input');
  if (!modal || !editInput) {
    console.error('Modal or edit input not found');
    return;
  }
  if (!task) {
    console.error('No task provided to openEditModal');
    return;
  }
  editInput.value = task.title;
  editInput.dataset.id = task.id;
  modal.classList.remove('hidden');
}

export function closeEditModal() {
  const modal = document.getElementById('modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}