--creating database
CREATE DATABASE project;

use project;

CREATE TABLE curso(
	idcurso int not null primary key auto_increment,
    nombre varchar(50),
    categoría varchar(50),
    fecha_inicio date,
    fecha_fin date
); 

CREATE TABLE estudiante(
	idestudiante int not null primary key,
    nombre varchar(100),
    email varchar(100),
    idcurso int,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso)
);

CREATE TABLE profesor(
	idprofesor int not null primary key,
    nombre varchar(100),
    email varchar(100),
    telefono varchar(10),
    area_principal varchar(100),
    idcurso int,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso),
    UNIQUE (idcurso)
); 
drop table profesor;
  

create table material(
	idmaterial int not null primary key,
    titulo varchar(30),
    descripcion varchar(100),
    idcurso int,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso)
);

create table tarea(
	idtarea int not null primary key,
    nombre varchar(50),
    descripcion varchar(100),
    fecha_creacion date,
    fecha_entrega date,
    idcurso int,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso)
);

create table foro(
	idforo int not null primary key,
    nombre varchar(50),
    descripcion varchar(100),
    fecha_comienzo date,
    fecha_final date,
    idcurso int,
    FOREIGN KEY (idcurso) REFERENCES curso(idcurso)
);



