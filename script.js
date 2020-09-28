var url = "https://api.jsonbin.io/b/5f71f5d665b18913fc5552f2";

var reqx = new XMLHttpRequest();
reqx.open("post", url, true);
reqx.onload = () => {
    const
};



var xcor = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3];
var ycor = [1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4];
var score = [];

function doit() {
    canv = document.getElementById("main");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    var turnon = setInterval(snakeGame, 1000/15);
}

px=py=10;
gs=20
tc=40;
tcx=60;
ax=ay=15;
xv=yv=0;
trail=[];
tail=5;

function snakeGame() {
    px+=xv;
    py+=yv;
            if(px<0) {
                px=tcx-1;
            }
            if(px>tcx-1) {
                px = 0;
            }
            if(py<0) {
                py= tc-1;
            }
            if(py>tc-1) {
                py = 0;
            }

            ctx.fillStyle="black";
            ctx.fillRect(0,0,canv.width, canv.height)

            ctx.fillStyle="#b6b428";
            for(var i = 0;i<trail.length;i++) {
                ctx.fillRect(trail[i].x*gs, trail[i].y*gs, gs-2, gs-2)
                if(px==trail[i].x && py==trail[i].y) {
                    document.getElementById("death").play();
                    console.log(tail);
                    px=py=10;
                    if(tail>Math.max(...score)) {
                        document.getElementById("score").textContent = "High Score: " + tail;
                    }
                    score.push(tail);
                    tail=5;
                    sleep(1500);
                }
                if(xcor.includes(px) && ycor.includes(py)) {
                    document.getElementById("death").play();
                    console.log(tail);
                    px=py=10;
                    if(tail>Math.max(...score)) {
                        document.getElementById("score").textContent = "High Score: " + tail;
                    }
                    score.push(tail);
                    tail=5;
                    sleep(1500);
                }
            }

            ctx.fillStyle="white";
            for(var i = 0;i<xcor.length;i++) {
                ctx.fillRect(xcor[i]*gs, ycor[i]*gs, gs-2, gs-2)
            }

            trail.push({x:px, y:py});
            while(trail.length>tail) {
                trail.shift();
            }

            if(ax==px && ay==py) {
                document.getElementById("eat").play();
                tail++;
                ax = Math.floor(Math.random()*tcx);
                ay = Math.floor(Math.random()*tc);
            }

            ctx.fillStyle="#f7022a";
            ctx.fillRect(ax*gs, ay*gs, gs-8, gs-8);
        }

        function keyPush(evt) {
            switch(evt.keyCode) {
                case 37: 
                        xv=-1;
                        yv=0;
                        break;
                case 38: 
                        xv=0;
                        yv=-1;
                        break;
                case 39: 
                        xv=1;
                        yv=0;
                        break;
                case 40: 
                        xv=0;
                        yv=1;
                        break;
            }
        }

        function sleep(miliseconds) {
            var currentTime = new Date().getTime();
            while(currentTime+miliseconds>=new Date().getTime()) {

            }

        }