var pointer = document.querySelector('.one');
var blocks = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen"];

pointer.style.backgroundColor="green";

var ending = 16;


function handleCheck(){
  var ftt = blocks.filter(el=>  el!=="one");
  for(let i of ftt)
    {
       var ptt = document.querySelector("."+i);
      // console.log(ptt.style.backgroundColor)
      if(ptt.style.backgroundColor==="green")
          return false;
    }
  return  true;
    
    
    
}

function handleBlocks(){
 
 handleReset();
  
  var temp = event.target.classList[1];
  
  
  
  if(temp!=="one"){
    
  var ptt = document.querySelector("."+temp);
    
  
        if(event.target.style.backgroundColor==="green"){
       event.target.style.backgroundColor="red";
          
          blocks.map((b,ind)=>{
            if(b===temp)
              {
                event.target.textContent=ind+1;
              }
          })
          
     }else if( handleCheck()){
           ending = parseInt(ptt.textContent);
          event.target.style.backgroundColor="green";
          ptt.textContent="END";
    
     }
         // ptt.style.backgroundColor="green";
 
      
 
  }
}


blocks.map(el=>{
  var element =  document.querySelector("."+el);
  element.addEventListener("click",handleBlocks)
})


function handleReset(){
  pointer.style.backgroundColor="green";
  var ftt = blocks.filter(el=>  el!=="one")
  ftt.map((f,index)=>{
     var ptt = document.querySelector("."+f);
      ptt.style.backgroundColor="red";
      ptt.textContent=index+2;
  })
    // console.log("Works!!")
}


function startRecursive(ending){
  let samp=[];
function grid(mat,i,j,anys,temp=[]){
    let r = anys/mat.length + 1;
   let c = anys % mat[0].length;
  if(anys%4===0) { 
    r = anys/mat.length;
    c =  mat[0].length;}
  
   
    r=Math.floor(r);

    temp.push(mat[i][j]);
    if(i+1 == r && j+1 == c)  {
        samp.push([...temp]);
    //   console.log(temp);
    }

    else{
        if(i+1 < r){
            grid(mat,i+1,j,anys,temp)
        }
        if(j+1 < c){
            grid(mat,i,j+1,anys,temp)
        }
    }
    temp.pop();
    

}


const mat = new Array(4).fill().map(a=>new Array(4).fill(0));
var num=1;
for(let i in mat) {
    for(let j in mat[i]) {
        mat[i][j]+=num++;
    }
}
grid(mat,0,0,parseInt(ending));

  return samp[0];

}

function handleStart(){
  
  let path = startRecursive(ending);
 path.map(p=>{
    var ptt = document.querySelector("."+blocks[p-1]);
   ptt.style.backgroundColor="pink";
 })
  console.log(ending)
}


window.addEventListener("load",()=>{
  blocks.map((b,index)=>{
    var ptt = document.querySelector("."+b);
    if(b!=="one"){
      ptt.textContent=index+1;
    }
    
    
  })
})
