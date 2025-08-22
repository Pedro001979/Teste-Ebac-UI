///<reference types="cypress"/>
import produtosPage from "../../support/page-objets/produtos.page";

describe('Fucionalidade: Produtos', () => {


    beforeEach(() => {
        produtosPage.visitarUrl()
    });


    it('Deve Selecionar um Produto da Lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Argus All-Weather Tank'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página de um produto', () => {
        produtosPage.visitarProduto('Argus All Weather Tank')
         cy.get('.product_title').should('contain' , 'Argus All-Weather Tank')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Aether Gym Pant')
        produtosPage.addProdutoCarrinho(33 , 'Blue' , qtd)

        cy.get('.woocommerce-message').should('exist')
    });

     it.only('Deve adicionar produto ao carrinho - buscando na massa de dados', () => {
       cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                 dados[2].tamanho ,
                 dados[2].cor , 
                 dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain' , dados[2].nomeProduto)
        });
    });
});