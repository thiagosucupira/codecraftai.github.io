document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre abas
    const tabLinks = document.querySelectorAll('nav li');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Atualizar classes ativas nos links
            tabLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Atualizar conteúdo visível
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Simulação de envio de mensagem
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.querySelector('.chat-messages');
    
    function addUserMessage(text) {
        const now = new Date();
        const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                          now.getMinutes().toString().padStart(2, '0');
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <div class="message-time">${timeString}</div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function addAgentMessage(text, delay = 1000) {
        setTimeout(() => {
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + 
                              now.getMinutes().toString().padStart(2, '0');
            
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message agent';
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>Obrigado pela sua mensagem. Como assistente de desenvolvimento, posso ajudar com verificação de cobertura de testes, implementação de testes unitários e integração com Git, Jira e Confluence. Por favor, consulte a aba "Notificações Automáticas" para ver exemplos de como comunico proativamente por email e Teams.</p>
                    <div class="message-time">${timeString}</div>
                </div>
            `;
            
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, delay);
    }
    
    function handleSendMessage() {
        const text = messageInput.value.trim();
        if (text) {
            addUserMessage(text);
            messageInput.value = '';
            addAgentMessage(text);
        }
    }
    
    sendButton.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
});
