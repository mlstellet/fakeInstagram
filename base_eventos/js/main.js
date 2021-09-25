window.addEventListener('load', () => {
    
    let btnVerMais = document.querySelector('#more'); 
    let feed = document.querySelector('.content'); 
    let post = document.querySelector('.card'); 

 
    btnVerMais.onclick = () => {

        let novoPost = post.cloneNode(true);

        // Nenhum novo post deve começar curtido. O código abaixo retira a curtida vinda do post que foi clonado.
        // let likesDiv = novoPost.card-body.card-items.likes 
        let likesDiv = novoPost.children[2].firstElementChild.firstElementChild;
   
        likesDiv.firstElementChild.src = "img/icons/heart.svg"; // novoPost.imagem.src = imagem do coração vazio
        likesDiv.lastElementChild.innerHTML = '1 like';         // novoPost.curtidas = 1 like

        feed.insertBefore(novoPost, btnVerMais);                // adiciona novo post
    }

// ------------------------------------------------------------- 

    // 2. e 4.

    toggleHeart = (heart) => {

        if (heart.src.includes("img/icons/heart.svg")) {
            heart.src = "img/red-heart.png";
            heart.nextElementSibling.innerHTML = '2 likes';
        } 
        else {
            heart.src = "img/icons/heart.svg";
            heart.nextElementSibling.innerHTML = '1 like';
        }
    }


// -------------------------------------------------------------  

    // 3. 
    let barraPesquisa = document.querySelector('.busca>form'); 

    barraPesquisa.onmouseover = () => {
       barraPesquisa.style.cssText = "box-shadow: 0px 1px 3px black";
    }

    barraPesquisa.onmouseout = () => {
        barraPesquisa.style.boxShadow = "none";
    }

// -------------------------------------------------------------    

    // 4. 
    btnVerMais.onmouseover = () => {
        btnVerMais.style.cursor = "pointer";
    }


})
