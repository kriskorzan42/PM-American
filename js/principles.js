document.addEventListener('DOMContentLoaded', function () {
    const contentCells = document.querySelectorAll('.content');
    const hiddenItems = document.querySelectorAll('.hidden-item');
    const toggleAllButton = document.getElementById('toggleAll');

    const showAllText = '<i class="fas fa-eye"></i> Show All Content';
    const hideAllText = '<i class="fas fa-eye-slash"></i> Hide All Content';

    // Track the state of content visibility
    let allVisible = false;

    // Function to update the Toggle All button based on current state
    function updateToggleButtonState() {
        // Check if *any* item is NOT revealed
        const anyHidden = Array.from(contentCells).some(cell => !cell.classList.contains('revealed'));
        if (anyHidden) {
            toggleAllButton.innerHTML = showAllText;
            allVisible = false;
        } else {
            // All items are revealed
            toggleAllButton.innerHTML = hideAllText;
            allVisible = true;
        }
    }

    // Initialize cells
    contentCells.forEach(cell => {
        // Add click event listener
        cell.addEventListener('click', () => {
            cell.classList.toggle('revealed');
            updateToggleButtonState();
        });

        // Make cells focusable for keyboard navigation
        cell.setAttribute('tabindex', '0');
    });

    // Make hidden items also clickable
    hiddenItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Find the parent content cell
            const parentCell = item.closest('.content');
            if (parentCell) {
                parentCell.classList.toggle('revealed');
                updateToggleButtonState();
            }
            // Prevent event from bubbling up to avoid double-toggling
            e.stopPropagation();
        });

        // Make items focusable for keyboard navigation
        item.setAttribute('tabindex', '0');
    });

    // Toggle all content cells
    toggleAllButton.addEventListener('click', () => {
        if (allVisible) {
            // Hide all cells
            contentCells.forEach(cell => {
                cell.classList.remove('revealed');
            });
            
            // Update button text and icon
            toggleAllButton.innerHTML = showAllText;
            allVisible = false;
        } else {
            // Show all cells
            contentCells.forEach(cell => {
                cell.classList.add('revealed');
            });
            
            // Update button text and icon
            toggleAllButton.innerHTML = hideAllText;
            allVisible = true;
        }
    });

    // Keyboard controls for accessibility
    document.addEventListener('keydown', function (e) {
        const activeElement = document.activeElement;
        // Check if focused element is one of our cells or hidden items and Enter/Space was pressed
        if ((e.key === ' ' || e.key === 'Enter') && 
            activeElement && 
            (activeElement.classList.contains('content') || activeElement.classList.contains('hidden-item'))) {
            e.preventDefault(); // Prevent default space bar scroll
            activeElement.click(); // Simulate a click to trigger the toggle logic
        }
    });

    // Set initial state of the toggle button
    updateToggleButtonState();
}); 