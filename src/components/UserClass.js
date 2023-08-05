import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + " Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/kotasarat");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      console.log("set interval");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child Component Will Unmount");
  }

  render() {
    console.log(this.props.name + " Child Render");
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: kota.sarat@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
