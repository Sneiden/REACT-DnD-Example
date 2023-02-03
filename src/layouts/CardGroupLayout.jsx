import PropTypes from 'prop-types'

import { useDrop } from 'react-dnd';

import { Grid, Paper } from '@mui/material'
import { useDispatch } from 'react-redux';
import { startEditItem } from '../store/app/items';

export const CardGroupLayout = ({ children, itemGroup }) => {

    const dispatch = useDispatch();

    const addItemToGroup = (item) => {
        if (itemGroup === undefined) {
            dispatch(startEditItem({...item, idItemGroup:''}));
        }else{
            dispatch(startEditItem({...item, idItemGroup:itemGroup.id}));
        }
    }

    // const [hasDropped, setHasDropped] = useState(false);
    // const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false);

    const [{ isOver, isOverCurrent }, drop] = useDrop(
        () => ({
            accept: "div",
            drop(_item, monitor) {
                const didDrop = monitor.didDrop()
                if (didDrop) {
                    return
                }
                addItemToGroup(_item);
                // setHasDropped(true)
                // console.log(_item);
                // setHasDroppedOnChild(didDrop)
            },
            collect: (monitor) => ({
                isOver: monitor.isOver(),
                isOverCurrent: monitor.isOver({ shallow: true }),
            }),
        }),
        [addItemToGroup],
    )

    return (
        <Grid
            container
        >
            <Paper
                variant='outlined'
                ref={drop}
                sx={{
                    bgcolor: '#DFE5E7',
                    justifyContent: 'center',
                    m: 2,
                    width: '100%',
                }}
            >
                {children}
            </Paper>
        </Grid>
    )
}

// CardGroupLayout.propTypes = {
//     children: PropTypes.object,
// }
