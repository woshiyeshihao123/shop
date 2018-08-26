
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
        this.jumpPages(1);
    };
    setPagesNum(pages: number) {
        this.config.pagesNum = pages;
        this.jumpPages(1);//渲染到第一页
    }
    setRecordNum(recordNum: number) {
        this.config.recordNum = recordNum;
        this.jumpPages(1);//渲染到第一页
    }
    setCurrentPage(currentPage: number) {
        this.config.currentPage = currentPage;
        this.jumpPages(this.config.currentPage);//用跳转代替渲染，偷懒写法
    }
    jumpPages(index) {
        if (index < 0 || index > this.config.pagesNum) {

        } else {
            if (index) {
                this.config.currentPage = index;
            }
            this.container.children[1].innerHTML = "第" + this.config.currentPage + "页" + "/" + "共" + this.config.pagesNum + "页";
            this.container.children[0].innerHTML = "共" + this.config.recordNum + "条记录";
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
