const bodyBtn = document.querySelectorAll(".body-btn");

for (let i = 0; i < bodyBtn.length; i++) {
    const item = bodyBtn[i];
    item.addEventListener("click", function() {
        this.classList.toggle("active")
        const pleasehelpme = this.nextElementSibling;
        const plus = this.querySelector(".plus")
        const minus = this.querySelector(".minus")
        const colorch = this.querySelector(".para");

        if(pleasehelpme.style.maxHeight){
            pleasehelpme.style.maxHeight = null;
            plus.style.display = "block";
            minus.style.display = "none";
            this.querySelector(".body-btn p").style.color = "black"
        }else{
            pleasehelpme.style.maxHeight = pleasehelpme.scrollHeight + "px";
            plus.style.display = "none";
            minus.style.display = "block"
            this.querySelector(".body-btn p").style.color = "hsl(292, 42%, 14%)"
        }
    })
}
