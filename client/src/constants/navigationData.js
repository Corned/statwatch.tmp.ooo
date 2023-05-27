import { ReactSVG } from "react-svg"

const Icon = (filename) => {
  return <ReactSVG className="link__icon" src={`assets/${filename}.svg`}/>
}

export default [
  {
    type: "navigation__section",
    header: null,
    links: [
      {
        label: "Home",
        to: "/",
        icon: Icon("dashboard-fill"),
      },
    ]
  },


  {
    type: "navigation__section",
    header: "Demo",
    links: [
      {
        label: "Scoreboard",
        to: "/1",
        icon: Icon("broadcast-fill"),
      },
      { 
        label: "Match Statistics",
        to: "/2",
        icon: Icon("line-chart-fill"),
      },
      { 
        label: "Livestat",
        to: "/3",
        icon: Icon("bar-chart-2-fill"),
      },
      { 
        label: "UI Builder",
        to: "/4",
        icon: Icon("stack-fill"),
      },
    ]
  },


  {
    type: "navigation__section",
    header: null,
    links: [
      { 
        label: "My Organizations",
        to: "/5",
        icon: Icon("group-fill"),
      },
      {
        label: "My Profile",
        to: "/6",
        icon: Icon("profile-fill"),
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
        to: "/7",
        icon: Icon("twitter-fill"),
      },
      { 
        label: "Discord",
        to: "/8",
        icon: Icon("discord-fill")
      },
      { 
        label: "Reddit",
        to: "/9",
        icon: Icon("reddit-fill"),
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
        to: "/10",
        icon: Icon("terminal-box-fill"),
      },
      {
        label: "Log out",
        to: "/11",
        icon: Icon("logout-box-fill"),
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