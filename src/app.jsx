import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import WorkExperienceList from './components/WorkExperienceList';

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
            drawerOpen: false,
            section: ''
        };
    }

    navMenuClick = () => this.setState({ drawerOpen: !this.state.drawerOpen });
    closeDrawer = () => this.setState({ drawerOpen: false });
    displayWorkExperience = () => this.setState({ drawerOpen: false, section: 'work-experience' });
    displayVolunteerWork = () => this.setState({ drawerOpen: false, section: 'volunteer-work' });
    displayExperiments = () => this.setState({ drawerOpen: false, section: 'experiments' });
    displayAbout = () => this.setState({ drawerOpen: false, section: 'about' });
    displayContact = () => this.setState({ drawerOpen: false, section: 'contact' });

    render() {
        var viewToDisplay;

        switch(this.state.section) {
            case 'work-experience':
                viewToDisplay = <WorkExperienceList />
                break;
            case 'volunteer-work':
                break;
            case 'experiments':
                break;
            case 'about':
                break;
            case 'contact':
                break;
            default:
                viewToDisplay = <div>How did we get here?</div>
        }

        return (
            <MuiThemeProvider muiTheme={lightCustomMuiTheme}>
                <div>
                    <AppBar
                        title="Yash Kulshrestha"
                        onLeftIconButtonTouchTap={this.navMenuClick} />

                    {viewToDisplay}

                    <Drawer
                        open={this.state.drawerOpen}
                        docked={false}
                        onRequestChange={this.closeDrawer}>
                        <MenuItem
                            onTouchTap={this.displayWorkExperience}>
                            Work Experience
                        </MenuItem>
                        <MenuItem
                            onTouchTap={this.displayVolunteerWork}>
                            Volunteer Work
                        </MenuItem>
                        <MenuItem
                            onTouchTap={this.displayExperiments}>
                            Experiments
                        </MenuItem>
                        <MenuItem
                            onTouchTap={this.displayAbout}>
                            About
                        </MenuItem>
                        <MenuItem
                            onTouchTap={this.displayContact}>
                            Contact
                        </MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
