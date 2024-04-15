<script>
            // Seleciona todos os botões "Assistir"
            const botoesAssistir = document.querySelectorAll('.btn-primary');

            // Itera sobre cada botão e adiciona um evento de clique
            botoesAssistir.forEach(botao => {
                botao.addEventListener('click', () => {
                    // Obtém o título da aula associada ao botão clicado
                    const tituloAula = botao.parentElement.querySelector('.card-title').innerText;
                    console.log(`Você clicou em "Assistir" na aula de ${tituloAula}`);
                    // Aqui você pode adicionar mais ações, como redirecionar para uma página de vídeo, etc.
                });
            });
        </script>
