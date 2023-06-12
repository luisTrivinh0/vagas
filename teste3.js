var data = require("./fakeData");

module.exports = function(req, res) {
  var name = req.query.name;

  if (!req.hasDeletePermission) {
    res.status(403).send("Permission denied");
    return;
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      data.splice(i, 1); // Remove o usuário do array usando o método 'splice'
      res.send("success"); // Retorna sucesso para o cliente
      return; // Encerra o loop e a função após encontrar e remover o usuário
    }
  }

  res.send("User not found"); // Se não encontrar o usuário, retorna "User not found"
};