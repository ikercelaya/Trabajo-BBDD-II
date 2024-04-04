
-- Creación de tabla para Directores
CREATE TABLE Directores (
    id_director INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL
);

-- Creación de tabla para Actores
CREATE TABLE Actores (
    id_actor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    fecha_nacimiento DATE NOT NULL
);

-- Creación de tabla para Películas
CREATE TABLE Peliculas (
    id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    fecha_estreno DATE NOT NULL,
    id_director INT,
    FOREIGN KEY (id_director) REFERENCES Directores(id_director) ON DELETE SET NULL
);

-- Creación de tabla para Series
CREATE TABLE Series (
    id_serie INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    temporadas INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    id_director INT,
    FOREIGN KEY (id_director) REFERENCES Directores(id_director) ON DELETE SET NULL
);

-- Creación de tabla para Documentales
CREATE TABLE Documentales (
    id_documental INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    fecha_estreno DATE NOT NULL,
    tema VARCHAR(255) NOT NULL,
    id_director INT,
    FOREIGN KEY (id_director) REFERENCES Directores(id_director) ON DELETE SET NULL
);

-- Creación de tabla de asociación para Películas y Actores
CREATE TABLE Pelicula_Actor (
    id_pelicula INT,
    id_actor INT,
    PRIMARY KEY (id_pelicula, id_actor),
    FOREIGN KEY (id_pelicula) REFERENCES Peliculas(id_pelicula) ON DELETE CASCADE,
    FOREIGN KEY (id_actor) REFERENCES Actores(id_actor) ON DELETE CASCADE
);

-- Nota: Si se requieren tablas de asociación para Series y Documentales con Actores,
-- se deberán crear siguiendo la misma estructura que Pelicula_Actor.

-- Inserción de datos en Directores
INSERT INTO Directores (nombre, fecha_nacimiento) VALUES
('Christopher Nolan', '1970-07-30'),
('Quentin Tarantino', '1963-03-27'),
('Martin Scorsese', '1942-11-17'),
('Sofia Coppola', '1971-05-14'),
('Bong Joon Ho', '1969-09-14');

-- Inserción de datos en Actores
INSERT INTO Actores (nombre, fecha_nacimiento) VALUES
('Leonardo DiCaprio', '1974-11-11'),
('Scarlett Johansson', '1984-11-22'),
('Tom Hanks', '1956-07-09'),
('Natalie Portman', '1981-06-09'),
('Brad Pitt', '1963-12-18');

-- Inserción de datos en Películas
INSERT INTO Peliculas (titulo, fecha_estreno, id_director) VALUES
('Inception', '2010-07-16', 1),
('Pulp Fiction', '1994-10-14', 2),
('The Irishman', '2019-09-27', 3),
('Lost in Translation', '2003-09-12', 4),
('Parasite', '2019-05-30', 5);

-- Inserción de datos en Series
INSERT INTO Series (titulo, temporadas, fecha_inicio, id_director) VALUES
('Breaking Bad', 5, '2008-01-20', 3),
('Stranger Things', 4, '2016-07-15', 4),
('The Crown', 4, '2016-11-04', 1),
('Black Mirror', 5, '2011-12-04', 2),
('The Mandalorian', 2, '2019-11-12', 5);

-- Inserción de datos en Documentales
INSERT INTO Documentales (titulo, fecha_estreno, tema, id_director) VALUES
('The Social Dilemma', '2020-01-26', 'Social Media', 1),
('My Octopus Teacher', '2020-09-04', 'Nature', 2),
('13th', '2016-10-07', 'Social Injustice', 3),
('The Square', '2013-01-17', 'Revolution', 4),
('Icarus', '2017-08-04', 'Doping', 5);
