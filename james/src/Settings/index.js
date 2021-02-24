import React from "react";
import Greeting from "./Greeting";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from "./Search";
import LoginButton from "../AuthZero/LoginButton";
import LogoutButton from "../AuthZero/LogoutButton";


export default function() {
    return  <Page name="settings"> 
        <Greeting/> 
        <LoginButton/>
        <LogoutButton/>
        <CoinGrid topSection/>
        <ConfirmButton/> 
        <Search/>
        <CoinGrid/>
    </Page>
}