console.log("Funcionando!")

const intervalo = setInterval(() => {
    
    //Atribui a div superior id _3auIg
    const header = document.querySelector("._3auIg")
    
    if (header) {
        clearInterval(intervalo)

        const botao = document.createElement("button")
        var htmlBotao = ">>>"

        //Insere o botao em header
        botao.innerHTML = htmlBotao
        botao.classList.add("adiantarButton")

        //Dispara o evento no botao
        botao.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")

            audios.forEach((audio) => {
                audio.playbackRate = 2.0
            })
        })

        header.appendChild(botao)
    }

}, 1000)