import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';
import { CheckBox, DragIndicator } from '@mui/icons-material';
import { CardItemLayout } from '../layouts';
import { useDrag } from 'react-dnd';

export const Item = ({ item }) => {
    
    const [{isDragging},drag,preview] = useDrag(()=>({
        type: "div",
        item,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    })) 

    return (
        <CardItemLayout >
            <Grid
                ref={preview}
                item
                style={{border:isDragging?"5px solid pink":"0px"}}
                sx={{
                    p:2,
                    alignItems: 'center',
                    display: 'grid',
                    gridTemplateAreas: `"gridDnD gridLabel gridIcon"`,
                    gridTemplateColumns: 'auto 1fr auto',
                    gridTemplateRows: 'auto',
                    height: 'auto',
                    justifyItems: 'center',
                    width: '100%',
                }}
            >
                <Grid
                    item
                    ref={drag}
                    sx={{ display:'flex', gridArea: 'gridDnD' }}
                >
                    <DragIndicator sx={{ fontSize: '50px'}} />
                </Grid>

                <Grid
                    item
                    sx={{ display:'flex', gridArea: 'gridLabel' }}
                >
                    <Typography variant='h4'>{`${item.name} ${item.index}`}</Typography>
                </Grid>

                <Grid
                    item
                    sx={{display:'flex', gridArea: 'gridIcon' }}
                >
                    <CheckBox sx={{ fontSize: '50px' }} />
                </Grid>
            </Grid>
        </CardItemLayout>
    )
}

Item.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        itemType: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        idItemGroup: PropTypes.any.isRequired,
    })
}