var data = require("./fakeData");

module.exports = function(req, res) {
  var id = req.query.id;
  if (!req.hasDeletePermission) {
    res.status(403).send("Permission denied");
    return;
  }

  const user = data.find((d) => d.id == id); // Corrigi a comparação para 'd.id == id'

  if (user) {
    user.name = req.body.name; // Atualiza o nome do usuário
    user.job = req.body.job; // Atualiza o trabalho do usuário
    res.send(user); // Retorna o usuário atualizado
  } else {
    res.status(404).send("User not found"); // Retorna erro se o usuário não for encontrado
  }
};