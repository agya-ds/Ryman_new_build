import * as React from "react";
/**
* Component for About section 
* @param props 
* @returns HTML element
*/
export default function Offersection(props: any) {
    const { c_offersection } = props;

    return (
        <>
            <div className="brand-sec">
                  {/*
                <h2 className="sec_heading font-bold">Brand USPs</h2>
                  */}

                <div className="container-xl justify-center flex md:flex items-center">

                    <div className=" brand-usp-inner">

                        {c_offersection.map((i: any) => {
                            return (
                                <>
                                    {i.text ?
                                        <div className="brand-bx">
                                            {/* <img src={i.brandIcon.url} alt="brandUSPs"></img> */}
                                            <div className="brand-inner-content"> <h3 className="text-red">{i.text}</h3>
                                                <p>{i.description}</p></div>
                                        </div>

                                        : <></>}

                                </>
                            )

                        })

                        }
                    </div>
                </div>
            </div>
        </>
    )


}