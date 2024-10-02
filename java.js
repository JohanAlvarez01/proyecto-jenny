const themeToggleButton = document.getElementById('themeToggle');
        const body = document.body;

        // Cargar el tema guardado en localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.className = currentTheme;
            updateButtonText(currentTheme);
        }

        // Función para actualizar el texto del botón
        function updateButtonText(theme) {
            switch(theme) {
                case 'dark-theme':
                    themeToggleButton.textContent = 'Cambiar a Tema oscuro';
                    break;
                case 'colorful-theme':
                    themeToggleButton.textContent = 'Cambiar a Tema Multicolor';
                    break;
                default:
                    themeToggleButton.textContent = 'Cambiar a Tema claro';
                    break;
            }
        }

        // Función para cambiar el tema
        themeToggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-theme')) {
                body.className = 'dark-theme';
                localStorage.setItem('theme', 'dark-theme');
                updateButtonText('dark-theme');
            } else if (body.classList.contains('dark-theme')) {
                body.className = 'colorful-theme';
                localStorage.setItem('theme', 'colorful-theme');
                updateButtonText('colorful-theme');
            } else {
                body.className = 'light-theme';
                localStorage.setItem('theme', 'light-theme');
                updateButtonText('light-theme');
            }
        });