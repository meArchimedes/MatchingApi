
//  @param {string} path the path to send the post request to
//  * @param {object} params the parameters to add to the url
//  * @param {string} [method=post] the method to use on the form
//  */

// function post(path, params, method='post') {

//   // The rest of this code assumes you are not using a library.
//   // It can be made less verbose if you use one.
//   const form = document.createElement('form');

//   form.addEventListener('submit',function(e){
//       e.preventDefault()

//       const formData = new FormData(this);

//       fetch('/Campaign/Post',{

//           method: 'post',
//           body: formData
//       }).then(function(response){
//         return response.text();
 
      
//       }).then(function(text){
//           console.log(text);
      
//       }).catch(function(error){
//           console.log(error);
//       }) ;
    
//   });

//maybe this way
//   $.post("api/entities", { "": $(formElement).serialize() }, "json")
//     .done(function (newEntity) { self.contacts.push(newEntity); });


//or this way
//   form.method = method;
//   form.action = path;

//   for (const key in params) {
//     if (params.hasOwnProperty(key)) {
//       const hiddenField = document.createElement('input');
//       hiddenField.type = 'hidden';
//       hiddenField.name = key;
//       hiddenField.value = params[key];

//       form.appendChild(hiddenField);
//     }
//   }

//   document.body.appendChild(form);
//   form.submit();




// function Create(form){

//   newCampaignList(form);

// }