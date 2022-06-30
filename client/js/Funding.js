class Campaign{
    name;
    admin;
    goal;
    collected;
    link;
    description;
    img;
    password;
    constructor(name, goal,collected,description,img,password) {
        this.name = name;
        this.goal=goal;
        this.collected=collected;
        this.description=description;
        this.img=img;
        this.password=password;

      }

}

const  array=[];
array.push(new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg"));
array.push(new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg"));
array.push(new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg"));
array.push(new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg"));
array.push(new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg"));
array.push(new Campaign('HELP THE DOGS', 120000,50000,'family of dogs lost houde and all belonging pleas donate.',"./assets/img/demo-image-01.jpg"));
 function fillCampaigns(campaigns){
    for(var i=0; i<campaigns.length; i++){

      //aray=getCampaignList();
      //creating elements
        var elem = document.createElement("div");
        var link = document.createElement("a");
        var div = document.createElement("div");
        var im = document.createElement("img");
        var center = document.createElement("div");
        var h1 = document.createElement("h1");
        var p = document.createElement("p");

      //adding the img and text
        im.src=campaigns[i].img;
        h1.innerHTML=campaigns[i].name;
        p.innerHTML=campaigns[i].description;

     //setting elemts attributes 
        elem.setAttribute('class', "col-lg-4 col-sm-6");
        div.setAttribute('class',"description");
        link.setAttribute('class',"portfolio-box");
        im.setAttribute('class', "img-fluid");
        im.setAttribute('id',"img");
        center.setAttribute('class',"centered");
      
      //adding campaighn to html = appendChild  
        elem.appendChild(link);
        link.appendChild(div);
        div.appendChild(im);
        div.appendChild(center);
        center.appendChild(h1);
        center.appendChild(p);
        document.getElementById("portfolio-container").appendChild(elem);


        elem.addEventListener('click', function() {
          localStorage.setItem("variable",i);
          window.open("donate.html",i);
          
             
          }, false);

     }
    
}


fillCampaigns(array);








const baseUrl = 'http://localhost:5125/api/Campaigns';
document.addEventListener('DOMContentLoaded', onDomLoaded);
 async function GetCampaignList() {
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(data => {
            const ul = document.getElementById('allCampaigns');
            ul.innerHTML = ""
            data.forEach(c => {
                // console.log('name:', c.name, 'Admin:', c.admin);
                // ul.innerHTML += `<li> Course Name: ${c.courseName}, Teacher Name: ${c.teacherName}, Price: ${c.price}</li>`
                array.push(new Campaign(c.name, c.goal,c.collected,c.description,c.img));
            });
        })
        .catch(error => console.log(error));
        fillCampaigns(array);
}

 async function addNewCampaign(e) {
    console.log("add a new campaign")
    e.preventDefault();
    const campaign = collectData();
    await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campaign)
    })
        .then(response => response.json())
        .then(console.log(course))
        .catch(error => console.log(error));
    console.log("finish")
    GetCampaignList()
}

 async function updateCampaign(e) {
    console.log("updete campaign")
    const course = collectDataUpdate();
    await fetch(`${baseUrl}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(campaign)
    })
        .then(response => response.json())
        .then(console.log(course))
        .catch(error => console.log(error));
    console.log("finish")
    GetCoursesList()
}
 async function deleteCampaign() {
    console.log("delete the campaign")
    const cn = document.getElementById("deleteCampaign").value
    document.getElementById("deleteCampaign").value = '';
    await fetch(`${baseUrl}/${cn}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        // .then(response => response.json())
        .catch(error => console.log(error));
    console.log("finish")
    GetCampaignList();
}

 function collectData() {
    let name = document.getElementById('CampaignName').value;
    let courseTeacherIn = document.getElementById('CourseTeacher').value;
    let coursePriceIn = document.getElementById('CoursePrice').value;
    document.getElementById('CourseName').value = null
    document.getElementById('CourseTeacher').value = null
    document.getElementById('CoursePrice').value = 0
    let newCampaign = {
        admin: adminNameIn,
        name: campaignNameIn,
        goal: goalIn,
        collected: collectedIn,
        password: passwordIn,
        description: descriptionIn,
        img: imgIn

    }
    return newCampaign;
}


function collectDataUpdate() {
    let campaignNameIn = document.getElementById('CampaignNameUpdate').value;
    let adminNameIn= document.getElementById('CampaignAdminUpdate').value;
    let imgIn = document.getElementById('CampaignImgUpdate').value;
    let collectedIn = document.getElementById('CampaignCollectedUpdate').value;
    let goalIn = document.getElementById('CampaignGoalUpdate').value;
    let descriptionIn = document.getElementById('CampaignDescriptionUpdate').value;
    let passwordIn = document.getElementById('CampaignPasswordUpdate').value;


     document.getElementById('CampaignNameUpdate').value='';
     document.getElementById('CampaignAdminUpdate').value='';
     document.getElementById('CampaignImgUpdate').value='';
     document.getElementById('CampaignCollectedUpdate').value='';
     document.getElementById('CampaignGoalUpdate').value='';
     document.getElementById('CampaignDescriptionUpdate').value='';
     document.getElementById('CampaignPasswordUpdate').value='';
    let updCampaign = {
        admin: adminNameIn,
        name: campaignNameIn,
        goal: goalIn,
        collected: collectedIn,
        password: passwordIn,
        description: descriptionIn,
        img: imgIn
    }
    return updCampaign;
}
 function onDomLoaded() {
    GetCampaignList();
    document.getElementById('newCampaign').addEventListener('submit', addNewCampaign)
}










































//1. campaigns
// const uri = 'api/Campaign';
// let campaigns = [];


// //get
// function getItems() {
//   fetch(uri)
//     .then(response => response.json())
//     .then(data => _displayItems(data))
//     .catch(error => console.error('Unable to get items.', error));
// }

// //post
// function addItem() {
 

//   const item = {
//     isComplete: false,
//     name: addNameTextbox.value.trim()
//   };

//   fetch(uri, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(item)
//   })
//     .then(response => response.json())
//     .then(() => {
//       getItems();
//       addNameTextbox.value = '';
//     })
//     .catch(error => console.error('Unable to add item.', error));

//     fillCampaigns(campaigns);
// }

// //delete
// function deleteItem(id) {
//   fetch(`${uri}/${id}`, {
//     method: 'DELETE'
//   })
//   .then(() => getItems())
//   .catch(error => console.error('Unable to delete item.', error));
// }


// function displayEditForm(id) {
//   const item = todos.find(item => item.id === id);
  
//   document.getElementById('edit-name').value = item.name;
//   document.getElementById('edit-id').value = item.id;
//   document.getElementById('edit-isComplete').checked = item.isComplete;
//   document.getElementById('editForm').style.display = 'block';
// }

// function updateItem() {
//   const itemId = document.getElementById('edit-id').value;
//   const item = {
//     id: parseInt(itemId, 10),
//     isComplete: document.getElementById('edit-isComplete').checked,
//     name: document.getElementById('edit-name').value.trim()
//   };

//   fetch(`${uri}/${itemId}`, {
//     method: 'PUT',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(item)
//   })
//   .then(() => getItems())
//   .catch(error => console.error('Unable to update item.', error));

//   closeInput();

//   return false;
// }

// function closeInput() {
//   document.getElementById('editForm').style.display = 'none';
// }

// function _displayCount(itemCount) {
//   const name = (itemCount === 1) ? 'to-do' : 'to-dos';

//   document.getElementById('counter').innerText = `${itemCount} ${name}`;
// }

// function _displayItems(data) {
//   const tBody = document.getElementById('todos');
//   tBody.innerHTML = '';

//   _displayCount(data.length);

//   const button = document.createElement('button');

//   data.forEach(item => {
//     let isCompleteCheckbox = document.createElement('input');
//     isCompleteCheckbox.type = 'checkbox';
//     isCompleteCheckbox.disabled = true;
//     isCompleteCheckbox.checked = item.isComplete;

//     let editButton = button.cloneNode(false);
//     editButton.innerText = 'Edit';
//     editButton.setAttribute('onclick', `displayEditForm(${item.id})`);

//     let deleteButton = button.cloneNode(false);
//     deleteButton.innerText = 'Delete';
//     deleteButton.setAttribute('onclick', `deleteItem(${item.id})`);

//     let tr = tBody.insertRow();
    
//     let td1 = tr.insertCell(0);
//     td1.appendChild(isCompleteCheckbox);

//     let td2 = tr.insertCell(1);
//     let textNode = document.createTextNode(item.name);
//     td2.appendChild(textNode);

//     let td3 = tr.insertCell(2);
//     td3.appendChild(editButton);

//     let td4 = tr.insertCell(3);
//     td4.appendChild(deleteButton);
//   });

//   todos = data;
// }
// getAllCampaigns(){
    
// };
// getAllGroupsInCampaign(){

// };
// getAllDoantions(){

// };
