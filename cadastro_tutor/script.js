 function adicionarPet() {
      const petSection = document.querySelector('.pet');
      const clone = petSection.cloneNode(true);
      petSection.parentNode.insertBefore(clone, petSection.nextSibling);
    }

    function validarSenha() {
      const senha = document.getElementById("senha").value;
      const confirmar = document.getElementById("confirmar_senha").value;
      if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return false;
      }
      return true;
    }

     function validarSenha() {
    const senha = document.getElementById("senha").value;
    const confirmar = document.getElementById("confirmar_senha").value;
    if (senha !== confirmar) {
      alert("As senhas não coincidem.");
      return false;
    }
    return true;
  }

  function toggleSenha(id, elemento) {
    const input = document.getElementById(id);
    if (input.type === "password") {
      input.type = "text";
      elemento.textContent = "🙈"; // ícone alternativo
    } else {
      input.type = "password";
      elemento.textContent = "👁️";
    }
  }