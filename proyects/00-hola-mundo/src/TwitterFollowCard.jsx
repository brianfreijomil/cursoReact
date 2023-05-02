import { useState } from "react"
export function TwitterFollowCard({name, userName, initialIsFollowing}) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Seguir' : 'Siguiendo' //es un if mas sexi
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    

    //a esto se le llama estado interno, todos los elementos que renderiza 
    //react del componente TwitterFollowCard son independientes de cada estado
    const handleClick = ()=> {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-avatar" 
                    src={`https://unavatar.io/${userName}`} 
                    alt="avatar de"/>
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}