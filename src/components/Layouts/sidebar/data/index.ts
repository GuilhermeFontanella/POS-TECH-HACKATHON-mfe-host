import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';


export const NAV_DATA = [
  {
    label: "MENU PRINCIPAL",
    items: [
      {
        title: "Minhas tarefas",
        url: '/',
        icon: HomeIcon,
        items: [],
      },
      {
        title: "Configurações",
        icon: SettingsIcon,
        items: [
          {
            title: "Conta",
            url: "/profile",
          },
          {
            title: "Preferências",
            url: "/pages/settings",
          },
        ],
      },
    ]
  }
];
