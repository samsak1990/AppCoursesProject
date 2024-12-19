import React from "react";
import { VariantsCSS as CSS }from "../../styles/pages/Variants.css";


const Variants = ()=>{
    return (
        <>
            <CSS.ContentBlockTop>
                <CSS.LinkOnDocument>удобная платформа для онлайн-обучения</CSS.LinkOnDocument>
                <CSS.TitleH1>Качество обучения всегда в приоритете</CSS.TitleH1>
                <CSS.Description>Одна из самых удобных платформа для 
                    онлайн-курсов и вебинаров, 
                    на которой удобно учиться и обучать. Зарегистрируйтесь и 
                    получите бесплатный тариф!</CSS.Description>
                <CSS.ButtonsBlock>
                    <CSS.Button 
                    fontColor={'#ffffff'} 
                    backgroundColor={'#BA75FF'}
                    border={'none'}>
                        Получить бесплатный тариф
                    </CSS.Button>
                    <CSS.Button 
                    fontColor={'#BA75FF' }
                    backgroundColor={'#E0DCED'}
                    border={'1px solid #BA75FF'}>
                        Записаться на демострацию
                    </CSS.Button>
                </CSS.ButtonsBlock>
            </CSS.ContentBlockTop>
            <CSS.TitleH2>Легко настроить и пользоваться</CSS.TitleH2>
            <div style={{textAlign:'center', width: '100%'}}>
                <CSS.DescriptionUnderH2>
                    OVERSCHOOL позволит Вам самостоятельно создать первоклассные курсы, запустить обучение и продажи. Без технических навыков и сложных настроек
                </CSS.DescriptionUnderH2>
            </div>
            

        </>
    )
}

export default Variants