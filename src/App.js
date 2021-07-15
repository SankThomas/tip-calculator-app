import logo from "./images/logo.svg"
import dollar from "./images/icon-dollar.svg"
import person from "./images/icon-person.svg"

const App = () => {
  return (
    <>
      <main>
        <div>
          <img src={logo} alt="splitter" />
        </div>
        <section className="container">
          <form>
            <label htmlFor="bill">
              <img src={dollar} alt="" />
            </label>
            <input
              type="number"
              id="bill"
              name="bill"
              placeholder="0.0"
              required
            />
          </form>

          <div className="tip">
            <p>Select Tip %</p>
            <div className="buttons">
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>25%</button>
              <button>50%</button>
              <button>Custom</button>
            </div>
          </div>

          <form>
            <p>Number of people</p>
            <label htmlFor="person">
              <img src={person} alt="" />
            </label>
            <input
              type="number"
              name="person"
              id="person"
              required
              placeholder="1"
            />
          </form>

          <div className="amount">
            <article>
              <h3>
                Tip amount <span>/ person</span>
              </h3>
              <p>$4.27</p>
            </article>
            <article>
              <h3>
                Total <span>/ person</span>
              </h3>
              <p>$32.79</p>
            </article>
            <input type="reset" value="RESET" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
