document.addEventListener('DOMContentLoaded', function () {
    const hiddenItems = document.querySelectorAll('.hidden-item');
    const toggleAllButton = document.getElementById('toggleAll');

    const showAllText = '<i class="fas fa-eye"></i> Show All Content';
    const hideAllText = '<i class="fas fa-eye-slash"></i> Hide All Content';

    // Function to update the Toggle All button based on current state
    function updateToggleButtonState() {
        // Check if *any* item is NOT revealed
        const anyHidden = Array.from(hiddenItems).some(item => !item.classList.contains('revealed'));
        if (anyHidden) {
            toggleAllButton.innerHTML = showAllText;
        } else {
            // All items are revealed
            toggleAllButton.innerHTML = hideAllText;
        }
    }

    // --- Event Listeners ---

    // 1. Toggle individual items on click
    hiddenItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('revealed');
            updateToggleButtonState(); // Update button after toggling one item
        });

        // Make item focusable for keyboard navigation
        item.setAttribute('tabindex', '0');
    });

    // 2. Toggle all items with the button
    toggleAllButton.addEventListener('click', () => {
        // Is the button currently in the 'Show All' state?
        const showAll = toggleAllButton.innerHTML === showAllText;
        
        hiddenItems.forEach(item => {
            if (showAll) {
                item.classList.add('revealed');
            } else {
                item.classList.remove('revealed');
            }
        });

        // Update button text immediately
        toggleAllButton.innerHTML = showAll ? hideAllText : showAllText;
    });

    // 3. Keyboard controls for accessibility
    document.addEventListener('keydown', function (e) {
        const activeElement = document.activeElement;
        // Check if focused element is one of our hidden items and Enter/Space was pressed
        if ((e.key === ' ' || e.key === 'Enter') && activeElement && activeElement.classList.contains('hidden-item')) {
            e.preventDefault(); // Prevent default space bar scroll
            activeElement.click(); // Simulate a click to trigger the toggle logic and button update
        }
    });

    // --- Initial State ---

    // Set initial state of the toggle button
    updateToggleButtonState(); 
}); 
