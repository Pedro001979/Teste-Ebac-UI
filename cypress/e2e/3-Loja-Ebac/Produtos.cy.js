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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Argus All-Weather Tank'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página de um produto', () => {

    });

    it('Deve adicionar produto ao carrinho', () => {

    });

});