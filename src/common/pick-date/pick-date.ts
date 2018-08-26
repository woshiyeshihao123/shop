class datePicker {
    private containerID: string;
    private container: HTMLElement;
    private weeks: string[] = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    private nowTime: any;   //现在的时间，不一定要显示出来
    private showTime: any;//显示出的时间,不一定是现在的时间,改年月日从这里改

    private leftArrow: HTMLElement;//左箭头
    private rightArrow: HTMLElement;//右箭头

    constructor(containerID: string) {
        this.containerID = containerID;
        this.container = document.getElementById(containerID);
        this.onInit();
    }
    // 初始化  
    onInit() {
        this.nowTime = new Date();
        // 初始化显示的时间
        this.showTime = this.nowTime;
        // 获取到左右箭头的dom
        this.leftArrow = document.querySelector("#" + this.containerID + ">.date-title>div:first-child");
        this.rightArrow = document.querySelector("#" + this.containerID + ">.date-title>div:first-child+div+div");
        //绑定头部的左右箭头，用于更改年份,放在获取到左右箭头后面
        var self = this;
        $(this.leftArrow).on("click", function () {
            self.goPreviousYear();
        });
        $(this.rightArrow).on("click", function () {
            self.goNextYear();
        })
        // 初始化周一周二周三...
        this.createWeeks(this.weeks, "#" + this.containerID + ">.weeks");
        this.renderAll();
        // this.initDisplay();
        this.listenClick();
    }
    // 初始化周一周二周三...标题栏，不变动的
    createWeeks(weeks: string[], selector) {
        var html = "";
        for (var i = 0; i < weeks.length; i++) {
            html += `
                <div>${weeks[i]}</div>
            `;
        }
        document.querySelectorAll(selector)[0].innerHTML = html;
    }
    // 下面是渲染
    // 渲染day
    renderDay(date) {
        var dayHtml = "";
        var startDay = new Date(new Date(date).setDate(1)).getDay();
        if (startDay == 0) {
            startDay = 7;
        }
        var today = date.getDate();
        var day = 1;
        // 判断总共有几行
        var lines = (this.judgeMonthDays(date.getFullYear(), date.getMonth() + 1) - (7 - startDay + 1)) / 7;
        lines = Math.ceil(lines + 1);
        for (var i = 0; i < lines; i++) {
            //i=0是表示第一行
            if (i == 0) {
                var lastMdStart = this.judgeMonthDays(date.getFullYear(), date.getMonth()) - startDay;
                for (var lastMD = 0; lastMD < startDay - 1; lastMD++) {
                    dayHtml += `
                        <div class="dark">${lastMdStart++}</div>
                    `;
                }
                for (var len = startDay; len <= 7; len++) {
                    if (day == today) {
                        console.log(day, today);
                        dayHtml += `
                        <div class="day today">${day++}</div>
                    `;
                    } else {
                        dayHtml += `
                        <div class="day">${day++}</div>
                    `;
                    }
                }
            }
            // 表示中间几行,i<lines-1，表示扣掉首尾两行
            else if (i >= 1 && i < lines - 1) {
                for (var n = 0; n < 7; n++) {
                    if (day == today) {
                        console.log(day, today);
                        dayHtml += `
                        <div class="day today">${day++}</div>
                    `;
                    } else {
                        dayHtml += `
                        <div class="day">${day++}</div>
                    `;
                    }
                }
            }
            //如果是最后一行的情况
            else {
                // console.log("最后一行遍历开始");
                //判断该月份有几天
                var leng = this.judgeMonthDays(date.getFullYear(), date.getMonth() + 1);
                var g = 1;

                for (var n = 0; n < 7; n++) {
                    // 如果day已经大于了该月份的天数，就从1开始，暗下来
                    if (day > leng) {
                        dayHtml += `
                            <div class="dark">${g++}</div>
                        `;
                    } else {
                        if (day == today) {
                            console.log(day, today);
                            dayHtml += `
                            <div class="day today">${day++}</div>
                        `;
                        } else {
                            dayHtml += `
                            <div class="day">${day++}</div>
                        `;
                        }


                    }
                }
            }
        }
        document.querySelector("#" + this.containerID + ">.days").innerHTML = dayHtml;
    }
    // 渲染title
    renderTitle(date) {
        document.querySelector("#" + this.containerID + ">.date-title>div:first-child+div").innerHTML = date.getFullYear() + "年" + (date.getMonth() + 1) + "月";
    }
    //总渲染
    renderAll() {
        this.renderTitle(this.showTime);
        this.renderDay(this.showTime);
    }
    // 判断该年该月份到底有几天
    judgeMonthDays(year, month) {
        switch (month) {
            case 1: return 31;
            case 2:
                if (year % 400 == 1) {
                    // 考虑闰年
                    return 29;
                } else {
                    return 28;
                }
            case 3: return 31;
            case 4: return 30;
            case 5: return 31;
            case 6: return 30;
            case 7: return 31;
            case 8: return 31;
            case 9: return 30;
            case 10: return 31;
            case 11: return 30;
            case 12: return 31;
        }
    }

    // 上一年
    goPreviousYear() {
        this.showTime = new Date(this.showTime.setFullYear(this.showTime.getFullYear() - 1));
        // 重新渲染一遍
        this.renderAll();
    }
    // 下一年
    goNextYear() {
        this.showTime = new Date(this.showTime.setFullYear(this.showTime.getFullYear() + 1));
        // 重新渲染一遍
        this.renderAll();
    }
    // 上一月
    goPreviousMonth() {

    }
    // 下一月
    goNextMonth() {

    }
    show() {
        $(this.container).toggleClass("none");
    }
    close() {
        $(this.container).toggleClass("none");
    }
    getChoosedDate() {
        return this.showTime;
    }
    // 监听天的点击事件，应该在init里面调用,在渲染完成后调用
    listenClick() {
        $("#" + this.containerID).on("click",".day",e=>{
           this.showTime.setDate(e.target.innerHTML);
            this.close();
            this.getChoosedDate();
        });

    }
}