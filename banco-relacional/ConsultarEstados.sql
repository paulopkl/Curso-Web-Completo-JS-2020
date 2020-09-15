select * from estados;

SELECT nome from estados;
SELECT nome, sigla as 'Sigla do Estado' from estados;

SELECT nome, sigla as 'Sigla do Estado', regiao from estados where regiao = 'sul';

SELECT nome, regiao from estados where populacao >= 10;
SELECT nome, regiao, populacao from estados where populacao >= 10 order by populacao desc;