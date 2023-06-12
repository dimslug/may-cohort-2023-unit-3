//* grades object here
/* 
Construct an Object named grades.
Within grades's code block, create three entries: midterm, project, and final.
The value of these entries should be a sub-Object that contains two key: value pairs: grade and weight whose values are Numbers that represent a single decimal point grade. The weight on midterm and project should be 1 and the weight on final, 2. 
*/

let grades = {
    midterm: {
        grade: 98.7,
        weight: 1
    },
    project: {
        grade: 87.6,
        weight: 1
    },
    final: {
        grade: 76.5,
        weight: 2
    }
}

/* 
Within the scope of the callback function, redefine gradeSum with a new equation. To access the correct key: value pair, combine object and key in bracket notation.
Utilizing the bracket notation, multiply the grade by weight values and add back gradeSum.
Utilizing the same bracket notation, redefine weightSum as an equation that adds the weight value to weightSum.
Outside the scope of the forEach method but within the scope of the gpa function, create the variable weightedGrade and have its value be gradeSum divided by weightSum.
Below weightedGrade's definition, print it to the console. 
*/

//* Create a function named gpa that accepts the parameter object.
function gpa(object) {
    // write your code here
    //* Within gpa's code block, create the variable gradesToWeight whose value is object passed to the Object.keys() method.
    let gradesToWeight = Object.keys(object);
    console.log(gradesToWeight.midterm, typeof gradesToWeight, grades.midterm['grade']);
    //* Create two variables whose value is 0: gradeSum and weightSum.
    gradeSum = 0;
    weightSum = 0;
    //* Call the forEach array method on gradesToWeight. The anonymous callback function should have the parameter of key.
    gradesToWeight.forEach((key) => {
        //* Within the scope of the callback function, redefine gradeSum with a new equation. To access the correct key: value pair, combine object and key in bracket notation.

        //* Utilizing the bracket notation, multiply the grade by weight values and add back gradeSum.
        gradeSum += grades[key]['grade'] * grades[key]['weight']

        //* Utilizing the same bracket notation, redefine weightSum as an equation that adds the weight value to weightSum.
        weightSum += grades[key]['weight']
        console.log(gradeSum, weightSum);
    })

    //* Outside the scope of the forEach method but within the scope of the gpa function, create the variable weightedGrade and have its value be gradeSum divided by weightSum.
    weightedGrade = gradeSum / weightSum;
    console.log(`The final GPA is ${weightedGrade}`);
    // should print: 'The final GPA is 3.425'
}

gpa(grades);