import React from "react"
import ListBox from "../components/elements/forVariants/ListBox"
import ButtonContent from "../components/elements/forVariants/ButtonContent"

const list00 = [
    'Быстрее запустить обучение/вебинар с нуля',
    'Проще создавать курсы и управлять обучением',
    'Ученикам удобнее пользовать платформу',
]

const list01 = [
    'Вебинары и конференции',
    'Теоретические знания',
    'Онлайн-тестирования',
    'Домашние задания'
]


const VariantsContentData = [
    {
        name: '', 
        href: 'https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/Steps/Step00.jpg',    
        extra: <ListBox list={list00} nameClass={"extra00"}/>
    },
    {
        name: '01', 
        href: 'https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/Steps/Step01.jpg',
        h3: 'Создавайте курсы, которые полюбят Ваши клиенты и сотрудники',
        extra: <ListBox list={list01} nameClass={"extra01"}/>
    },
    {
        name: '02', 
        href: 'https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/Steps/Step02.jpg',
        h3: 'Сделайте обучение удобным и доступным в любой момент',
        p: 'Ваши ученики смогут обучаться с любых устройств и через бесплатное мобильное приложение',
        extra: [<ButtonContent 
                text={"Доступно в Google Play"} 
                styling={'white'}
                className={'toUp'}
                />,
                <ButtonContent 
                text={"Доступно в App Store"} 
                styling={'pink'}
                />,
                ]
        
    },
    {
        name: '03', 
        href: 'https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/Steps/Step03.jpg',
        h3: 'Проводите вебинары и автовебинары просто и с комфортом',
        p:'Проводите вебинары любого уровня, а также автовебинары на полном «автомате» с гибкой настройкой сценариев',
        extra: <ButtonContent 
                text={"Начать вебинар"}
                styling={'pink'}
                />
    },
    {
        name: '04', 
        href: 'https://raw.githubusercontent.com/samsak1990/ImageForAppCoursesProject/main/forDesktop/Steps/Step04.jpg',
        h3: 'Легко управляйте обучением и слудите всеми за результатами',
        p: 'Назначайте обучение, управляйте доступами, следите за результатами и активностью учеников в удобном для Вас интерфейсе'
    },
]

export {VariantsContentData}