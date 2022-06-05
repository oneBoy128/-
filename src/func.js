let url = 'http://124.221.249.219:8000/api';
import {changeGd,changePh,changeHot, changeSerch} from './change.js';


//获取歌单
export function getGD(obj){
    fetch(url+'/recommendations',{
        method:'get'
    }).then(response=>response.json())
    .then(reslut=>{
        for(let value in reslut){
            obj[value] = reslut[value];
        }
        changeGd(obj);
    })
}

//获取排行榜
export function getPK(obj){
    fetch(url+'/ranking',{
        method:'get'
    }).then(response=>response.json())
    .then(reslut=>{
        for(let value in reslut){
            obj[value] = reslut[value];
        }
        changePh(reslut);
    })
}
//获取搜索
export function serch(str){
    fetch(url+`/search?keyword=${str}`,{
        method:'get',
    }).then(response=>response.json())
    .then(reslut=>{
        changeSerch(reslut);
    })
}

//获取热门搜索
export function serHot(arr){
    fetch(url+'/hot',{
        method:'get'
    }).then(response=>response.json())
    .then(reslut=>{
        for(let value of reslut){
            arr.push(value);
        }
        changeHot(arr);
    })
}

//数据转化
export function getWan(num){
    num = Number(num);
	if (num == 0) {
		return num + '';
	} else
	if (num > 1 && num < 10000) {
		return num + '';
	} else {
		return (num / 10000).toFixed(2) + '万';
	}
}


