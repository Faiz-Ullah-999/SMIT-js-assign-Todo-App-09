let todos = [];

function renderTodos() {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center bg-gray-100 px-3 py-2 rounded';

    const input = document.createElement('input');
    input.value = todo;
    input.disabled = true;
    input.className = 'flex-grow bg-transparent focus:outline-none';

    // 🔄 Update using prompt
    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.className = 'bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600';
    updateBtn.onclick = () => {
      const newValue = prompt('Update your todo:', todo);
      if (newValue !== null && newValue.trim() !== '') {
        todos[index] = newValue.trim();
        renderTodos();
      }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    li.appendChild(input);
    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function addTodo() {
  const input = document.getElementById('todo-input');
  const text = input.value.trim();
  if (text !== '') {
    todos.push(text);
    input.value = '';
    renderTodos();
  }
}

renderTodos();
