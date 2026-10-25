function search() {
    // 1. Get the current text from the input field and convert it to uppercase
    let filter = document.getElementById('find').value.toUpperCase();

    // 2. Select ALL card elements using the correct class (.card)
    let item = document.querySelectorAll('.card');

    // 3. Loop through all the cards
    // Note: Use item.length for the correct count of cards
    for (let i = 0; i < item.length; i++) {
        // Get the h3 element within the current card (item[i])
        // The h3 contains the text we want to search (e.g., "Glass Card")
        let h3 = item[i].getElementsByTagName('h3')[0];

        if (h3) { // Check if h3 exists to prevent errors
            // Get the text value of the h3
            let value = h3.textContent || h3.innerText;

            // 4. Check if the filter text is found in the h3 text
            if (value.toUpperCase().indexOf(filter) > -1) {
                // Show the card if the text matches
                item[i].style.display = ""; // Defaults to the CSS display property (flex in this case)
            } else {
                // Hide the card if the text does not match
                item[i].style.display = "none";
            }
        }
    }
}
