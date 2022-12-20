let myLeads =[]
const inputEl = document.getElementById('input-el')
const ulEl = document.getElementById("ul-el")


const tabBtn = document.getElementById("tab-btn")

tabBtn.addEventListener("click",function(){

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    myLeads.push(tabs[0].url)   
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

    })

    
})


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
//arguments are created on the outside of the function parameters are created inside the function 

if (leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

function render(Leads){
    let listItems = ""
    for(i=0;i<Leads.length;i++){
        listItems += `
        <li>
            <a target='_blank' href='${Leads[i]}'>
                ${Leads[i]}
            </a>
        </li>
    `
        // console.log(listItems)
        // const li = document.createElement('li')
        // li.textContent= myLeads[i]
        // ulEl.append(li)
    }
    
    ulEl.innerHTML = listItems
    }


const saveBtn = document.getElementById("input-btn");
saveBtn.addEventListener('click',function(){
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
})

// null -> how you as a developer signalize emptiness 
// undefined -> how javascript signalizes emptiness 

console.log(leadsFromLocalStorage)


const deleteEl = document.getElementById("delete-btn")
deleteEl.addEventListener("dblclick",function(){
   localStorage.clear()
   myLeads = []
   render(myLeads)
    
   
})
console.log(localStorage)
