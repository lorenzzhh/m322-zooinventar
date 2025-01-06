import {AppBar, Toolbar, Typography} from '@mui/material';

function Header() {
    return (
        <AppBar
            position="static"
            sx={{background: 'primary', color: 'white'}}
        >
            <Toolbar>
                <Typography
                    variant="h5"
                    sx={{flexGrow: 1, textAlign: 'center', fontWeight: 'bold'}}
                >
                    ZOO
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
