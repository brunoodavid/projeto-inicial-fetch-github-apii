const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário">
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😥'}<h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                <h2>Seguidores: </h2>
                                <p>${user.followers}</p>
                                <h2>Seguindo: </h2>
                                <p>${user.following}</p>
                                
                            </div>
                        </div>`
        
        


        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<div><li><a href="${repo.html_url}" target="_blank"> ${repo.name}</a></li></div>
                                                                
                                                                <div class="repositories-itens"> 
                                                                    <h3>${repo.name}</h3>
                                                                    <ul>
                                                                        <li>🍴 ${repo.forks}</li>
                                                                        <li>⭐ ${repo.stargazers_count}</li>
                                                                        <li>👀 ${repo.watchers}</li>
                                                                        <li>👨‍💻 ${repo.language}</li>
                                                                    </ul>
                                                                </div>`)   

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach((event) => {
            if(event.payload.commits){
                console.log(event)
                eventsItens += `<li><a href=https://github.com/${event.repo.name} target="_blank>${event.repo.name}</a> - ${event.payload.commits[0].message} </li><br>`
                
            }
        })


        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                        </div>`
        }

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }