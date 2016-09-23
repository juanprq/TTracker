function getLogs(user, date) {
  const data = [
    {
      id: 1,
      title: 'Buen usuario',
      description: 'Se realizaron pruebas sobre el componente',
      color: 'teal',
      time: 1.5,
    },
    {
      id: 2,
      title: 'Buen usuario',
      description: 'Implementación de algo',
      color: 'teal',
      time: 3,
    },
    {
      id: 3,
      title: 'Armada',
      description: 'Implementación de pantalla',
      color: 'green',
      time: 1,
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

module.exports = getLogs;
