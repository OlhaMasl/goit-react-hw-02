// import userData from "../userData.json";
// import friends from "../friends.json";
// import transactions from "../transactions.json";
// import Profile from "./Profile/Profile";
// import FriendList from "./FriendList/FriendList";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";
import { useState } from "react";
import "../index.css"
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Option from "./Option/Option";
import Notification from "./Notification/Notification";


const App = () => {
  const [feedbackList, setFeedbackList] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  })

  const updateFeedback = feedbackType => {
    setFeedbackList( prev => ({...prev, [feedbackType]:prev[feedbackType]+1}))
   };

    return (
      <>
        <Description />
        <Option fn={updateFeedback} />
        <Feedback
          good={feedbackList.good}
          neutral={feedbackList.neutral}
          bad={feedbackList.bad}
        />
        <Notification />
    </>
  );
};

export default App;

