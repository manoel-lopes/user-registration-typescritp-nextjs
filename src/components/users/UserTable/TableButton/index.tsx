import { User } from '../../../../../util'

type OwnProps = {
  user: User
  color: string
  click: (user: User) => void
  icon: string
}

const FormButton: React.FC<OwnProps> = ({ user, color, click, icon }) => (
  <button className={`btn btn-${color} ml-2`} onClick={() => click(user)}>
    <i className={`fa fa-${icon}`} />
  </button>
)

export default FormButton
