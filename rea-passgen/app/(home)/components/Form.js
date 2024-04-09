"use client";
import Label from "./Label";
import CheckBox from "./CheckBox";
import { useEffect, useState } from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import NumberAdjust from "./NumberAdjust";
import Slider from "./Slider";
import styles from "./Form.module.css";
export default function Form() {
  const minPasswordLength = 10;
  const url_base = "http://127.0.0.1:8000/api/passwd/";
  const maxPasswordLength = 50;
  const minNumberOfLetters = 2;
  const [uppercaseSelected, setUppercaseSelected] = useState(true);
  const [lowercaseSelected, setLowercaseSelected] = useState(true);
  const [digitsSelected, setDigitsSelected] = useState(true);
  const [specialCharsSelected, setSpecialCharsSelected] = useState(false);
  const [passwordAlreadyGenerated, setPasswordAlreadyGenerated] =
    useState(false);
  const [passwordLength, setPasswordLength] = useState(10);
  const [numberOfDigits, setNumberOfDigits] = useState(1);
  const [digitsOptionChanged, setDigitsOptionChanged] = useState(false);
  const [specialCharOptionChanged, setSpecialCharOptionChanged] =
    useState(false);
  const [numberOfSpecialChars, setNumberOfSpecialChars] = useState(0);
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (specialCharOptionChanged) {
      if (specialCharsSelected) {
        setNumberOfSpecialChars(1);
      } else if (!specialCharsSelected) {
        setNumberOfSpecialChars(0);
      }
      setSpecialCharOptionChanged(false);
    }
    if (digitsOptionChanged) {
      if (digitsSelected) {
        setNumberOfDigits(1);
      } else if (!digitsSelected) {
        setNumberOfDigits(0);
      }
      setDigitsOptionChanged(false);
    }
  });
  async function toggleOption(e) {
    switch (e.target.id) {
      case "uppercaseOption":
        if (!lowercaseSelected && !digitsSelected && !specialCharsSelected) {
          setUppercaseSelected(!uppercaseSelected);
          setLowercaseSelected(true);
        } else {
          setUppercaseSelected(!uppercaseSelected);
        }
        break;
      case "lowercaseOption":
        if (!uppercaseSelected && !digitsSelected && !specialCharsSelected) {
          setLowercaseSelected(!lowercaseSelected);
          setUppercaseSelected(true);
        } else {
          setLowercaseSelected(!lowercaseSelected);
        }
        break;
      case "digitsOption":
        if (
          !uppercaseSelected &&
          digitsSelected &&
          !specialCharsSelected &&
          !lowercaseSelected
        ) {
          setDigitsSelected(!digitsSelected);
          setLowercaseSelected(true);
        } else {
          setDigitsSelected(!digitsSelected);
        }

        setDigitsOptionChanged(true);
        break;
      case "specialCharOptions":
        if (
          !uppercaseSelected &&
          !digitsSelected &&
          specialCharsSelected &&
          !lowercaseSelected
        ) {
          setSpecialCharsSelected(!specialCharsSelected);
          setLowercaseSelected(true);
        } else {
          setSpecialCharsSelected(!specialCharsSelected);
        }
        setSpecialCharOptionChanged(true);
        //if (specialCharsSelected) setNumberOfSpecialChars(1)
        //setSpecialCharsSelected(!specialCharsSelected);

        console.log(`special char count ${numberOfSpecialChars}`);
        break;
      default:
        break;
    }
    if (passwordAlreadyGenerated) {
      setPasswordAlreadyGenerated(false);
      clearGeneratedPassword();
    }
  }
  async function generatePassword(e) {
    e.preventDefault();

    const response = await fetch(
      `${url_base}?passw_length=${passwordLength}&uppercase=${uppercaseSelected}&lowercase=${lowercaseSelected}&min_digits=${numberOfDigits}&min_spec_chars=${numberOfSpecialChars}&digits=${digitsSelected}&spec_chars=${specialCharsSelected}`
    );
    const data = await response.json();
    setPassword(data.gen_password);
    setPasswordAlreadyGenerated(true);
  }
  function passwordLengthChanged(e) {
    setPasswordLength(e.target.value);
    if (passwordAlreadyGenerated) {
      setPasswordAlreadyGenerated(false);
      clearGeneratedPassword();
    }
  }
  function numberOfDigitsChanged(e) {
    setNumberOfDigits(e.target.value);
    if (passwordAlreadyGenerated) {
      setPasswordAlreadyGenerated(false);
      clearGeneratedPassword();
    }
  }
  function numberOfSpecialCharsChanged(e) {
    setNumberOfSpecialChars(e.target.value);
    if (passwordAlreadyGenerated) {
      setPasswordAlreadyGenerated(false);
      clearGeneratedPassword();
    }
  }

  async function handleCopyBtnClick(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(password);
      alert("Text copied to clipboard");
    } catch (err) {
      alert("Error copying to clipboard", err);
    }
  }

  function clearGeneratedPassword() {
    setPassword("");
    setPasswordAlreadyGenerated(false);
  }

  return (
    <form className={styles.mainForm}>
      <div>
        <CheckBox
          checked={uppercaseSelected}
          id="uppercaseOption"
          onChange={toggleOption}
        />
        <Label text="A-Z" htmlFor="uppercaseOption" />
      </div>
      <div>
        <CheckBox
          checked={lowercaseSelected}
          id="lowercaseOption"
          onChange={toggleOption}
        />
        <Label text="a-z" htmlFor="lowercaseOption" />
      </div>
      <div>
        <CheckBox
          checked={digitsSelected}
          id="digitsOption"
          onChange={toggleOption}
        />
        <Label text="0-9" htmlFor="digitsOption" />
      </div>
      <div>
        <CheckBox
          checked={specialCharsSelected}
          id="specialCharOptions"
          onChange={toggleOption}
        />
        <Label text="!@#$%^&*" htmlFor="specialCharOptions" />
      </div>
      <Button
        title={
          passwordAlreadyGenerated ? "Regenerate Password" : "Generate Password"
        }
        onClick={generatePassword}
      />
      <Button
        title="Copy to Clipboard"
        onClick={handleCopyBtnClick}
        disabled={passwordAlreadyGenerated ? "" : "disabled"}
      />
      <Button
        title="Clear Password"
        onClick={clearGeneratedPassword}
        disabled={passwordAlreadyGenerated ? "" : "disabled"}
      />
      <TextBox
        id="generatedPassword"
        defaultValue={password}
        readOnly="readonly"
      />
      <NumberAdjust
        min={minPasswordLength}
        max={maxPasswordLength}
        value={passwordLength}
        id="password-length-number"
        onChange={passwordLengthChanged}
      />
      <Slider
        min={minPasswordLength}
        max={maxPasswordLength}
        value={passwordLength}
        id="password-length-slider"
        onChange={passwordLengthChanged}
      />
      <NumberAdjust
        min="1"
        max={passwordLength - minNumberOfLetters - numberOfSpecialChars}
        disabled={digitsSelected ? "" : "disabled"}
        value={numberOfDigits}
        id="digits-count"
        onChange={numberOfDigitsChanged}
      />
      <NumberAdjust
        min="0"
        max={passwordLength - minNumberOfLetters - numberOfDigits}
        disabled={specialCharsSelected ? "" : "disabled"}
        value={numberOfSpecialChars}
        id="spec-char-count"
        onChange={numberOfSpecialCharsChanged}
      />
      <br />
    </form>
  );
}
