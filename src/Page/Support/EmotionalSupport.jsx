import React from "react";
import { useNavigate } from "react-router-dom";
const EmotionalSupport = () => {
  const navigate = useNavigate();
  const options = [
    "Overthinking",
    "Anxiety",
    "Loneliness",
    "Sexual Wellness",

    "Family & Relationship",
    "Depression",
    "Sleep",
    "Stress Management",
    "Career Counselling",
    "Women Health",
    "Work Life Balance",
    "Grief/Loss",
  ];
  const imgurl = [
    "https://images.pexels.com/photos/17418940/pexels-photo-17418940/free-photo-of-a-statue-of-a-woman-sitting-on-a-bench.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5542968/pexels-photo-5542968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7243968/pexels-photo-7243968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://imgs.search.brave.com/69CWyh5Rp4AbxJ1tH1L3K6EvCf2DPOIuN37SCcM6usY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaW5l/b24uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA4L3Np/bXBsZS1tYWxlLWZl/bWFsZS1zeW1ib2wt/bmVvbi1zaWduLndl/YnA",

    "https://images.unsplash.com/photo-1563754536869-24d854e50ce6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/236151/pexels-photo-236151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1585128719715-46776b56a0d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/1134204/pexels-photo-1134204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1587740896339-96a76170508d?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1609156730500-dd8e41ba29ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const onButtonClick = (option) => {
    if (option === "Overthinking") {
      navigation.navigate("/Overthinking");
    } else if (option === "Anxiety") {
      navigate("/Anxiety");
    } else if (option === "Loneliness") {
      navigate("/Loneliness");
    } else if (option === "Sexual Wellness") {
      navigate("/SexualWellness");
    } else if (option === "Family & Relationship") {
      navigate("/Family");
    } else if (option === "Depression") {
      navigate("/Depression");
    } else if (option === "Sleep") {
      navigate("/Sleep");
    } else if (option === "Stress Management") {
      navigate("/StressManagement");
    } else if (option === "Career Counselling") {
      navigate("/CareerCounseling");
    } else if (option === "Women Health") {
      navigate("/WomenHealth");
    } else if (option === "Work Life Balance") {
      navigate("/WorkLifeBalance");
    } else if (option === "Grief/Loss") {
      navigate("/Grief");
    }
  };
  return (
    <div className="Main-Page">
      <div className="Meditation-text">
        <h1>Emotional Support</h1>
      </div>

      <div className="Options Emotional-options">
        {options.map((option, index) => {
          return (
            <div className="list">
              <div className="circle">
                <img
                  className="hy"
                  onClick={() => onButtonClick(option)}
                  src={imgurl[index]}
                  alt="Meditation"
                />
              </div>
              <div className="list-item" key={index}>
                {option}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmotionalSupport;