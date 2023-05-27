import MenuOpenIcon from "remixicon-react/MenuLineIcon"
import MenuCloseIcon from "remixicon-react/MenuFoldFillIcon"

import DashboardIcon from "remixicon-react/DashboardFillIcon"

import StreamSetupIcon from "remixicon-react/QuestionFillIcon"
import TeamBuilderIcon from "remixicon-react/ToolsFillIcon"
import ControlsIcon from "remixicon-react/RemoteControl2FillIcon"
import LivestatIcon from "remixicon-react/BarChart2FillIcon"
import UICreatorIcon from "remixicon-react/StackFillIcon"
import StatsIcon from "remixicon-react/LineChartFillIcon"

import LabsIcon from "remixicon-react/FlaskFillIcon"
import AdminIcon from "remixicon-react/TerminalBoxFillIcon"
import MyProfileIcon from "remixicon-react/ProfileFillIcon"
import LogoutIcon from "remixicon-react/LogoutBoxRFillIcon"


import DemoIcon from "remixicon-react/SlideshowFillIcon"
import OrganizationIcon from "remixicon-react/GroupFillIcon"

import TwitterIcon from "remixicon-react/TwitterFillIcon"
import DiscordIcon from "remixicon-react/DiscordFillIcon"
import RedditIcon from "remixicon-react/RedditFillIcon"

export default [
  {
    type: "navigation__section",
    header: null,
    links: [
      {
        label: "Home",
        to: "/",
        icon: <DashboardIcon/>
      },
    ]
  },


  {
    type: "navigation__section",
    header: "Demo",
    links: [
      {
        label: "Scoreboard",
        to: "/5",
        icon: <LabsIcon/>
      },
      { 
        label: "Match Statistics",
        to: "/5555",
        icon: <StatsIcon/>
      },
      { 
        label: "Livestat",
        to: "/4",
        icon: <LivestatIcon/>
      },
      { 
        label: "UI Builder",
        to: "/545",
        icon: <UICreatorIcon/>
      },
    ]
  },


  {
    type: "navigation__section",
    header: null,
    links: [
      { 
        label: "My Organizations",
        to: "/2",
        icon: <OrganizationIcon/>
      },
      {
        label: "My Profile",
        to: "/6",
        icon: <MyProfileIcon/>
      },
    ]
  },

  {
    type: "navigation__section",
    header: null,
    isFooter: true,
    links: [
      { 
        label: "Twitter",
        to: "/2",
        icon: <TwitterIcon/>
      },
      { 
        label: "Discord",
        to: "/2",
        icon: <DiscordIcon/>
      },
      { 
        label: "Reddit",
        to: "/2",
        icon: <RedditIcon/>
      },
    ]
  },


  {
    type: "navigation__section",
    header: null,
    isFooter: true,
    links: [
      {
        label: "Admin",
        to: "/6",
        icon: <AdminIcon/>
      },
      {
        label: "Log out",
        to: "/7",
        icon: <LogoutIcon/>
      },
    ]
  }
]






/* export default [
  {
    type: "navigation__section",
    links: [
      {
        label: "Home",
        to: "/",
        icon: <DashboardIcon/>
      },
    ]
  },
  {
    type: "navigation__section",
    links: [
      { 
        label: "Stream Setup Guide",
        to: "/1",
        icon: <StreamSetupIcon/>
      },
      { 
        label: "Control Panel",
        to: "/2",
        icon: <ControlsIcon/>
      },
      { 
        label: "Team Builder",
        to: "/3",
        icon: <TeamBuilderIcon/>
      },
      { 
        label: "Livestat",
        to: "/4",
        icon: <LivestatIcon/>
      },
    ]
  },
  {
    type: "navigation__section footer",
    links: [
      {
        label: "Labs",
        to: "/5",
        icon: <LabsIcon/>
      },
      {
        label: "Admin",
        to: "/6",
        icon: <AdminIcon/>
      },
      {
        label: "Log out",
        to: "/7",
        icon: <LogoutIcon/>
      },
    ]
  }
] */