/**
 * search.js
 * Implements the live search and filter functionality for the doctor list.
 */

function filterDoctors() {
    // 1. Get search input (for name/condition search)
    let input = document.getElementById('find');
    let searchFilter = input.value.toUpperCase();

    // 2. Get active specialty filters from checkboxes
    let checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]:checked');
    let activeSpecialties = Array.from(checkboxes).map(cb => cb.value);

    // 3. Get all doctor cards
    let cards = document.getElementById('doctor-list').getElementsByClassName('card');

    // 4. Loop through all cards and hide/show based on both filters
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let specialty = card.getAttribute('data-specialty');
        
        // Get all text content for the full-text search
        let textValue = card.textContent || card.innerText;

        // Check 1: Text Search Match
        // Is the search filter found anywhere in the card's text?
        let isSearchMatch = textValue.toUpperCase().indexOf(searchFilter) > -1;

        // Check 2: Specialty Filter Match
        // Is the specialty filter list empty (meaning all are visible) OR does the card's specialty match one of the active filters?
        let isSpecialtyMatch = activeSpecialties.length === 0 || activeSpecialties.includes(specialty);

        // A card is shown ONLY IF it passes BOTH checks.
        if (isSearchMatch && isSpecialtyMatch) {
            card.style.display = ""; 
        } else {
            card.style.display = "none";
        }
    }
}