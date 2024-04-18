const addBtn=document.getElementById("add-btn");

const addInput=document.getElementById("add-input");

const list=document.getElementById('list')

//Incase you want to use forEach 
let names=[]
let btnIds=[]
const recall=(buttonId,index)=>{
    // btnIds.forEach((btnIds,index)=>{
                document.getElementById(buttonId).addEventListener('click', function() {
                    console.log('before deletion',names)
                    names.splice(index)
                    list.innerHTML=''
                    names.forEach((name,index)=>{
                        let buttonId = `remove_${index}⁠`
                                                btnIds.push(buttonId)
                   list.innerHTML+=`
                    <div class="flex">
                               <div class="name">
                                   <div >${name}</div>
                               </div>
                               <div>
                                   <button class="remove-btn" id=${buttonId}>Remove</button>
                               </div>
                           </div> `
                           console.log(buttonId,index)
                           recall(buttonId,index)
                       })
                    console.log("after deletion",names)
                });
    // })
}
addBtn.addEventListener("click",function(){
    let name=addInput.value
    list.innerHTML=''
    names.push(name)
    names.forEach((name,index)=>{
         let buttonId = `remove_${index}`;
         btnIds.push(buttonId)
    list.innerHTML+=`
     <div class="flex">
                <div class="name flex">
                    <div >${name}</div>
                
                    <button class="remove-btn" id=${buttonId}>Remove</button>
                </div>
            </div> `
            recall(buttonId,index)
        })
        addInput.value=''
})