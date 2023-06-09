const controller = {};

//controladores cursos
controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT idcurso, nombre, categoría FROM curso', (err, cursos) => {
            if (err){
                res.json(err);
            }
            res.render('cursos', {
                data: cursos
            });
        });
    });

    
};


controller.getDetalles = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        } else {
            conn.query('SELECT nombre FROM profesor WHERE idcurso = ?', [id], (err, profesor) => {
                if (err) {
                    res.json(err);
                } else {
                    conn.query('SELECT * FROM curso WHERE idcurso = ?', [id], (err, datos) => {
                        if (err) {
                            res.json(err);
                        } else {
                            res.render('cursoDetallado', { datos: datos, profesor: profesor });
                        }
                    });
                }
            });
        }
    });
};

//controlador profesor
controller.getDetallesProfesor = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM profesor WHERE idcurso = ?', [id], (err, datosProfesor) => {
            if (err) {
                res.json(err);
            }
            res.render('profesores',{
                datos: datosProfesor
            });
        });
    });
};


//controladores estudiantes
controller.getEstudiantes = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM estudiante WHERE idcurso = ?', [id], (err, estudiantes) => {
            if (err) {
                res.json(err);
            }
            res.render('estudiantes', {
                datos: estudiantes
            });
        });
    });
};

controller.editEstudiante = (req, res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM estudiante WHERE idestudiante = ?', [id], (err, estudiante) => {
            if (err) {
                res.json(err);
            }
            res.render('editarEstudiante', {
                datos: estudiante[0]
            });
        });
    });
};

controller.updateEstudiante = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    const newEstudiante = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE estudiante set ? WHERE idestudiante = ?', [newEstudiante, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM estudiante WHERE idcurso = ?', [id2], (err, estudiantes) => {
                if (err) {
                    res.json(err);
                }
                res.render('estudiantes', {
                    datos: estudiantes
                });
            });
        });
    });
};

controller.deleteEstudiante = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM estudiante WHERE idestudiante = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM estudiante WHERE idcurso = ?', [id2], (err, estudiantes) => {
                if (err) {
                    res.json(err);
                }
                res.render('estudiantes', {
                    datos: estudiantes
                });
            });
        });
    });
};

controller.agregarEstudiante = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        conn.query('INSERT INTO estudiante set ?', [data], (err, estudiante) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM estudiante WHERE idcurso = ?', [data.idcurso], (err, estudiantes) => {
                if (err) {
                    res.json(err);
                }
                res.render('estudiantes', {
                    datos: estudiantes
                });
            });
        })
    })
};


//controladores materiales
controller.getMateriales = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM material WHERE idcurso = ?', [id], (err, materiales) => {
            if (err) {
                res.json(err);
            }
            res.render('materiales', {
                datos: materiales
            });
        });
    });
};

controller.editMaterial = (req, res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM material WHERE idmaterial = ?', [id], (err, material) => {
            if (err) {
                res.json(err);
            }
            res.render('editarMaterial', {
                datos: material[0]
            });
        });
    });
};

controller.updateMaterial = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    const newMaterial = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE material set ? WHERE idmaterial = ?', [newMaterial, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM material WHERE idcurso = ?', [id2], (err, materiales) => {
                if (err) {
                    res.json(err);
                }
                res.render('materiales', {
                    datos: materiales
                });
            });
        });
    });
};

controller.deleteMaterial = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM material WHERE idmaterial = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM material WHERE idcurso = ?', [id2], (err, materiales) => {
                if (err) {
                    res.json(err);
                }
                res.render('materiales', {
                    datos: materiales
                });
            });
        });
    });
};

controller.agregarMaterial = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        conn.query('INSERT INTO material set ?', [data], (err, material) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM material WHERE idcurso = ?', [data.idcurso], (err, materiales) => {
                if (err) {
                    res.json(err);
                }
                res.render('materiales', {
                    datos: materiales
                });
            });
        })
    })
};


//controladores tareas
controller.getTareas = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tarea WHERE idcurso = ?', [id], (err, tareas) => {
            if (err) {
                res.json(err);
            }
            res.render('tareas', {
                datos: tareas
            });
        });
    });
};

controller.editTarea = (req, res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM tarea WHERE idtarea = ?', [id], (err, tarea) => {
            if (err) {
                res.json(err);
            }
            res.render('editarTarea', {
                datos: tarea[0]
            });
        });
    });
};

controller.updateTarea = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    const newTarea = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE tarea set ? WHERE idtarea = ?', [newTarea, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM tarea WHERE idcurso = ?', [id2], (err, tareas) => {
                if (err) {
                    res.json(err);
                }
                res.render('tareas', {
                    datos: tareas
                });
            });
        });
    });
};

controller.deleteTarea = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM tarea WHERE idtarea = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM tarea WHERE idcurso = ?', [id2], (err, tareas) => {
                if (err) {
                    res.json(err);
                }
                res.render('tareas', {
                    datos: tareas
                });
            });
        });
    });
};

controller.agregarTarea = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        conn.query('INSERT INTO tarea set ?', [data], (err, foro) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM tarea WHERE idcurso = ?', [data.idcurso], (err, tareas) => {
                if (err) {
                    res.json(err);
                }
                res.render('tareas', {
                    datos: tareas
                });
            });
        })
    })
};


//controladores foros
controller.getForos = (req, res) => {
    const {id} = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM foro WHERE idcurso = ?', [id], (err, foros) => {
            if (err) {
                res.json(err);
            }
            res.render('foros', {
                datos: foros
            });
        });
    });
};

controller.editForo = (req, res) => {
    const {id} = req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM foro WHERE idforo = ?', [id], (err, foro) => {
            if (err) {
                res.json(err);
            }
            res.render('editarForo', {
                datos: foro[0]
            });
        });
    });
};

controller.updateForo = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    const newForo = req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE foro set ? WHERE idforo = ?', [newForo, id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM foro WHERE idcurso = ?', [id2], (err, foros) => {
                if (err) {
                    res.json(err);
                }
                res.render('foros', {
                    datos: foros
                });
            });
        });
    });
};

controller.deleteForo = (req, res) => {
    const {id} = req.params;
    const {id2} = req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM foro WHERE idforo = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM foro WHERE idcurso = ?', [id2], (err, foros) => {
                if (err) {
                    res.json(err);
                }
                res.render('foros', {
                    datos: foros
                });
            });
        });
    });
};

controller.agregarForo = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
        }
        conn.query('INSERT INTO foro set ?', [data], (err, foro) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT * FROM foro WHERE idcurso = ?', [data.idcurso], (err, foros) => {
                if (err) {
                    res.json(err);
                }
                res.render('foros', {
                    datos: foros
                });
            });
        })
    })
};


module.exports = controller;