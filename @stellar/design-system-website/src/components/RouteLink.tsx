import { useHistory } from "react-router-dom";
import { TextLink } from "@stellar/design-system";

// TODO: improve this
export const RouteLink = ({ ...props }) => {
  const history = useHistory();

  return (
    <TextLink
      {...props}
      onClick={() => {
        history.push(props.href);
      }}
      underline
    >
      {props.children}
    </TextLink>
  );
};
