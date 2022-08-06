import Navbar from "./Components/Navbar"; 
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Background from "./Images/Background.PNG"; 
import './App.css';

function App() {

  
  const THEME = createMuiTheme({
    typography: {
     "fontFamily": `"IBM Plex Mono"`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });

  return (
    <MuiThemeProvider theme={THEME}>
      <div className="App">
        <Navbar></Navbar>
        <div style={{ 
          backgroundImage: `url(${Background})`,
          width:500,
          height:500
        }}>
          Hello World
        </div>
      </div>
  </MuiThemeProvider>
  );
}

export default App;
