import {Box, Typography} from '@mui/material';

const Header = () => {
    return (
        <header>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    padding: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                    position: 'relative',
                    height: '2.2rem',
                }}
                marginBottom={5}
            >
                {/* Z protruding from the header */}
                <Typography
                    variant="h1"
                    sx={{
                        position: 'relative',
                        top: 27,
                        marginRight: 1,
                        color: 'white',
                        textShadow: '2px 2px 4px black',
                    }}
                >
                    Z
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        textShadow: '2px 2px 4px black',
                    }}
                >
                    oo
                </Typography>
            </Box>
        </header>
    );
};

export default Header;
