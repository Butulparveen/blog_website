import React from "react";
import { Link } from "react-router-dom";
import "../styles/singlePost.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function SinglePost() {
  return (
    <div className="singlePost">
        <h1 className="singlePostTitle">Single Post </h1>
      <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg" alt="" />
        <h1 className="singlePostTitle">
          {" "}
          LOREM IPSUM NATURE
          <div className="singlePostIcon">
            <FaEdit className="singlePostEdit" />
            <FaTrash className="singlePostTrash" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <strong className="singlePostAuthor">
              <Link> Butul Parveen</Link>
            </strong>
          </span>
          <span className="singlePostDate">1 Day Ago </span>
        </div>
        <p className="singlePostDesc">
          For all of us, nature is crucial. It’s the reason for the existence of
          life on this planet. Nature is home to many different creatures. All
          living organisms benefit from the natural balance maintained by Mother
          Nature. The study of the natural environment is a separate discipline
          of science. Every element has its own story to tell. Nature’s beauty
          is portrayed through the sun and moon, the plants, the flowers, etc.
          It is a common belief that reacting to something is a natural human
          characteristic. Naturally drawn characteristics are defined as genetic
          traits of an organism in sociology. The resources of nature are
          plentiful. The proper use of resources aids in the conservation of the
          environment. Natural scavengers include a variety of land and marine
          animals. Nature has provided us with a variety of ways to utilise it
          effectively.
          <br />
          With the increasing population, the threats towards nature are
          increasing. With the growth in population, the resources are now
          depleting. Excessive levels of air and environmental pollutants add to
          the mix. Industrial waste, unrestricted vehicle use, illicit tree
          cutting, wildlife hunting, nuclear power plants, and a slew of other
          factors are contributing to the disruption of natural systems. The
          extinction of species as enormous as dinosaurs and the survival of
          animals as tiny as ants have been documented in history. It is
          unavoidable to remember, among other things, that nature can play both
          a protective and destructive role. Natural disasters, pandemics, and
          natural crisis scenarios have demonstrated the need for humans to
          maintain the subtle balance of nature in order to ensure the
          continuation of life on Earth for the benefit of future generations.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
