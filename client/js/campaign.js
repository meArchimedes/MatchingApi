



const baseUrl = 'http://localhost:5125/api/Campaigns';
document.addEventListener('DOMContentLoaded', onDomLoaded);
export function GetCampaignList() {
    fetch(`${baseUrl}`)
        .then(response => response.json())
        .then(data => {
            const ul = document.getElementById('allCampaigns');
            ul.innerHTML = ""
            data.forEach(c => {
                console.log('name:', c.name, 'Admin:', c.admin);
                ul.innerHTML += `<li> Course Name: ${c.courseName}, Teacher Name: ${c.teacherName}, Price: ${c.price}</li>`
            });
        })
        .catch(error => console.log(error));
}

export async function addNewCampaign(e) {
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

export async function updateCampaign(e) {
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
export async function deleteCampaign() {
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

export function collectData() {
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


export function collectDataUpdate() {
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
export function onDomLoaded() {
    GetCampaignList();
    document.getElementById('newCampaign').addEventListener('submit', addNewCampaign)
}