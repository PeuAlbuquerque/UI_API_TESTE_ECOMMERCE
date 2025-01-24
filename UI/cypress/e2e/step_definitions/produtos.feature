Feature: Produtos
Como usuário do E-commerce Advantage Online Shopping
Quero buscar um Produto
Para inserir o produto a ser comprado no carrinho

Scenario Outline: Validar lista de produtos - Pesquisa por Categoria
  Given que o usuario esta na tela home
  When selecionada uma "<categoria>" "<id>"
  Then deve ser exibida a lista de produtos pesquisados

  Examples:
    | categoria | id |
    | Speakers  | 4  |
    | Tablets   | 3  |
    | Headphone | 2  |
    | Laptops   | 1  |
    | Mice      | 5  |

Scenario Outline: Pesquisa de produto por Categoria
Given que o usuario esta na tela home
And selecionada uma "<categoria>" "<id>"
When selecionado um item da lista
Then deve ser exibida a pagina de detalhes do produto

  Examples:
    | categoria | id |
    | Speakers  | 4  |
    | Tablets   | 3  |
    | Headphone | 2  |
    | Laptops   | 1  |
    | Mice      | 5  |
    

Scenario Outline: Pesquisa de produtos utilizando Filtros - Pesquisa por Categoria
Given que o usuario esta na tela home
And selecionada uma "<categoria>" "<id>"
When efetuada a utilizacao dos filtros
Then deve ser exibida a lista de produtos pesquisados
  Examples:
    | categoria | id |
    | Speakers  | 4  |

Scenario: Validar lista de produtos - Pesquisa por meio da Barra de Pesquisa
Given que o usuario esta na tela home
When efetuada a busca por meio da barra de pesquisa utilizando um parametro compartilhado por mais de um item
Then deve ser exibida a lista de produtos pesquisados

Scenario: Pesquisa de produto por meio da Barra de Pesquisa
Given que o usuario esta na tela home
And efetue a pesquisa por um item disponivel na plataforma
When selecionado um item da lista
Then deve ser exibida a pagina de detalhes do produto

Scenario: Pesquisa por Produto Inexistente
Given que o usuario esta na tela home
When efetue a pesquisa por um item inexistente na plataforma
Then o sistema deve exibir a mensagem de No results for...

Scenario: Pesquisa por produto de Oferta Especial
Given que o usuario esta na tela home
When selecionada a opção See Offer do item promocional
Then deve ser exibida a pagina de detalhes do produto

Scenario: Pesquisa de produto por Itens Populares
Given que o usuario esta na tela home
When selecionado o produto dos Itens Populares
Then deve ser exibida a pagina de detalhes do produto