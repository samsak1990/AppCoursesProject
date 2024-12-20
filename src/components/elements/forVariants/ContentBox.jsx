import React from "react";
import CSS from "../../../styles/elements/forVariants/ContentBox.css";
import VariantsImages from "../../../data/VariantsContentData";

const ContentBox = ()=>{
    return (
        <>
            <CSS.BoxsWrapper>
            {
                VariantsImages.map((img, i) =>{
                    return(
                        <CSS.BoxAlone reverse={ i%2===0 ? false : true}>
                            <CSS.BoxAloneImage>
                                <img src={img.href} alt={img.name} key={i}/>
                            </CSS.BoxAloneImage>
                            <CSS.BoxAloneText>
                                {/* <h3>

                                </h3>
                                <CSS.BoxAloneText_BG> */}

                            </CSS.BoxAloneText>
                        </CSS.BoxAlone>
                    )
                    } 
                )
            }
            </CSS.BoxsWrapper>
        </>
    )
}

export default ContentBox