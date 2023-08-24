const switchBtn = document.getElementById("switch-btn")

switchBtn.addEventListener("click", function() {
    toggle()
})

function toggle() {
    let body = document.body
    body.classList.toggle("light-mode")
}