import React, {useState} from "react";

export const Form = () =>  {
  

  const [login, setLogin] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogin("Succets")
    
  };

  return(
      <form onSubmit={handleSubmit}>
        <h1>Notes</h1>
        <input
          name="firstName"
          placeholder="First name"
          //value={this.state.firstName}
          //onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          //value={this.state.lastName}
          //onChange={e => this.change(e)}
        />
        <br />
        <input
          name="username"
          placeholder="Username"
          //value={this.state.username}
          //onChange={e => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          //value={this.state.email}
          //onChange={e => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          //value={this.state.password}
          //onChange={e => this.change(e)}
        />
        <br />
        <button type="submit">Submit</button>
        {login?<>succet</>:<>Not login</>}
      </form>
    );
  
}

export default Form