SELECT * FROM `estados` where id = 1022;

INSERT INTO cidades (nome, area, estado_id) VALUES ('Campinas', 795, 1022);

INSERT INTO cidades (nome, area, estado_id) VALUES ('Niterói', 133.9, 1016);

INSERT INTO cidades (nome, area, estado_id) 
VALUES ('Caruaru', 920.6, (select id from estados where sigla = 'PE')) -- id = 1014

INSERT INTO cidades (nome, area, estado_id) 
VALUES ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'SE')) -- 1023

SELECT * From cidades;