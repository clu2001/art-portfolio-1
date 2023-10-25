import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css'; 


const App = () => {
  
  const Theme = createMuiTheme({
    typography: {
     "fontFamily": `"IBM Plex Mono"`
    }
 });

  return (
    <MuiThemeProvider theme={Theme}>
      <div className="App">
      </div>
    </MuiThemeProvider>
  );
}

export default App;
