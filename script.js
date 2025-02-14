window.onload = function() {

	// Get the image that opens the modal
	var portfolios = document.getElementsByClassName("rotate");

	for(var i=0; i < portfolios.length; i++) {
		(function () {
			var portfolio = portfolios[i]
			var modal = portfolio.parentElement.getElementsByClassName('modal')[0]

			// Get the modal to display
			portfolio.onclick = function(event) {
			    modal.style.display = "block"; 
			    event.stopPropagation();
			}
			// Get the <span> element that closes the modal
			var span = modal.getElementsByClassName("close")[0];
			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			modal.onclick = function() {
				modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			modal.firstElementChild.onclick = function(event) {
				event.stopPropagation();
			}

		})();

	
	}


}



