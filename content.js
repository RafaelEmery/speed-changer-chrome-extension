console.log("Funcionando!")

const interval = setInterval(() => {
    const header = document.querySelector("._3auIg")

    if (header) {
        console.log(header)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "2x"
        button.classList.add("twoTimesButton")

        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio")
            console.log(audios)

            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 1.5
            })
        })

        header.appendChild(button)
    }

}, 1000)