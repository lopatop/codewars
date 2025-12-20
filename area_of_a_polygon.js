// Description:
//     Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type:
//
//     alt text
//
// Assume D always equals B/2.
// Assume the angles formed by AB and BC are right angles.

//SOLUTION

function polygonArea(A, B, C, D) {
    return A * B + (C - A) * D;
}