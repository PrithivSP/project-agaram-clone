import React, { Component } from "react";
import "./Social-Update.css";

class SocialUpdate extends Component {
  state = {
    SocialUpdate_title: "Social",
  };
  render() {
    return (
      <div className="container">
        <header>
          <h2>{this.state.SocialUpdate_title}</h2>
          <hr />
        </header>
        <div className="row">
          <div className="col-sm-6 left-content">
            <p>Facebook</p>
            <iframe src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fagaramfoundation%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"} width="300" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div className="col-sm-6 right-content">
            <p>Facebook</p>
            <iframe src={"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSANJUACHIVER%2F&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"} width="300" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialUpdate;
