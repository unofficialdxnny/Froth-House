// Initialize Supabase Client
const _supabase = supabase.createClient(
    'https://vtdutjsbdbzhyoilvkez.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0ZHV0anNiZGJ6aHlvaWx2a2V6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NDgwMzEsImV4cCI6MjA5MTMyNDAzMX0.0eKws7FR9Z3yHOkpYC3LutZh0Xpksy6lkq0hhWrLIa8'
);

document.addEventListener('DOMContentLoaded', () => {

    // --- Sign Up ---
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('signup-name').value;
            const email = document.getElementById('signup-email').value;
            const password = document.getElementById('signup-password').value;
            const messageBox = document.getElementById('signup-message');

            messageBox.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center;">Creating account...</p>';

            const { data, error } = await _supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: name,
                    }
                }
            });

            if (error) {
                messageBox.innerHTML = `<p style="color: #ff4d4d; padding: 10px; border: 1px solid #ff4d4d; border-radius: 4px; background: rgba(255, 77, 77, 0.1); text-align: center; font-size: 0.9rem;">${error.message}</p>`;
            } else {
                messageBox.innerHTML = `<p style="color: #4CAF50; padding: 10px; border: 1px solid #4CAF50; border-radius: 4px; background: rgba(76, 175, 80, 0.1); text-align: center; font-size: 0.9rem;">Account created successfully! You can now <a href="signin.html" style="text-decoration:underline; color: #fff;">sign in</a>.</p>`;
                signupForm.reset();
            }
        });
    }

    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        signinForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('signin-email').value;
            const password = document.getElementById('signin-password').value;
            const messageBox = document.getElementById('signin-message');

            messageBox.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center;">Signing in...</p>';

            const { data, error } = await _supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                messageBox.innerHTML = `<p style="color: #ff4d4d; padding: 10px; border: 1px solid #ff4d4d; border-radius: 4px; background: rgba(255, 77, 77, 0.1); text-align: center; font-size: 0.9rem;">${error.message}</p>`;
            } else {
                messageBox.innerHTML = `<p style="color: #4CAF50; padding: 10px; border: 1px solid #4CAF50; border-radius: 4px; background: rgba(76, 175, 80, 0.1); text-align: center; font-size: 0.9rem;">Signed in successfully! Redirecting...</p>`;
                setTimeout(() => {
                    window.location.href = 'index.html'; // Redirect to home on success
                }, 1500);
            }
        });
    }

    const checkAuthStatus = async () => {
        const { data: { session } } = await _supabase.auth.getSession();
        const navAuthBtn = document.getElementById('nav-auth-btn');

        if (session && navAuthBtn) {
            navAuthBtn.innerText = 'Log Out';
            navAuthBtn.href = '#';
            navAuthBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                await _supabase.auth.signOut();
                window.location.reload();
            });
        }
    };

    checkAuthStatus();
});
