import React from "react";
import axios from "axios";

export default class notifList extends React.Component {

  constructor(props) {
    super(props);
    this.deleteNotification = this.deleteNotification.bind(this);
  }
  deleteNotification(id,e) {
    console.log(id);
    axios.delete(`https://ifttt-mobile-app.herokuapp.com/bildirim/${id}`).then(res => {
      axios.get(`https://ifttt-mobile-app.herokuapp.com/bildirim`).then(res => {
      const notifications = res.data;
      this.setState({ notifications });
    });
    });
  }
  state = {
    notifications: []
  };

  componentDidMount() {
    axios.get(`https://ifttt-mobile-app.herokuapp.com/bildirim`).then(res => {
      const notifications = res.data;
      this.setState({ notifications });
    });
  }

  render() {
    return this.state.notifications.map(notf => (
      <div key={notf._id} className="item">
        <ul className="list-group">
          <li className="list-group-item active">{notf.appName}</li>
          <li className="list-group-item ">{notf.title}</li>
          <li className="list-group-item ">{notf.msg}</li>
          <li className="list-group-item ">{notf.time}</li>
          <li className="list-group-item "><button onClick={this.deleteNotification.bind(this,notf._id)} className="btn btn-danger btn-lg btn-block">Sil</button></li>
        </ul>
      </div>
    ));
  }
}
