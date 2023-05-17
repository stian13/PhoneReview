
const mysql = require('mysql');

const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'sebas',
  password: '12345',
  database: 'phonereview'
});

function enviarComentario(texto, punto, user, idcelular) {
  conexion.connect();
  conexion.query(`INSERT INTO comentarios(contenido, puntaje, name_user_id, id_celular) VALUES ('${texto}',${punto},'${user}',${idcelular});`, (err, res, campos) => {
    console.log(res);
  });
  conexion.end();
}

export { enviarComentario };
//enviarComentario('es bueno lo recomiendo',4,'sebastian',15);
