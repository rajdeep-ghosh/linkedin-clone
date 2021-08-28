import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <Header />
      {/* App Body */}
      <div className="appBody">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
