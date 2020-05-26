console.log("Funcionando!")

const intervalo = setInterval(() => {
    const header = document.querySelector("._3auIg")

    if (header) {
        clearInterval(intervalo)

        const botao = document.createElement("button")
        var htmlBotao = ">>>"

        botao.innerHTML = htmlBotao
        botao.classList.add("adiantarButton")
        botao.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")

            audios.forEach((audio) => {
                audio.playbackRate = 1.5
            })
        })

        header.appendChild(botao)
    }

}, 1000)