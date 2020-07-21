/** @jsx jsx */
import {jsx} from '@emotion/core'

const App = (): JSX.Element => {
  return (
    <div>
      <header className="site-header">
        <a className="logo" href="/">
          <img
            alt="Reclaimed Logo"
            css={{maxWidth: 200, width: '100%'}}
            src="images/logo-white.png"
          />
        </a>
      </header>

      <button
        className="close-content-block"
        type="button"
        onClick={(e) => {
          e.preventDefault()
          const body = document.getElementById('body')

          if (body) {
            body.classList.remove('has-content-block-open')
          }
        }}
      >
        <i className="fas fa-times" css={{marginTop: 11}} />
      </button>

      <div className="home-block">
        <div className="home-block-inner">
          <section className="d-flex min-vh--100 text-white" id="home">
            <div className="container align-self-center">
              <h1 className="mb-3">Personalized Software for your Camp!</h1>
              <p className="lead mb-5">
                Reclaimed is an app for your camp! Manage everything from
                events, to campers, to cabins in Reclaimed.
              </p>

              <a
                className="btn rounded-0 btn-white btn-shadow scrollto"
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  const body = document.getElementById('body')

                  if (body) {
                    body.classList.add('has-content-block-open')
                  }
                }}
              >
                Learn more
              </a>
            </div>
          </section>

          <nav className="usefull-nav usefull-nav-pinned light d-none d-xl-flex">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/candeegenerations"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/candeegen"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/candeegenerations"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/candeegenerations"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="content-block">
        <div className="content-block-inner">
          <section className="pb--0" id="about">
            <div className="container">
              <img
                alt="Reclaimed Logo"
                css={{marginBottom: 50, maxWidth: 300, width: '100%'}}
                src="images/logo-colored.png"
              />

              <div className="row mb-4">
                <div className="col-12 col-lg-10">
                  <h2 className="mb-3">About Reclaimed</h2>
                  <p>
                    Reclaimed is an app for your camp! Manage everything from
                    events, to campers, to cabins in Reclaimed.
                  </p>

                  <p>
                    This application is still under development. We are working
                    to get this live as quick as we can.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="site-footer bg-light">
            <div className="container">
              <nav className="usefull-nav mb-3">
                <ul className="justify-content-center">
                  <li>
                    <a
                      href="https://www.facebook.com/candeegenerations"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.twitter.com/candeegen"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/candeegenerations"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/candeegenerations"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </nav>
              <p className="text-center">
                © 2017 - {new Date().getFullYear()}&nbsp;
                <a
                  href="https://www.candeegenerations.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Candee Generations
                </a>
                &nbsp;- All Rights Reserved
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
