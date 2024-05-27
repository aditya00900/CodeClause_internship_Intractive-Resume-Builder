document.addEventListener('DOMContentLoaded', () => {
    const makeResumeBtn = document.getElementById('makeResumeBtn');
    const formSection = document.getElementById('formSection');
    const resumeForm = document.getElementById('resumeForm');

    makeResumeBtn.addEventListener('click', () => {
        formSection.classList.remove('d-none');
    });

    resumeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const summary = document.getElementById('summary').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phone', phone);
        localStorage.setItem('summary', summary);

        window.location.href = 'resume.html';
    });
});
