document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.querySelector('.toggle-password');
    const passwordInput = document.getElementById('password');
    const icon = togglePassword.querySelector('i');
    
    // Função para alternar a visibilidade da senha
    function togglePasswordVisibility() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Alterna entre os ícones de olho aberto e fechado
        if (type === 'password') {
            icon.classList.remove('bx-show');
            icon.classList.add('bx-hide');
            togglePassword.setAttribute('aria-label', 'Mostrar senha');
        } else {
            icon.classList.remove('bx-hide');
            icon.classList.add('bx-show');
            togglePassword.setAttribute('aria-label', 'Ocultar senha');
        }
    }
    
    // Evento de clique no botão
    togglePassword.addEventListener('click', togglePasswordVisibility);
    
    // Evento de submit do formulário
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aqui você pode adicionar a lógica de autenticação
            console.log('Formulário enviado');
            // window.location.href = 'pagina-inicial.html'; // Redirecionamento após login
        });
    }
});