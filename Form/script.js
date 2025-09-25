document.getElementById('infoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('لطفا یک ایمیل معتبر وارد کنید.');
        return;
    }
    if (phone.startsWith('0')) {
        phone = '+98' + phone.substring(1);
    }
    if (!phone.startsWith('+98')) {
        alert('شماره تماس باید با 0 یا 98+ شروع شود.');
        return;
    }
    alert('فرم با موفقیت کامل شد.\nنام: ' + document.getElementById('name').value + '\nایمیل: ' + email + '\nشماره تماس: ' + phone);
});