import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';
import { CheckBox, VideoStable } from '@mui/icons-material';

import { useDrop } from 'react-dnd';

import { SpeedDialComp } from '../components';
import { startAddItem } from '../store/app';
import { CardGroupLayout } from '../layouts';
import { ComponentType } from '../helpers';

export const SortItems = () => {

    const [countItems, setCountItems] = useState(0);

    const { items, loading } = useSelector(state => state.items);
    const dispatch = useDispatch();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "div",
        drop: (item) => addItemToGroupMain(item)
    }));

    const addItemToGroupMain = (item) => {
        console.log("Main:", item);
    }

    const onClickAddItem = () => {
        console.log('AddItem');
        dispatch(startAddItem({
            id: countItems,
            name: 'Item',
            itemType: 1,
            index: countItems,
            idItemGroup: '',
        }))
        setCountItems(countItems + 1);
    };

    const onClickAddGroup = () => {
        console.log('AddGroup');
        dispatch(startAddItem({
            id: countItems,
            name: 'Group',
            itemType: 2,
            index: countItems,
            idItemGroup: '',
        }))
        setCountItems(countItems + 1);
    };

    const actions = useMemo(() => [
        { icon: <CheckBox />, name: 'Add CheckBox', handleClick: onClickAddItem },
        { icon: <VideoStable />, name: 'Add Group', handleClick: onClickAddGroup },
    ], [onClickAddItem, onClickAddGroup]);

    return (
        <Grid
            container
            sx={{
                bgcolor: '#DFE5E7',
                justifyContent: 'center',
                overflowY: 'auto',
                height: '100%',
                width: '60%',
            }}
        >
            <CardGroupLayout>
                {
                    items.map(item => (
                        <ComponentType key={item.id} item={item}/>
                    ))
                }
            </CardGroupLayout>
            <Grid
                sx={{
                    position: 'absolute',
                    right: '1rem',
                    bottom: '1rem',
                }}
            >
                <SpeedDialComp actions={actions} />
            </Grid>
        </Grid>
    )
}
