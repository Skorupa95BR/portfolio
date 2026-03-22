// Função para exibir as infos do header
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile-photo');
    photo.src = profileData.photo;
    photo.alt = profileData.name;

    const name = document.getElementById('profile.name');
    name.innerHTML = profileData.name;

    const job = document.getElementById('profile.job');
    job.innerHTML = profileData.job;    

    const location = document.getElementById('profile.location');
    location.innerHTML = profileData.location;

    const phone = document.getElementById('profile.phone');
    phone.innerHTML = profileData.phone;
    phone.href = `https://wa.me/${profileData.phone.replace(/\D/g, '')}`;

    const email = document.getElementById('profile.email');
    email.innerHTML = profileData.email;
    email.href = `mailto:${profileData.email}`;
}

//Função para buscar os softsSkills
function updateSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');
    softSkills.innerHTML = profileData.skills.softSkills.map( skill => `<li>${skill}</li>`).join('');
}

//Função para buscar os hardSkills
function updateHardskills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');
    hardSkills.innerHTML = profileData.skills.hardSkills.map( skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"/>`).join('');
   
}

//Função para buscar os dados do idioma
function updateLanguages(profileData){
    const languages = document.getElementById('profile.languages');
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('');
}

//Função para buscar os dados do portfolio
function updatePortfolio (profileData){
    const portfolio = document.getElementById('profile.portfolio');
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
            <li>
                <h3 class="title${project.github ? ' github' : ''}">${project.title}</h3>
                ${project.describle ? `<p class="description">${project.describle}</p>` : ''}
                <div class="project-links">
                    ${project.deploy ? `<a href="${project.deploy}" target="_blank" class="demo-btn">${project.demoText || 'Demo 🚀'}</a>` : ''}
                    <a href="${project.url}" target="_blank" class="repo-link">
                        ${project.textCod || 'Código'} 💻
                    </a>
                </div>
            </li>
        `;
    }).join('');
}

//Função para buscar as informações de xp
function updateProfessionalExperience(profileData) {
    const experience = document.getElementById('profile.professionalExperience');
    experience.innerHTML = profileData.professionalExperience.map(exp => {
        return`
            <li>
                <h3 class="title">${exp.name}</h3>
                <p class="period">${exp.period}</p>
                <ul>
                    ${exp.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </li>
        `
    }).join('');
}

( async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData);
    updateSkills(profileData);
    updateHardskills(profileData);
    updateLanguages(profileData);
    updatePortfolio(profileData);
    updateProfessionalExperience(profileData);
})()