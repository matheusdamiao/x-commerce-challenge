# X-Commerce Challenge

#### Atenção: este projeto foi feito para rodar em modo de desenvolvimento, pois suas requests estão acopladas ao servidor da biblioteca Mirage JS

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/matheusdamiao/x-commerce-challenge.git
```

Entre no diretório do projeto

```bash
  cd x-commerce-challenge
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor de desenvolvimento

```bash
  npm run dev
```

## O Desafio:

O desafio proposto foi recriar a seguinte tela do Figma utilizando o framework NextJS com algumas features obrigatórias e outras opcionais.

![image](https://user-images.githubusercontent.com/84056783/215238206-5394dd9a-6de0-4cc3-8f64-3afca7089e39.png)

### Features obrigatórias do desafio:

- Exibir todos os produtos e os produtos mais vendidos
- Paginação
- Busca
- Poder favoritar um produto
- Alternar exibição entre favoritos e todos produtos
- Poder criar um novo produto por um modal
- Mostrar o faturamento do produto e quantos foram vendidos na
  tabela
- Atenção a experiência do usuário (ex: toasts de errors)

### Extras:

- Usar react query para cachear as requests
- Que os componentes sejam acessíveis. (Você poder usar libs como
  radixUi para te ajudar nisso)
- Poder ordenar os produtos

# O que foi alcançado 🚀

## Stack utilizada:

- NextJS
- Styled-Components: para estilizar components reutilizáveis e com fácil customização via props. https://styled-components.com/
- SWR: Ao invés de utilizar React Query, optamos por utilizar o SWR para cacher as requests, já que é um projeto NextJs https://swr.vercel.app/
- React-hot-toast: Para lançar toasts de erro e de sucesso quando o usuário fizer requests para o servidor https://react-hot-toast.com/
- MirageJS: Utilizado para mockar requests a um banco de dados https://miragejs.com/
- React-icons: ícones de fácil implementação https://react-icons.github.io/react-icons
- ContextAPI: adicionamos estados globais na aplicação. https://beta.reactjs.org/reference/react/useContext

## Funcionalidades:

- Todos as features obrigatórias funcionando.
- Duas features extras também foram alcançadas: cacheamos as requests com SWR, mantendo sincronia com o banco de dados e
  adicionamos ARIA labels e roles nas tabelas, botões e modal para dar acessibilidade a elas.
  Para saber mais sobre os padrões ARIA de acessibilidade que adicionamos: [https://www.w3.org/WAI/ARIA/apg/patterns/]

## Resultado Final:

![image](https://user-images.githubusercontent.com/84056783/215238369-b023daa7-7c37-4b1d-9122-b19fcb522723.png)

#### Toasts de status de requisição

![image](https://user-images.githubusercontent.com/84056783/215239253-8e461795-f9af-4823-aa74-2cca7ddb0b1c.png)

#### Modal de criação de produto

![image](https://user-images.githubusercontent.com/84056783/215239372-431d5edd-4ae0-4618-b031-e0214431bafe.png)

#### Busca por produtos

![image](https://user-images.githubusercontent.com/84056783/215239403-41b54377-2a25-482a-af77-bc9bd708e443.png)

## Aprendizado:

- Nunca havia utilizado o MirageJS antes, por isso optei por fazer o tutorial oficial e depois iniciar a implementação. Isso acabou me 'atrasando' alguns dias no projeto,
  mas no fim foi um ganho, pois pude compreender bem melhor quais features dessa lib eu iria de fato utilizar/precisar. Achei uma ferramenta incrivel, com grandes possibilidades de configuração do banco de dados bem como das requests para ele.
  Certamente vou utilizá-lo novamente.
- A biblioteca React-hot-toast foi uma ótima surpresa. Fácil integração com o projeto e conferiu bastante valor na experiência do usuário.
- Embora fosse um requerimento extra, eu queria muito testar alguma lib que otimizasse fetch e atualização de dados, como React Query, RTK Query.
  Descobri que SWR era uma ótima opção de integração com NextJS e acabei optando por ela. Tive certa dificuldade para entender como implementar lguns conceitos no começo, como mutate,
  mas ao poucos vi que o update do server state ficava tão sincronizado que eu não precisaria usar um global state para cada
  tipo de dado diferente. Bastaria usar a função mutate para manter os dados sincronizados.
- Por fim, na metade do projeto acreditei que iria precisar utilizar estados globais para organizar melhor meus components (evitando props drilling), e optei por configurar
  o Context API nativo do React. Percebi depois, no entanto, que bastava bem configurar o SWR, que eu não precisaria buscar sincronizar nenhum server state a um local state.
  Acabei só utilizando o ContextAPI para receber e atualizar o search state do botão de busca. Este aprendizado foi bem significativo, pois passei a ter uma visão mais completa
  de como estados de uma aplicação (server, UI, global, local) podem ser gerenciados de maneiras diferentes e separados.

## Feedback:

- Se você tiver algum feedback, ou gostaria de comentar alguma coisa sobre o projeto, pode me deixar uma msg no meu site ou em qualquer rede social.
  http://matheusdamiao.netlify.app
