import { User } from '../../../../util'
import FormGroup from './FormGroup'
import FormButton from './FormButton'

type OwnProps = {
  user: User
  updateField: (e: React.ChangeEvent<HTMLInputElement>) => void
  save: () => void
  clear: () => void
}

const UserForm: React.FC<OwnProps> = props => {
  const { user, updateField, save, clear } = props

  return (
    <>
      <div className="form">
        <div className="row">
          <FormGroup
            label="Name"
            value={user.name}
            updateField={updateField}
            placeholder="Type the user's name..."
          />
          <FormGroup
            label="Email"
            value={user.email}
            updateField={updateField}
            placeholder="Type the user's email..."
          />
        </div>

        <hr />
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <FormButton color="primary" click={save} label="Save" />
            <FormButton color="secondary" click={clear} label="Cancel" />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserForm