document.getElementById('calculate-btn').addEventListener('click', calculateBMI);

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return { category: "Underweight", className: "result-underweight" };
    } else if (bmi >= 18.5 && bmi < 25) {
        return { category: "Normal Weight", className: "result-normal" };
    } else if (bmi >= 25 && bmi < 30) {
        return { category: "Overweight", className: "result-overweight" };
    } else {
        return { category: "Obesity", className: "result-obesity" };
    }
}

function updateResultDisplay(bmi, categoryData, resultContainer, resultBMI, resultCategory) {
    // Clear any existing category classes
    resultContainer.className = 'result-box';
    
    if (categoryData.category.includes('Error')) {
        resultBMI.textContent = categoryData.category;
        resultCategory.textContent = "Please check your inputs.";
        resultContainer.classList.add('result-overweight'); // Use the error class for bad input
    } else {
        // Apply the new category class from CSS
        resultContainer.classList.add(categoryData.className);
        
        // Update the text content
        resultBMI.textContent = `BMI: ${bmi.toFixed(2)}`;
        resultCategory.textContent = `Category: ${categoryData.category}`;
    }
}

function calculateBMI() {
    // 1. Get DOM elements
    const weightInput = document.getElementById('weight').value;
    const heightInput = document.getElementById('height').value;
    const resultContainer = document.getElementById('result-container');
    const resultBMI = document.getElementById('result-bmi');
    const resultCategory = document.getElementById('result-category');

    // 2. Convert and Validate Inputs
    const weight = parseFloat(weightInput);
    const height = parseFloat(heightInput);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        const errorData = { category: "Input Error", className: "" };
        updateResultDisplay(0, errorData, resultContainer, resultBMI, resultCategory);
        return;
    }

    // 3. BMI Calculation: BMI = weight / (height * height)
    const bmi = weight / (height * height);

    // 4. Determine Category
    const categoryData = getBMICategory(bmi);

    // 5. Update the Website Display
    updateResultDisplay(bmi, categoryData, resultContainer, resultBMI, resultCategory);
}