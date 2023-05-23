1. Criar conta em https://dashboard.api-football.com/;
2. Ler a documentação em https://www.api-football.com/documentation-v3#section/Introduction 
    para saber como funciona a API. 
    Eu preciso de autenticação por API-Key, então o próximo passo será obter esta API-key;
3. Obter API-key em https://dashboard.api-football.com/profile - escolhi fazer as requisições pela rota https://v3.football.api-sports.io/;
4. Iniciar o projeto instalando o React.js com Typescript utilizando "npm create vite@latest . --template react-ts";
5. Instalar React Router Dom para navegação entre as páginas da aplicação, bem como instalar os tipos de Typescript respectivos;
6. Instalar Axios para facilitar as requisições da API; 
7. Organizar a arquitetura de pastas do projeto; 
8. Desenhar o arquitetura visual das páginas do site.
9. Fazer as rotas iniciais do site (página inicial);  
10. Na página inicial, criar input para que o usuário possa logar com a api-key; 
11. Criar esquema de validação da credencial do usuário. Se a credencial api-key for verdadeira, 
    o usário ganha acesso à area de acesso restrito do site. Do contrário, 
    ele não consegue acessá-la.
12. Criar as áreas de acesso restrito, começando pela página de escolha do país;
13. Criar a página que mostra todos os países disponíveis, de maneira que o usuário possa clicar em uma bandeira lhe sejam mostrados as ligas daquele respectivo país. A partir daqui, todas as páginas estão aninhadas, 
    de modo que os endereços das páginas são cumulativos e representam os dados identificadores de cada item selecionado (país, liga, temporada e time);
14. Aplicar renderização condicional de acordo com o país selecionado, o usuário é levado para a próxima página, que é a de seleção de ligas;
15. O usuário pode selecionar um país dentre os disponíveis e clicar na respectiva bandeira; 
16. Vão ser-lhe mostradas todas as ligas disponíveis naquele país. 
17. Guardei os dados do país escolhido no Local Storage, bem como todos os dados identificadores de ligas, times e temporadas, para serem facilmente acessados em cada página.
18. Criar nova rota onde o usuário, a partir da seleção de uma liga, acessa as temporadas disponíveis relativas à liga selecionada. 
19. Ao escolher uma temporada pertencente a uma liga o usuário poderá escolher um dos times disponíveis;
20. É mostrada uma lista com todos os times que disputaram aquela liga naquela temporada específica; 
21. O usuário escolhe um time e é levado à página do time, onde ele pode ver algumas informações sobre o time e pode escolher ver informações sobre estatísticas do time e plantel do time;
22. Se ele optar por ver estatísticas, ele é levado à página das estatísticas, que mostram as formações mais utilizadas naquela temporada e os resultados da temporada;
23. Se ele optar por ver o plantel, lhe é mostrado o plantel com informações contendo o nome, idade, nacionalidade e foto dos jogadores naquela temporada; 


