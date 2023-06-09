mysql -u root -p

create database universidad;

use universidad;

create table usuarios(
    id_usuario integer not null auto_increment,
    nombre varchar(100),
    email varchar(100),
    genero varchar(30),
    contraseña varchar(200),
    primary key(id_usuario)
);

create user "dbuser"@"%" identified with mysql_native_password BY "Eafit2023.";

grant all privileges on universidad.* to "dbuser"@"%";
flush privileges;

insert into usuarios (nombre,email,genero,contraseña) values("sebas","sebastiancano21@hotmail.es","fluido","holi1234");
insert into usuarios (nombre,email,genero,contraseña) values("ana","anita123@gmail.com","hetere","ano");
