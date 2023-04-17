import React, { useState } from "react";

function KontaktFormular() {
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Her kan du tilføje kode til at sende formularen til en server eller anden destination
    setIsSubmitted(true);
    setFirstName("");
    setCompanyName("");
    setEmail("");
    setMessage("");
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      {isSubmitted && (
        <div className="popup">
          <h4>Beskeden er sendt! Vi vender tilbage hurtigst muligt.</h4>
          <button onClick={handleDismiss} className="okKnap">OK</button>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        
        <p htmlFor="firstName"className="marginTop">For- og efternavn:</p>
        
        <div>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="inputFelt"
            />

        </div>

        <p htmlFor="companyName" className="marginTop">Virksomhedens navn:</p>
        <div>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="inputFelt"
          />
        </div>

        <p htmlFor="email" className="marginTop">E-mail:</p>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inputFelt"
          />
        </div>

        <p htmlFor="message" className="marginTop">Fortæl om virksomheden og jeres ønsker:</p>
        <div>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="inputFelt tekstFelt" 
          />
        </div>

        <button type="submit" className="knap link">Send besked</button>

      </form>
    </div>
  );
}

export default KontaktFormular;
