const { app, Tray, Menu } = require('electron');
const path = require('path');

let tray;

app.on('ready', () => {
    // Crie uma bandeja do sistema com um ícone personalizado
    tray = new Tray(path.join(__dirname, 'naoseioque.png'));

    // Crie um menu de contexto para a bandeja
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Abrir Aplicativo',
            click: () => {
                // Adicione qualquer ação que você deseja executar quando o ícone for clicado
                // Por exemplo, você pode abrir uma janela ou realizar alguma outra tarefa.
                mainWindow.show(); // Se desejar abrir uma janela ao clicar no ícone.
            },
        },
        {
            label: 'Fechar Aplicativo',
            click: () => {
                app.quit();
            },
        },
    ]);

    // Associe o menu de contexto à bandeja
    tray.setContextMenu(contextMenu);
});
