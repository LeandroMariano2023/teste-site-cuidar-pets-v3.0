// Máscara para CPF
document.addEventListener("DOMContentLoaded", function () {
  const cpfInput = document.getElementById('cpf');

  cpfInput.addEventListener('input', function () {
    let cpf = this.value.replace(/\D/g, '').slice(0, 11);

    if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
    } else if (cpf.length > 6) {
      cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
    } else if (cpf.length > 3) {
      cpf = cpf.replace(/(\d{3})(\d{1,3})/, "$1.$2");
    }
    this.value = cpf;
  });
});

// Validação de CPF
function validarCPF(cpf) {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  return resto === parseInt(cpf[10]);
}

// Validação de formulário no submit
function validarFormulario() {
  const cpf = document.getElementById('cpf').value;
  if (!validarCPF(cpf)) {
    alert("CPF inválido!");
    return false;
  }

  const senha = document.getElementById('senha').value;
  const confirmar = document.getElementById('confirmar_senha').value;

  if (senha !== confirmar) {
    alert("As senhas não coincidem!");
    return false;
  }

  return true;
}

// Mostrar/ocultar senha
function toggleSenha(id, elemento) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    elemento.textContent = "🙈";
  } else {
    input.type = "password";
    elemento.textContent = "👁️";
  }
}
