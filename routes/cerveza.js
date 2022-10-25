const express = require('express')
const router = express.Router();
const {getCervezas, crearCervezas} = require('../controllers/contCerveza');

router.get('/',getCervezas);

router.post('/',crearCervezas);

router.delete('/:id',function(req,res){
    let id = req.params.id;
    res.json({mensaje : 'metodo delete'});
});

module.exports = router;