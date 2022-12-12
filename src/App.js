import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <h1 className="big-header">Welcome to Comment Section</h1>
      <Comments currentUserId="1" />
    </div>
  );
};

export default App;
