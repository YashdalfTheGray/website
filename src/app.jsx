import React from 'react';
import AppBar from 'material-ui/AppBar';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const lightCustomMuiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.blue500,
        primary2Color: colors.blue700,
        accent1Color: colors.orangeA200
    }
});

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={lightCustomMuiTheme}>
                <AppBar
                    title="Yash Kulshrestha" />
            </MuiThemeProvider>
        );
    }
}

export default App;
