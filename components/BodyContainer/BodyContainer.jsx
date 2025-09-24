"use client"

const BodyContainer = ({jost, fira, children}) => {

    return (
        <body className={`${jost} ${fira} relative w-screen h-screen text-white bg-[#000B19] font-primary overflow-x-hidden`}>
            {children}
        </body>
    )
}

export default BodyContainer