import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Radio({ value, label, onChange, current }) {
  return (
    <label className="radio-label">
      <input
        className="radio-input"
        type="radio"
        value={value}
        checked={value === current}
        name="gender"
        onChange={onChange}
        style={{ margin: 10 }}
      />
      {label}
    </label>
  );
}

function Account() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    dateOfBirth: "2003-01-01",
    gender: "men",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <Link to="/">
        <img
          className="home-icon"
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
        />
      </Link>
      <img className="sign-in-icon" src='https://static.vecteezy.com/system/resources/thumbnails/021/079/672/small/user-account-icon-for-your-design-only-free-png.png' />
      <h1 className="sign-in">SIGN IN</h1>
      <form className="form" onSubmit={onSubmit}>
        <input
          value={data.username}
          placeholder="username"
          name="username"
          onChange={onChange}
          style={{ margin: 10, height: 25, width: 405 }}
        />
        <br />
        <input
          type="email"
          value={data.email}
          placeholder="Email"
          name="email"
          onChange={onChange}
          style={{ margin: 10, height: 25, width: 405 }}
        />
        <br />
        <input
          type="password"
          value={data.password}
          placeholder="Password"
          name="password"
          onChange={onChange}
          style={{ margin: 10, height: 25, width: 405 }}
        />
        <br />
        <p>Date of Birth</p>
        <input
          type="date"
          value={data.dateOfBirth}
          name="dateOfBirth"
          onChange={onChange}
          style={{ margin: 10, height: 25, }}
        />
        <br />
        <p>Gender</p>
        <Radio
          value="men"
          label="Men"
          current={data.gender}
          onChange={onChange}
        />
        <Radio
          value="wemen"
          label="Women"
          current={data.gender}
          onChange={onChange}
        />
        <Radio
          value="other"
          label="Other"
          current={data.gender}
          onChange={onChange}
        />
        <br />
        <input className="submit-btn" type="submit" />
      </form>
    </>
  );
}

export default Account;
