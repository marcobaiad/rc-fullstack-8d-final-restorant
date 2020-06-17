const OrdenModel = require('../../models/orden.model');

exports.MostrarOrden = async (req, res) => {
    try {

        // if(!mongoose.Types.ObjectId.isValid(req.params.id)){
        //     return res.status(404).json({mensaje: 'El ID no Existe'});
        // }

        const orden = await OrdenModel.findById(req.params.id)

        if(!orden){
            return res.status(404).json({mensaje: 'No Existe la Orden'})
        }

        res.send(orden)

    } catch (err) {
        res.status(500).send(err);
    }
}
