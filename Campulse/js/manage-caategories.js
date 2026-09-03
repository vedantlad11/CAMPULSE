document.addEventListener('DOMContentLoaded', () => {
    const categoryForm = document.getElementById('categoryForm');
    const categoryInput = document.getElementById('categoryInput');
    const categoryTableBody = document.getElementById('categoryTableBody');

    let categories = [
        { id: 1, name: 'Technical' },
        { id: 2, name: 'Cultural' },
        { id: 3, name: 'Sports' }
    ];

    function renderCategories() {
        categoryTableBody.innerHTML = '';

        if (categories.length === 0) {
            categoryTableBody.innerHTML = `<tr><td colspan="3" class="empty-state">No categories found. Add one above!</td></tr>`;
            return;
        }

        categories.forEach((cat, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${cat.name}</td>
                <td><button class="btn-delete" data-id="${cat.id}">Delete</button></td>
            `;
            categoryTableBody.appendChild(row);
        });
    }

    categoryForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const categoryName = categoryInput.value.trim();

        if (categoryName) {
            const newCategory = {
                id: Date.now(),
                name: categoryName
            };
            categories.push(newCategory);
            categoryInput.value = '';
            renderCategories();
        }
    });

    categoryTableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-delete')) {
            const idToDelete = Number(e.target.getAttribute('data-id'));
            categories = categories.filter(cat => cat.id !== idToDelete);
            renderCategories();
        }
    });

    renderCategories();
});