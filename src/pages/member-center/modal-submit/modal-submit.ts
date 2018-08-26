class modal {
    private modalSuccess: HTMLElement;
    private board: HTMLElement;
    private time: number;

    constructor(modalId: string, boardId: string, time: number) {
        this.modalSuccess = document.getElementById(modalId);
        this.board = document.getElementById(boardId);
        this.time = time;
    }
    go() {
        if (this.time) {
            this.show();
            var timer = setTimeout(function () {
                this.remove();
                clearTimeout(timer);
            }, this.time);
        }else{
            this.show();
        }

    }

    show() {
        this.modalSuccess.style.display = "block";
        this.board.style.display = "block";

    }

    remove() {
        this.modalSuccess.style.display = "none";
        this.board.style.display = "none";
    }

}