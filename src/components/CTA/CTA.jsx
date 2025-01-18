import { useState } from "react";
import "./CTA.css";

function CTA() {
  const [loanAmount, setloanAmount] = useState("");
  const [loanType, setloanType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Loan application submitted:", { loanAmount, loanType });
  };
  return (
    <div>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Loan amount"
            value={loanAmount}
            onChange={(e) => setloanAmount(e.target.value)}
            min="1000"
            step="100"
          />
          <select
            value={loanType}
            onChange={(e) => setloanType(e.target.value)}
          >
            <option value="">Select loan type</option>
            <option value="personal">Personal Loan</option>
            <option value="business">Business Loan</option>
            <option value="mortgage">Mortgage</option>
            <option value="auto">Auto Loan</option>
          </select>
          <button type="submit">Apply Now</button>
        </form>
      </div>
    </div>
  );
}

export default CTA;
