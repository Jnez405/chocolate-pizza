document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.ingredients-list input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.parentElement.classList.add('checked');
            } else {
                this.parentElement.classList.remove('checked');
            }
        });
    });
});


function shareRecipe() {
    alert('Recipe shared!');
}
