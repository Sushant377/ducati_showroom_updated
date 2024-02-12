import "./Testride.css";
import { useState } from "react";

function Testride() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [bike, setBike] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [bikeError, setBikeError] = useState("");

  function onClick(e) {
    e.preventDefault();

    if (!name) {
      setNameError("Sorry mate it's a Name  Error");
    } else {
      {
        setNameError("");
      }
    }
    if (!gender) {
      setGenderError(" Hey select one of the above gender");
    } else {
      setGenderError("");
    }
    if (!email) {
      setEmailError(" Enter valid email");
    } else {
      setEmailError("");
    }
    if (!country) {
      setCountryError(" Please select a country");
    } else {
      setCountryError("");
    }
    if (!bike) {
      setBikeError(" Want a ride? Choose any one");
    } else {
      setBikeError("");
    }
  }

  return (
    <div className="testride-content">
      <div className="testride-title">
        <h1>Wanna ride your dream?</h1>
        <h4>
          <b>Fill the form below:</b>
        </h4>
      </div>
      <div className="form">
        <form>
          <label htmlFor="name">
            Name:
            <input
              type="text"
              placeholder="enter your name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <span className="error">{nameError}</span>
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              placeholder="enter your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            <span className="error">{emailError}</span>
          </label>

          <div className="test-3contents">
            <label htmlFor="gender">
              Gender:
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              {setGenderError}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              Female
            </label>
            <span className="error">{genderError}</span>

            <label htmlFor="country">
              Country:
              <select
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                value={country}
              >
                <option value="">Select...</option>
                <option value="nepal">Nepal</option>
                <option value="aus">Australia</option>
                <option value="china">China</option>
                <option value="others">Others</option>
              </select>
              <span className="error">{countryError}</span>
            </label>
            <label htmlFor="bike">
              Bike to ride?
              <select
                id="bike"
                onChange={(e) => {
                  setBike(e.target.value);
                }}
                value={bike}
              >
                <option value="">select....</option>
                <option value="dirt">Dirt</option>
                <option value="motard">Motard</option>
                <option value="sports">Sports</option>
                <option value="naked">Naked</option>
              </select>
              <span className="error">{bikeError}</span>
            </label>
          </div>
          <button
            onClick={(e) => {
              onClick(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Testride;
