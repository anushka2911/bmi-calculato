console.log("BODY MASS INDEX CALCULATOR");
let height=document.getElementById('height');
var weight=document.getElementById('weight');
let btn=document.getElementById('btn');
let count=0;
function submit(){
     count++;
    if(count==1)
    {
        let heightval=height.value ;
        let weightval=weight.value;
    
        let result=weightval/(heightval*heightval);
        let inp=document.createElement('input');
        inp.className="input";
        inp.id="input";
        inp.value=result.toFixed(2);
        inp.style.backgroundColor="transparent";
        inp.style.fontFamily="Arimo";
        let res=document.getElementById('res');
        res.appendChild(inp);
        if(result<18.5)
        {
            let ans=document.createElement('p');
            ans.className="finalans";
            ans.id="finalans";
            ans.style.fontFamily="Arimo";
            ans.style.color="red";
            ans.style.fontSize="2rem";
            ans.style.margin="1rem";
            ans.style.textAlign="center";
            ans.innerText='UNDER-WEIGHT';
            let appendto=document.getElementById('newpara');
            appendto.appendChild(ans);
            console.log(result);
    
        }
        else if(result>18.5&&result<24.9)
        {
            let ans=document.createElement('p');
            ans.className="finalans";
            ans.id="finalans";
            ans.style.fontFamily="Arimo";
            ans.style.color="green";
            ans.style.fontSize="2rem";
            ans.style.margin="1rem";
            ans.style.textAlign="center";
            ans.innerText='NORMAL';
            let appendto=document.getElementById('newpara');
            appendto.appendChild(ans);
        }
        else if(result>25&&result<29.9)
        {
            let ans=document.createElement('p');
            ans.className="finalans";
            ans.id="finalans";
            ans.style.fontFamily="Arimo";
            ans.style.color="red";
            ans.style.fontSize="2rem";
            ans.style.margin="1rem";
            ans.style.textAlign="center";
            ans.innerText="OVER-WEIGHT";
            let appendto=document.getElementById('newpara');
            appendto.appendChild(ans);
        }
        else if(result>29.9)
        {
        
        
            let ans=document.createElement('p');
            ans.className="finalans";
            ans.id="finalans";
            ans.style.fontFamily="Arimo";
            ans.style.color="red";
            ans.style.fontSize="2rem";
            ans.style.margin="1rem";
            ans.style.textAlign="center";
            ans.innerText="OBESE";
    
            let appendto=document.getElementById('newpara');
            appendto.appendChild(ans);
        
        }
    
    }

}
