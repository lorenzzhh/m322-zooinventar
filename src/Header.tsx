import {Box, Typography} from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                padding: 2,
                backgroundColor: 'primary.main',
            }}
        >
            {/* Großes "Z" */}
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    fontSize: '3rem', // Größerer Font für "Z"
                    lineHeight: 1,
                }}
            >
                Z
            </Typography>

            {/* Zwei kleinere "o"s */}
            <Box sx={{display: 'flex', gap: 0.5}}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem', // Kleinere Größe für "o"
                        lineHeight: 1,
                    }}
                >
                    o
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        lineHeight: 1,
                    }}
                >
                    o
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
