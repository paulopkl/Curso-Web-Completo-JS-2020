select regiao as 'Região', sum(populacao) as Total from estados group by regiao order by Total desc;

-- Total absoluto
select sum(populacao) as Total from estados;

-- Média
select avg(populacao) as Total from estados;

select sum(id) as Total from estados;