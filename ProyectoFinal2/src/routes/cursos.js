const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

//rutas cursos
router.get('/', cursosController.list);
router.get('/getDetalles/:id', cursosController.getDetalles);
router.get('/getDetallesProfesor/:id', cursosController.getDetallesProfesor);

//rutas estudiantes
router.get('/getEstudiantes/:id', cursosController.getEstudiantes);
router.get('/deleteEstudiante/:id/:id2', cursosController.deleteEstudiante);
router.post('/addEstudiante', cursosController.agregarEstudiante);
router.get('/updateEstudiante/:id', cursosController.editEstudiante);
router.post('/updateEstudiante/:id/:id2', cursosController.updateEstudiante);

//rutas materiales
router.get('/getMateriales/:id', cursosController.getMateriales);
router.get('/deleteMaterial/:id/:id2', cursosController.deleteMaterial);
router.post('/addMaterial', cursosController.agregarMaterial);
router.get('/updateMaterial/:id', cursosController.editMaterial);
router.post('/updateMaterial/:id/:id2', cursosController.updateMaterial);


//rutas tareas
router.get('/getTareas/:id', cursosController.getTareas);
router.get('/deleteTarea/:id/:id2', cursosController.deleteTarea);
router.post('/addTarea', cursosController.agregarTarea);
router.get('/updateTarea/:id', cursosController.editTarea);
router.post('/updateTarea/:id/:id2', cursosController.updateTarea);

//rutas foros
router.get('/getForos/:id', cursosController.getForos);
router.get('/deleteForo/:id/:id2', cursosController.deleteForo);
router.post('/addForo', cursosController.agregarForo);
router.get('/updateForo/:id', cursosController.editForo);
router.post('/updateForo/:id/:id2', cursosController.updateForo);

module.exports = router;