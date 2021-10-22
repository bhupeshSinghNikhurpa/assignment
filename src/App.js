import "./App.css";
import MainContainer from "./components/containers/MainContainer";
import Header from "./components/UI/Header";

function App() {
  return (
    <>
      <Header />
      <main className={`mt-5 mx-auto`} style={{ maxWidth: "1040px" }}>
        <MainContainer />
      </main>
    </>
  );
}

export default App;
