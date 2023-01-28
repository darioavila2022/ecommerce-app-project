import { PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaypalCheckoutButton = (props) => {
    const { product } = props
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleApprove = (orderID) => {
        // CALL BACKEND FUNCTION TO FULFILL ORDER

        setPaidFor(true)
        // IF RESPONSE IS SUCCESS REFRESH USER'S ACCOUNT

        setError("Unable to concrete your purchase")
        //IF THE RESPONSE IS ERROR
    }

    if (paidFor) {
        navigate("/Success", { replace: true })
        alert("Thank you for your puchase!")
        //DISPLAY SUCCESS MESSAGE, REDIRECT USER TO SUCCESS PAGE
    }

    if (error)
        alert(error)
    //DISPLAY ERROR MESSAGE, MODAL OR REDIRECT USER TO ERROR PAGE

    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: product
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
                //DISPLAY CANCEL MESSAGE, REDIRECT THE USER TO CANCEL PAGE OR GET THEM BACK TO CART
            }}
            onError={(err) => {
                setError(err)
                console.log("Paypal checkout onError", err);
            }}
        />
    )
};

export default PaypalCheckoutButton;