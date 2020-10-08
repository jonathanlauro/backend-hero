const connectiton = require('../database/connection');

module.exports = {
  async index(req,res){
    const {pages = 1} = req.params;
    const [count] = await connectiton('incidents').count();
    const incidents = await connectiton('incidents')
    .join('ongs','ongs.id','=', 'incidents.ong_id')
    .limit(5)
    .offset((pages-1)*5)
    .select([
      'incidents.*',
      'ongs.name',
      'ongs.email',
      'ongs.whatsapp',
      'ongs.city',
      'ongs.uf'
    ]);

      res.header('X-total-Count',count['count(*)']);
    return res.json(incidents);
  },


  async create(req,res){
    const { title,description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connectiton('incidents').insert({
      title,
      description,
      value,
      ong_id
    });
    return res.json({ id })
  },

  async delete (req,res){
    const { id } = req.params;
    const ong_id = req.headers.authorization; 

    const incidents = await connectiton('incidents')
    .where('id', id)
    .select('ong_id')
    .first();

    if(incidents.ong_id !== ong_id){
       return res.status(401).json({ error: "Operator not permitted." })
    }

    await connectiton('incidents').where('id',id).delete();
    return res.status(204).send();
  }
}