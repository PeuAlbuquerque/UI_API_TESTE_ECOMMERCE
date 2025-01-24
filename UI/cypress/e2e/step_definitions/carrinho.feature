Feature: Produtos
Como usuário do E-commerce Advantage Online Shopping
Quero acessar o carrinho
Para visualizar os produtos no carrinho

Scenario: Incluir produto no carrinho
Given que o usuário acesse um produto
When selecionada a opção Add To Cart
Then o produto deve ser adicionado no carrinho

Scenario: Editar produto do carrinho
Given que o usuário acesse um produto
And selecionada a opção Add To Cart
And acesse o carrinho
When selecionada a opção Edit
Then deve ser exibida a pagina de detalhes do produto

Scenario:  Excluir produto do carrinho pelo ícone
Given que o usuário possua produto no carrinho
When selecionado o botão X do icone carrinho
Then deve ser exibida a mensagem Your shopping cart is empty indicando que os itens foram removidos do carrinho

Scenario:  Excluir produto do carrinho tela "Shopping Cart"
Given que o usuário possua produto no carrinho
And acesse o carrinho
When selecionada a opção Remove 
Then deve ser exibida a mensagem Your shopping cart is empty na pagina menu carrinho

Scenario: Visualizar itens do carrinho acessando a tela de pagamentos pelo ícone
Given que o usuário possua produto no carrinho
When selecionado o botão Checkout pelo icone
Then o usuário deve ser direcionado para a tela Order Payment com as informações dos itens incluídos no carrinho 

Scenario: Visualizar itens do carrinho acessando a tela de pagamentos por meio do "Shopping Cart"
Given que o usuário possua produto no carrinho
And acesse o carrinho
When selecionado o botão Checkout do Menu Carrinho
Then o usuário deve ser direcionado para a tela Order Payment com as informações dos itens incluídos no carrinho 

Scenario: Acesso a tela de pagamentos com usuário deslogado
Given que o usuário possua produto no carrinho
When selecionado o botão Checkout pelo icone
Then o usuário deve ser direcionado para a tela Order Payment exibindo os campos para login ou registro na plataforma

Scenario: Acesso a tela de pagamentos com usuário logado
Given que o usuário acesse a plataforma com as credenciais
And que o usuário acesse um produto
And selecionada a opção Add To Cart
When selecionado o botão Checkout pelo icone
Then o usuário deve ser direcionado para a tela Order Payment exibindo os detalhes de envio do pedido