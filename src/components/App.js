import React, {useState, useEffect} from 'react';
import Header from './sections/Header';
import {useSelector, useDispatch} from 'react-redux';
import {TezosToolkit} from "@taquito/taquito";
import {BeaconWallet} from "@taquito/beacon-wallet";
import {
    NetworkType,
    BeaconEvent,
    defaultEventCallbacks,
    ColorMode
} from "@airgap/beacon-sdk";

import {fetchData, _walletConfig} from '../actions';
import {Routes, Route} from 'react-router-dom';
import Home from './layouts/Home';
import Create from './layouts/Create';
import Show from './layouts/Show';

const App = () => {
    useSelector(state => state);
    const dispatch = useDispatch();
    const [Tezos, setTezos] = useState(
        new TezosToolkit("https://hangzhounet.smartpy.io/")
    );
    const [wallet, setWallet] = useState(null);

    useEffect(() => {
        (async () => {
            const wallet_instance = new BeaconWallet({
                name: "NFT marketplace",
                preferredNetwork: NetworkType.HANGZHOUNET,
                colorMode: ColorMode.LIGHT,
                disableDefaultEvents: false, // Disable all events / UI. This also disables the pairing alert.
                eventHandlers: {
                    // To keep the pairing alert, we have to add the following default event handlers back
                    [BeaconEvent.PAIR_INIT]: {
                        handler: defaultEventCallbacks.PAIR_INIT
                    },
                    [BeaconEvent.PAIR_SUCCESS]: {
                        handler: data => {
                            return (data.publicKey);
                        }
                    }
                }
            });
            await wallet_instance.requestPermissions({
                network: {
                    type: 'hangzhounet'
                },
            });
            Tezos.setWalletProvider(wallet_instance);
            const activeAccount = await wallet_instance.client.getActiveAccount();
            if (activeAccount) {
                const userAddress = await wallet_instance.getPKH();
                const balance = await Tezos.tz.getBalance(userAddress);
                dispatch(_walletConfig(
                    {
                        userAddress: userAddress,
                        balance: balance.toNumber()
                    }));
            }
            setWallet(wallet_instance);
        })();
    }, [Tezos, dispatch]);


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className="ui container">
            <Header Tezos={Tezos} setTezos={setTezos} wallet={wallet}/>
            <div className="ui container">
                <Routes>
                    <Route path="/create" element={<Create Tezos={Tezos}/>}/>
                    <Route path="/show/:id" element={<Show Tezos={Tezos}/>}/>
                    <Route path="/" element={<Home Tezos={Tezos}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;