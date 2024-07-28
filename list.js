const addForm=document.querySelector(".add");
const list=document.querySelector(".todos");
const search=document.querySelector(".search input");

const generateTemplate = todo =>{

    const html=`
    <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo} </span>
                <i class="fa-solid fa-trash"></i>
            </li>
    
    `;
    list.innerHTML+=html;
}


addForm.addEventListener("submit",e =>{
 e.preventDefault(); 
 const todo=addForm.add.value.trim();
//  console.log(todo);
if(todo.length > 0)
{
    generateTemplate(todo)
}
 

})

list.addEventListener("click", e=>{
    if(e.target.classList.contains("delete"))

        {
            e.target.parentElement.remove();
        }
})
const filterTodos = term =>{
    // console.log(term);
    // console.log(list.children);
    // console.log(Array.from(list.children));


    Array.from(list.children)
        .filter(todo => !todo.textContent.includes(term))
        .forEach(todo => todo.classList.add("filtered"));
   
    

}
search.addEventListener("keyup",()=>{
    const term=search.value.trim();
    
    filterTodos(term);
})


