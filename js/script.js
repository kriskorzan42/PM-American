document.addEventListener('DOMContentLoaded', function() {
    // Get all elements we need
    const contentCells = document.querySelectorAll('.content');
    const toggleAllButton = document.getElementById('toggleAll');
    
    // Track the state of content visibility
    let allVisible = false;

    // Initialize cells
    contentCells.forEach(cell => {
        // Skip empty cells
        if (cell.innerHTML.trim() === '') return;
        
        // Add click event listener
        cell.addEventListener('click', () => {
            cell.classList.toggle('revealed');
        });
    });

    // Toggle all content cells
    toggleAllButton.addEventListener('click', () => {
        if (allVisible) {
            // Hide all cells
            contentCells.forEach(cell => {
                cell.classList.remove('revealed');
            });
            
            // Update button text and icon
            toggleAllButton.innerHTML = '<i class="fas fa-eye"></i> Show All Content';
            allVisible = false;
        } else {
            // Show all cells
            contentCells.forEach(cell => {
                if (cell.innerHTML.trim() !== '') {
                    cell.classList.add('revealed');
                }
            });
            
            // Update button text and icon
            toggleAllButton.innerHTML = '<i class="fas fa-eye-slash"></i> Hide All Content';
            allVisible = true;
        }
    });
}); 