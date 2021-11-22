import { Router } from "express";

import {
    renderPlaces,
    createPlace,
    renderPlaceEdit,
    editPlace,
    deletePlace,
    placeToggleDone,
} from "../controllers/place.controller";

const router = Router();

router.get("/", renderPlaces);

router.post("/place/add", createPlace);

router.get("/place/:id/edit", renderPlaceEdit);
//Editar
router.post("/place/:id/edit", editPlace);
// Eliminar
router.get("/place/:id/delite", deletePlace);
// Echo
router.get("/place/:id/toggleDone", placeToggleDone);

export default router;
