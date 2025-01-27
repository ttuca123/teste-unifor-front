export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;

  children?: NavigationItem[];
}
export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: 'Menu',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'dashboard',
        title: 'Painel',
        type: 'item',
        url: '/dashboard',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  /*{
    id: 'ui-element',
    title: 'UI ELEMENT',
    type: 'group',
    icon: 'icon-ui',
    children: [
      {
        id: 'basic',
        title: 'Component',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'button',
            title: 'Button',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'Badges',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'breadcrumb-pagination',
            title: 'Breadcrumb & Pagination',
            type: 'item',
            url: '/basic/breadcrumb-paging'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            type: 'item',
            url: '/basic/collapse'
          },
          {
            id: 'tabs-pills',
            title: 'Tabs & Pills',
            type: 'item',
            url: '/basic/tabs-pills'
          },
          {
            id: 'typography',
            title: 'Typography',
            type: 'item',
            url: '/basic/typography'
          }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Tables',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms-element',
        title: 'Form Elements',
        type: 'item',
        url: '/forms/basic',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'tables',
        title: 'Tables',
        type: 'item',
        url: '/tables/bootstrap',
        classes: 'nav-item',
        icon: 'feather icon-server'
      }
    ]
  },
  {
    id: 'chart-maps',
    title: 'Chart',
    type: 'group',
    icon: 'icon-charts',
    children: [
      {
        id: 'apexChart',
        title: 'ApexChart',
        type: 'item',
        url: 'apexchart',
        classes: 'nav-item',
        icon: 'feather icon-pie-chart'
      }
    ]
  },*/
  {
    id: 'pages',
    title: 'Páginas ',
    type: 'group',
    icon: 'icon-pages',
    children: [
     /*{
        id: 'auth',
        title: 'Authentication',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'signup',
            title: 'Sign up',
            type: 'item',
            url: '/auth/signup',
            target: true,
            breadcrumbs: false
          },
          {
            id: 'signin',
            title: 'Sign in',
            type: 'item',
            url: '/auth/signin',
            target: true,
            breadcrumbs: false
          }
        ]
      },*/
      {
        id: 'usuario-page',
        title: 'Usuário',
        type: 'item',
        url: '/usuarios',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'aluno-page',
        title: 'Aluno',
        type: 'item',
        url: '/alunos',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'professor-page',
        title: 'Professor',
        type: 'item',
        url: '/professores',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'curso-page',
        title: 'Curso',
        type: 'item',
        url: '/cursos',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'disciplina-page',
        title: 'Disciplina',
        type: 'item',
        url: '/disciplinas',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
      {
        id: 'semestre-page',
        title: 'Semestre',
        type: 'item',
        url: '/semestres',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
       {
        id: 'matrizcurricular-page',
        title: 'Matriz Curricular',
        type: 'item',
        url: '/matrizes',
        classes: 'nav-item',
        icon: 'feather icon-sidebar'
      },
     /* {
        id: 'disabled-menu',
        title: 'Disabled Menu',
        type: 'item',
        url: 'javascript:',
        classes: 'nav-item disabled',
        icon: 'feather icon-power',
        external: true
      },
      {
        id: 'buy_now',
        title: 'Buy Now',
        type: 'item',
        icon: 'feather icon-book',
        classes: 'nav-item',
        url: 'https://codedthemes.com/item/datta-able-angular/',
        target: true,
        external: true
      }*/
    ]
  }
];
