const container = document.querySelector(".container"),
     qrInput = document.querySelector(".form input"),
     generateQR = document.querySelector(".form button"),
     qrImg = document.querySelector(".qrCode img")

generateQR.addEventListener("click", () => {
    qrValue = qrInput.value 
    //console.log(qrValue);

    if(!qrValue) return;

    generateQR.innerText = "Generating QR Code..."

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`
    qrImg.addEventListener("load", () => {
        container.classList.add("active")
        generateQR.innerText = "Generate QR Code"
    })
})

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value){
        container.classList.remove("active")
    }
    })

