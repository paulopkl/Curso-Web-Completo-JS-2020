CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id INT UNSIGNED,
    PRIMARY KEY (id), -- Chave primária
    UNIQUE KEY (cidade_id), -- Valor unico
    FOREIGN KEY (cidade_id) REFERENCES cidades (id) -- Chave estrangeira
);

SELECT * FROM prefeitos;