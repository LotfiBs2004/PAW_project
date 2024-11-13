import React, { useState } from 'react';

// Style CSS en JavaScript
const styles = {
    container: {
        position: 'relative',
        width: '450px',
        padding: '50px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
        textAlign: 'center',
    },
    title: {
        fontSize: '2em',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        background: 'linear-gradient(90deg, orange, red, pink)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'gradient 3s infinite',
    },
    formContainer: {
        transition: 'transform 0.5s ease-in-out',
    },
    form: {
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    formActive: {
        display: 'flex',
    },
    input: {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
    },
    button: {
        width: '100%',
        padding: '12px',
        margin: '10px 0',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, orange, red)',
        transition: 'background 0.5s',
        fontSize: '1em',
    },
    buttonHover: {
        background: 'linear-gradient(90deg, red, orange)',
    },
    toggleLink: {
        marginTop: '10px',
        color: '#555',
        cursor: 'pointer',
        fontSize: '0.9em',
        transition: 'color 0.3s',
    },
    toggleLinkHover: {
        color: '#333',
    },
    backgroundIcons: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '-1',
        opacity: '0.1',
    },
    animatedText: {
        opacity: '0',
        animation: 'fadeIn 1.5s forwards',
        animationDelay: '0.5s',
    },
};

const ToDoListApp = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForms = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(120deg, #fbc2eb, #a6c1ee)' }}>
            <div style={styles.backgroundIcons}>
                <img src="https://img.icons8.com/ios/100/000000/todo-list.png" alt="icon1" style={{ position: 'absolute', top: '10%', left: '5%' }} />
                <img src="https://img.icons8.com/ios/100/000000/task-completed.png" alt="icon2" style={{ position: 'absolute', top: '20%', right: '10%' }} />
                <img src="https://img.icons8.com/ios/100/000000/calendar.png" alt="icon3" style={{ position: 'absolute', bottom: '20%', left: '15%' }} />
                <img src="https://img.icons8.com/ios/100/000000/goal.png" alt="icon4" style={{ position: 'absolute', bottom: '10%', right: '20%' }} />
                <img src="https://img.icons8.com/ios/100/000000/checked-checkbox.png" alt="icon5" style={{ position: 'absolute', top: '40%', left: '60%' }} />
            </div>
            <div style={styles.container}>
                <h1 style={styles.title}>To-Do List</h1>
                <div style={styles.formContainer}>
                    {isSignIn ? (
                        <div style={{ ...styles.form, ...styles.formActive }}>
                            <p style={styles.animatedText}>Bienvenue ! Connectez-vous à votre compte.</p>
                            <input type="text" placeholder="Nom d'utilisateur" style={styles.input} />
                            <input type="password" placeholder="Mot de passe" style={styles.input} />
                            <button style={styles.button}>Connexion</button>
                            <p style={styles.toggleLink} onClick={toggleForms}>Pas encore de compte ? Inscrivez-vous</p>
                        </div>
                    ) : (
                        <div style={{ ...styles.form, ...styles.formActive }}>
                            <p style={styles.animatedText}>Créez votre compte pour commencer !</p>
                            <input type="text" placeholder="Nom d'utilisateur" style={styles.input} />
                            <input type="password" placeholder="Mot de passe" style={styles.input} />
                            <input type="password" placeholder="Confirmer le mot de passe" style={styles.input} />
                            <button style={styles.button}>Inscription</button>
                            <p style={styles.toggleLink} onClick={toggleForms}>Déjà un compte ? Connectez-vous</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
;import ToDoListApp from './ToDoListApp';  
function App() {
  return (
    <div className="App">
      <ToDoListApp />
    </div>
  );
}

export default App;
