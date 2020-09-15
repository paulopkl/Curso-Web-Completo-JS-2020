/* select * from cidades c inner join prefeitos p on c.id = p.cidade_id; */



/* Mesmo as cidade que não tem prefeito associados viram nessa consulta */
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
 
 
 
 /* Mesmo os prefeitos que não tem uma cidade associados viram nessa consulta */
select * from cidades c right join prefeitos p on c.id = p.cidade_id;


/* FULL JOIN Não é suportado pelo SQL */
/* select * from cidades c full join prefeitos p on c.id = p.cidade_id;
*/


 /* Une as duas consultas dos prefeitos que não tem uma cidade associados e das cidade que não
 tem prefeitos associdadas. Um verdadeiro FULL JOIN no MySQL. UNION ALL trás as duplicações */
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;