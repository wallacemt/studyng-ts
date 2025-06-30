type Usuario = { nome: string };
type Admin = { permissions: string };

type UsuarioOrAdmin = Usuario | Admin;

function showData(data: UsuarioOrAdmin) {
  if ("permissions" in data) {
    console.log("Permissoes: " + data.permissions);
  } else {
    console.log("Nome do usuario: " + data.nome);
  }
}
