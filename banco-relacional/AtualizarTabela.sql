update estados set nome = 'Maranhão' where sigla = 'MA';

SELECT estados.nome from estados where sigla = 'MA';

update estados set nome = 'Paraná', populacao = 11.32 where sigla = 'PR';

select est.nome, populacao, sigla from estados est where sigla = "PR";