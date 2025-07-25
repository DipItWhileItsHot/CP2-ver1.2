function showForm(formId) {
    // Hide all forms
    document.querySelectorAll('.login-card').forEach(form => {
    form.style.display = 'none';
    });
    // Show the requested form
    document.getElementById(formId).style.display = 'block';
}
        
// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('#login-form form');
    const registerForm = document.querySelector('#register-form form');
            
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality would be implemented here');
    });
                
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your registration logic here
        alert('Registration functionality would be implemented here');
    });
});