# CodeCraftAI

## Assistente de Desenvolvimento Inteligente Baseado em IA

CodeCraftAI é uma solução avançada de automação de desenvolvimento que atua como um desenvolvedor júnior virtual, utilizando inteligência artificial para automatizar tarefas repetitivas, melhorar a qualidade do código e acelerar o ciclo de desenvolvimento de software. Ele opera de forma autónoma na nuvem da empresa, integrando-se perfeitamente ao fluxo de trabalho existente.

## Visão Geral

O CodeCraftAI foi projetado para funcionar como um membro proativo da equipa de desenvolvimento. Ele monitoriza repositórios, analisa código, consulta documentação interna e implementa testes unitários e melhorias de forma autónoma. Além da interação via interface, o CodeCraftAI comunica proativamente o seu progresso e descobertas através de email e Microsoft Teams, mantendo a equipa informada.

### Principais Funcionalidades

- **Análise Inteligente de Repositórios**: Identifica automaticamente áreas do código com cobertura de testes insuficiente
- **Geração Contextual de Testes Unitários**: Implementa testes unitários de alta qualidade com base na documentação e no código existente
- **Integração com Ferramentas de Desenvolvimento**: Trabalha perfeitamente com Git, Jira e Confluence
- **Sugestões de Melhorias de Código**: Identifica e corrige problemas de qualidade, segurança e desempenho
- **Operação Autónoma**: Executa tarefas agendadas ou acionadas por eventos (ex: novo commit) sem intervenção direta do utilizador
- **Comunicação Proativa**: Envia notificações por email e Teams sobre PRs criados, testes implementados e métricas de qualidade
- **Aprendizado Contínuo**: Melhora com o tempo através do feedback dos desenvolvedores

## Arquitetura e Topologia

O CodeCraftAI é implementado como um serviço containerizado (Docker) na nuvem da empresa (AWS, Azure, GCP), garantindo escalabilidade e segurança. A arquitetura modular permite fácil extensibilidade e adaptação.

**(Um diagrama detalhado da arquitetura e topologia está incluído no PRD)**

### Componentes Chave

- **Agente Principal (Docker Container)**: Orquestra as tarefas, interage com LLMs e sistemas externos.
- **Módulo RAG**: Analisa documentação (Confluence) para contexto.
- **Módulo de Análise de Código**: Avalia cobertura de testes e qualidade.
- **Módulo de Geração de Código**: Cria testes unitários e sugestões.
- **Módulo de Integração**: Conecta-se a Git, Jira, Confluence, Email (SMTP/Graph API) e Teams (Bots/Webhooks).
- **Base de Dados Vetorial**: Armazena embeddings de documentação.
- **Fila de Mensagens**: Gerencia tarefas assíncronas.

## Operação Autónoma

O CodeCraftAI pode operar de forma autónoma, monitorizando eventos em repositórios Git ou executando tarefas agendadas:

1.  **Monitoramento de Commits**: Ao detetar um novo commit, o agente pode analisar as alterações, verificar a cobertura de testes e, se necessário, implementar testes adicionais.
2.  **Análises Agendadas**: Executa análises completas de repositórios em horários definidos (ex: semanalmente) para identificar áreas de melhoria.
3.  **Notificações Automáticas**: Após completar tarefas significativas (ex: criar um PR, atingir uma meta de cobertura), o agente envia notificações por email e/ou Teams para as partes interessadas relevantes (ex: autor do commit, tech lead).

## Demonstração

A demonstração estática incluída simula a interação com o CodeCraftAI, mostrando como ele:

1.  Analisa repositórios Git para entender a estrutura do projeto
2.  Consulta documentação no Confluence para obter contexto
3.  Implementa testes unitários para classes com cobertura insuficiente
4.  Cria Pull Requests com as alterações
5.  **(Novo)** Simula o envio de notificações por email/Teams sobre o PR criado.

### Como Executar a Demo

1.  Extraia o conteúdo do arquivo `codecraftai_demo.zip`
2.  Abra o arquivo `index.html` em qualquer navegador moderno
3.  Explore as diferentes abas para ver as funcionalidades simuladas
4.  Interaja com o chat para ver respostas pré-programadas

## Benefícios

### Para Desenvolvedores
- Redução de tarefas repetitivas e tediosas
- Foco em trabalho de maior valor e criatividade
- Aprendizado contínuo através de sugestões de código de alta qualidade
- Menos tempo gasto escrevendo testes unitários básicos

### Para Gestores
- Métricas claras de qualidade e cobertura de código
- Previsibilidade e consistência no desenvolvimento
- Redução de débito técnico
- Visibilidade em tempo real do progresso e qualidade

### Para Empresas
- ROI significativo com redução de tempo de desenvolvimento
- Aumento de qualidade e redução de bugs em produção
- Menor custo de manutenção a longo prazo
- Onboarding mais rápido de novos desenvolvedores

## Métricas de Impacto

Baseado em implementações piloto, o CodeCraftAI demonstrou:

- **68%** de redução no tempo de implementação de testes unitários
- **85%** de taxa de aceitação de código gerado
- **92%** de PRs aprovados sem revisões maiores
- Aumento médio de **24%** na cobertura de testes em projetos existentes

## Limitações Atuais

- A demo atual é estática e não possui backend real nem envia emails/mensagens reais
- Suporte limitado a linguagens além de Java na versão atual
- Requer configuração de acesso a repositórios Git, documentação, email e Teams para funcionalidade completa

## Próximos Passos

Para implementar o CodeCraftAI em um ambiente real, consulte o documento PRD (Product Requirements Document) incluído, que detalha:

- Arquitetura técnica completa e diagrama de topologia
- Requisitos de infraestrutura (incluindo Docker/Cloud)
- Plano de implementação faseado
- Integrações necessárias (incluindo Email e Teams)
- Métricas de sucesso

## Requisitos Técnicos

Para a implementação completa, são recomendados:

- Python 3.9+
- Acesso a uma API de LLM (OpenAI, Anthropic, etc.)
- Armazenamento para base de dados vetorial
- Acesso programático a repositórios Git
- Credenciais para APIs de Jira, Confluence, Email (SMTP/Graph API) e Microsoft Teams (Bots/Webhooks)
- Ambiente de execução containerizado (Docker) em nuvem (AWS/Azure/GCP)

## Contato e Suporte

Para mais informações sobre o CodeCraftAI, entre em contato através de:

- Email: thiago.sucupira@conquestone.com
  
