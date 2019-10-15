function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  } return undefined;
}

function calculateTriangleArea(base, height){
  if (base > 0 && height > 0) {
    return base * height / 2;
  } return undefined;
}

function calculateCircleArea(radius){
  if (radius > 0) {
    return Math.PI * radius * radius;
  } return undefined;
}