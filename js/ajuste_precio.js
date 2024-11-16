document.addEventListener('DOMContentLoaded', (event) => {
    const checkboxes = document.querySelectorAll('#customization-form input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updatePrice);
    });
});

function updatePrice() {
    let basePrice = 200.00;
    const checkboxes = document.querySelectorAll('#customization-form input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            basePrice += parseFloat(checkbox.value);
        }
    });
    document.getElementById('price').innerText = basePrice.toFixed(2) + '€';
}
