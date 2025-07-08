// Enhanced JavaScript with fully functional features
class SolarisProApp {
  constructor() {
    this.currentUser = null;
    this.isDarkMode = false;
    this.charts = {};
    this.intervals = [];
    
    this.systemData = {
      production: 6.2,
      consumption: 4.1,
      batteryLevel: 88,
      waterLevel: 75,
      temperature: 28,
      uvIndex: 8,
      dailySavings: 12.5,
      pumpActive: true,
      aiOptimization: true,
      sellSurplus: true,
      systemHealth: 96,
      efficiency: 94.2
    };
    
    this.usersDB = [
      { username: "admin", password: "solaire2024", avatar: "AD", role: "Administrateur", color: "avatar-admin", role_color: "text-primary", role_badge: "bg-blue-100 text-blue-800", email: "admin@solaris.tn" },
      { username: "user", password: "user2024", avatar: "US", role: "Utilisateur", color: "avatar-user", role_color: "text-user", role_badge: "bg-orange-100 text-orange-800", email: "user@solaris.tn" },
      { username: "tech", password: "tech2024", avatar: "TC", role: "Technicien", color: "avatar-tech", role_color: "text-tech", role_badge: "bg-purple-100 text-purple-800", email: "tech@solaris.tn" },
      { username: "demo", password: "demo123", avatar: "DE", role: "Démo", color: "bg-green-500", role_color: "text-green-500", role_badge: "bg-green-100 text-green-800", email: "demo@solaris.tn" }
    ];
    
    // Gideon AI Memory System
    this.gideonMemory = {
      userName: null,
      userPreferences: {
        theme: 'futuristic',
        responseSpeed: 'normal',
        verbosity: 'detailed'
      },
      conversationHistory: [],
      learnedFacts: {},
      lastSession: new Date().toISOString()
    };
    
    this.initializeApp();
  }
  
  initializeApp() {
    try {
      this.showLoadingScreen();
      this.detectDarkMode();
      this.createParticles();
      this.loadGideonMemory();
      
      // Simulate loading time
      setTimeout(() => {
        this.hideLoadingScreen();
        this.showAuthModal();
        this.setupEventListeners();
      }, 2000);
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }
  
  loadGideonMemory() {
    try {
      if (localStorage.getItem('gideonQuantumMemory')) {
        const savedMemory = JSON.parse(localStorage.getItem('gideonQuantumMemory'));
        this.gideonMemory = {...this.gideonMemory, ...savedMemory};
      }
    } catch (e) {
      console.error("Gideon memory load error:", e);
    }
  }
  
  saveGideonMemory() {
    try {
      this.gideonMemory.lastSession = new Date().toISOString();
      localStorage.setItem('gideonQuantumMemory', JSON.stringify(this.gideonMemory));
    } catch (e) {
      console.error("Gideon memory save error:", e);
    }
  }
  
  showLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.display = 'flex';
    }
  }
  
  hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }
  }
  
  showAuthModal() {
    const authModal = document.getElementById('auth-modal');
    if (authModal) {
      authModal.style.display = 'flex';
    }
  }
  
  detectDarkMode() {
    try {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        this.isDarkMode = true;
        const darkIcon = document.getElementById('dark-icon');
        const lightIcon = document.getElementById('light-icon');
        if (darkIcon) darkIcon.classList.add('hidden');
        if (lightIcon) lightIcon.classList.remove('hidden');
      }
      
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
          document.documentElement.classList.add('dark');
          this.isDarkMode = true;
          const darkIcon = document.getElementById('dark-icon');
          const lightIcon = document.getElementById('light-icon');
          if (darkIcon) darkIcon.classList.add('hidden');
          if (lightIcon) lightIcon.classList.remove('hidden');
        } else {
          document.documentElement.classList.remove('dark');
          this.isDarkMode = false;
          const darkIcon = document.getElementById('dark-icon');
          const lightIcon = document.getElementById('light-icon');
          if (darkIcon) darkIcon.classList.remove('hidden');
          if (lightIcon) lightIcon.classList.add('hidden');
        }
        this.updateChartsForDarkMode();
      });
    } catch (error) {
      console.error('Error detecting dark mode:', error);
    }
  }
  
  createParticles() {
    try {
      const particlesContainer = document.getElementById('particles-container');
      if (!particlesContainer) return;
      
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 25 + 's';
        particle.style.animationDuration = (20 + Math.random() * 15) + 's';
        particlesContainer.appendChild(particle);
      }
    } catch (error) {
      console.error('Error creating particles:', error);
    }
  }
  
  setupEventListeners() {
    try {
      // Authentication
      const authForm = document.getElementById('auth-form');
      if (authForm) {
        authForm.addEventListener('submit', (e) => this.handleAuth(e));
      }
      
      const togglePassword = document.getElementById('toggle-password');
      if (togglePassword) {
        togglePassword.addEventListener('click', () => this.togglePassword());
      }
      
      const biometricLogin = document.getElementById('biometric-login');
      if (biometricLogin) {
        biometricLogin.addEventListener('click', () => this.handleBiometricLogin());
      }
      
      // Navigation
      document.querySelectorAll('.nav-link, .mobile-nav-btn').forEach(link => {
        link.addEventListener('click', (e) => this.handleNavigation(e));
      });
      
      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => this.toggleMobileSidebar());
      }
      
      // Dark mode toggle
      const darkModeToggle = document.getElementById('dark-mode-toggle');
      if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
      }
      
      // Dropdowns
      const userMenuBtn = document.getElementById('user-menu-btn');
      if (userMenuBtn) {
        userMenuBtn.addEventListener('click', (e) => this.toggleDropdown(e, 'user-dropdown'));
      }
      
      // Close dropdowns when clicking outside
      document.addEventListener('click', () => this.closeAllDropdowns());
      
      // Search functionality
      const globalSearch = document.getElementById('global-search');
      if (globalSearch) {
        globalSearch.addEventListener('input', (e) => this.handleGlobalSearch(e));
      }
      
      // Keyboard shortcuts
      document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
      
      // System controls
      this.setupSystemControls();
      
      // Payment system
      this.setupPaymentSystem();
      
      // Gideon AI
      this.setupGideonAI();
      
      // Logout
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => this.handleLogout(e));
      }
      
      // Initialize reveal animations
      this.observeElements();
    } catch (error) {
      console.error('Error setting up event listeners:', error);
    }
  }
  
  setupGideonAI() {
    try {
      const gideonInput = document.getElementById('gideon-user-input');
      const gideonSend = document.getElementById('gideon-send-btn');
      const gideonVoice = document.getElementById('gideon-voice-btn');
      const gideonClear = document.getElementById('gideon-clear-btn');
      const gideonMemory = document.getElementById('gideon-memory-btn');
      const gideonSettings = document.getElementById('gideon-settings-btn');
      
      const sendGideonMessage = (message = null) => {
        const messageText = message || (gideonInput ? gideonInput.value.trim() : '');
        if (!messageText) return;
        
        this.addGideonMessage(messageText, true);
        if (gideonInput) gideonInput.value = '';
        
        // Simulate AI response
        setTimeout(() => {
          const response = this.generateGideonResponse(messageText);
          this.addGideonMessage(response, false);
        }, 800 + Math.random() * 2000);
      };
      
      if (gideonSend) {
        gideonSend.addEventListener('click', () => sendGideonMessage());
      }
      
      if (gideonInput) {
        gideonInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') sendGideonMessage();
        });
      }
      
      if (gideonVoice) {
        gideonVoice.addEventListener('click', () => this.handleGideonVoice());
      }
      
      if (gideonClear) {
        gideonClear.addEventListener('click', () => this.handleGideonClear());
      }
      
      if (gideonMemory) {
        gideonMemory.addEventListener('click', () => this.handleGideonMemory());
      }
      
      if (gideonSettings) {
        gideonSettings.addEventListener('click', () => this.handleGideonSettings());
      }
      
    } catch (error) {
      console.error('Error setting up Gideon AI:', error);
    }
  }
  
  addGideonMessage(message, isUser) {
    try {
      const gideonMessages = document.getElementById('gideon-chat-messages');
      if (!gideonMessages) return;
      
      const messageDiv = document.createElement('div');
      messageDiv.className = 'gideon-message';
      
      if (isUser) {
        messageDiv.classList.add('gideon-user-message');
        messageDiv.style.background = 'linear-gradient(135deg, var(--gideon-neon-purple), var(--gideon-neon-pink))';
        messageDiv.style.color = 'white';
        messageDiv.style.marginLeft = 'auto';
        messageDiv.style.borderBottomRightRadius = '5px';
        messageDiv.style.boxShadow = '0 0 15px rgba(159, 0, 255, 0.5)';
        messageDiv.textContent = message;
      } else {
        messageDiv.classList.add('gideon-assistant-message');
        messageDiv.innerHTML = `<span class="gideon-command-prompt">></span> ${message}`;
      }
      
      gideonMessages.appendChild(messageDiv);
      
      // Add to conversation history
      this.gideonMemory.conversationHistory.push({
        text: message,
        isUser: isUser,
        timestamp: new Date().toISOString()
      });
      
      this.saveGideonMemory();
      gideonMessages.scrollTop = gideonMessages.scrollHeight;
    } catch (error) {
      console.error('Error adding Gideon message:', error);
    }
  }
  
  generateGideonResponse(userMessage) {
    try {
      const lowerMsg = userMessage.toLowerCase();
      
      // Solar system specific responses
      if (lowerMsg.includes('production') || lowerMsg.includes('énergie') || lowerMsg.includes('solaire')) {
        return `Analyse du système photovoltaïque:<br>
          • Production actuelle: ${this.systemData.production.toFixed(1)} kW<br>
          • Efficacité: ${this.systemData.efficiency.toFixed(1)}%<br>
          • Conditions optimales détectées<br>
          🔋 Recommandation: Stockage batterie prioritaire`;
      }
      
      if (lowerMsg.includes('batterie') || lowerMsg.includes('battery')) {
        return `État batterie intelligent:<br>
          • Niveau: ${Math.round(this.systemData.batteryLevel)}%<br>
          • Santé: 96% (Excellent)<br>
          • Autonomie estimée: 6h 30min<br>
          ⚡ Mode IA activé pour optimisation`;
      }
      
      if (lowerMsg.includes('pompe') || lowerMsg.includes('eau') || lowerMsg.includes('water')) {
        return `Système hydraulique intelligent:<br>
          • État pompe: ${this.systemData.pumpActive ? 'Actif' : 'Arrêtée'}<br>
          • Niveau réservoir: ${this.systemData.waterLevel}%<br>
          • Efficacité: 87%<br>
          💧 Optimisation solaire en cours`;
      }
      
      // Math calculations
      if (lowerMsg.includes('calcul') || lowerMsg.includes('calculate') || 
          (lowerMsg.includes('+') || lowerMsg.includes('-') || lowerMsg.includes('*') || lowerMsg.includes('/'))) {
        try {
          const mathExpr = userMessage
            .replace(/calcul|calculate/i, '')
            .replace(/plus/gi, '+')
            .replace(/moins/gi, '-')
            .replace(/fois|multiplié par/gi, '*')
            .replace(/divisé par/gi, '/')
            .trim();
          
          const result = this.safeMathEval(mathExpr);
          if (result !== null) {
            return `Calcul quantique:<div class="gideon-math-solution">` +
                   `<span class="gideon-math-expression">${mathExpr}</span> = ` +
                   `<span class="gideon-math-result">${result}</span></div>`;
          }
        } catch (e) {
          return "Erreur dans le processeur mathématique quantique.";
        }
      }
      
      // System status
      if (lowerMsg.includes('système') || lowerMsg.includes('status') || lowerMsg.includes('diagnostic')) {
        return `DIAGNOSTIC SYSTÈME SOLARIS:<br>
          - Neural Core: Opérationnel<br>
          - Production: ${this.systemData.production.toFixed(1)} kW<br>
          - Batterie: ${Math.round(this.systemData.batteryLevel)}%<br>
          - Efficacité globale: ${this.systemData.efficiency.toFixed(1)}%<br>
          - Santé système: ${this.systemData.systemHealth}%<br><br>
          Tous systèmes nominaux.`;
      }
      
      // User identification
      if ((lowerMsg.includes('mon nom') || lowerMsg.includes("je suis ") || lowerMsg.includes('je m\'appelle')) && !this.gideonMemory.userName) {
        const nameMatch = userMessage.match(/(?:mon nom est|je suis|je m['']appelle) ([^\s,.!?]+)/i);
        if (nameMatch && nameMatch[1]) {
          this.gideonMemory.userName = nameMatch[1];
          this.saveGideonMemory();
          return `Identité enregistrée: ${this.gideonMemory.userName}. Données stockées dans la mémoire quantique. Comment puis-je vous assister avec votre système solaire, ${this.gideonMemory.userName} ?`;
        }
      }
      
      // Time and date
      if (lowerMsg.includes('heure') || lowerMsg.includes('date') || lowerMsg.includes('time')) {
        const now = new Date();
        return `Données temporelles actuelles:<br>
          - Heure locale: ${now.toLocaleTimeString('fr-FR')}<br>
          - Date: ${now.toLocaleDateString('fr-FR')}<br>
          - Fuseau: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`;
      }
      
      // Help
      if (lowerMsg.includes('aide') || lowerMsg.includes('help') || lowerMsg.includes('que peux-tu faire')) {
        return "COMMANDES GIDEON DISPONIBLES:<br>" +
            "- Analyse système photovoltaïque<br>" +
            "- Calculs mathématiques avancés<br>" +
            "- Diagnostic batterie et pompe<br>" +
            "- Optimisation énergétique IA<br>" +
            "- Surveillance temps réel<br>" +
            "- Mémorisation données utilisateur<br>" +
            "- Interface vocale (commande 'écoute')<br><br>" +
            "Mon réseau neuronal s'adapte à vos habitudes d'utilisation.";
      }
      
      // Memory commands
      if (lowerMsg.startsWith('retiens que') || lowerMsg.startsWith('mémorise')) {
        const fact = userMessage.replace(/retiens que|mémorise/i, '').trim();
        if (fact) {
          const factKey = fact.substring(0, 30).toLowerCase().replace(/\s+/g, '_');
          this.gideonMemory.learnedFacts[factKey] = fact;
          this.saveGideonMemory();
          return "Information stockée dans les banques mémoire quantiques. Données conservées pour référence future.";
        }
      }
      
      // What do you know about me
      if (lowerMsg.includes('que sais-tu') || lowerMsg.includes('données personnelles')) {
        if (this.gideonMemory.userName || Object.keys(this.gideonMemory.learnedFacts).length > 0) {
          let response = "DONNÉES PERSONNELLES STOCKÉES:<br>";
          if (this.gideonMemory.userName) response += `- Nom: ${this.gideonMemory.userName}<br>`;
          
          if (Object.keys(this.gideonMemory.learnedFacts).length > 0) {
            response += "- Faits mémorisés:<br>";
            for (const key in this.gideonMemory.learnedFacts) {
              response += `  * ${this.gideonMemory.learnedFacts[key]}<br>`;
            }
          }
          return response;
        } else {
          return "Aucune donnée personnelle stockée. Utilisez 'retiens que' pour m'enseigner des informations.";
        }
      }
      
      // Default responses
      const contextualResponses = [
        "Analyse en cours via les réseaux neuraux quantiques. Pouvez-vous préciser votre demande ?",
        "Mes processeurs contextuels nécessitent plus de données. Reformulez votre requête.",
        "Requête intéressante. Mes algorithmes adaptatifs suggèrent de consulter l'aide avec 'aide'.",
        this.gideonMemory.userName 
          ? `${this.gideonMemory.userName}, mes algorithmes de réponse nécessitent plus de contexte pour générer une réponse optimale.` 
          : "Mes algorithmes de réponse nécessitent plus de contexte pour générer une réponse optimale."
      ];
      
      return contextualResponses[Math.floor(Math.random() * contextualResponses.length)];
      
    } catch (error) {
      console.error('Error generating Gideon response:', error);
      return 'Erreur dans les circuits neuraux. Veuillez réessayer.';
    }
  }
  
  safeMathEval(expression) {
    try {
      const cleanExpr = expression
        .replace(/[^-()\d/*+.]/g, '')
        .replace(/(\d)\s+(\d)/g, '$1$2');
      
      return new Function(`return ${cleanExpr}`)();
    } catch (e) {
      return null;
    }
  }
  
  handleGideonVoice() {
    try {
      if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'fr-FR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        const voiceBtn = document.getElementById('gideon-voice-btn');
        if (voiceBtn) {
          voiceBtn.innerHTML = '<i class="fas fa-microphone-slash"></i> Écoute...';
          voiceBtn.classList.add('active');
        }
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          const gideonInput = document.getElementById('gideon-user-input');
          if (gideonInput) {
            gideonInput.value = transcript;
            this.addGideonMessage(transcript, true);
            gideonInput.value = '';
            
            setTimeout(() => {
              const response = this.generateGideonResponse(transcript);
              this.addGideonMessage(response, false);
            }, 1000);
          }
        };
        
        recognition.onerror = () => {
          this.addGideonMessage("Erreur interface vocale. Utilisez la saisie texte.", false);
        };
        
        recognition.onend = () => {
          if (voiceBtn) {
            voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Interface Vocale';
            voiceBtn.classList.remove('active');
          }
        };
        
        recognition.start();
      } else {
        this.addGideonMessage("Interface vocale non supportée. Chrome ou Edge recommandés.", false);
      }
    } catch (error) {
      console.error('Error handling Gideon voice:', error);
    }
  }
  
  handleGideonClear() {
    try {
      this.addGideonMessage("Commande de purge reçue. Confirmer effacement mémoire ?", false);
      
      setTimeout(() => {
        const gideonMessages = document.getElementById('gideon-chat-messages');
        if (gideonMessages) {
          gideonMessages.innerHTML = '';
          this.gideonMemory.conversationHistory = [];
          this.saveGideonMemory();
          this.addGideonMessage("Purge mémoire terminée. Toutes les données de session effacées.", false);
          this.addGideonMessage("Système redémarré. Comment puis-je vous assister ?", false);
        }
      }, 2000);
    } catch (error) {
      console.error('Error handling Gideon clear:', error);
    }
  }
  
  handleGideonMemory() {
    try {
      let memoryInfo = "ACCÈS MÉMOIRE QUANTIQUE:<br>";
      
      if (this.gideonMemory.userName) {
        memoryInfo += `- Désignation utilisateur: ${this.gideonMemory.userName}<br>`;
      }
      
      memoryInfo += `- Historique conversation: ${this.gideonMemory.conversationHistory.length} entrées<br>`;
      memoryInfo += `- Faits appris: ${Object.keys(this.gideonMemory.learnedFacts).length}<br>`;
      memoryInfo += `- Dernière session: ${new Date(this.gideonMemory.lastSession).toLocaleString('fr-FR')}<br><br>`;
      
      if (Object.keys(this.gideonMemory.learnedFacts).length > 0) {
        memoryInfo += "FAITS STOCKÉS:<br>";
        for (const key in this.gideonMemory.learnedFacts) {
          memoryInfo += `- ${this.gideonMemory.learnedFacts[key]}<br>`;
        }
      } else {
        memoryInfo += "Aucun fait supplémentaire stocké. Utilisez 'retiens que' pour stocker des informations.";
      }
      
      this.addGideonMessage(memoryInfo, false);
    } catch (error) {
      console.error('Error handling Gideon memory:', error);
    }
  }
  
  handleGideonSettings() {
    try {
      this.addGideonMessage("INTERFACE PARAMÈTRES SYSTÈME", false);
      // Settings interface could be implemented here
      this.addGideonMessage("Paramètres Gideon: Interface futuriste, Vitesse normale, Détail complet", false);
    } catch (error) {
      console.error('Error handling Gideon settings:', error);
    }
  }
  
  setupSystemControls() {
    try {
      // Battery controls
      const batteryMode = document.getElementById('battery-mode');
      if (batteryMode) {
        batteryMode.addEventListener('change', (e) => {
          this.showToast(`Mode batterie: ${e.target.value}`, 'success');
        });
      }
      
      const forceCharge = document.getElementById('force-charge');
      if (forceCharge) {
        forceCharge.addEventListener('click', () => {
          this.showToast('Charge intelligente IA activée', 'success');
        });
      }
      
      // Pump controls
      const startPump = document.getElementById('start-pump');
      if (startPump) {
        startPump.addEventListener('click', () => {
          this.systemData.pumpActive = true;
          this.updatePumpStatus();
          this.showToast('Pompe démarrée avec optimisation IA', 'success');
        });
      }
      
      const stopPump = document.getElementById('stop-pump');
      if (stopPump) {
        stopPump.addEventListener('click', () => {
          this.systemData.pumpActive = false;
          this.updatePumpStatus();
          this.showToast('Pompe arrêtée', 'warning');
        });
      }
      
      // System settings
      const aiOptimization = document.getElementById('ai-optimization');
      if (aiOptimization) {
        aiOptimization.addEventListener('change', (e) => {
          this.systemData.aiOptimization = e.target.checked;
          this.showToast(`Optimisation IA ${e.target.checked ? 'activée' : 'désactivée'}`, e.target.checked ? 'success' : 'warning');
        });
      }
      
      const systemRestart = document.getElementById('system-restart');
      if (systemRestart) {
        systemRestart.addEventListener('click', () => {
          this.showToast('Redémarrage intelligent en cours...', 'info');
          setTimeout(() => {
            this.showToast('Système redémarré avec optimisations IA', 'success');
          }, 3000);
        });
      }
    } catch (error) {
      console.error('Error setting up system controls:', error);
    }
  }
  
  setupPaymentSystem() {
    try {
      // Hedera HashPack connection
      const connectHashpack = document.getElementById('connect-hashpack');
      if (connectHashpack) {
        connectHashpack.addEventListener('click', () => {
          this.showToast('Connexion à HashPack...', 'info');
          setTimeout(() => {
            this.showToast('HashPack connecté avec succès', 'success');
          }, 1500);
        });
      }
      
      // Bitcoin QR generation
      const generateBtcQr = document.getElementById('generate-btc-qr');
      if (generateBtcQr) {
        generateBtcQr.addEventListener('click', () => {
          this.showToast('QR Code Bitcoin généré', 'success');
          this.generateBitcoinQR();
        });
      }
      
      // Ethereum MetaMask connection
      const connectMetamask = document.getElementById('connect-metamask');
      if (connectMetamask) {
        connectMetamask.addEventListener('click', () => {
          this.connectMetaMask();
        });
      }
      
      // Bank transfer
      const bankTransfer = document.getElementById('bank-transfer');
      if (bankTransfer) {
        bankTransfer.addEventListener('click', () => {
          this.showToast('Redirection vers l\'interface bancaire STB...', 'info');
          setTimeout(() => {
            this.showToast('Paiement TND simulé avec succès', 'success');
          }, 2000);
        });
      }
      
      // Energy sale form
      const energySaleForm = document.getElementById('energy-sale-form');
      if (energySaleForm) {
        energySaleForm.addEventListener('submit', (e) => this.handleEnergySale(e));
      }
      
      // Real-time calculation
      const energyAmount = document.getElementById('energy-amount');
      const paymentMethod = document.getElementById('payment-method');
      if (energyAmount && paymentMethod) {
        energyAmount.addEventListener('input', () => this.updateEstimatedAmount());
        paymentMethod.addEventListener('change', () => this.updateEstimatedAmount());
      }
    } catch (error) {
      console.error('Error setting up payment system:', error);
    }
  }
  
  generateBitcoinQR() {
    try {
      // Simulate Bitcoin address generation
      const btcAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';
      this.showToast(`Adresse Bitcoin: ${btcAddress}`, 'info');
      
      // In a real implementation, you would generate a QR code here
      console.log('Bitcoin QR Code generated for address:', btcAddress);
    } catch (error) {
      console.error('Error generating Bitcoin QR:', error);
    }
  }
  
  connectMetaMask() {
    try {
      if (typeof window.ethereum !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(accounts => {
            this.showToast(`MetaMask connecté: ${accounts[0].substring(0, 6)}...${accounts[0].substring(38)}`, 'success');
          })
          .catch(error => {
            this.showToast('Connexion MetaMask refusée', 'error');
          });
      } else {
        this.showToast('MetaMask non détecté. Veuillez installer MetaMask.', 'error');
      }
    } catch (error) {
      console.error('Error connecting MetaMask:', error);
      this.showToast('Erreur de connexion MetaMask', 'error');
    }
  }
  
  updateEstimatedAmount() {
    try {
      const energyAmount = document.getElementById('energy-amount');
      const paymentMethod = document.getElementById('payment-method');
      const estimatedAmount = document.getElementById('estimated-amount');
      const unitPrice = document.getElementById('unit-price');
      const amountProgress = document.getElementById('amount-progress');
      
      if (!energyAmount || !paymentMethod || !estimatedAmount) return;
      
      const amount = parseFloat(energyAmount.value) || 0;
      const method = paymentMethod.value;
      
      // Different rates for different payment methods
      const rates = {
        hbar: 0.85,
        btc: 0.90,
        eth: 0.88,
        tnd: 0.80
      };
      
      const rate = rates[method] || 0.85;
      const total = amount * rate;
      
      if (unitPrice) unitPrice.textContent = `${rate} DT/kWh`;
      if (estimatedAmount) estimatedAmount.textContent = `${total.toFixed(2)} DT`;
      
      // Update progress bar
      if (amountProgress) {
        const maxAmount = 50; // Maximum kWh for visualization
        const percentage = Math.min((amount / maxAmount) * 100, 100);
        amountProgress.style.width = percentage + '%';
      }
    } catch (error) {
      console.error('Error updating estimated amount:', error);
    }
  }
  
  handleEnergySale(e) {
    e.preventDefault();
    try {
      const energyAmount = document.getElementById('energy-amount');
      const paymentMethod = document.getElementById('payment-method');
      
      if (!energyAmount || !paymentMethod) return;
      
      const amount = parseFloat(energyAmount.value);
      const method = paymentMethod.value;
      
      if (amount <= 0) {
        this.showToast('Veuillez entrer une quantité valide', 'error');
        return;
      }
      
      this.showToast(`Traitement de la vente: ${amount} kWh via ${method.toUpperCase()}...`, 'info');
      
      // Simulate transaction processing
      setTimeout(() => {
        this.showToast(`Vente réussie! ${amount} kWh vendus via ${method.toUpperCase()}`, 'success');
        this.addTransactionToHistory(amount, method);
        energyAmount.value = '';
        this.updateEstimatedAmount();
      }, 2000);
      
    } catch (error) {
      console.error('Error handling energy sale:', error);
      this.showToast('Erreur lors de la vente', 'error');
    }
  }
  
  addTransactionToHistory(amount, method) {
    try {
      const transactionHistory = document.getElementById('transaction-history');
      if (!transactionHistory) return;
      
      const rates = {
        hbar: 0.85,
        btc: 0.90,
        eth: 0.88,
        tnd: 0.80
      };
      
      const icons = {
        hbar: 'fas fa-coins',
        btc: 'fab fa-bitcoin',
        eth: 'fab fa-ethereum',
        tnd: 'fas fa-university'
      };
      
      const colors = {
        hbar: 'text-purple-500',
        btc: 'text-yellow-500',
        eth: 'text-blue-500',
        tnd: 'text-green-500'
      };
      
      const total = (amount * rates[method]).toFixed(2);
      const now = new Date();
      const timeStr = now.toLocaleString('fr-FR');
      
      const transactionDiv = document.createElement('div');
      transactionDiv.className = 'flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg fade-in';
      transactionDiv.innerHTML = `
        <div class="flex items-center">
          <i class="${icons[method]} ${colors[method]} mr-3"></i>
          <div>
            <div class="font-medium">Vente ${method.toUpperCase()}</div>
            <div class="text-sm text-gray-500">${amount} kWh • ${timeStr}</div>
          </div>
        </div>
        <span class="font-bold text-green-600">+${total} DT</span>
      `;
      
      transactionHistory.insertBefore(transactionDiv, transactionHistory.firstChild);
      
      // Keep only last 5 transactions
      while (transactionHistory.children.length > 5) {
        transactionHistory.removeChild(transactionHistory.lastChild);
      }
    } catch (error) {
      console.error('Error adding transaction to history:', error);
    }
  }
  
  updatePumpStatus() {
    try {
      const statusElement = document.getElementById('pump-status');
      if (statusElement) {
        if (this.systemData.pumpActive) {
          statusElement.textContent = 'Actif • IA';
          statusElement.className = 'px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full status-indicator online';
        } else {
          statusElement.textContent = 'Arrêtée';
          statusElement.className = 'px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full';
        }
      }
    } catch (error) {
      console.error('Error updating pump status:', error);
    }
  }
  
  handleAuth(e) {
    e.preventDefault();
    try {
      const usernameEl = document.getElementById('auth-user');
      const passwordEl = document.getElementById('auth-pass');
      
      if (!usernameEl || !passwordEl) return;
      
      const username = usernameEl.value.trim();
      const password = passwordEl.value;
      
      const user = this.usersDB.find(u => u.username === username && u.password === password);
      
      if (user) {
        this.currentUser = user;
        this.updateUserUI();
        
        const authModal = document.getElementById('auth-modal');
        const mainApp = document.getElementById('main-app');
        
        if (authModal) authModal.style.display = 'none';
        if (mainApp) mainApp.style.display = 'flex';
        
        this.initMainApp();
        this.showToast(`Bienvenue ${this.capitalize(user.username)} !`, 'success');
      } else {
        const authMsg = document.getElementById('auth-msg');
        if (authMsg) {
          authMsg.textContent = 'Identifiants incorrects.';
          setTimeout(() => {
            authMsg.textContent = '';
          }, 3000);
        }
      }
    } catch (error) {
      console.error('Error handling auth:', error);
    }
  }
  
  handleBiometricLogin() {
    this.showToast('Authentification biométrique non disponible en démo', 'info');
  }
  
  togglePassword() {
    try {
      const passwordInput = document.getElementById('auth-pass');
      const icon = document.querySelector('#toggle-password i');
      
      if (passwordInput && icon) {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text';
          icon.classList.remove('fa-eye');
          icon.classList.add('fa-eye-slash');
        } else {
          passwordInput.type = 'password';
          icon.classList.remove('fa-eye-slash');
          icon.classList.add('fa-eye');
        }
      }
    } catch (error) {
      console.error('Error toggling password:', error);
    }
  }
  
  updateUserUI() {
    if (!this.currentUser) return;
    
    try {
      // Header
      const headerAvatar = document.getElementById('header-avatar');
      const headerUsername = document.getElementById('header-username');
      const headerRole = document.getElementById('header-role');
      
      if (headerAvatar) {
        headerAvatar.className = `h-8 w-8 rounded-full flex items-center justify-center text-white ${this.currentUser.color}`;
        headerAvatar.innerHTML = `<span>${this.currentUser.avatar}</span>`;
      }
      
      if (headerUsername) headerUsername.textContent = this.capitalize(this.currentUser.username);
      if (headerRole) headerRole.textContent = this.currentUser.role;
      
      // Dropdown
      const dropdownAvatar = document.getElementById('dropdown-avatar');
      const dropdownUsername = document.getElementById('dropdown-username');
      const dropdownEmail = document.getElementById('dropdown-email');
      const dropdownRole = document.getElementById('dropdown-role');
      
      if (dropdownAvatar) {
        dropdownAvatar.className = `h-12 w-12 rounded-full flex items-center justify-center text-white ${this.currentUser.color}`;
        dropdownAvatar.innerHTML = `<span>${this.currentUser.avatar}</span>`;
      }
      
      if (dropdownUsername) dropdownUsername.textContent = this.capitalize(this.currentUser.username);
      if (dropdownEmail) dropdownEmail.textContent = this.currentUser.email;
      if (dropdownRole) dropdownRole.textContent = this.currentUser.role;
      
      // Sidebar
      const sidebarAvatar = document.getElementById('sidebar-avatar');
      const sidebarUsername = document.getElementById('sidebar-username');
      const sidebarRole = document.getElementById('sidebar-role');
      
      if (sidebarAvatar) {
        sidebarAvatar.className = `h-10 w-10 rounded-full flex items-center justify-center text-white ${this.currentUser.color}`;
        sidebarAvatar.innerHTML = `<span>${this.currentUser.avatar}</span>`;
      }
      
      if (sidebarUsername) sidebarUsername.textContent = this.capitalize(this.currentUser.username);
      if (sidebarRole) sidebarRole.textContent = this.currentUser.role;
      
      // Initialize Gideon with user context
      this.initializeGideonWithUser();
      
    } catch (error) {
      console.error('Error updating user UI:', error);
    }
  }
  
  initializeGideonWithUser() {
    try {
      const gideonMessages = document.getElementById('gideon-chat-messages');
      if (!gideonMessages || !this.currentUser) return;
      
      const roleText = this.currentUser.role === 'Technicien' ? 
        ' <span style="color: var(--gideon-neon-purple);">(mode technicien)</span>' : 
        this.currentUser.role === 'Utilisateur' ? 
        ' <span style="color: var(--gideon-neon-blue);">(mode utilisateur)</span>' : 
        ' <span style="color: var(--gideon-neon-pink);">(mode admin)</span>';
      
      // Clear existing messages and add welcome message
      gideonMessages.innerHTML = `
        <div class="gideon-message gideon-assistant-message">
          <span class="gideon-command-prompt">></span> Bonjour <b>${this.capitalize(this.currentUser.username)}</b> ! 👋<br>
          Je suis Gideon, votre assistant IA quantique pour Solaris Pro${roleText}.<br><br>
          🧠 <strong>Capacités Neural Network:</strong><br>
          • Analyse système photovoltaïque temps réel<br>
          • Optimisation énergétique prédictive<br>
          • Diagnostic batterie et pompe intelligent<br>
          • Calculs mathématiques quantiques<br>
          • Apprentissage adaptatif continu<br><br>
          Comment puis-je optimiser votre système solaire aujourd'hui ?
        </div>
      `;
    } catch (error) {
      console.error('Error initializing Gideon with user:', error);
    }
  }
  
  initMainApp() {
    try {
      this.initCharts();
      this.showSection('dashboard');
      
      const mobileNav = document.getElementById('mobile-nav');
      if (mobileNav) {
        mobileNav.classList.add('show');
      }
      
      // Start real-time updates
      this.startRealTimeUpdates();
    } catch (error) {
      console.error('Error initializing main app:', error);
    }
  }
  
  startRealTimeUpdates() {
    try {
      // Clear existing intervals
      this.intervals.forEach(interval => clearInterval(interval));
      this.intervals = [];
      
      // Update system data every 5 seconds
      this.intervals.push(setInterval(() => this.updateSystemData(), 5000));
    } catch (error) {
      console.error('Error starting real-time updates:', error);
    }
  }
  
  handleNavigation(e) {
    e.preventDefault();
    try {
      const section = e.currentTarget.getAttribute('href')?.replace('#', '') || e.currentTarget.getAttribute('data-section');
      if (section) {
        this.showSection(section);
      }
    } catch (error) {
      console.error('Error handling navigation:', error);
    }
  }
  
  showSection(sectionName) {
    try {
      // Hide all sections
      document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('hidden');
      });
      
      // Show target section
      const targetSection = document.getElementById(sectionName + '-section');
      if (targetSection) {
        targetSection.classList.remove('hidden');
        setTimeout(() => this.observeElements(), 100);
      }
      
      // Update navigation state
      this.updateNavigationState(sectionName);
      
      // Update page title
      document.title = `Solaris Pro - ${this.getSectionTitle(sectionName)}`;
    } catch (error) {
      console.error('Error showing section:', error);
    }
  }
  
  getSectionTitle(sectionName) {
    const titles = {
      dashboard: 'Tableau de bord',
      analytics: 'Analytics Avancées',
      production: 'Production',
      battery: 'Batterie',
      water: 'Réservoir d\'eau',
      automation: 'Automatisation',
      settings: 'Paramètres',
      payments: 'Méthodes de Paiement'
    };
    return titles[sectionName] || 'Système Intelligent';
  }
  
  updateNavigationState(sectionName) {
    try {
      // Update desktop nav links
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('text-primary', 'bg-primary/10');
        link.classList.add('text-gray-600', 'dark:text-gray-300');
      });
      
      // Update mobile nav buttons
      document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.remove('text-primary');
        btn.classList.add('text-gray-400');
      });
      
      // Activate current nav link
      const activeNavLink = document.querySelector(`.nav-link[href="#${sectionName}"]`);
      if (activeNavLink) {
        activeNavLink.classList.add('text-primary', 'bg-primary/10');
        activeNavLink.classList.remove('text-gray-600', 'dark:text-gray-300');
      }
      
      const activeMobileBtn = document.querySelector(`.mobile-nav-btn[data-section="${sectionName}"]`);
      if (activeMobileBtn) {
        activeMobileBtn.classList.add('text-primary');
        activeMobileBtn.classList.remove('text-gray-400');
      }
    } catch (error) {
      console.error('Error updating navigation state:', error);
    }
  }
  
  toggleMobileSidebar() {
    // Mobile sidebar functionality can be added here if needed
    this.showToast('Menu mobile', 'info');
  }
  
  toggleDarkMode() {
    try {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark');
      
      const darkIcon = document.getElementById('dark-icon');
      const lightIcon = document.getElementById('light-icon');
      
      if (this.isDarkMode) {
        if (darkIcon) darkIcon.classList.add('hidden');
        if (lightIcon) lightIcon.classList.remove('hidden');
      } else {
        if (darkIcon) darkIcon.classList.remove('hidden');
        if (lightIcon) lightIcon.classList.add('hidden');
      }
      
      this.updateChartsForDarkMode();
      this.showToast('Mode ' + (this.isDarkMode ? 'sombre' : 'clair') + ' activé', 'info');
    } catch (error) {
      console.error('Error toggling dark mode:', error);
    }
  }
  
  toggleDropdown(e, dropdownId) {
    try {
      e.stopPropagation();
      
      // Close all other dropdowns
      document.querySelectorAll('[id$="-dropdown"]').forEach(dropdown => {
        if (dropdown.id !== dropdownId) {
          dropdown.classList.add('hidden');
        }
      });
      
      // Toggle target dropdown
      const dropdown = document.getElementById(dropdownId);
      if (dropdown) {
        dropdown.classList.toggle('hidden');
      }
    } catch (error) {
      console.error('Error toggling dropdown:', error);
    }
  }
  
  closeAllDropdowns() {
    try {
      document.querySelectorAll('[id$="-dropdown"]').forEach(dropdown => {
        dropdown.classList.add('hidden');
      });
    } catch (error) {
      console.error('Error closing all dropdowns:', error);
    }
  }
  
  handleGlobalSearch(e) {
    try {
      const query = e.target.value.toLowerCase();
      if (query.length < 2) return;
      
      // Simulate search functionality
      this.showToast(`Recherche: "${query}"`, 'info');
    } catch (error) {
      console.error('Error handling global search:', error);
    }
  }
  
  handleKeyboardShortcuts(e) {
    try {
      // Cmd/Ctrl + K for search
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const globalSearch = document.getElementById('global-search');
        if (globalSearch) globalSearch.focus();
      }
      
      // Escape to close dropdowns
      if (e.key === 'Escape') {
        this.closeAllDropdowns();
      }
    } catch (error) {
      console.error('Error handling keyboard shortcuts:', error);
    }
  }
  
  handleLogout(e) {
    try {
      e.preventDefault();
      
      // Clear intervals
      this.intervals.forEach(interval => clearInterval(interval));
      this.intervals = [];
      
      const mainApp = document.getElementById('main-app');
      const authModal = document.getElementById('auth-modal');
      const mobileNav = document.getElementById('mobile-nav');
      
      if (mainApp) mainApp.style.display = 'none';
      if (authModal) authModal.style.display = 'flex';
      if (mobileNav) mobileNav.classList.remove('show');
      
      this.currentUser = null;
      
      const authUser = document.getElementById('auth-user');
      const authPass = document.getElementById('auth-pass');
      const authMsg = document.getElementById('auth-msg');
      
      if (authUser) authUser.value = '';
      if (authPass) authPass.value = '';
      if (authMsg) authMsg.textContent = '';
      
      this.showToast('Déconnexion réussie', 'info');
    } catch (error) {
      console.error('Error handling logout:', error);
    }
  }
  
  updateSystemData() {
    try {
      // Simulate real-time data updates
      this.systemData.production += (Math.random() - 0.5) * 0.2;
      this.systemData.production = Math.max(0, Math.min(10, this.systemData.production));
      
      this.systemData.consumption += (Math.random() - 0.5) * 0.1;
      this.systemData.consumption = Math.max(0, this.systemData.consumption);
      
      this.systemData.batteryLevel += (Math.random() - 0.5) * 0.5;
      this.systemData.batteryLevel = Math.max(10, Math.min(100, this.systemData.batteryLevel));
      
      // Update UI elements
      const currentProduction = document.getElementById('current-production');
      if (currentProduction) {
        currentProduction.textContent = this.systemData.production.toFixed(1) + ' kW';
      }
      
      const batteryLevel = document.getElementById('battery-level');
      if (batteryLevel) {
        batteryLevel.textContent = Math.round(this.systemData.batteryLevel) + '%';
      }
      
      const currentConsumption = document.getElementById('current-consumption');
      if (currentConsumption) {
        currentConsumption.textContent = this.systemData.consumption.toFixed(1) + ' kW';
      }
      
      // Update charts if they exist
      this.updateChartsData();
      
    } catch (error) {
      console.error('Error updating system data:', error);
    }
  }
  
  initCharts() {
    try {
      this.initProductionChart();
      this.initConsumptionChart();
    } catch (error) {
      console.error('Error initializing charts:', error);
    }
  }
  
  initProductionChart() {
    try {
      const ctx = document.getElementById('productionChart');
      if (!ctx) return;
      
      // Destroy existing chart if it exists
      if (this.charts.production) {
        this.charts.production.destroy();
        this.charts.production = null;
      }
      
      this.charts.production = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 24}, (_, i) => i + 'h'),
          datasets: [{
            label: 'Production (kW)',
            data: [0,0,0,0,0,0,1.2,3.5,5.8,7.2,8.1,7.9,7.5,6.8,5.2,3.1,1.8,0.5,0,0,0,0,0,0],
            borderColor: 'rgb(59, 130, 246)',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            intersect: false,
            mode: 'index'
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: this.isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              },
              ticks: {
                color: this.isDarkMode ? '#fff' : '#374151'
              }
            },
            x: {
              grid: {
                color: this.isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
              },
              ticks: {
                color: this.isDarkMode ? '#fff' : '#374151'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: this.isDarkMode ? '#fff' : '#374151'
              }
            }
          }
        }
      });
    } catch (error) {
      console.error('Error initializing production chart:', error);
    }
  }
  
  initConsumptionChart() {
    try {
      const ctx = document.getElementById('consumptionChart');
      if (!ctx) return;
      
      // Destroy existing chart if it exists
      if (this.charts.consumption) {
        this.charts.consumption.destroy();
        this.charts.consumption = null;
      }
      
      this.charts.consumption = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Éclairage', 'Chauffage', 'Électroménager', 'Autres'],
          datasets: [{
            data: [25, 35, 30, 10],
            backgroundColor: [
              'rgb(59, 130, 246)',
              'rgb(34, 197, 94)',
              'rgb(245, 158, 11)',
              'rgb(239, 68, 68)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: this.isDarkMode ? '#fff' : '#374151',
                padding: 20
              }
            }
          }
        }
      });
    } catch (error) {
      console.error('Error initializing consumption chart:', error);
    }
  }
  
  updateChartsData() {
    try {
      if (this.charts.production && this.charts.production.data) {
        // Simulate real-time chart updates
        const now = new Date().getHours();
        const productionData = this.charts.production.data.datasets[0].data;
        if (productionData[now] !== undefined) {
          productionData[now] = this.systemData.production;
          this.charts.production.update('none');
        }
      }
    } catch (error) {
      console.error('Error updating charts data:', error);
    }
  }
  
  updateChartsForDarkMode() {
    try {
      Object.values(this.charts).forEach(chart => {
        if (chart && chart.options) {
          // Update grid colors
          if (chart.options.scales) {
            Object.values(chart.options.scales).forEach(scale => {
              if (scale.grid) {
                scale.grid.color = this.isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
              }
              if (scale.ticks) {
                scale.ticks.color = this.isDarkMode ? '#fff' : '#374151';
              }
            });
          }
          
          // Update legend colors
          if (chart.options.plugins && chart.options.plugins.legend) {
            chart.options.plugins.legend.labels.color = this.isDarkMode ? '#fff' : '#374151';
          }
          
          chart.update('none');
        }
      });
    } catch (error) {
      console.error('Error updating charts for dark mode:', error);
    }
  }
  
  observeElements() {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });
      
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    } catch (error) {
      console.error('Error observing elements:', error);
    }
  }
  
  showToast(message, type = 'info') {
    try {
      const toastContainer = document.getElementById('toast-container');
      if (!toastContainer) return;
      
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerHTML = `
        <div class="flex items-center">
          <i class="fas ${this.getToastIcon(type)} mr-3"></i>
          <span>${message}</span>
        </div>
      `;
      
      toastContainer.appendChild(toast);
      
      // Show toast
      setTimeout(() => toast.classList.add('show'), 100);
      
      // Hide and remove toast
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 400);
      }, 4000);
    } catch (error) {
      console.error('Error showing toast:', error);
    }
  }
  
  getToastIcon(type) {
    const icons = {
      success: 'fa-check-circle',
      error: 'fa-exclamation-circle',
      warning: 'fa-exclamation-triangle',
      info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
  }
  
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  try {
    new SolarisProApp();
  } catch (error) {
    console.error('Failed to initialize Solaris Pro App:', error);
  }
});