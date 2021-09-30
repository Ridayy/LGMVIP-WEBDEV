import React, { useState } from "react";

export default function Header() {
  const [users, setUsers] = useState({});
  const [processing, setProcessing] = useState(false);
  const loadUsers = async () => {
    setProcessing(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    setUsers(jsonResponse);
    setProcessing(false);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          LetsGrowMore
        </a>
        <button className="btn btn-info ml-auto mr-3" onClick={loadUsers}>Get Users</button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="container mt-5">
        <h1>Users</h1>
        {processing ? <img src="/loader.gif" /> : null}
        <div className="row">
        {users.data != undefined ? users.data.map((x) => {
          // {console.log(x)}
          return <>
          <div className="col-sm-3 mt-3">
            <div class="card">
              <img class="card-img-top" src={x.avatar}/>
              <div class="card-body">
                <h5 class="card-title">{x.first_name} {x.last_name}</h5>
                <p class="card-text">{x.email}</p>
              </div>
            </div>
          </div>
        </>
        }) : null}
        </div>
      </div>
    </div>
  );
}
