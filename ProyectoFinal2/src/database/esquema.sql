--creating database
mysql -u root -p

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

create user "dbuser"@"%" identified with mysql_native_password BY "Eafit2023.";
grant all privileges on project.* to "dbuser"@"%";
flush privileges;


insert into curso values(1,"Seminario de Ingeniería", "Ingeniería de Sistemas",'2023-08-01', '2023-12-31');
insert into estudiante values(100056,"Ana Sofia Rodriguez Orozco", "asrodriguo@eafit.edu.co",1);
insert into profesor values("123456", "Edwin Montoya", "edwimm@eafit.edu.co", 3, "Bases de Datos", 1);
insert into material values(14, "Las empresas hoy en día", "Lean este material para la próxima clase",1);
insert into tarea values(1,"Tarea 1","Buscar qué ingenierías son más populares hoy en día y por qué", '2023-02-14','2023-02-20',1);
insert into foro values(1, "Conozcámonos", "Conocer mejor a los compañeros de clase",'2023-02-14','2023-02-20',1);



