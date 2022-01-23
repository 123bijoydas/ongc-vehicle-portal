  
// const myModal = document.querySelectorAll(".modal")
async function signup(e) {
  e.preventDefault()
  const email = document.querySelector("#signupemail")
  const password = document.querySelector("#signuppassword")

  console.log(email.value,password.value);
  try {
      const result = await firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
      M.toast({ html: 'welcome ${result}', classes: "green" })
      // alert('success')
    // toast("success")
    // M.toast("success")

console.log('hello');
      console.log(result);
  }
  catch (err) {
      console.log(err);
      // M.toast({ html: err.message, classes: "red" })
      // toast({ html: err.message, classes: "red" })
      alert( err.message)
  }
  email.value = ""
  password.value = ""
  
  // M.Modal.getInstance(myModal[0]).close()
}
// async function login(e) {
//     e.preventDefault()
//     const email = document.querySelector("#loginemail")
//     const password = document.querySelector("#loginpassword")
//     console.log(email.value, password.value);
//     try {
//         const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
//         M.toast({ html: 'welcome ${result.user.email}', classes: "green" })
//         console.log(result);
//     }
//     catch (err) {
//         console.log(err);
//         M.toast({ html: err.message, classes: "red" })
//     }
//     email.value = ""
//     email.password = ""
//     M.Modal.getInstance(myModal[1]).close()
// }
// function logout() {
//     firebase.auth().signOut()
//     console.log('signout success')
// }
// firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//         console.log(user)
//     } else {
//         console.log('signout success')
//         M.toast({ html: "signout success", classes: "green" })
//     }
// });

// async function loginwithGoogle(){
//   try{
//     var provider = new firebase.auth.GoogleAuthProvider();
//     const result = await firebase.auth()
//   .signInWithPopup(provider)
//   console.log(result)
//   }catch(err){
//       console.log(err)
//   }

// }
function forgetPass(){
  const email = document.getElementById("signupemail").value
  firebase.auth().sendPasswordResetEmail(email)
try {
alert('reset link sent to email')
console.log('bijoy')
}catch(err) {

  console.log('adcvbnn')
  M.toast({ html: err.message, classes: "red" })
}
}
