import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React, { Component } from "react";

const AboutFC = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React WebSeries</h2>

      <UserClass
        name={"Sarat (Class Component)"}
        location={"Chirala (class)"}
      />
    </div>
  );
};

export class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedInUser:
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Namaste React WebSeries</h2>

        <User />
      </div>
    );
  }
}

export default About;
