const connectiton = require('../database/connection'); 

module.exports = {
  async create(req,res){
    const {id} = req.body;
    console.log(req.body);

//     // const ong = await connectiton('ongs')
//     //   .where('id', id)
//     //   .select('name')
//     //   .first();
//     //   if(!ong){ 
//     //     return res.status(400).json({error: 'No ONG Found with this ID'});
//     //   }
//     // return res.json(ong);
  }
}