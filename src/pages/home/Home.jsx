import * as React from 'react';
import { ReactComponent as Logo } from '../../components/drawer/logo.svg'
import Page from "components/page/Page";

function Home(props) {
    return (
        <Page>
            <Logo />
        <Page/>
    );
}

export default Home;