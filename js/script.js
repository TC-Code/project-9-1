function getTriangleArea(a, h){
	if (a <= 0 || h <= 0)  {
		alert('Invalid entry!');
		return;
	} 
		return (a * h/2);
}
var triangle1Area = getTriangleArea(0, 15);
var triangle2Area = getTriangleArea(5, 15);
var triangle3Area = getTriangleArea(6, 12);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
