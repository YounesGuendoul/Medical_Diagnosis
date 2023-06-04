const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
	checkbox.addEventListener('change', function() {
		const checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
		if (checkedCount >= 6) {
			checkboxes.forEach(c => {
				if (!c.checked) {
					c.disabled = true;
				}
			});
		} else {
            checkboxes.forEach(c => {
				c.disabled = false;
			});
		}
	});
});