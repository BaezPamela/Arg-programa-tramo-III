const archivosController = {}

const rutaPrincipal = __dirname +'/../../archivosTemp/';
 
archivosController.subirArchivo = (req,res) => {
    const archivo = req.files.miArchivo;
    const rutaGuardar = rutaPrincipal + archivo.name;
  
    return archivo.mv(rutaGuardar, function(err) {
      if (err) {
        return res.status(500).json({error: err});
      }else {
        return res.json({ mensaje: 'el archivo se subio correctamente'}); 
      }
    
    });
    
}




module.exports = archivosController;