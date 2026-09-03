document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const studentTable = document.getElementById('studentTable');
    const rows = studentTable.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();
        
        for (let i = 0; i < rows.length; i++) {
            const sapIdText = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();
            const nameText = rows[i].getElementsByTagName('td')[1].textContent.toLowerCase();
            
            if (sapIdText.includes(filter) || nameText.includes(filter)) {
                rows[i].style.display = '';
            } else {
                rows[i].style.display = 'none';
            }
        }
    });

    const deleteButtons = document.querySelectorAll('.btn-delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const studentName = row.getElementsByTagName('td')[1].textContent;
            const confirmDelete = confirm(`Are you sure you want to delete student: ${studentName}?`);
            
            if (confirmDelete) {
                row.remove();
                alert(`${studentName} has been removed successfully.`);
            }
        });
    });

    const editButtons = document.querySelectorAll('.btn-edit');
    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const studentName = row.getElementsByTagName('td')[1].textContent;
            alert(`Opening edit configuration for ${studentName}...`);
        });
    });
});