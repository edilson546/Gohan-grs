const apiUrl = 'https://jsonplaceholder.typicode.com/users';
async function carregarUsuarios() {
  const response = await fetch(apiUrl);
  const usuarios = await response.json();

  const listaUsuarios = document.getElementById('lista-usuarios');
  listaUsuarios.innerHTML = ''; 
  usuarios.forEach(usuario => {
    const li = document.createElement('li');
    li.textContent = `${usuario.name} - ${usuario.email}`;
    listaUsuarios.appendChild(li);
  });
}
async function adicionarUsuario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const usuario = document.getElementById('usuario').value;
  const telefone = document.getElementById('telefone').value;
  const email = document.getElementById('email').value;

  const novoUsuario = {
    name: nome,
    username: usuario,
    phone: telefone,
    email: email,
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novoUsuario),
  });
  const usuarioAdicionado = await response.json();
  carregarUsuarios();
  document.getElementById('form-usuario').reset();
}
document.addEventListener('DOMContentLoaded', carregarUsuarios);
document.getElementById('form-usuario').addEventListener('submit', adicionarUsuario);
