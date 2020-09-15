

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`));
    getTurma('B', alunos => {
        nomes = nome.concat(alunos.map(a => `B: ${a.nome}`))
        console.log(nomes)
        getTurma('C', alunos => {
            nome = nomes.concat(alunos)
        })
    })
});