import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="mainfooter">
        <div className="mainfooter__wrapper flex-containers">
          <div className="mainfooter__copy">
            <p>
              Copyright &copy;. Made in Airdrie.{" "}
              <span>
                Designed and developed by{" "}
                <a
                  title="Switchback Creative Inc."
                  target="_blank"
                  href="http://switchbackcreative.ca"
                >
                  Switchback Creative Inc.
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
