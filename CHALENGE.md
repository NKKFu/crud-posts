# Desafio de Angular

**Instruções:**

Crie uma aplicação que utilize uma API pública "https://jsonplaceholder.typicode.com/posts" para obter uma lista de posts. Exiba os posts em uma tabela na página inicial do aplicativo.

**Requisitos:**

CRUD de Posts:
- Implemente as operações CRUD (Create, Read, Update, Delete) para os posts.
- Cada item na tabela deve ter botões para Editar e Excluir.
- Ao clicar em Editar, o usuário deve ser apresentado com um modal de edição onde ele possa modificar o título e o corpo do post.
- Ao clicar em Excluir, o post correspondente deve ser removido da lista.
- Durante todas as operações de CRUD, utilize o método subscribe para monitorar as requisições HTTP e tratar possíveis erros.
- Após criar, editar ou excluir um post, a página deve ser atualizada para refletir a mudança.

Gerenciamento In Memory:
- Além de consumir a API pública, implemente um gerenciamento "in memory" para os posts. Ou seja, mantenha uma cópia dos posts no lado do cliente e sincronize-as com a API conforme as operações CRUD são realizadas.

Relacionamentos:
- Adicione uma entidade de "Comentários" aos posts. Cada post pode ter vários comentários.
- Implemente operações CRUD para os comentários, incluindo adição, listagem, edição e exclusão.
- Exiba os comentários relacionados a cada post na interface do usuário.

Estilização:
- Realize a estilização da aplicação utilizando Tailwind CSS.

Critérios de Avaliação:
- Capacidade de consumir uma API pública em Angular.
- Implementação correta de operações CRUD (Create, Read, Update, Delete) para posts e comentários.
- Uso adequado do método subscribe para observar e manipular as respostas das requisições HTTP.
- Organização e clareza do código.
- Implementação correta do gerenciamento "in memory" e relacionamentos entre entidades.

Observações:
- Você pode usar qualquer pacote ou biblioteca adicional que considerar necessário para completar as tarefas.
- Fique à vontade para estilizar a interface como preferir, mas a prioridade é a funcionalidade.
- O foco principal deste teste é avaliar suas habilidades em Angular, por isso, tente escrever um código limpo, modular e bem estruturado.
