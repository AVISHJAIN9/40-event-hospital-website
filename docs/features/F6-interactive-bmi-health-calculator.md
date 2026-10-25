# F6: Interactive BMI & Metabolic Health Calculator

## Overview & Architecture
Diagnostic tool (`bmi.html`, `bmi.js`, `bmi.css`) computing Body Mass Index dynamically and visualizing health categories (Underweight, Normal, Overweight, Obese).

```mermaid
flowchart TD
    Input[Enter Height cm and Weight kg] --> Compute[bmi.js: BMI = kg / (m^2)]
    Compute --> Categorize{BMI Value Range}
    Categorize -->|< 18.5| Under[Underweight: Blue Alert]
    Categorize -->|18.5 - 24.9| Normal[Normal Range: Green Indicator]
    Categorize -->|25.0 - 29.9| Over[Overweight: Amber Alert]
    Categorize -->|>= 30.0| Obese[Obesity Risk: Red Clinical Alert]
```

## Say It Out Loud
> "For preventive patient screening in `bmi.html` and `bmi.js`, I built an interactive Body Mass Index calculator. The patient enters their height in centimeters and weight in kilograms. The JavaScript algorithm computes the exact BMI metric in real time, classifies the result into the clinical standard categories—from underweight to obesity—and dynamically renders dietary advice."
