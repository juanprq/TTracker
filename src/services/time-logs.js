function getLogs(user, date) {
  const data = [
    {
      id: 1,
      title: 'Buen usuario',
      description: 'Se realizaron pruebas sobre el componente',
      color: 'teal',
      projectId: 1,
      time: 1.5,
    },
    {
      id: 2,
      title: 'Buen usuario',
      description: 'Implementación de algo',
      color: 'teal',
      projectId: 1,
      time: 3,
    },
    {
      id: 3,
      title: 'Armada',
      description: 'Implementación de pantalla',
      color: 'green',
      projectId: 2,
      time: 1,
    },
  ];

  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

module.exports = getLogs;
