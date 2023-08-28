let priceTotal = 0;
let amount = 0;

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
        p_price.innerText = `R$ ${Number(obj[i].valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        tag_button.innerText = "Adicionar ao carrinho";

        /* Adicionando evento para adicionar produtos no carrinho no momento que clicar no botão */
        tag_button.addEventListener('click', function (event) {
            addShoppingCart(obj[i]);
            priceTotal += obj[i].valor;
            amount++;
            document.querySelector('.addAmount').innerText = `R$ ${priceTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
            document.querySelector('.addTotal').innerText = amount;
        });

        /* Inserir tags como filhas */
        containerArticle.appendChild(divCard);
        divCard.append(divImg, divInf);
        divImg.appendChild(tag_img);
        divInf.append(divTag, tag_h3, p_Inf, p_price, tag_button);
    };
};
createCards(produtos);

/* Função para inserir informação de carrinho vazio */
function carEmpty() {
    const cart = document.querySelector(".cart");

    const div_empty = document.createElement('div');
    div_empty.classList.add('cartEmpty');
    cart.appendChild(div_empty);

    const h1 = document.createElement('h1');
    h1.innerText = "Carrinho vazio";

    const span = document.createElement('span');
    span.innerHTML = "Adicione itens";

    div_empty.append(h1, span);
}
carEmpty()

/* Função para adicionar e remover produtos do carrinho (através do botão) */
function addShoppingCart(card) {
    const cart = document.querySelector(".cart");
    const div_empty = document.querySelector(".cartEmpty");

    /* Se inserir produto no carrinho, retira a mensagem de carrinho vazio */
    if (div_empty) {
        div_empty.remove();
    }

    /* Criando os elementos para criar os cards no carrinho */
    const divProductInCart = document.createElement('div');
    divProductInCart.setAttribute("class", "divProductInCart");
    cart.appendChild(divProductInCart);

    const divImgInCart = document.createElement('div');
    divImgInCart.setAttribute("class", "divImgInCart"); /* Div para receber imagem */
    const divInfInCart = document.createElement('div');
    divInfInCart.setAttribute("class", "divInfInCart"); /* Div para receber as informações escritas */
    divProductInCart.append(divImgInCart, divInfInCart);

    const imgCart = document.createElement('img');
    divImgInCart.append(imgCart);

    const h3Cart = document.createElement('h3');
    const pCart = document.createElement('p');
    const buttonCart = document.createElement('button');
    divInfInCart.append(h3Cart, pCart, buttonCart);

    /* Definindo os valores a serem recebidos pelo argumento da função */
    const img_favorite = card.img; /* O "card" (argumento da função) foi definido lá no loop da função "createCard", no momento em que é criado o elemento button */
    const name_favorite = card.nome;
    const price_favorite = `R$ ${card.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    /* Inserindo os valores recebidos no HTML */
    imgCart.src = img_favorite;
    h3Cart.innerText = name_favorite;
    pCart.innerText = price_favorite;
    buttonCart.innerText = "Remover produto";

    /* Adicionando evento para remover produtos do carrinho no momento que clicar no botão */
    buttonCart.addEventListener('click', function (event) {
        divProductInCart.remove();
        priceTotal -= card.valor;
        amount--;
        document.querySelector('.addAmount').innerText = `R$ ${priceTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        document.querySelector('.addTotal').innerText = amount;

        /* Se o carrinho estiver vazio novamento, retornar a informação de "Carrinho vazio" */
        if (!cart.querySelector(".divProductInCart")) {
            carEmpty();
        }
    });
}



/* Criar menu para substituir a lista das categorias (apartir de uma largura mín) */
function menu() {

}

/* Fazer a contagem total dos itens e apresentar o valor total da compra.*/

/* Demonstrar os elementos na vitrine conforme o tipo clicado no header */

/* Demonstrar os produtos na vitrine conforme o que for escrito na barra de pesquisa */

