import MuiRoot from "./mui/Root";
import strings from "./strings";

function App() {
  return (
    <div>
      <header>
        <p>{strings.appName}</p>
      </header>
      <body>
        <MuiRoot />
      </body>
    </div>
  );
}

export default App;
