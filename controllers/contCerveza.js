function getHola(req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })   
  }

function getCerveza(req, res) {
    res.json(cervezas)  
  }
  
function postCerveza(req, res) {
    cerveza.push(req.body)   
  }
  
function delCerveza(req, res) {
    let id = req.params.id;
  
    let nuevoArray = cervezas.filter(cerveza => cerveza.id != id);
    cervezas = nuevoArray;
  
    res.json({ mensaje: 'Método delete'})  
  }

module.exports = (getCerveza, postCerveza, delCerveza)