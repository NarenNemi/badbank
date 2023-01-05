function userData(){
const {users} = React.useContext(UserContext);
console.log(users)
const userArray = users.map((user) => {
return (<div>
<p> name: {user.name}</p>
<p>email: {user.email}</p>
<p>password: {user.password}</p>
<p>balance: {user.balance}</p>
<hr/>
</div>) 
})
return userArray;
}


function AllData(){
  const ctx = React.useContext(UserContext);
  userData()
  return (
    <Card
      txtcolor="white"
      bgcolor ='info'
      header="User Data"
      body={userData()}
    />
  );  
}











//function AllData(){
 // const ctx = React.useContext(UserContext);
 // return (
  //  <>
  //  <h5>All Data in Store</h5>
   // {JSON.stringify(ctx)}<br/>
   // </>
 // );
//}
