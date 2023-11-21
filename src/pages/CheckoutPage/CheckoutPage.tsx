import {FC} from "react"
import {CheckoutForm, Header, Layout} from "components"

export const CheckoutPage: FC = () => {
    return (
        <Layout>
            <Header/>
            <CheckoutForm/>
        </Layout>
    )
}


