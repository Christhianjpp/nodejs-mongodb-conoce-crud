import Place from "../models/Place";

export const renderPlaces = async (req, res) => {
    // trae todos los datos de la BD para enviar a la tabla
    const places = await Place.find().lean();

    res.render("index", { places: places }); // envia los datos a la tabla
}

export const createPlace = async (req, res) => {
    try {
        const place = Place(req.body); // recibe los datos del formulario

        await place.save(); // guarda los datos en la BD

        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}

export const renderPlaceEdit = async (req, res) => {
    try {
        // hace una consulta en la BD para pasarlos a la tabla de edición
        const place = await Place.findById(req.params.id).lean();
        res.render("edit", { place }); // enviando los datos a la tabla de edición
    } catch (error) {
        console.log(error.message);
    }
}

export const editPlace = async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndUpdate(id, req.body);
    res.redirect("/");
}

export const deletePlace = async (req, res) => {
    const { id } = req.params;
    await Place.findByIdAndDelete(id);
    res.redirect("/");
}

export const placeToggleDone = async (req, res) => {
    try {
        const { id } = req.params;
        const place = await Place.findById(id);

        place.know = !place.know;
        await place.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
}