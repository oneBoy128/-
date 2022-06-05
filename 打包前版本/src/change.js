import {getWan,serch} from './func.js';
import {getGD,getPK,serHot} from './func.js';
import './test.css'
require('./func.js');

function changeG2(arr,gdTT){//改变歌单样式的辅助函数
    for(let i = 0;i<arr.length;i++){
        let gdT_x = document.createElement('div');
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.innerText = arr[i].title;
        div.style.backgroundImage = `url(${arr[i].cover})`;
        gdT_x.classList.add('gdT_x');
        gdT_x.append(div);
        gdT_x.append(span);
        gdTT.append(gdT_x);
    }
}

export function changeGd(arr){//改变歌单样式
    let gdT = document.querySelectorAll('.gdT')[0];
    let gdT2 = document.querySelectorAll('.gdT')[1];
    let gdT3 = document.querySelectorAll('.gdT')[2];
    let ofArr = arr.offical;
    let daArr = arr.tatsujin;
    let zqArr = arr.column;
    changeG2(ofArr,gdT);
    changeG2(daArr,gdT2);
    for(let i = 0;i<zqArr.length;i++){
        let gdT_x = document.createElement('div');
        let div = document.createElement('div');
        let span = document.createElement('span');
        span.innerText = zqArr[i].title;
        div.style.backgroundImage = `url(${zqArr[i].background})`;
        gdT_x.classList.add('gdT_x');
        gdT_x.append(div);
        gdT_x.append(span);
        gdT3.append(gdT_x);
    }
}

export function changeYm(){//更改页面
    let btns = document.querySelectorAll('.top_ye');
    let divs = document.querySelectorAll('.content');
    for(let i = 0;i<btns.length;i++){
        btns[i].num = i;
        btns[i].onclick = ()=>{
            change(divs,btns[i].num);
            changeBtn(btns,btns[i].num);
        }
    }
}
function change(objs,index){//更改的辅助函数
    for(let i = 0;i<objs.length;i++){
        objs[i].className = 'content';
    }
    if(index==3){
        objs[0].className = 'content active';
    }else{
        objs[index].className = 'content active';
    }
}
function changeBtn(objs,index){//转化按钮
    for(let i = 0;i<objs.length;i++){
        objs[i].className = 'top_ye';
    }
    if(index==2 || index==3){
        objs[0].className = 'top_ye active';
        hotSerch.className = 'sConter active';
        getConter.className = 'sConter';
        sousuo.value = '';
        cha.style.visibility = 'hidden';
    }else{
        objs[index].className = 'top_ye active';
    }
}

export function changePh(arr){//更改排行榜的函数
    for(let i = 0;i<arr.length;i++){
        let num = getWan(arr[i].views);
        let phGd = document.createElement('div');
        let phLeft = document.createElement('div');
        let phRight = document.createElement('div');
        phLeft.classList.add('phLeft');
        phRight.classList.add('phRight');
        phGd.classList.add('phGd');
        phLeft.innerHTML = 
        `<b class="title">${arr[i].title}</b>
        <span>${(1+'.')+arr[i].top3[0].title}</span>
        <span>${(2+'.')+arr[i].top3[1].title}</span>
        <span>${(3+'.')+arr[i].top3[2].title}</span>`;
        phRight.style.backgroundImage = `url(${arr[i].cover})`;
        phRight.innerHTML = 
        `<div>
            <span class="gx">
                ${'每'+arr[i].update_frequence+'更新'}
            </span>
            <span class="bfs iconfont"><!--播放数-->
                ${'&#xe87c;'+num}
            </span>
        </div>`;
        phGd.append(phLeft);
        phGd.append(phRight);
        ContentP.append(phGd);
    }
}

//添加热门搜索页面
export function changeHot(arr){
    arr.forEach(element => {
        let hotConter = document.createElement('div');
        hotConter.classList.add('hotConter');
        hotConter.innerText = element;
        serchConters.append(hotConter); 
    });
}

//更换搜索的结果
export function changeSerch(arr){
    getConter.innerHTML = '';
    for(let i = 0;i<arr.length;i++){
        let get_x = document.createElement('div');
        let get_name = document.createElement('div');
        let getArt = document.createElement('div');
        get_x.classList.add('get_x');
        get_name.classList.add('get_name');
        getArt.classList.add('getArt');
        get_name.innerHTML = `<div class="get_name"><b>${arr[i].title}</b></div>`;
        arr[i].artist.forEach(element=>{
            getArt.innerText += `${element}  `;
        })
        get_x.append(get_name);
        get_x.append(getArt);
        getConter.append(get_x);
    }
}

//搜出结果！
let sousuo = document.querySelectorAll('.sousuo')[1];
cha.style.visibility = 'hidden';
sousuo.addEventListener('keydown', function(event) {
    if(event.code=='Enter'){
        serch(sousuo.value);
        hotSerch.className = 'sConter';
        getConter.className = 'sConter active';
    }
});

sousuo.oninput = ()=>{
    cha.style.visibility = 'visible';
}
cha.onclick = ()=>{
    hotSerch.className = 'sConter active';
    getConter.className = 'sConter';
    sousuo.value = '';
    cha.style.visibility = 'hidden';
}




let gdAll = {};//装在全部歌单
let pkGd = {};//排行
let hot = [];//热门搜索
changeYm();//切换页面函数
getGD(gdAll);
getPK(pkGd);
serHot(hot);