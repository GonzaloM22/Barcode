const { articleService } = require('../services/articleService');

const getArticle = async (req, res) => {
  try {
    const { barcode } = req.query;

    if (!barcode)
      return res.status(400).send({
        error: 'No se ha especificado el código de barras del artículo',
      });

    const response = await articleService(barcode);

    return res.status(response.status).json({ article: response.article });
  } catch (error) {
    res.status(error.status).send({ error: error.message });
  }
};

module.exports = { getArticle };
