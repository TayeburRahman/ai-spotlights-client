import { Link } from "react-router-dom";
import Button, { buttonVariants } from "./Button";

const ToolsTable = ({
  item,
  index,
  handleApproveTools,
  handleDenyTools,
  handleVerifyTools,
  handleUnverifyTools,
  handleFeatureTools,
  handleUnfeatureTools,
}) => {
  return (
    <tr className="text-left">
      <td>{index + 1}</td>

      <td className="flex items-center gap-4">
        <img
          className="rounded-full h-10 w-10 object-cover"
          src={item?.toolsLogo ? item?.toolsLogo : item?.toolsImage}
          alt={item?.title}
        />
        <strong className="capitalize">{item?.title}</strong>
      </td>

      <td className="capitalize">{item?.status}</td>

      <td>{item?.verified === true ? <p>Verified</p> : <p>Unverified</p>}</td>

      <td>
        {item?.status === "pending" ? (
          <Button onClick={() => handleApproveTools(item?._id)} size="small">
            Approve
          </Button>
        ) : item?.status === "approved" ? (
          <Button onClick={() => handleDenyTools(item?._id)} size="small">
            Deny
          </Button>
        ) : (
          <Button onClick={() => handleApproveTools(item?._id)} size="small">
            Approve
          </Button>
        )}
      </td>

      <td>
        {item?.verified === true ? (
          <Button
            onClick={() => handleUnverifyTools(item?._id)}
            size="small"
            colors="transparent"
          >
            Unverify
          </Button>
        ) : (
          <Button
            onClick={() => handleVerifyTools(item?._id)}
            size="small"
            colors="transparent"
          >
            Verify
          </Button>
        )}
      </td>

      <td>
        {item?.featured === true ? (
          <Button
            onClick={() => handleUnfeatureTools(item?._id)}
            size="small"
            colors="transparent"
          >
            Unfeature
          </Button>
        ) : (
          <Button
            onClick={() => handleFeatureTools(item?._id)}
            size="small"
            colors="transparent"
          >
            Feature
          </Button>
        )}
      </td>

      <td>
        <Link
          to={`/update-tools/${item?.title.replace(/\s+/g, "-")}`}
          className={buttonVariants({ colors: "transparent", size: "small" })}
        >
          Update
        </Link>
      </td>

      <td>
        <Link
          to={`/tool-details/${item?.title.replace(/\s+/g, "-")}`}
          className={buttonVariants({ colors: "transparent", size: "small" })}
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default ToolsTable;
