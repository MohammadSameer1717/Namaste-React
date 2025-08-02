import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // In that Time when dont have the functionality of hooks like useState() then we created our own this
    this.state = {
      userInfo: {
        name: "Dummy",
        Location: "Default",
      },
    };
    console.log(this.props.name + "child constructor ");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Samarth");
    const json = await data.json();
    const Response = json;
    console.log(Response);

    this.setState({
      userInfo: Response,
    });
    // console.log(this.props.name + "Child Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Component Did Update");
  }
  //Mounting means showing it on the ui and unmount means disabling from the ui
  componentWillUnmount() {}
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>Contact - Samarthsaxena2september2001@gmail.com</h3>
      </div>
    );
  }
}

//Notes -   // you have just sent count and count2 over there react will not touch
// the value of others it is just touch the value which is passed


export default UserClass;