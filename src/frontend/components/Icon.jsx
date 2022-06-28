import * as Icons from '../../backend/icons'

/**
* @author
* @function Icon
**/

export const Icon = ({ icon, ...props }) => {
    const Icon = Icons[icon]
    return Icons[icon] && <Icon {...props} />
}
