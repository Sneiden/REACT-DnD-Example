import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';
import { Item } from './Item';
import { CardGroupLayout } from '../layouts';
import { useSelector } from 'react-redux';

export const Group = ({ itemGroup }) => {

    const { items, loading } = useSelector(state => state.items);
    const [groupItems, setGroupItems] = useState('loading')

    useEffect(() => {
        setGroupItems(items.filter(item => item.idItemGroup === itemGroup.id))
    }, [items])

    return (
        <CardGroupLayout itemGroup={itemGroup}>
            {
                groupItems !== 'loading' &&
                    (groupItems.length > 0)
                    ? <Grid
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {`${itemGroup.name} ${itemGroup.index}`}
                        </Typography>
                        {
                            groupItems.map(groupItem => (
                                <Item
                                    key={groupItem.id}
                                    item={groupItem}
                                />
                            ))
                        }
                    </Grid>
                    : <Grid
                        sx={{
                            display: 'grid',
                            borderStyle: 'dashed',
                            borderWidth: '2px',
                            justifyItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Typography
                            variant='h6'
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {`${itemGroup.name} ${itemGroup.index}`}
                        </Typography>
                        <Typography
                            variant='h5'
                            sx={{
                                justifyContent: 'center',
                                m: 2
                            }}
                        >
                            Drop here an Item
                        </Typography>
                    </Grid>
            }
        </CardGroupLayout>
    )
}

Group.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            itemType: PropTypes.number.isRequired,
            index: PropTypes.number.isRequired,
            idItemGroup: PropTypes.any.isRequired,
        })
    ),
    itemGroup: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        itemType: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        idItemGroup: PropTypes.any.isRequired,
    })
}
