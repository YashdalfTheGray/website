import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const lightCustomMuiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.blue500,
        primary2Color: colors.blue700,
        accent1Color: colors.orangeA200
    }
});

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false
        };
    }

    navMenuClick = () => this.setState({ drawerOpen: !this.state.drawerOpen });
    closeDrawer = () => this.setState({ drawerOpen: false });

    render() {
        return (
            <MuiThemeProvider muiTheme={lightCustomMuiTheme}>
                <div>
                    <AppBar
                        title="Yash Kulshrestha"
                        onLeftIconButtonTouchTap={this.navMenuClick} />

                    <Drawer
                        open={this.state.drawerOpen}
                        docked={false}
                        onRequestChange={this.closeDrawer}>
                        <MenuItem>Work Experience</MenuItem>
                        <MenuItem>Volunteering</MenuItem>
                        <MenuItem>Experiments</MenuItem>
                        <MenuItem>About</MenuItem>
                        <MenuItem>Contact</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
