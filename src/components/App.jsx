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


const App = () => {
  const [feedbackList, setFeedbackList] = useState({
  good: 0,
	neutral: 0,
	bad: 0
  })
  
  console.log(feedbackList);

    return (
      <>
        <Description />
        <Option />
        <Feedback
          good={feedbackList.good}
          neutral={feedbackList.neutral}
          bad={feedbackList.bad}
        />
      {/* <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} /> */}
    </>
  );
};

export default App;

