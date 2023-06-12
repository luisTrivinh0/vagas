var data = require("./fakeData");

module.exports = function (req, res) {
  var name = req.body.name;
  var job = req.body.job; // Corrige o nome da variável para 'job'

  var newUser = {
    name: name,
    job: job,
  };

  data.push(newUser); // Adiciona o novo usuário ao array 'data'

  res.send(newUser); // Envia uma resposta com o novo usuário adicionado
};

