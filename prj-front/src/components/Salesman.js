const Salesman = () => {
  const auth = localStorage.getItem('user');
  return (
    <div className="container App">
    <div className="row justify-content-center mt-3">
      <div className="col-3 mt-3"><h3>Welcome:{JSON.parse(auth).name}</h3></div>
      <div className="col-3 mt-3 offset-1 text-center"><h3>Designation:SalesMan</h3></div>
      {/* <div className="col-3 mt-3 offset-1 text-center"><h3>Designation:{JSON.parse(auth).type}</h3></div> */}
      <div className="col-3 mt-5 offset-1"></div>
    </div>
    <div className="row text-center justify-content-center">
      <div className="col-3 mt-5 bor"><b>Pending Orders</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Your Target</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Today's Order</b></div>
    </div>
    <div className="row text-center justify-content-center mt-5">
      <div className="col-3 mt-5 bor"><b>Returned Orders</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Update Today's Work</b></div>
      <div className="col-3 mt-5 offset-1 bor"><b>Update Profile</b></div>
    </div>
  </div>
  );
}
export default Salesman;
