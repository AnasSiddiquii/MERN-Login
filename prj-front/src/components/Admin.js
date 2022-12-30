// import Change from "./Change";
const Admin = () => {
  const auth = localStorage.getItem('user');
  return (
      <div className="container App">
        <div className="row justify-content-center mt-3">
          <div className="col-3 mt-3"><h3>Welcome:{JSON.parse(auth).name}</h3></div>
          <div className="col-3 mt-3 offset-1 text-center"><h3>Designation:Admin</h3></div>
          <div className="col-3 mt-5 offset-1"></div>
        </div>
        <div className="row text-center justify-content-center">
          {/* eslint-disable-next-line */}
          <div className="col-3 mt-5 bor"><a className="link" href="/change">Change Password</a></div>
          <div className="col-3 mt-5 offset-1 bor"><b>View Employees</b></div>
          <div className="col-3 mt-5 offset-1 bor"><b>New Orders</b></div>
        </div>
        <div className="row text-center justify-content-center mt-5">
          <div className="col-3 mt-5 bor"><b>Block a user</b></div>
          <div className="col-3 mt-5 offset-1 bor"><b>Feedback</b></div>
          <div className="col-3 mt-5 offset-1 bor"><b>View Stock</b></div>
        </div>
      </div>
    );
  }
  
  export default Admin;
  