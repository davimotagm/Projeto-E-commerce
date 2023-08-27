/* Função para criar novos cards */
function createCards(obj) {
    /* definir tag principal para receber as outras tags; */
    const containerArticle = document.querySelector(".containerArticle");

    for (let i = 0; i < obj.length; i++) {
        /* Variáveis para formar novas tags */
        const divCard = document.createElement('div');
        const divImg = document.createElement('div');
        const divInf = document.createElement('div');
        const divTag = document.createElement('div');
        const tag_img = document.createElement('img');
        const tag_h3 = document.createElement('h3');
        const p_Inf = document.createElement('p');
        const p_price = document.createElement('p');
        const tag_button = document.createElement('button');

        /* Criar classe para as tags */
        divCard.classList.add("card_product");
        divImg.classList.add("box_img");
        divInf.classList.add("product_information");
        divTag.classList.add("tags");
        p_price.classList.add("price");

        /* Inserir textos nas tags */
        for (let y = 0; y < obj[i].categoria.length; y++) {
            if (obj[i].categoria.length > 1) {
                const span_Tag = document.createElement('span');
                span_Tag.innerText = obj[i].categoria[y];
                divTag.appendChild(span_Tag);
            }
            else {
                const span_Tag = document.createElement('span');
                span_Tag.innerText = obj[i].categoria;
                divTag.appendChild(span_Tag);
            }
        };
        tag_img.src = obj[i].img;
        tag_h3.innerText = obj[i].nome;
        p_Inf.innerText = obj[i].descricao;
        p_price.innerText = `R$ ${Number(obj[i].valor).toFixed(2)}`;
        tag_button.innerText = "Adicionar ao carrinho";

        /* Inserir tags como filhas */
        containerArticle.appendChild(divCard);
        divCard.append(divImg, divInf);
        divImg.appendChild(tag_img);
        divInf.append(divTag, tag_h3, p_Inf, p_price, tag_button);
    };
};
createCards(produtos);

/* Adicionando o produto ao carrinho através do botão */
function addShoppingCart() {

}

/* Criar menu para substituir a lista das categorias (apartir de uma largura mín) */
function menu() {
    
}
menu();

/* Deverá ser possível adicionar e remover produtos do carrinho */

/* Fazer a contagem total dos itens e apresentar o valor total da compra.*/

/* Demonstrar os elementos na vitrine conforme o tipo clicado no header */

/* Demonstrar os produtos na vitrine conforme o que for escrito na barra de pesquisa */

