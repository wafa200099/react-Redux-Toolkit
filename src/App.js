import PostsList from "./features/posts/PostsList";
import AddPostsForm from "./features/posts/AddPostsForm";

function App() {
  return (
    <main className="App">
      <AddPostsForm />
      <PostsList />
    </main>
  );
}

export default App;