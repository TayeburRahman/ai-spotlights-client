import Button from "./Button";
import PropTypes from 'prop-types';

const UsersTable = ({ item, index, handleMakeAdmin, handleMakeUser }) => {
  // component code here
  return (
    <tr className="text-left">
      <td>{index + 1}</td>

      <td className="flex items-center gap-4">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src={item?.userImage}
          alt={item?.userName}
        />
        <strong className="capitalize">{item?.userName}</strong>
      </td>

      <td>{item?.userEmail}</td>

      <td className="capitalize">{item?.role}</td>

      {item?.role === "user" ? (
        <td>
          <Button
            onClick={() => handleMakeAdmin(item?._id)}
            size="small"
            colors="transparent"
          >
            Admin
          </Button>
        </td>
      ) : (
        <td>
          <Button
            onClick={() => handleMakeUser(item?._id)}
            size="small"
            colors="transparent"
          >
            User
          </Button>
        </td>
      )}
    </tr>
  );
};

UsersTable.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handleMakeAdmin: PropTypes.func.isRequired,
  handleMakeUser: PropTypes.func.isRequired,
};

export default UsersTable;
