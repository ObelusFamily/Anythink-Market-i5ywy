import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

class Banner extends React.Component {
  state = {
    hideSearchField: true,
  };
  render() {
    return (
      <div className="banner text-white">
        <div className="container p-4 text-center">
          <img src={logo} alt="banner" />
          <div>
            <span>A place to</span>
            <span
              id="get-part"
              onClick={(_) => {
                this.setState({ hideSearchField: false });
              }}
            >
              {" "}
              get{" "}
            </span>
            <input
              hidden={this.state.hideSearchField}
              type="text"
              id="search-box"
              placeholder="What is it that you truly desire?"
              onInput={(event) => {
                let searchTerm = event.target.value;
                if (searchTerm.length <= 2) {
                  searchTerm = undefined;
                }
                this.props.onEnterSearchTerm(
                  searchTerm,
                  (page) => agent.Items.all(searchTerm, page),
                  agent.Items.all(searchTerm)
                );
              }}
            />
            <span> the cool stuff.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
