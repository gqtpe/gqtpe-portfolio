import type {Image, ProjectName} from "@/components/pages/Projects/types";
import trelloHome from "@/assets/img/trello/gqtpe.github.io_trello_home.png";
import trelloLogin from "@/assets/img/trello/gqtpe.github.io_trello_login.png";

import spotifyHome from "@/assets/img/spotify/spotify-gqtpe.vercel.app_home.png";
import spotifyLogin from "@/assets/img/spotify/spotify-gqtpe.vercel.app_login.png";
import spotifyAlbum from "@/assets/img/spotify/spotify-gqtpe.vercel.app_album.png";
import spotifyLiked from "@/assets/img/spotify/spotify-gqtpe.vercel.app_liked.png";
import spotifySearch from "@/assets/img/spotify/spotify-gqtpe.vercel.app_search.png";
import spotifySearchStart from "@/assets/img/spotify/spotify-gqtpe.vercel.app_seach-start.png";
import spotifyTrack from "@/assets/img/spotify/spotify-gqtpe.vercel.app_track-page.png";
import spotifyArtists from "@/assets/img/spotify/spotify-gqtpe.vercel.artists-search.png";
import spotifyAccountConfirmation from "@/assets/img/spotify/user-account-confirmation.png";
export const socialLinks = {
    linkedin: "https://www.linkedin.com/in/temirtas-nursain",
    github: "https://github.com/gqtpe",
    telegram: "https://t.me/gqtpe",
    instagram: "https://instagram.com/nursain.t",
    codewars: "https://codewars.com/users/gqtpe",
}
export const links ={
    ...socialLinks,
    trello: "https://gqtpe.github.io/trello",
    spotify: "https://spotify-gqtpe.vercel.app",
    trelloGithub: "https://github.com/gqtpe/trello",
    spotifyGithub: "https://github.com/gqtpe/spotify",
    portfolioGithub: "https://github.com/gqtpe/gqtpe-portfolio",


}

type ProjectImages = {
    [key in ProjectName]:Image[]
}
export const projectImages: ProjectImages ={
    "trello": [
        {id: 1, title: "Home page", url:trelloHome},
        {id: 2, title: "Login page", url:trelloLogin},
    ],
    "spotify":[
        {id: 1, title: "Home page", url: spotifyHome},
        {id: 2, title: "Login page", url: spotifyLogin},
        {id: 3, title: "Album page", url: spotifyAlbum},
        {id: 4, title: "Track page", url: spotifyTrack},
        {id: 5, title: "Liked songs page", url: spotifyLiked},
        {id: 6, title: "Account confirmation page", url: spotifyAccountConfirmation},
        {id: 7, title: "Search start page", url: spotifySearchStart},
        {id: 8, title: "Search page", url: spotifySearch},
        {id: 9, title: "Spotify artists page", url: spotifyArtists},
    ],
    "portfolio":[]
}