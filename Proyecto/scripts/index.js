document.addEventListener("DOMContentLoaded", function () {
	function obtenerAnnoActual() {
		return new Date().getFullYear();
	}
	document.getElementById('anno').innerHTML = obtenerAnnoActual();
});