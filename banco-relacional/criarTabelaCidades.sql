create table if not exists cidades (
    id int unsigned not null auto_increment,
    nome VARCHAR(255) not null,
    estado_id int unsigned not null, -- Chave estrangeira FOREIGN KEY. Que é o id da tabela estados
    area decimal(10,2),  -- 2 dele é ponto flutuante
    PRIMARY KEY(id),
    FOREIGN KEY(estado_id) REFERENCES estados (id)
);

-- create table if not exists teste (
--     id int unsigned not null auto_increment PRIMARY KEY
-- );

-- DROP TABLE IF EXISTS teste;