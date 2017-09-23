var numberinput=document.getElementById('myInput');

numberinput.addEventListener('focus', function () {
	this.value='+994-';
})

numberinput.addEventListener('keydown', function () {
	if (this.value.length==7 || this.value.length==11 || this.value.length==14){
		this.value+='-';
	}
})

function isNumber(b) {
	if (b.which<48 || b.which>57) {
		return false;
	}
	else {
		return true;
	}
}