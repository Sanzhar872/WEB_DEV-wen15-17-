// 1. Поиск основных элементов в DOM по их ID
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const listContainer = document.getElementById('List');
// Находим все элементы, которые уже есть в списке
const existingItems = document.querySelectorAll('.todo-item');

existingItems.forEach(item => {
    const checkbox = item.querySelector('.checkbox');
    const span = item.querySelector('.todo-text');
    const deleteBtn = item.querySelector('.btn-delete');

    // Привязываем зачеркивание
    attachToggleLogic(checkbox, span);

    // Привязываем удаление для старых кнопок
    deleteBtn.addEventListener('click', () => {
        item.remove();
    });
});

// 2. Обработка события клика на кнопку "add"
addButton.addEventListener('click', () => {
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        createTask(taskText);
        inputField.value = ""; // Очистка поля ввода
    } else {
        alert("Пожалуйста, введите текст задачи.");
    }
});
function attachToggleLogic(checkbox, textSpan) {
    checkbox.addEventListener('change', () => {
        // Используем toggle — он сам добавит класс, если его нет, и уберет, если он есть
        textSpan.classList.toggle('strike', checkbox.checked);
    });
}

// 3. Создание новой задачи через DOM API
function createTask(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-delete';
    deleteBtn.textContent = '🗑';

    // ПРИВЯЗЫВАЕМ ЛОГИКУ К НОВОМУ ЭЛЕМЕНТУ
    attachToggleLogic(checkbox, span);

    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    listContainer.appendChild(li);
}