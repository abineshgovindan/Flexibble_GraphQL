import {getServerSession} from "next-auth/next";
import {NextAuthOptions, User} from "next-auth";
import {AdapterUser} from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import jsonwebtoken from "jsonwebtoken";
import {JWT} from "next-auth/jwt";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        }), 
        GithubProvider({
            clientId: '',
             clientSecret: '',
        })
    ], 
    jwt:{
        encode:({secret, token}) =>{

        },
        decode: async ({secret, token})=>{

        }
    },
    theme: {
        colorScheme: 'light',
        logo: '/logo.png'
    },
    callbacks:{

        async session({session}){

        },
        async signIn({user}){

        } 
    }
}
