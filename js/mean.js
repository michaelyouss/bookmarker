var siteName = document.getElementById("siteName");
var sitUrl = document.getElementById("sitUrl");
var btn = document.getElementById("btn");



var tab = document.getElementById("tab");

var bookAra;

var t = 0 ;

var regeex =/^[A-Za-z]{2,30}$/

function nameRegex(){
    if(regeex.test(siteName.value)){
        return true
    }else{
        return false;
    }
}
var urlRege =/(www\.)?(https:\/\/)?(http:\/\/)?[a-zA-Z0-9-\/_\.]{2,60}$/
function urlRegex(){
    if(urlRege.test(sitUrl.value)){
        return true
    }else{
        return false;
    }
}

siteName.onkeyup = function(){
if(nameRegex() == true && urlRegex() == true){
    btn.removeAttribute("disabled")
}else{
    btn.disabled ="traue"
}
}


sitUrl.onkeyup = function(){
if(nameRegex() == true && urlRegex() == true){
    btn.removeAttribute("disabled")
}else{
    btn.disabled ="traue"
}
}





if(localStorage.getItem("bookAra") == null){
    bookAra =[];
}else{
    bookAra =JSON.parse(localStorage.getItem("bookAra"));
    display(bookAra)
}




function addSit(){

    if(btn.innerHTML == "update"){
        var bookMark = {
            name:siteName.value,
            url:sitUrl.value
        }
        bookAra.splice(t,1,bookMark)
    }else{
        var bookMark = {
            name:siteName.value,
            url:sitUrl.value
        }
            bookAra.unshift(bookMark);
    }


        localStorage.setItem("bookAra", JSON.stringify(bookAra));
        display(bookAra);
        clear();
}



function display(array){
var cartona ='';
for (let i = 0; i < array.length; i++) {
     cartona +=`
     <tr>
    <td>${i+1}</td>
    <td>${array[i].name}</td>
 
    <td><a class="btn btn-info" href="${array[i].url} ">visit</a></td>
    <td><button onclick="upd(${i})" class="btn bg-warning">Updite</button></td>
    <td><button onclick="dele(${i})" class="btn btn-danger">Delete</button></td>
</tr>
     `;
}
tab.innerHTML = cartona;
}
// ================================= delete

function dele(index){
    bookAra.splice(index, 1);
    localStorage.setItem("bookAra", JSON.stringify(bookAra));
    display(bookAra);
}


function clear() {
    siteName.value = '';
    sitUrl.value = '';
}

function upd(x){
    siteName.value = bookAra[x].name
    sitUrl.value =  bookAra[x].url
    btn.innerHTML ="update";
    t = x;

}


function search(sea){
    // console.log(sea);
    var searBook=[]
    for (let i = 0; i < bookAra.length; i++) {
       if(bookAra[i].name.toLowerCase().includes(sea)){
        searBook.push(bookAra[i])
       }
        
    }
    // console.log(searBook);
    display(searBook)
}







