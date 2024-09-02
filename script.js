document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const body = accordion.querySelector('.accordion-body');
            body.classList.toggle('active');
        });

        const subHeaders = accordion.querySelectorAll('.accordion-header-sub');
        subHeaders.forEach(subHeader => {
            subHeader.addEventListener('click', (event) => {
                event.stopPropagation();
                const subBody = subHeader.nextElementSibling;
                subBody.classList.toggle('active');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const subHeaders = document.querySelectorAll('.accordion-header-sub');
    subHeaders.forEach(subHeader => {
        subHeader.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});

function copiarTexto1() {
    var texto = "CN entra em contato afirmando que houve falta de produtos em sua caixa e deseja abrir uma reclamação de falta. \n\nPedido: \nProduto e quantidade: \nCN aceitou a incorporação?";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }

  function copiarTexto2() {
    var texto = "CN entra em contato afirmando que houve falta de produtos em sua caixa e enviaram um produto a mais no lugar. Deseja abrir uma reclamação de falta e que o produto a mais seja recolhido. \n\nPedido: \nProduto e quantidade: \nItem a mais e quantidade:\nCN aceitou a incorporação? ";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }

  function copiarTexto3() {
    var texto = "CN entra em contato informando que houve falta e defeito no mesmo pedido. Após abrir a ocorrência de defeito, não está sendo possível abrir solicitação de falta. Abrindo paliativo para resolução.\n\nPedido:\nProduto e quantidade:\nTelefone:\nE-mail:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }

  function copiarTexto4() {
    var texto = "CN realizou o pagamento no cartão de crédito, o produto foi cortado na separação e não foi gerado nenhuma nota de crédito ou reparação. Ao tentar abrir a ocorrência de produto cortado na separação, o sistema não habilita a forma de reparação, sendo necessário abrir paliativo.\n\nPedido:\nProduto e quantidade:\nE-mail:\nTelefone:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }

  function copiarTexto5() {
    var texto = "CN entra em contato informando que vieram produtos com defeito em sua caixa e deseja reparação.\n\nPedido:\nCódigo do produto:\nNome do produto:\nQuantidade:\nLote:\nValidade:\nQual o local do defeito? (Ex: Válvula, Tampa, Pescante..):\nQual o desvio? (Ex: Quebrado, Manchado, Riscado..):\nEstado do produto (Aberto ou Fechado):\nEstado da caixa do pedido:\nVoz da consultora:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }

  function copiarTexto6() {
    var texto = "CN entra em contato informando que a sua cliente fez o pedido através do seu espaço digital, mas o pedido entrou em espaço default. O pedido está dentro do prazo de 30 dias e já passou do prazo de 2 dias úteis para o pagamento da comissão.\n\nPedido:\nNome do espaço da consultora:\nE-mail:\nTelefone:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }


  function copiarTexto7() {
    var texto = "CN entra em contato informando que não recebeu a sua lucratividade como deveria. Ao verificar, a lucratividade de fato está divergente de acordo com seu nível.\n\nPedido:\nAvon ou Natura:\nPontos:\nNível:\nCiclo em que migrou para o nível atual:\nE-mail:\nTelefone:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }


  function copiarTexto8() {
    var texto = "CN entra em contato informando que a pontuação do pedido que realizou não foi contabilizada. Ao verificar, a pontuação realmente não está sendo contada dentro do seu plano de crescimento.\n\nPedido:\nAvon ou Natura:\nPontos:\nNível:\nCiclo em que migrou para o nível atual:\nE-mail:\nTelefone:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }


  function copiarTexto9() {
    var texto = "CN entra em contato informando que teve problemas com o pagamento da sua comissão, e ao verificar, o pedido foi feito no espaço digital dela mas a comissão não foi paga como deveria.\n\nPedido:\nNível:\nE-mail:\nTelefone:";
    navigator.clipboard.writeText(texto)
      .then(() => {
        mostrarMensagem("Texto copiado!", "green", 300);
      })
      .catch(err => {
        console.error('Erro ao copiar texto: ', err);
        mostrarMensagem("Falha ao copiar texto.", "red", 1000);
      });
  }



  
  function mostrarMensagem(texto, cor, duracao) {
    var mensagemElemento = document.createElement('mensagem');
    mensagemElemento.textContent = texto;
    mensagemElemento.style.color = cor;
    mensagemElemento.style.position = "fixed";
    mensagemElemento.style.top = "546px";
    mensagemElemento.style.left = "50%";
    mensagemElemento.style.transform = "translateX(-370%)";
    mensagemElemento.style.backgroundColor = "#4444";
    mensagemElemento.style.padding = "3px";
    mensagemElemento.style.borderRadius = "8px";
    mensagemElemento.style.opacity = "1";
    mensagemElemento.style.transition = "opacity 1s ease-in-out";
    document.body.appendChild(mensagemElemento);
  
    setTimeout(function() {
      mensagemElemento.style.opacity = "0";
      setTimeout(function() {
        document.body.removeChild(mensagemElemento);
      }, 1000);
    }, duracao);
  }
  
  



