
class Group{
    id=0
    name='';
    goal;
    collected;
    message="";
    groupAdmin;
    fundraisers=[];
    //campaign has a list of groups

constructor(id,name,message,goal,collected){ 
    this.id=id;
    this.name=name;
    this.message=message;
    this.goal=goal;
    this.collected=collected;} 
    
}
class Doner{
    id;
    name='';
    message="";
    amount;
    //object
    creditCard;
   

constructor(id,name,message,amount){ 
    this.id=id;
    this.name=name;
    this.message=message;
   this.amount=amount;} 
    
}
class Campaign{
    id;
    name;
    description;
    goal;
    collected;
    img;
     //array type group
    groups=[];
    fundraisers=[];
    donations=[];

    constructor(id,name, goal,collected,description,img, groups) {
        this.id=id;
        this.name = name;
        this.goal=goal;
        this.collected=collected;
        this.description=description;
        this.img=img;
        this.groups=groups;

      }

}


const amounts=[10,20,30,50,100,200];


function amount(div2){
    if(div2.style.backgroundColor!="#64a19e;"){
        div2.style.backgroundColor="#64a19e";
    }
    else{
        div2.style.backgroundColor="#ffffff00";
    } 
}
const amountElments=[];
function fillAmount(){

   for (let i=0; i<amounts.length;i++){
 //creating elements
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var p = document.createElement("p");

//adding text  
    p.innerHTML=amounts[i]+"$";

 //setting elemts attributes 
    div1.setAttribute('class',"card sm-primary");
    div2.setAttribute('class',"card-body text-center");
    p.setAttribute('class',"card-text");

//adding campaighn to html = appendChild  
    div2.appendChild(p);
    div1.appendChild(div2);
    document.getElementById("mainDiv").appendChild(div1);

 //click event
 var index=0;
// div1.addEventListener('click', function(i) {
//     if(index==0){
//         var blue="#64a19e";
//         amountElments[i].style.backgroundColor=blue;
//         index=1;
//     }
//     else{
//         amountElments[i].style.backgroundColor="#ffffff00";
//         index=0;
//     } 
// }, false);


   }
}
 fillAmount();




const groups=[];
groups.push(new Group(1,"Heros","We gonna collect the most",2000,1000));
groups.push(new Group(2,"Cats","We gonna collect the most",2000,500));
groups.push(new Group(3,"Heros","We gonna collect the most",2000,1000));
groups.push(new Group(4,"Cats","We gonna collect the most",2000,500));
groups.push(new Group(5,"Heros","We gonna collect the most",2000,1000));
groups.push(new Group(6,"Cats","We gonna collect the most",2000,500));
groups.push(new Group(7,"Heros","We gonna collect the most",2000,1000));
groups.push(new Group(8,"Cats","We gonna collect the most",2000,500));

//after using api this line can be deleted
const campaign=new Campaign(0,'HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg",groups);

 const donations=[];
 donations.push(new Doner(1,"Sara","We are always with you!!",100));
 donations.push(new Doner(1,"Sara","We are always with you!!",100));
 donations.push(new Doner(1,"Sara","We are always with you!!",100));
 donations.push(new Doner(1,"Sara","We are always with you!!",100));
 donations.push(new Doner(1,"Sara","We are always with you!!",100));
 donations.push(new Doner(1,"Sara","We are always with you!!",100));


 function removeAllChildNodes(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}
const container = document.querySelector('#list');





function fillGroups(array){
    removeAllChildNodes(container);
    // if(campaign.id==localStorage.getItem("variable")){
    //     console.log("its a match!! "+localStorage.getItem("variable"))
    // }
    // else{
    //     console.log("its not a match!! "+localStorage.getItem("variable"))
    // }
    // localStorage.removeItem("variable");


    
    array.forEach(group => {

       
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        var img = document.createElement("img");
        var div2 = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var progress = document.createElement("div");
        var progressBar = document.createElement("div");
        var btn = document.createElement("button");
        var goal = document.createElement("p");

        var amount=(group.collected/group.goal)*100+'%';
        p1.innerHTML=group.name;
        p2.innerHTML=group.message;
        progressBar.style.width=amount;
        progressBar.innerHTML=amount;
        btn.innerHTML="DONATE";
        goal.innerHTML="GOAL: "+group.goal;

        li.setAttribute('class',"list-group-item d-flex justify-content-between align-items-center");
        div1.setAttribute('class',"d-flex align-items-center");
        img.setAttribute('class',"rounded-circle");
        div2.setAttribute('class',"ms-3");
        p1.setAttribute('class',"fw-bold mb-1");
        p2.setAttribute('class',"text-muted mb-0");
        progress.setAttribute('class',"progress");
        progressBar.setAttribute('class',"progress-bar");
        btn.setAttribute('class',"btn btn-outline-dark")

        li.appendChild(div1);
        div1.appendChild(img);
        div1.appendChild(div2);
        div2.appendChild(p1);
        div2.appendChild(p2);
        progress.appendChild(progressBar);
        div2.appendChild(progress);
        document.getElementById("list").appendChild(li);
        li.appendChild(btn);
        div2.appendChild(goal);


        btn.addEventListener('click', function() {
            openForm(group.name);
               
            }, false);

    });

}

fillGroups(campaign.groups);

function fillDonations(array){
    
    removeAllChildNodes(container);

    
    array.forEach(doner => {

       
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        // var img = document.createElement("img");
        var div2 = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        // var progress = document.createElement("div");
        // var progressBar = document.createElement("div");
        // var btn = document.createElement("button");
        var amount = document.createElement("p");

        // var amount=(group.collected/group.goal)*100+'%';
        p1.innerHTML=doner.name;
        p2.innerHTML=doner.message;
        // progressBar.style.width=amount;
        // progressBar.innerHTML=amount;
        // btn.innerHTML="DONATE";
           amount.innerHTML="AMOUNT: "+doner.amount;

        li.setAttribute('class',"list-group-item d-flex justify-content-between align-items-center");
        div1.setAttribute('class',"d-flex align-items-center");
        // img.setAttribute('class',"rounded-circle");
        div2.setAttribute('class',"ms-3");
        p1.setAttribute('class',"fw-bold mb-1");
        p2.setAttribute('class',"text-muted mb-0");
        // progress.setAttribute('class',"progress");
        // progressBar.setAttribute('class',"progress-bar");
        // btn.setAttribute('class',"btn btn-outline-dark")

        li.appendChild(div1);
        // div1.appendChild(img);
        div1.appendChild(div2);
        div2.appendChild(p1);
        div2.appendChild(p2);
        // progress.appendChild(progressBar);
        // div2.appendChild(progress);
        document.getElementById("list").appendChild(li);
        // li.appendChild(btn);
        div2.appendChild(amount);


        // btn.addEventListener('click', function() {
        //     openForm(group.name);
               
        //     }, false);

    });

}







//fillDonations(donations);
//fillGroups(getDonationsList());
//fillGroups(getCampaignById());


const donaters=[];
function fillDonaters(){



}
const baseUrl = 'http://localhost:5125/api/Campaigns';
//document.addEventListener('DOMContentLoaded', onDomLoaded);
 function GetDonationsList() {
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(data => {
            const ul = document.getElementById('allDonations');
            ul.innerHTML = ""
            data.forEach(c => {
                donaters.push(new Doner(c.id,c.name,c.message,c.amount) );
                // console.log('name:', c.name, 'Admin:', c.admin);
                // ul.innerHTML += `<li> Course Name: ${c.courseName}, Teacher Name: ${c.teacherName}, Price: ${c.price}</li>`
            });
        })
        .catch(error => console.log(error));
}

//api function 
function GetCampaign(){
//GET campaighn byId from api
//put all info in object below:
// const campaign=new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg");

}
function GetGroups(){ 
//im not sure if u need this if your getting a campaign     
//GET groups action from api
//and add to list 
groups.push();
}
function GetAllDonaters(){ 
//im not sure if u need this if your getting a campaign 
//GETAll donaters action from api
//and add to list
donaters.push();
}
function PostDoner(doner){
//POST new doner in api
//POST creditCard too
}


function openForm(name){
document.getElementById("container").style.display="block";
document.getElementById("group").value=name;
}

function closeForm(){
    document.getElementById("container").style.display="none";
    
}