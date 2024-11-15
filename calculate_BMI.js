// Description:
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// SOLUTION:

function bmi(weight, height) {
    const massIndex = weight / height ** 2
    if (massIndex <= 18.5) return "Underweight";
    if (massIndex <= 25) return "Normal"
    if (massIndex <= 30) return "Overweight"
    if (massIndex > 30) return "Obese"

}