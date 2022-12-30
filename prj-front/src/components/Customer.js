const Customer = () => {
  const auth = localStorage.getItem('user');
  return (
    <div className="container App">
    <div className="row justify-content-center mt-3">
      <div className="col-3 mt-3"><h3>Welcome:{JSON.parse(auth).name}</h3></div>
      <div className="col-3 mt-3 offset-1 text-center"><h3>Designation:Customer</h3></div>
      {/* <div className="col-3 mt-3 offset-1 text-center"><h3>Designation:{JSON.parse(auth).type}</h3></div> */}
      <div className="col-3 mt-5 offset-1"></div>
    </div>
    <div className="row text-center justify-content-center">
      <div className="col-3 mt-5 bor"><b>Place Orders</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Track Order</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>View Order</b></div>
    </div>
    <div className="row text-center justify-content-center mt-5">
      <div className="col-3 mt-5 bor"><b>Send Feedback</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Rate Our Services</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Update Profile</b></div>
    </div>
  </div>
  );
}
  
  export default Customer;
  