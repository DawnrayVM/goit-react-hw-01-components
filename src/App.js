import Profile from "./components/Profile.jsx";
import Statistics from "./components/Statistics.jsx";
import Friendlist from "./components/Friendlist.jsx";
import user from "./user.json";
import statistics from "./statistical-data.json";
import friends from "./friends.json";

const App = () => (
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
    <Statistics title="Statistics" statistics={statistics} />
    {/* no title - no render */}
    <Statistics statistics={statistics} />

    <Friendlist friends={friends} />
  </div>
);

export default App;
