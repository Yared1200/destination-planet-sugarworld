const click = new Audio(".../sounds/click.wav")
const buttonsAll = document.querySelectorAll("button")
buttonsAll.forEach(button => {
    button.addEventListener("click", () => {
        click.currentTime = 0
        click.play()
    })
})