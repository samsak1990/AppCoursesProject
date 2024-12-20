import React from "react";
import CSS from "../../../styles/elements/forVariants/ContentBox.css";
import {VariantsContentData as Data} from "../../../data/VariantsContentData";

const ContentBox = ()=>{
    return (
        <>
            <CSS.BoxsWrapper>
            {
                Data.map((box, i) =>{
                    return(
                        <CSS.BoxAlone reverse={ i%2===0 ? false : true}>
                            <CSS.BoxAloneImage>
                                <img src={box.href} alt={box.name} key={i}/>
                            </CSS.BoxAloneImage>
                            <CSS.BoxAloneText>
                                { box.name != '' &&
                                (<CSS.BoxAloneText_BG>
                                    <span>{box.name}</span>
                                </CSS.BoxAloneText_BG>) 
                                }
                                
                            </CSS.BoxAloneText>
                        </CSS.BoxAlone>
                    )
                })
            }
            </CSS.BoxsWrapper>
        </>
    )
}

export default ContentBox