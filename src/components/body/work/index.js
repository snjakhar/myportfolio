import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Separator from "../../common/separator/index";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">About</label>
      <div className="work-list">
        I have been interested in computers since childhood. It was always a
        dream to learn and create something with computers. After completing my
        schooling I cleared the AIEEE exam and secured a seat in the central
        university and graduated in the field of computer science
        <br></br>
        After which, I started a business where I made some automation products.
        <br></br>
        1. Cell Phone Motor Starter controller is a device helps to switches on
        and off electric motors, agriculture pump sets through mobile phone.
        <br></br>
        2. Security systme for vehicles , home and shops.
        <br></br>
        <br></br>
        After spending almost four to five years, I shut shop because continues
        loss of capital. But the good thing is that I gained experience and
        understood how to collaborate with people. Through out the peroid I also
        did a lot of programing to make product better along with team.
        <br></br>I am not new to tech but I did not have a particular skill set
        then. I found my interest in web development and was looking for courses
        to upgrade my skill set. I happen to come across Masai school which was
        offering me a full-stack web development course and I was intrigued.
        <br></br>
        <br></br>
        Currently, I am looking for opportunities where I can utilize my skills
        efficiently and fulfill the organization's goal. Not only do I like
        working on creative projects but also like to interact and network with
        people with a creative mindset. Apart from this, I enjoy riding bikes
        and love cooking.
      </div>
    </div>
  );
}

export default Work;
