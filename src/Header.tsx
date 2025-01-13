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
                    color: 'black',
                    position: 'relative',
                    height: '2.2rem'
                }}
                marginBottom={10}
            >
                {/* Z protruding from the header */}
                <Typography
                    variant="h1"
                    sx={{
                        position: 'relative',
                        top: 27, // Negative value to make it stick out
                        marginRight: 1, // To add spacing between Z and 'oo'
                    }}
                >
                    Z
                </Typography>

                <Typography variant="h2">oo</Typography>
            </Box>
        </header>

    );
};

export default Header;
