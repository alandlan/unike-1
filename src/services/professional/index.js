import http from '../http';

const ProfessionalService = {
  post: async param => {
    return new Promise((resolve, reject) => {
      console.log(JSON.stringify(param))
      http
        .post('Profissional/Adicionar', param)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          console.log('Erro cadastro');
          console.log(error);
          reject(error);
        });
    });
  },
};

export { ProfessionalService };
