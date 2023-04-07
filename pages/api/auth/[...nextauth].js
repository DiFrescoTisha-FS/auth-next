import NextAuth from "next-auth";
// import SpotifyProvider from "next-auth/providers/spotify"
// import FacebookProvider from "next-auth/providers/facebook"

import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
    providers: [
        // SpotifyProvider({
        //     clientId: process.env.SPOTIFY_CLIENT_ID,
        //     clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        //     nextAuthSecret: process.env.NEXT_AUTH_SECRET
        // }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            clientUri: process.env.GITHUB_URI,
            nextAuthSecret: process.env.NEXT_AUTH_SECRET,
            nextAuthUrl: process.env.NEXTAUTH_URL,
        }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        //     nextAuthSecret: process.env.NEXT_AUTH_SECRET,
        //     nextAuthUrl: process.env.NEXTAUTH_URL,
        // })
    ],
    database: process.env.MONGODB_URI,
    session: {
        jwt: true
    },
    jwt: {
        secret: 'uyguygkjg'
    }
}

export default NextAuth(authOptions)