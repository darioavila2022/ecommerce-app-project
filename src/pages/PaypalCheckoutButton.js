import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"

import { useNavigate } from "react-router-dom"

const PaypalCheckoutButton = (props) => {
    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()


    const handleApprove = (orderID) => {
        // CALL BACKEND FUNCTION TO FULFILL ORDER

        // IF RESPONSE IS SUCCESS
        setPaidFor(true)
        // REFRESH USER'S ACCOUNT

        //IF THE RESPONSE IS ERROR
        //setError("Your payment was processed successfully. However, we are unable to concrete your purchase. Please contact us at test@test.com")
    }

    if (paidFor){
        //DISPLAY SUCCESS MESSAGE, MODAL OR REDIRECT USER TO SUCCESS PAGE
        navigate("/Success", { replace: true })
        // alert("Thank you for your puchase!")
    }

    if (error)
    //DISPLAY ERROR MESSAGE, MODAL OR REDIRECT USER TO ERROR PAGE
    alert(error)

    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture()
                console.log("order", order);

                handleApprove(data.orderID)
            }}
            onCancel={() => {
                //DISPLAY CANCER MESSAGE, MODAL OR REDIRECT THE USER TO CANCEL PAGE OR GET THEM BACK TO CART
            }}
            onError={(err) => {
                setError(err)
                console.log("Paypal checkout onError", err);
            }}
        />
    )
}
export default PaypalCheckoutButton