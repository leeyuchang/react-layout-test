import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-row">
          {/* <div className="App-header-logo"> */}
            {/* <img
              src="http://www.supah.it/dribbble/017/logo.png"
              width="32"
              height="32"
              alt="logo"
              border="0"
            /> */}
          {/* </div> */}
          <div className="App-header-title">Invoice</div>
        </div>
        <div className="App-header-row">
          <div className="App-header-order-message">
            Thank you for shopping from our store.
          </div>
          <div className="App-header-order-column">
            <div className="App-header-order-id">ORDER #800000025</div>
            <div className="App-header-order-date">
              {new Date().toISOString().substring(0, 10)}
            </div>
          </div>
        </div>
      </header>

      <div className="App-content">
        <div className="App-content-header">
          <div className="App-content-header-item">Name</div>
          <div className="App-content-header-item">Price</div>
          <div className="App-content-header-item">Qty</div>
          <div className="App-content-header-item">Total</div>
          {/* <div className="App-content-header-item">Count</div> */}
        </div>
        <div className="App-content-body scrollable-element">
          <div className="App-content-body-item">1</div>
          <div className="App-content-body-item">2</div>
          <div className="App-content-body-item">3</div>
          <div className="App-content-body-item">4</div>
          <div className="App-content-body-item">5</div>
          <div className="App-content-body-item">6</div>
          <div className="App-content-body-item">7</div>
          <div className="App-content-body-item">8</div>
          <div className="App-content-body-item">9</div>
          <div className="App-content-body-item">10</div>
          <div className="App-content-body-item">11</div>
          <div className="App-content-body-item">12</div>
          <div className="App-content-body-item">13</div>
          <div className="App-content-body-item">14</div>
          <div className="App-content-body-item">15</div>
        </div>
      </div>
      <footer className="App-footer">
        <div className="App-footer-subtotal">
          <div className="App-footer-subtotal-name">SubTotal</div>
          <div className="App-footer-space"></div>
          <div className="App-footer-subtotal-value">$7.00</div>
        </div>
        <div className="App-footer-tax">
          <div className="App-footer-tax-name">TAX</div>
          <div className="App-footer-space"></div>
          <div className="App-footer-tax-value">$0.70</div>
        </div>
        <div className="App-footer-grandtotal">
          <div className="App-footer-grandtotal-name">
            Grand Total(Incl.Tax)
          </div>
          <div className="App-footer-space"></div>
          <div className="App-footer-grandtotal-value">$7.70</div>
        </div>
      </footer>
    </div>
  )
}

export default App
