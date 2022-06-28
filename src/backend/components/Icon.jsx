import * as Icons from '../icons'

export default function Icon({ icon, ...props }) {
    const Icon = Icons[icon]
    return Icons[icon] && <Icon {...props} />
  }
