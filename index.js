let myLeads = []
let btn = document.getElementById("btn-id")
let inputEl = document.getElementById("input-id")
const ulel = document.getElementById("ul-el")
let container_el = document.getElementById("container");
let save_tab = document.getElementById("save-btn");
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let delete_btn = document.getElementById("delete-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

save_tab.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})


function display_array(Leads)
{
	for(let i=0;i<Leads.length;i++)
	{
		console.log(Leads[i])
	}
}


function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
         ${leads[i]} 
        </a>
        </li>
        `
    }
    ulel.innerHTML = listItems
    console.log("Hello im here!!")
} 

delete_btn.addEventListener("click",function() {
    console.log("I am listening on dbl click")
    localStorage.clear();
    myLeads = []
    render(myLeads)
})


btn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
    console.log(localStorage.getItem("myLeads"))
})
