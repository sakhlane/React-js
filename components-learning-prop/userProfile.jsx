//   RECEIVING INDIVIDUAL PROPERTY
// function UserProfile({name,age,email}){

//     return (<div>
//         <h1>name: {name}</h1>
//         <h1>age: {age}</h1>
//         <h1>email: {email}</h1>

//     </div>
        
//     )
// }


//  BY RECEIVING ONBJECT AS PROPERTY 
function UserProfile({user}){
 const {name, age, email} = user
    return (
    /* direct using dot 
    <div>
        <h1>name: {user.name}</h1>
        <h1>age: {user.age}</h1>
        <h1>email: {user.email}</h1>

    </div> */
   // using destructuring 
    <div>
        <h1>name: {name}</h1>
        <h1>age: {age}</h1>
        <h1>email: {email}</h1>

    </div> 
        
    )
}

export default UserProfile;