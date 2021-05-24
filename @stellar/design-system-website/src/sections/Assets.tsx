import { Heading2, Heading3, Icon, Logo, Layout } from "@stellar/design-system";
import { RouteLink } from "components/RouteLink";
import { getComponentDetailsLink } from "helpers/getComponentDetailsLink";
import { ComponentDetailsId } from "types/types.d";

export const Assets = () => (
  <Layout.Inset>
    <Heading2>
      <RouteLink href={getComponentDetailsLink(ComponentDetailsId.assets)}>
        Assets
      </RouteLink>
    </Heading2>

    <Heading3>Icons</Heading3>
    <div className="item-container">
      <div className="item-wrapper inline assets">
        <Icon.ArrowLeft />
        <Icon.ArrowRight />
        <Icon.Bubble />
        <Icon.Calendar />
        <Icon.Checkmark />
        <Icon.Close />
        <Icon.Copy />
        <Icon.Download />
        <Icon.Dropdown />
      </div>

      <div className="item-wrapper inline assets">
        <Icon.Edit />
        <Icon.Error />
        <Icon.Help />
        <Icon.Info />
        <Icon.Receive />
        <Icon.Remove />
        <Icon.Search />
        <Icon.Send />
        <Icon.Settings />
      </div>
    </div>

    <Heading3>Logos</Heading3>
    <div className="item-container">
      <div className="item-wrapper inline assets">
        <Logo.Albedo />
        <Logo.Freighter />
        <Logo.GitHub />
        <Logo.Ledger />
        <Logo.Stellar className="stellar" />
        <Logo.Trezor />
      </div>
    </div>
  </Layout.Inset>
);
