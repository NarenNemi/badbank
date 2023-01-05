function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )


function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [balance, setBalance]   = React.useState(0);
  const ctx = React.useContext(UserContext);  

  function handle() {
    console.log(name,email,password,balance);
    ctx.users.push({name,email,password,balance});
    setBalance(0)
    setStatus('')
    props.setShow(false);
  }    

function validate() {
const errors = [];
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
if(!name) {
errors.push('name is required!')
setStatus('name is required!')
}
if(!email) {
  errors.push('email is required!')
  setStatus('email is required!')
}
if(!password) {
  errors.push('password is required!') 
  setStatus('password is required!')
}
if(password.length < 8 ){
  errors.push('invalid passord')
  setStatus('invalid password')
}
if(!regex.test(email)) {
  errors.push('invalid email') 
  setStatus('invalid email')
}
if(errors.length !== 0) {
//ui updates for users input are neeeded
console.log(errors)
return false;
}
handle();
}

  return (<>
    Name<br/>
    <input type="name" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="email"
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={validate}>Create Account</button>
  </>);
  }
}