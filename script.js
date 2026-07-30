const colors = [
    '#000000',
    '#1a1a1a',
    '#333333',
    '#4d4d4d',
    '#666666',
    '#808080',
    '#999999',
    '#b3b3b3',
    '#cccccc',
    '#ffeb3b',
    '#fdd835',
    '#212121',
];

let index = 0;

function changeBackgroundColor() {
    index = (index + 1) % colors.length;
    document.body.style.transition = 'background 1s ease';
    document.body.style.background = colors[index];
    
}
function placeOrder() {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const selectedCurses = [];
    let total = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedCurses.push(checkbox.value);
            total += parseInt(checkbox.getAttribute('data-price'));
        }
    });

    if (!name || !email) {
        alert('⚠️ Please enter your name and email!');
        return;
    }

    if (!email.toLowerCase().endsWith('@gmail.com')) {
        alert('⚠️ Please use a Gmail address (e.g. yourname@gmail.com)');
        return;
    }

    if (selectedCurses.length === 0) {
        alert('⚠️ Please select at least one curse!');
        return;
    }

    alert('🔮 Order Confirmed! 🔮\n\nCustomer: ' + name + '\nEmail: ' + email + '\nCurses: ' + selectedCurses.join(', ') + '\nTotal: $' + total + '\n\nYour curses will be delivered within the ritual timeframe. Check your email for dark confirmation.');

    document.getElementById('customerName').value = '';
    document.getElementById('customerEmail').value = '';
    document.getElementById('targetInfo').value = '';
    checkboxes.forEach(cb => cb.checked = false);
    updateOrderSummary();
}

const button = document.getElementById('colorButton');
button.addEventListener('click', changeBackgroundColor);
