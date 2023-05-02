import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="pepe" name="Brian Freijomil" initialIsFollowing  />
            <TwitterFollowCard userName="jose" name="Jose Hernandez" initialIsFollowing={false} />
            <TwitterFollowCard userName="matias" name="Matias Perez" initialIsFollowing />
            <TwitterFollowCard userName="brian" name="Brian Hernandez" initialIsFollowing />
            <TwitterFollowCard userName="juan" name="Juan Lopez" initialIsFollowing />
        </section>
    )
}