var allQuestions = document.querySelectorAll('.can');
var ans = document.querySelectorAll('.ans');

for (var question of allQuestions) {
    question.addEventListener(
        'click',
        function (event) {
            this.children[2].classList.toggle('showans');
            this.classList.toggle('canAns');

            if (this.children[1].innerHTML == `<i class="fa-solid fa-plus"></i>`) {
                this.children[1].innerHTML = `<i class="fa-solid fa-minus"></i>`;
            }else if (this.children[1].innerHTML == `<i class="fa-solid fa-minus"></i>`){
                this.children[1].innerHTML = `<i class="fa-solid fa-plus"></i>`;
            }

        }
    )
}
