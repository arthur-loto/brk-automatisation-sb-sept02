// thème par défaut
let defaultTheme = "decisions-jel";

// récupérer le thème du sessionStorage
let cssTheme = sessionStorage.getItem('cssTheme');
if ( cssTheme ) {
  cssTheme = JSON.parse(cssTheme);
  defaultTheme = cssTheme.name;
}


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atomes', 'Molécules', 'Composants'], 
    },
  },
  themes: {
    onChange: changeTheme,
    default: defaultTheme,
    list: [
      { name: "decisions-lq", class: "normal", file: "decisions-lq-variables.css", color: "#f5f293" },
      { name: "decisions-moj", class: "normal", file: "decisions-moj-variables.css", color: "#e41f1f" },
      { name: "decisions-jel", class: "normal", file: "decisions-jel-variables.css", color: "#F93C13" },
    ],
  },

}

function changeTheme(option) {
  let previewLinkElement = document.getElementById('storybook-preview-iframe').contentWindow.document.getElementById("theme-link");
  previewLinkElement.setAttribute('href', `/css/${option.file}`);
  sessionStorage.setItem('cssTheme', JSON.stringify(option));
}

export const decorators = [
  (story) => {
    if( !cssTheme ) {
      for (let i = 0; i < parameters.themes.list.length; i++) {
        if (parameters.themes.list[i].name == parameters.themes.default) {
          cssTheme = parameters.themes.list[i];
          break;
        }
      }
    }
    return {
      components: { story },
      template: `
      <link href="/css/fonts.css" rel="stylesheet" />
      <link href="/css/${cssTheme.file}" rel="stylesheet" id="theme-link" /><story />`
    }
  },
  (story) => {
    document.getElementById('root').setAttribute('style', '');
    return {
      components: { story },
      template: `<story />`
    }

  },
];

