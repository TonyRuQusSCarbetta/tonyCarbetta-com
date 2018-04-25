function videoMobile() {
	var videoMobile = document.getElementById('videoMobile');
	videoMobile.style.display = 'none';
	videoMobile.innerHTML = '<iframe width="315" height="315" src="https://www.youtube.com/embed/7mL3-1uQkJc?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
	videoMobile.style.display = 'block';
	videoMobile.className = 'animated rotateIn';
	var videoMobileContainer = document.getElementById('videoMobileContainer');
	videoMobileContainer.style.backgroundColor = '#a74752';
}
