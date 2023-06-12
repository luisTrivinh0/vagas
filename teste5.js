const { data } = require("./fakeData");

module.exports = function(req, res) {
  var name = req.query.name;

  var count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name === name) {
      count = data[i].readCount; // Atualiza count com o valor de readCount
      break;
    }
  }

  res.send("Usuário " + name + " foi lido " + count + " vezes.");
};