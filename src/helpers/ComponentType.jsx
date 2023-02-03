import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Group, Item } from '../components'

export const ComponentType = ({ item }) => {

    const [component, setComponent] = useState(<></>)
    
    useEffect(() => {
        console.log(item)

        switch (item.itemType) {
            case 1:
                if (item.idItemGroup === "")
                    setComponent(<Item item={item} />)
                else
                    setComponent(<></>)
                break;
            case 2:
                setComponent(<Group itemGroup={item} />)
                break;

            default:
                break;
        }
    }, [item.idItemGroup])

    return (component)
}

ComponentType.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        itemType: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        idItemGroup: PropTypes.any.isRequired,
    })
}