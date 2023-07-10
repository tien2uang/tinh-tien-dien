import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const first = useRef();
  const second = useRef();
  const [formWarning, setFormWarning] = useState("");
  const MUC_1 = 1728, MUC_2 = 1786, MUC_3 = 2074, MUC_4 = 2612, MUC_5 = 2919, MUC_6 = 3015;
  const [bill, setBill] = useState("0 đ");
  const [fomula, setFomula] = useState("");

  const handleFocus = () => {

  }

  const calculate = (used) => {
    let result = 0;
    let calculatedFomula = "";
    if (used <= 50) {
      result = MUC_1 * (used - 0);
      calculatedFomula = `${MUC_1}đ * ${used - 0}`;
    } else if (used >= 51 && used <= 100) {
      result = MUC_1 * 50 + MUC_2 * (used - 50);
      calculatedFomula = `${MUC_1}đ * ${50} + ${MUC_2}đ * ${used - 50}`;
    } else if (used >= 101 && used <= 200) {
      result = MUC_1 * 50 + MUC_2 * 50 + MUC_3 * (used - 100);
      calculatedFomula = `${MUC_1}đ * ${50} + ${MUC_2}đ * 100 + ${MUC_3}đ * ${used - 100}`;
    } else if (used >= 201 && used <= 300) {
      result = MUC_1 * 50 + MUC_2 * 50 + MUC_3 * (100) + MUC_4 * (used - 200);
      calculatedFomula = `${MUC_1}đ * ${50} + ${MUC_2}đ * 100 + ${MUC_3}đ * 100 + ${MUC_4}đ * ${used - 200}`;
    } else if (used >= 301 && used <= 400) {
      result = MUC_1 * 50 + MUC_2 * 50 + MUC_3 * (100) + MUC_4 * (100) + MUC_5 * (used - 300);
      calculatedFomula = `${MUC_1}đ * ${50} + ${MUC_2}đ * 100 + ${MUC_3}đ * 100 + ${MUC_4}đ * 100 + ${MUC_5}đ * ${used - 300}`;
    } else if (used >= 401) {
      result = MUC_1 * 50 + MUC_2 * 50 + MUC_3 * (100) + MUC_4 * (100) + MUC_5 * (100) + MUC_6 * (used - 400);
      calculatedFomula = `${MUC_1}đ * ${50} + ${MUC_2}đ * 100 + ${MUC_3}đ * 100 + ${MUC_4}đ * 100 + ${MUC_5}đ * 100 + ${MUC_6}đ * ${used - 400}`;
    }

    setFomula(calculatedFomula);


    return result;
  }

  const handleWarningFocus = () => {
    if (formWarning != "") {
      setFormWarning("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstValue = first.current.value;
    const secondValue = second.current.value;
    console.log(parseInt(firstValue) - parseInt(secondValue))
    console.log(typeof firstValue);
    if (firstValue == "" || secondValue == "") {
      setFormWarning("Nhập thiếu rồi bạn")
    } else if (parseInt(firstValue) >= parseInt(secondValue)) {


      setFormWarning("Nhập sai sai gì rồi bạn")
    }
    else {
      const result = calculate(-parseInt(firstValue) + parseInt(secondValue));
      console.log(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(result));
      setBill(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(result));
    }

  }

  return (
    <div className="signIn" onClick={handleWarningFocus} >
      <div className="signInWrapper">

        <div className="signInContainer">
          <div className="signInContent">

            <div className="signInHeader">
              <h4 className="signInTitle">Calculator</h4>

            </div>
            <div className="signInForm">
              <div className="signInFormContainer">

                <form className="signInBox">
                  <div>
                    <label>Số điện đầu</label>
                    <input placeholder="Số điện đầu" required className="signInInput" ref={first} onFocus={handleFocus} />
                  </div>
                  <div>
                    <label>Số điện cuối</label>
                    <input placeholder="Số điện cuối" required className="signInInput" ref={second} onFocus={handleFocus} />
                  </div>


                  <h4 style={{ color: "red", display: "block", height: 20, marginTop: 10, marginBottom: 10 }}>
                    {formWarning}
                  </h4>
                  <button className="signInButton" type="submit" onClick={handleSubmit}>
                    Tính nào
                  </button>
                  <h5 style={{ fontStyle: 'italic', fontWeight: 400, marginBottom: 10 }}>Mức 1: 1728đ Mức 2: 1786đ Mức 3: 2074đ </h5>
                  <h5 style={{ fontStyle: 'italic', fontWeight: 400, marginTop: 5 }}>Mức 4: 2612đ Mức 5: 2919đ Mức 6: 3015đ </h5>

                  <div className='bill'>
                    <h5 style={{ fontWeight: 400, marginBottom: 10 }}>Công thức tính: {fomula} </h5>
                    <h4>Thành tiền: {bill} </h4>
                  </div>

                </form>
              </div>
            </div>
            <div className="signInFooter">

            </div>



          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
