SELECT * from estados e, cidades c where e.id = c.estado_id; -- Chave primary com chave estrangeira

SELECT e.nome as Estado, c.nome as Cidade, e.regiao as Região 
from estados e, cidades c where e.id = c.estado_id; -- Chave primary com chave estrangeira

SELECT e.nome as Estado, c.nome as Cidade, e.regiao as Região 
FROM estados e 
INNER JOIN cidades c ON e.id = c.estado_id -- Faz a junção de tabelas