import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Friendlist from './components/Friendlist/Friendlist';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './user.json';
import statistics from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => (
    <div className="App">
        <Profile
            avatar={user.avatar}
            name={user.name}
            tag={user.tag[0] === '@' ? user.tag.slice(1) : user.tag}
            location={user.location}
            followers={user.stats.followers}
            views={user.stats.views}
            likes={user.stats.likes}
        />
        <Statistics title="Upload stats" statistics={statistics} />
        {/* no title - no render */}
        <Statistics statistics={statistics} />

        <Friendlist friends={friends} />

        <TransactionHistory items={transactions} />
    </div>
);

export default App;
