import '@/styles/globals.css'
import 'antd/dist/reset.css';
import {LayoutComponent} from "../components/layout/Layout"
import store from '@/utils/redux';
import { Provider } from "react-redux"

export default function App({ Component, pageProps }) {
  return <Provider store={store}> 
             <Component {...pageProps} />
    </Provider>
}
