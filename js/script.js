function getTriangleArea(a, h){
	if (a <= 0 || h <= 0)  {
		alert('Invalid entry!');
} 
	else {
		return (a * h/2);
    }
}
console.log(getTriangleArea(5, 9))
