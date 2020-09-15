import React from 'react';

export default este => {return([
        <h1 key="h1">Bom dia {este.nome}! Você tem {este.idade}</h1>,
        <h2 key="h2">Até Breve</h2>
])}

// export default este => {return(
//     <React.Fragment>
//         <h1>Bom dia {este.nome}! Você tem {este.idade}</h1>
//         <h2>Até Breve</h2>
//     </React.Fragment>
// )}

// export default este => {return(
//     <div>
//         <h1>Bom dia {este.nome}! Você tem {este.idade}</h1>
//         <h2>Até Breve</h2>
//     </div>
// )}