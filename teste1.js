const { data } = require('./fakeData');

const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = data.find((item) => item.name === name); // Utiliza a função 'find' para procurar um usuário com o nome correspondente

  if (user) {
    user.readCount++; // Incrementa o valor de readCount ao ler o registro
    res.json(user); // Utiliza 'res.json()' para retornar uma resposta em formato JSON
  } else {
    res.status(404).send('User not found'); // Adiciona tratamento de erro para usuário não encontrado
  }
};

const getUsers = (req, res, next) => {
  res.json(data); // Utiliza 'res.json()' para retornar uma resposta em formato JSON
};

module.exports = {
  getUser,
  getUsers
};