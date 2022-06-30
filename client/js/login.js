


//checks if fundraiser exsits and password equal to password
function check(){
let email= document.getElementById('email').value;
const fundraiser=getFundraiserByEmail(email);

//if email is currect and password get form db all donatins in the group
if(fundraiser!=null&&fundraiser.password==password){
    //filll donation raised by this fundraisr= head of group 
    const donations=getAllDonationsByFundraiser(fundraiser.id);
    FillAllDonation(donations);
}
//if no such fundraiser 
else if(fundraiser===null){
    alert("Email incorrect try again");
}
//if password incorrect
else{
    alert("Passsword incorrect try agian");

};


}

//check if any fundraisers by email if yes check if password is currect 
function getFundraiserByEmail(email){
    console.log("start to search by Password")
    email = email;
    fetch(`${baseUrl}/${email}`)
        .then(response => response.json())
        .then(data => {
            return data;
            // const ul = document.getElementById('oneCourse');
            // ul.innerHTML = ""
            // ul.innerHTML += `Course Name: ${data.courseName}, Teacher Name: ${data.teacherName}, Price: ${data.price}`
        })
        .catch(error => console.log(error));
    console.log("finish");

}

export async function deleteDonation(donationId) {
    console.log("delete the donation")
    const cn = donationId;
   // document.getElementById("deleteCampaign").value = '';
    await fetch(`${baseUrl}/${cn}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        // .then(response => response.json())
        .catch(error => console.log(error));
    console.log("finish")
    GetDonationsList();
}

//fills all donations that db returned 
function FillAllDonation(donations){
  
document.getElementById("loginForm").style.display="none";
   donation.forEach(donation => {

        
        var li = document.createElement("li");
        var div1 = document.createElement("div");
        var img = document.createElement("img");
        var div2 = document.createElement("div");
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        // var progress = document.createElement("div");
        // var progressBar = document.createElement("div");
        var btn = document.createElement("button");
        var amount = document.createElement("p");

        var amount=(group.collected/group.goal)*100+'%';
        p1.innerHTML=donation.name;
        p2.innerHTML=donation.message;
        // progressBar.style.width=amount;
        // progressBar.innerHTML=amount;
        btn.innerHTML="DELETE";
        amount.innerHTML="Amount: "+donation.amount;

        li.setAttribute('class',"list-group-item d-flex justify-content-between align-items-center");
        div1.setAttribute('class',"d-flex align-items-center");
        img.setAttribute('class',"rounded-circle");
        div2.setAttribute('class',"ms-3");
        p1.setAttribute('class',"fw-bold mb-1");
        p2.setAttribute('class',"text-muted mb-0");
        // progress.setAttribute('class',"progress");
        // progressBar.setAttribute('class',"progress-bar");
        btn.setAttribute('class',"btn btn-outline-dark")

        li.appendChild(div1);
        div1.appendChild(img);
        div1.appendChild(div2);
        div2.appendChild(p1);
        div2.appendChild(p2);
        // progress.appendChild(progressBar);
        // div2.appendChild(progress);
        document.getElementById("list").appendChild(li);
        li.appendChild(btn);
        div2.appendChild(amount);


        btn.addEventListener('click', function() {
            deleteDonation(donation.id);
               
            }, false);

    });

}

