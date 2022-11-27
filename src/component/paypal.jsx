import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Paypal(props) {

    const { onSave, disable, sum } = props
    const [totalStum, setTotalSum] = useState(3)
    // setTotalSum(sum)
    return (
        <PayPalScriptProvider options={{ "client-id": "AVqiTjdFARfZglLj1eJD78oZusJafNJTL6fslJrWl3bH87vI-HZM_l9kaaNJ3AJsX8t9KCWrpOoHgVQc" }}>
            <PayPalButtons
                disabled={disable}
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: totalStum,
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        onSave()
                    });
                }}
            />
        </PayPalScriptProvider>
    )
}
