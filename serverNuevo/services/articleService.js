const Firebird = require('node-firebird');
const { options } = require('../config');

const articleService = async (barcode) => {
  const sql = `select * from articulos a where a.codigobarra = '${barcode}'`;

  return new Promise((resolve, reject) => {
    Firebird.attach(options, function (err, db) {
      if (err) reject(err);

      db.query(sql, function (err, result) {
        if (result.length === 0)
          reject({ status: 404, message: 'No se ha encontrado el articulo' });

        // IMPORTANT: close the connection
        db.detach();

        resolve({ status: 200, article: result });
      });
    });
  });
};

module.exports = { articleService };
