import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Details } from "components/Details";
import { ComponentDetailsId } from "types/types.d";

interface paramProps {
  id: ComponentDetailsId;
}

export const ComponentDetails = () => {
  const params: paramProps = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [params.id]);

  return <Details componentId={params.id} />;
};
