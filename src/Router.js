import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import App from './App'
import { About } from './About'
import { Authenticate } from './Authenticate'
import { Layout } from './Layout'
import { Bookmarks } from './Bookmarks'
import { Travel } from './Travel'
import { Relationships } from './Relationships'
import { Poetry } from './Poetry'
import { Honey } from './Honey'
import { Eagle } from './Eagle'
import { Synesthesia } from './Synesthesia'
import { Universe } from './Universe'
import { Loneliness } from './Loneliness'
import { Budgerigar } from './Budgerigar'
import { Sky } from './Sky'
import { Along } from './Along'
import { Japan } from './Japan'

const store = observable({route: "home", lastpage: "home"})

export const Router = observer(() => {
    if (store.route == "home") return <Layout title="7 Signs You're in the Right Relationship" store={store}><App store={store}/></Layout>
    else if (store.route == "about") return <Layout title="Articles by Jessica Trinh" store={store}><About store={store}/></Layout>
    else if (store.route == "authenticate") return <Layout title="Sign In Here" store={store}><Authenticate/></Layout>
    else if (store.route == "bookmarks") return <Layout title="Bookmarks" store={store}><Bookmarks store={store}/></Layout>
    else if (store.route == "travel") return <Layout title="Travel" store={store}><Travel store={store}/></Layout>
    else if (store.route == "relationships") return <Layout title="Relationships" store={store}><Relationships store={store}/></Layout>
    else if (store.route == "poetry") return <Layout title="Poetry" store={store}><Poetry store={store}/></Layout>
    else if (store.route == "honey") return <Layout title="Find Me, Honey" store={store}><Honey/></Layout>
    else if (store.route == "eagle") return <Layout title="My Eagle, My Companion" store={store}><Eagle/></Layout>
    else if (store.route == "synesthesia") return <Layout title="Synesthesia" store={store}><Synesthesia/></Layout>
    else if (store.route == "universe") return <Layout title="Answers of the Universe" store={store}><Universe/></Layout>
    else if (store.route == "loneliness") return <Layout title="Loneliness Beside You" store={store}><Loneliness/></Layout>
    else if (store.route == "budgerigar") return <Layout title="Budgerigar" store={store}><Budgerigar/></Layout>
    else if (store.route == "sky") return <Layout title="Sky" store={store}><Sky/></Layout>
    else if (store.route == "along") return <Layout title="All Along" store={store}><Along/></Layout>
    else if (store.route == "japan") return <Layout title="Japan" store={store}><Japan/></Layout>
    else return <div>Hello Jordan!</div>
}

)