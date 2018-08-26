class initPages {
    private container: HTMLElement;
    public config: any = {
        containerId:"dev-pages-p",
        pagesNum:3,
        recordNum: 5,
        currentPage:1,
        previousPageFunc: function () {

        },
        nextPageFunc: function () {

        },
        jumpPagesFunc: function () {

        }
    };
    constructor(
        config:object
    ) {
        this.config = config;
        this.container = document.getElementById(this.config.containerId);
        this.onInit();
        // this.config["render"] = this.render();
    }

    onInit() {
        // 返回首页
        $(this.container.children[2]).click((e) => {
            this.jumpPages(1);
        })
        // 上一页
        $(this.container.children[3]).click(e => {
            this.previousPage();
        })
        // 下一页
        $(this.container.children[4]).click((e) => {
            this.nextPage();
        })
        // 尾页
        $(this.container.children[5]).click((e) => {
            this.jumpPages(this.config.pagesNum);
        })
        // 初始化
        this.setCurrentPage(1);
    };
    setPagesNum(pages: number) {
        this.config.pagesNum = pages;
        this.render();
    }
    setRecordNum(recordNum: number) {
        this.config.recordNum = recordNum;
        this.render();
    }
    setCurrentPage(currentPage: number) {
        this.config.currentPage = currentPage;
        this.render();
    }
    render() {
        this.container.children[1].innerHTML = "第" + this.config.currentPage + "页" + "/" + "共" + this.config.pagesNum + "页";
        this.container.children[0].innerHTML = "共" + this.config.recordNum + "条记录";
    }
    jumpPages(index) {
        if (index < 0 || index > this.config.pagesNum) {

        } else {
            if (index) {
                this.config.currentPage = index;
            }
            this.render();
            if (typeof this.config.jumpPagesFunc == "function") {
                this.config.jumpPagesFunc();
            }
        }

    }
    nextPage() {
        if (this.config.currentPage < this.config.pagesNum) {
            this.config.currentPage++;
            this.jumpPages(this.config.currentPage);
            if (typeof this.config.nextPageFunc =="function") {
                this.config.nextPageFunc();
            }
        }
    }
    previousPage() {
        if (this.config.currentPage > 1) {
            this.config.currentPage--;
            this.jumpPages(this.config.currentPage);
            if (typeof this.config.previousPageFunc =="function") {
                this.config.previousPageFunc();
            }
        }
    }


}