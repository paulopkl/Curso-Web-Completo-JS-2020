CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);


-- Cidades_Empresas
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL, /* Verdadeiro se for 1, falso se for 0 */
    PRIMARY KEY (empresa_id, cidade_id)
)