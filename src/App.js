import React from "react";
import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import user from "./user.json";
import statistics from "./statistical-data.json";

const App = () => {
  return (
    console.log(statistics),
    (
      <div className="App">
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag[0] === "@" ? user.tag.slice(1) : user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
        <Statistics title="Stat-data" statistics={statistics} />
      </div>
    )
  );
};

export default App;
