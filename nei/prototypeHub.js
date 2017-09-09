// 运动原型
function animation(ele,oJson,fn){
    this.doMove(ele,oJson,fn);
}
animation.prototype={
    doMove:function(ele,oJson,fn){
        var oThis=this;
        var flag=false;
        clearInterval(ele.timer2);
        ele.timer2=setInterval(function(){
            for(var attr in oJson){
                if(attr==='opacity'){
                    oThis.current2=parseFloat(oThis.getStyle(ele,attr))*100;
                    oThis.target2=oJson[attr]*100;
                    oThis.step2=(oThis.target2-oThis.current2)/8;
                    oThis.step2= oThis.step2 >0? Math.ceil(oThis.step2) : Math.floor(oThis.step2);
                    ele.style[attr]=(oThis.current2+oThis.step2)/100;
                    ele.style[attr].filter="alpha(opacity="+oThis.current2+oThis.step2+")";
                }else{
                    oThis.current=parseFloat(oThis.getStyle(ele,attr));
                    oThis.current=Math.round(oThis.current);
                    oThis.target=oJson[attr];
                    oThis.step=(oThis.target-oThis.current)/8;
                    oThis.step= oThis.step >0? Math.ceil(oThis.step) : Math.floor(oThis.step);
                    ele.style[attr]=oThis.current+oThis.step+'px';
                }
                if(attr==='opacity'){
                    if(oThis.target===oThis.current && oThis.target2===oThis.current2){
                        flag=true;
                    }else{
                        flag=false;
                    }
                }else{
                    if(oThis.target!=oThis.current){
                        flag=false;
                    }else{
                        flag=true;
                    }
                }
            }
            if(flag){
                clearInterval(ele.timer2);
                if(fn){
                    fn();
                }
            }
        },30);
    },
    getStyle:function(ele,attr){
        if(getComputedStyle){
            return getComputedStyle(ele,'')[attr];
        }else{
            return ele.currentStyle[attr];
        }
    }
}

// 轮播原型
function fnCarousel(id){
    this.initialize(id);
}
fnCarousel.prototype={
    initialize:function(id){
        var oThisC=this;
        this.oBox=$(id);
        this.oUl=$$('ul',this.oBox)[0];
        this.oLi=$$('li',this.oUl);
        this.oLilast=document.createElement('li');

        this.oUl.style.width=this.oLi[0].offsetWidth*this.oLi.length+'px';
        this.oWidth=this.oLi[0].offsetWidth;
        this.timer=null;
        i=0;
        this.timer=setInterval(function(){
            i++;
            oThisC.doMove(oThisC.oUl,{'left':oThisC.oWidth*-i});
        },1500);
    },
    doMove:function(ele,oJson,fn){
        var oThis=this;
        var flag=false;
        clearInterval(ele.timer2);
        ele.timer2=setInterval(function(){
            for(var attr in oJson){
                if(attr==='opacity'){
                    oThis.current2=parseFloat(oThis.getStyle(ele,attr))*100;
                    oThis.target2=oJson[attr]*100;
                    oThis.step2=(oThis.target2-oThis.current2)/8;
                    oThis.step2= oThis.step2 >0? Math.ceil(oThis.step2) : Math.floor(oThis.step2);
                    ele.style[attr]=(oThis.current2+oThis.step2)/100;
                    ele.style[attr].filter="alpha(opacity="+oThis.current2+oThis.step2+")";
                }else{
                    oThis.current=parseFloat(oThis.getStyle(ele,attr));
                    oThis.current=Math.round(oThis.current);
                    oThis.target=oJson[attr];
                    oThis.step=(oThis.target-oThis.current)/8;
                    oThis.step= oThis.step >0? Math.ceil(oThis.step) : Math.floor(oThis.step);
                    ele.style[attr]=oThis.current+oThis.step+'px';
                }
                if(attr==='opacity'){
                    if(oThis.target===oThis.current && oThis.target2===oThis.current2){
                        flag=true;
                    }else{
                        flag=false;
                    }
                }else{
                    if(oThis.target!=oThis.current){
                        flag=false;
                    }else{
                        flag=true;
                    }
                }
            }
            if(flag){
                clearInterval(ele.timer2);
                if(fn){
                    fn();
                }
            }
        },30);
    },
    getStyle:function(ele,attr){
        if(getComputedStyle){
            return getComputedStyle(ele,'')[attr];
        }else{
            return ele.currentStyle[attr];
        }
    }
}
