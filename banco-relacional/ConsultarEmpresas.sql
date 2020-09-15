select e.nome, c.nome AS `Cidade` FROM empresas e, empresas_unidades eu, cidades c 
WHERE e.id = eu.empresa_id AND c.id = eu.cidade_id and sede = 1;