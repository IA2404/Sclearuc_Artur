// Хранилище задач
export let tasks = [];

// Добавление новой задачи
export function addTask(title) {
  const task = {
    id: Date.now(),
    title: title.trim(),
    completed: false,
    createdAt: new Date()
  };
  tasks.push(task);
  return task;
}

// Удаление задачи по ID
export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}

// Обновление названия задачи
export function updateTask(id, title) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, title: title.trim() } : task
  );
}

// Переключение статуса завершения
export function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

// Фильтрация задач по статусу
export function filterTasks(filter) {
  if (filter === 'all') return tasks;
  if (filter === 'active') return tasks.filter(task => !task.completed);
  return tasks.filter(task => task.completed);
}

// Поиск задач по названию
export function searchTasks(query) {
  return tasks.filter(task =>
    task.title.toLowerCase().includes(query.toLowerCase())
  );
}

// Сортировка задач (для расширения)
export function sortTasks(criteria) {
  return [...tasks].sort((a, b) => {
    if (criteria === 'title') {
      return a.title.localeCompare(b.title);
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}