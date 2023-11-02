import React, { useEffect, useState } from "react";
import "./styles.css";

export const AssetPreview = ({ type }: { type: "icon" | "logo" }) => {
  const [sds, setSds] = useState<any>({});
  const { Icon, Logo } = sds;

  // Importing SDS here because we need it async for server-side-rendering
  useEffect(() => {
    const initSds = async () => {
      setSds(await import("@stellar/design-system"));
    };
    initSds();
  }, []);

  const ICON = Icon
    ? [
        <Icon.AccountBalanceWallet />,
        <Icon.AccountBalance />,
        <Icon.AccountCircle />,
        <Icon.AddCircle />,
        <Icon.Add />,
        <Icon.AllInbox />,
        <Icon.Anchor />,
        <Icon.Aod />,
        <Icon.ArrowCircleDown />,
        <Icon.ArrowCircleLeft />,
        <Icon.ArrowCircleRight />,
        <Icon.ArrowCircleUp />,
        <Icon.ArrowDown />,
        <Icon.ArrowLeft />,
        <Icon.ArrowRight />,
        <Icon.ArrowSmallDown />,
        <Icon.ArrowSmallLeft />,
        <Icon.ArrowSmallRight />,
        <Icon.ArrowSmallUp />,
        <Icon.ArrowTopLeft />,
        <Icon.ArrowTopRight />,
        <Icon.ArrowUp />,
        <Icon.Article />,
        <Icon.Assets />,
        <Icon.AttachFile />,
        <Icon.Attachment />,
        <Icon.Backspace />,
        <Icon.Backup />,
        <Icon.BarChart />,
        <Icon.Block />,
        <Icon.Burn />,
        <Icon.CalendarMonth />,
        <Icon.CalendarToday />,
        <Icon.ChatBubble />,
        <Icon.Chat />,
        <Icon.CheckCircle />,
        <Icon.Check />,
        <Icon.ChevronDoubleDown />,
        <Icon.ChevronDoubleLeft />,
        <Icon.ChevronDoubleRight />,
        <Icon.ChevronDoubleUp />,
        <Icon.ChevronDown />,
        <Icon.ChevronLeft />,
        <Icon.ChevronRight />,
        <Icon.ChevronUp />,
        <Icon.Clock />,
        <Icon.Close />,
        <Icon.CloudDone />,
        <Icon.CloudDownload />,
        <Icon.Code />,
        <Icon.ContactPage />,
        <Icon.Contacts />,
        <Icon.ContentCopy />,
        <Icon.ContentPaste />,
        <Icon.CopyAll />,
        <Icon.CurrencyExchange />,
        <Icon.Dashboard />,
        <Icon.DataArray />,
        <Icon.DataObject />,
        <Icon.Database />,
        <Icon.DeleteForever />,
        <Icon.Delete />,
        <Icon.DeployedCode />,
        <Icon.Discord />,
        <Icon.Done />,
        <Icon.Dot />,
        <Icon.Download />,
        <Icon.Draft />,
        <Icon.DragIndicator />,
        <Icon.DragPan />,
        <Icon.Edit />,
        <Icon.Error />,
        <Icon.ExternalLink />,
        <Icon.Favorite />,
        <Icon.Filter />,
        <Icon.Flag />,
        <Icon.FolderCopy />,
        <Icon.Free />,
        <Icon.FrontHand />,
        <Icon.Github />,
        <Icon.Grade />,
        <Icon.GroupAdd />,
        <Icon.Help />,
        <Icon.Hide />,
        <Icon.History />,
        <Icon.Home />,
        <Icon.HourglassBottom />,
        <Icon.HourglassEmpty />,
        <Icon.HourglassFull />,
        <Icon.HourglassTop />,
        <Icon.Info />,
        <Icon.Insights />,
        <Icon.IosShare />,
        <Icon.Join />,
        <Icon.KeyVisualizer />,
        <Icon.Key />,
        <Icon.Layers />,
        <Icon.Link />,
        <Icon.LocalMall />,
        <Icon.LockOpen />,
        <Icon.Lock />,
        <Icon.Login />,
        <Icon.Logout />,
        <Icon.Mail />,
        <Icon.ManageSearch />,
        <Icon.Menu />,
        <Icon.ModeDark />,
        <Icon.ModeLight />,
        <Icon.MonetizationOn />,
        <Icon.MoreHoriz />,
        <Icon.MoreVert />,
        <Icon.MoveDown />,
        <Icon.Notifications />,
        <Icon.Password />,
        <Icon.Payments />,
        <Icon.PersonAdd />,
        <Icon.Public />,
        <Icon.QrCode2 />,
        <Icon.QrCodeScanner />,
        <Icon.QrCode />,
        <Icon.Redeem />,
        <Icon.RefreshHoriz />,
        <Icon.RefreshVert />,
        <Icon.Remove />,
        <Icon.Replay />,
        <Icon.Search />,
        <Icon.Send />,
        <Icon.Settings />,
        <Icon.Shield />,
        <Icon.ShowChart />,
        <Icon.Show />,
        <Icon.SignalCellularAlt />,
        <Icon.Smile />,
        <Icon.SortByAlpha />,
        <Icon.SpaceDashboard />,
        <Icon.StackedLineChart />,
        <Icon.Status />,
        <Icon.Store />,
        <Icon.Toll />,
        <Icon.TravelExplore />,
        <Icon.Tune />,
        <Icon.UnfoldLess />,
        <Icon.UnfoldMore />,
        <Icon.User />,
        <Icon.Users />,
        <Icon.VerifiedUser />,
        <Icon.Verified />,
        <Icon.VpnKey />,
        <Icon.Wallet />,
        <Icon.Warning />,
        <Icon.ZoomOutMap />,
      ]
    : [];

  const LOGO = Logo
    ? [
        <Logo.Albedo />,
        <Logo.Freighter />,
        <Logo.Ledger />,
        <Logo.Stellar />,
        <Logo.Trezor />,
      ]
    : [];

  const list = type === "icon" ? ICON : LOGO;

  return (
    <div className="AssetPreview">
      {list.map((l) => {
        return (
          <div className="AssetPreview__item">
            <div className="AssetPreview__item__icon">{l}</div>
            <div className="AssetPreview__item__name">{l.type.name}</div>
          </div>
        );
      })}
    </div>
  );
};
