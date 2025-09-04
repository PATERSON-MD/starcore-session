<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 PATERSON-MD Session</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Fira+Code:wght@300;400;500&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: linear-gradient(135deg, #000000, #1a1a2e);
            color: #00ff00;
            font-family: 'Fira Code', monospace;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            padding: 40px 0;
        }
        
        .typing-animation {
            font-family: 'Black Ops One', cursive;
            font-size: 3.5rem;
            color: #00ff00;
            margin: 30px 0;
            text-shadow: 0 0 10px #00ff00;
        }
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }
        
        .gallery img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 15px;
            border: 3px solid #00ff00;
            transition: transform 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
        }
        
        .gallery img:hover {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.6);
        }
        
        .badges {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin: 30px 0;
        }
        
        .badge {
            padding: 12px 25px;
            background: linear-gradient(45deg, #00ff00, #008800);
            color: black;
            text-decoration: none;
            border-radius: 25px;
            font-weight: bold;
            transition: transform 0.3s ease;
            border: 2px solid #00ff00;
        }
        
        .badge:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 255, 0, 0.4);
        }
        
        .features {
            background: rgba(0, 255, 0, 0.1);
            padding: 40px;
            border-radius: 20px;
            border: 2px solid #00ff00;
            margin: 40px 0;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        .feature {
            text-align: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 15px;
            border: 1px solid #00ff00;
        }
        
        .feature h3 {
            color: #00ff00;
            margin-bottom: 10px;
            font-size: 1.3rem;
        }
        
        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 30px 0;
        }
        
        .stat {
            text-align: center;
            padding: 20px;
            background: rgba(0, 255, 0, 0.1);
            border-radius: 15px;
            border: 1px solid #00ff00;
        }
        
        @keyframes glow {
            0% { text-shadow: 0 0 5px #00ff00; }
            50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
            100% { text-shadow: 0 0 5px #00ff00; }
        }
        
        .glow-text {
            animation: glow 2s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
            .typing-animation {
                font-size: 2rem;
            }
            
            .gallery {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="typing-animation glow-text">🔥 PATETSON-MD SESSION</h1>
            <p>✨ Ultra-Light Pair Session Generator for Baileys Bots ✨</p>
        </div>

        <div class="gallery">
            <img src="https://files.catbox.moe/usgvo9.jpg" alt="Session Image 1">
            <img src="https://files.catbox.moe/grrevg.jpg" alt="Session Image 2">
            <img src="https://files.catbox.moe/esh0om.jpg" alt="Session Image 3">
        
        </div>

        <div class="badges">
            <a href="https://github.com/Kervens-King" class="badge">👑 Developer: Kervens King</a>
            <a href="https://whatsapp.com/channel/0029Vb6KikfLdQefJursHm20" class="badge">📢 WhatsApp Channel</a>
            <a href="https://chat.whatsapp.com/GIIGfaym8V7DZZElf6C3Qh?mode=ac_t" class="badge">👥 WhatsApp Group</a>
        </div>

        <div class="stats">
            <div class="stat">
                <h3>🚀 Fast</h3>
                <p>Lightning Speed</p>
            </div>
            <div class="stat">
                <h3>🔒 Secure</h3>
                <p>Encrypted Sessions</p>
            </div>
            <div class="stat">
                <h3>✅ Reliable</h3>
                <p>99.9% Uptime</p>
            </div>
        </div>

        <div class="features">
            <h2 class="glow-text" style="text-align: center; margin-bottom: 30px;">⭐ FEATURES</h2>
            <div class="feature-grid">
                <div class="feature">
                    <h3>Base64 Session Support</h3>
                    <p>patetson~ prefixed sessions</p>
                </div>
                <div class="feature">
                    <h3>Auto-Restore</h3>
                    <p>Automatic reconnection</p>
                </div>
                <div class="feature">
                    <h3>Encrypted Storage</h3>
                    <p>Secure credential management</p>
                </div>
                <div class="feature">
                    <h3>Dual Auth</h3>
                    <p>QR Code + Pairing Code</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Typing animation effect
        document.addEventListener('DOMContentLoaded', function() {
            const texts = [
                "⚡ PATERSON MD BETTER OPTION",
                "🔥 THE MOST POWERFUL WHATSAPP SESSION", 
                "💻 DEVELOPER BY KERVENS KING",
                "🚀 PATERSON MD SESSION SOLUTIONS",
                "🌈 FAST ⚡ SECURE 🔒 RELIABLE ✅"
            ];
            
            let currentText = 0;
            const typingElement = document.querySelector('.typing-animation');
            
            function typeWriter() {
                if (currentText < texts.length) {
                    typingElement.textContent = texts[currentText];
                    currentText = (currentText + 1) % texts.length;
                    setTimeout(typeWriter, 3000);
                }
            }
            
            typeWriter();
        });
    </script>
</body>
</html>
