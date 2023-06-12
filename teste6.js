const permissionsMiddleware = (req, res, next) => {
  // Simulando um usuário autenticado com um nível de acesso atribuído
  const user = {
    id: 1,
    username: "john",
    accessLevel: "admin" // Nível de acesso do usuário (exemplo: "admin" ou "user")
  };

  // Verifica se o usuário tem permissão de deletar/atualizar usuários
  if (user.accessLevel === "admin") {
    // Adiciona a informação de permissão na requisição para uso posterior
    req.hasDeletePermission = true;
  } else {
    req.hasDeletePermission = false;
  }

  // Exemplo de Token
  // const token = req.headers.authorization;
  // const hasDeletePermission = token && token === "valid-token";
  // req.hasDeletePermission = hasDeletePermission;

  next();
};

module.exports = permissionsMiddleware;