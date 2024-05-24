import React from "react";
import { useState } from "react";
import "./Account.css";
import { Link } from "react-router-dom";

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
    fname: "",
    lname: "",
    email: "",
    password: "",
    date: "01",
    month: "01",
    year: "2003",
    gender: "men",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setData((oldData) => ({ ...oldData, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
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
      <form className="form">
        <input
          value={data.fname}
          placeholder="First Name"
          name="fname"
          onChange={onChange}
          style={{ margin: 10, height: 25 }}
        />
        <input
          value={data.lname}
          placeholder="Last Name"
          name="lname"
          onChange={onChange}
          style={{ margin: 10, height: 25 }}
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
        <select
          value={data.date}
          name="date"
          onChange={onChange}
          style={{ margin: 10, height: 25, width: 50 }}
        >
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select
          value={data.month}
          name="month"
          onChange={onChange}
          style={{ margin: 10, height: 25, width: 100 }}
        >
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <select
          value={data.year}
          name="year"
          onChange={onChange}
          style={{ margin: 10, height: 25, width: 75 }}
        >
          <option value="1980">1980</option>
          <option value="1981">1981</option>
          <option value="1982">1982</option>
          <option value="1983">1983</option>
          <option value="1984">1984</option>
          <option value="1985">1985</option>
          <option value="1986">1986</option>
          <option value="1987">1987</option>
          <option value="1988">1988</option>
          <option value="1989">1989</option>
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
        </select>
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
        <input className="submit-btn" type="submit" onSubmit={onSubmit} />
      </form>
    </>
  );
}

export default Account;
