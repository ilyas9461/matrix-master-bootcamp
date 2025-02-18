const tHeaders=['First Name', 'Last Name', 'Age','City'];

let fname = document.getElementsByName("fname")[0];
let lname =document.getElementsByName("lname")[0];
let age =document.getElementsByName("age")[0];
let city =document.getElementsByName("city")[0];

let addBtn = document.getElementsByTagName('button')[0];
let table=document.querySelector('.table')

let tableData={} // reset object
let tableRows=[] // reset array 
let editIndex=-1
let isEdit=false

const addTableHeaders = (tHeadersArr) => {
    const tHeaders = String(`
    <tr>
        <th>ID</th>  
        <th>#</th>  
        <th>#</th>   
        ${tHeadersArr.map(el => {
            return ('<th>' + el + '</th>')
        }).join('')}
    </tr>`)
    return tHeaders
}

const addTableRows=(rows=[])=>{
    let allRow=''
    rows.forEach((el, index) => {
        // console.log(el,index);      //🗑️   
        allRow+= `<tr id="${index}">
                    <td>${index + 1}</td>
                    <td>🗑️</td> 
                    <td>🖊️</td>
                    <td>${el.fname}</td>
                    <td>${el.lname}</td>
                    <td>${el.age}</td>
                    <td>${el.city}</td>
                </tr>`
    });
    return allRow
}

const addTableToHTML=(rows='')=>{
    // console.log(rows);    
    table.innerHTML=`
        <table  class="my-table">
           ${addTableHeaders(tHeaders)}
           ${rows}
        </table> `    
}

const tableRefresh=()=>{
    const getTableRows=document.querySelectorAll("tr"); 
    getTableRows.forEach((el, index)=>{
        el.addEventListener('click', e=>{
            // console.log(e.target, index);
            if(String(e.target.textContent).includes('🗑️') ){
                tableRows.splice(index-1, 1)
                addTableToHTML(addTableRows(tableRows))
                tableRefresh()  
            } 
            if(String(e.target.textContent).includes('🖊️') ){
                // console.log('Edit', tableRows[index-1]);
                editIndex=index-1
                fname.value=tableRows[editIndex].fname
                lname.value=tableRows[editIndex].lname
                age.value=tableRows[editIndex].age
                city.value=tableRows[editIndex].city
                isEdit=true
                
            }          
        })
    })
}

addTableToHTML('')

addBtn.addEventListener('click', () => { 

    tableData.fname=fname.value;
    tableData.lname=lname.value;
    tableData.age=age.value;
    tableData.city=city.value;

    if(fname.value.length< 3 || lname.value.length<3 || city.value.length <3 || isNaN(age.value)) {
        alert("At least 3 characters or age=number are necessary!");
        return;
    }

    if(isEdit){
        tableRows[editIndex]=tableData
        isEdit=false
        editIndex=-1
    }else  tableRows.push(tableData)

    fname.value=lname.value=age.value=city.value=''

    addTableToHTML(addTableRows(tableRows))  
    tableData={} // reset object    
    tableRefresh() // refresh table
    
})





   



