import React, {useState} from "react"
import { Link } from "gatsby"
import styles from './Header.module.css'

export const Header = () => {
  const [hamburger, setHamburger] = useState(false)
  return (
    <div>
      <div className={styles['header']}>
        <h1
          style={{
            margin: '7px'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Jinks Electric Co
          </Link>
        </h1>
        <div className={styles['navLinks']}>
          <h3 style={{margin: '2em'}}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`#services`}
            >
              Services
            </Link>
          </h3>
          <h3 style={{margin: '2em'}}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`#about`}
            >
              About
            </Link>
          </h3>
          <h3 style={{margin: '2em'}}>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={'#contact'}
            >
              Contact
            </Link>
          </h3>
        </div>

      </div>
      <div className={styles['hamburgerHeader']}>
        <h1
          style={{
            margin: '7px'
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Jinks Electric Co
          </Link>
        </h1>
        <div className={styles['burger']} onClick={() => setHamburger(!hamburger)}>
          <div className={styles['line']} />
          <div className={styles['line']} />
          <div className={styles['line']} />
        </div>
        {hamburger && (
          <div className={styles['dropDownMenu']}>
            <div className={styles['dropDownLinks']}>
              <h3 style={{margin: '1em'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`#services`}
                >
                  Services
                </Link>
              </h3>
              <h3 style={{margin: '1em'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`#about`}
                >
                  About
                </Link>
              </h3>
              <h3 style={{margin: '1em'}}>
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to={`#contact`}
                >
                  Contact
                </Link>
              </h3>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Header