import { Button } from "./lib"

function App() {
  return (
    <div>
      <Button type="primary" style={{ marginRight: 10 }}>
        Show Drawer
      </Button>
      <Button type="secondary" style={{ marginRight: 10 }}>
        Secondary Button
      </Button>
      <Button type="primary" disabled={true}>
        Disabled Button
      </Button>
    </div>
  );
}

export default App;