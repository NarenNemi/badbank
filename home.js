function Home(){
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can navigate through the bank using the navigation menu."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
