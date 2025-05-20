import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [verificationCode, setVerificationCode] = useState('')

  const handleSetupApp = () => {
    setStep(2)
  }

  const handleConfirm = () => {
    console.log('Verification code:', verificationCode)
  }

  const secretKey = 'DZAZ512YOSHVZB35H2SRBEZP TBFCJTI6SYMJUQ MY7NKS6VIQ'

 
  return (
    <div className="container">
      {step === 1 ? (
        <div className="setup-card">
          <h1>Select Your Verification Method</h1>
          <div className="method-option">
            <div className="icon">📱</div>
            <h2>Authenticator app</h2>
            <p>Use an app on your phone to set up two-factor authentication.</p>
            <button onClick={handleSetupApp}>Set up using an application</button>
            <p className="recommendation">
              We recommend using an application such as Authy, 1Password, or Google Authenticator.
            </p>
          </div>
        </div>
      ) : (
        <div className="setup-card">
          <h1>Set Up Authenticator App</h1>
          <div className="qr-section">
            <p>Scan the QR code below using your authenticator app or enter the following code manually:</p>
            <div className="manual-code">
              DZAZ512YOSHVZB35H2SRBEZP TBFCJTI6SYMJUQ MY7NKS6VIQ
            </div>
            <div className="qr-code">
              <div id="qrcode"></div>
            </div>
            <div className="verify-section">
              <h3>Enter the six-digit code from the authenticator app</h3>
              <p>After scanning the QR code, the app will display a six-digit code that you can enter below.</p>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter The six-digit Code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  maxLength={6}
                />
                <button onClick={handleConfirm}>Confirm</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
