import { html } from "../../node_modules/lit-html/lit-html.js"

import * as gamesService from "../api/games.js"

const homeTemplate = (games) => html`
        <section id="welcome-world">

            <div class="welcome-message">
                <h2>The best video games are</h2>
                <h3>Only in GameShop</h3>
            </div>
            <img src="./images/Kratos.png" alt="hero" width="400px">

            <div id="home-page">
                <h1 style="color:white">Latest Games</h1>

                ${games.length > 0 ? games.map(previewTemplate) : html`<p class="no-articles">No games yet</p>`}

                <!-- Display paragraph: If there is no games  -->
                
            </div>
        </section>`

const previewTemplate = (game) => html`
               <div class="game latest-game">
                    <div class="image-wrap">
                        <img src= ${game.imageUrl}>
                    </div>
                    <h3 style="color:white">${game.title}</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href="/details/${game._id}" class="btn details-btn">Details</a>
                    </div>
                </div>`

export async function homePage(ctx){
    const games = await gamesService.getRecent()
    ctx.render(homeTemplate(games))
}