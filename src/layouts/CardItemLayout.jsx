import { forwardRef } from 'react';

import PropTypes from 'prop-types';

import { Paper } from '@mui/material';

export const CardItemLayout = ({ children }) => {
    return (
        <Paper
            elevation={4}
            sx={{
                alignContent: 'center',
                bgcolor:'#C0CBD0',
                justifyContent: 'center',
                m: 2,
            }}
        >
            {children}
        </Paper>
    )
}

CardItemLayout.propTypes = {
    children: PropTypes.object.isRequired,
}
