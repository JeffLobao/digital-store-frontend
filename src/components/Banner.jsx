











import styled from "styled-components";
import { default as But } from "./buttons/Buttons.jsx";

const BannersBigWraperContainer = styled.div`
    overflow: hidden;
    background-color: var(--light-gray-3);
    width: 100vw;
    height: 662px;
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 0;

    @media (min-width: 768px) {
        height: 681px;
    }

    & .banners-links{
        height: 12px;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-self: center;
        margin-top: 40px;
        width: 78px;

        @media (min-width: 768px) {
            margin-top: 140px;
        }

        & a{
            display: flex;
            gap: 10px;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            transition-duration: 300ms;
            background-color: var(--light-gray-2);

            &:hover {
                background-color: var(--primary);
            }
        }
    }
`

const Banner1Container = styled.div`
    display: flex;
    position: relative;
    float: left;
    flex-direction: column;
    /* overflow: hidden; */

    & .sapato{
        width: calc(100% - 5px - 43px);
        height: fit-content;
        order: 0;
        margin: 12px 43px 0 5px;
    }

    & .pirilampos{
        position: absolute;
        top: 20px;
        right: 0;
        transform: translateX(50%);
    }
    
    & .propag{
        display: flex;
        flex-direction: column;
        text-align: center;
        color: black;
        justify-content: start;
        width: calc(100vw - 40px);
        overflow-wrap: normal;
        margin: 124px 0 0 100px;
        order: 1;

        @media (min-width: 768px) {
            width: 510px;
            height: 352px;
            text-align: start;
        }

        & h4{
            margin: 0;
            color: var(--primary);

            @media (min-width: 768px) {
                color: var(--warning)
            }
        }

        & h2 {
            color: var(--dark-gray);
            font-family: "Inter";
            font-weight: 800px;
            font-size: 40px;
            line-height: 50px;
            letter-spacing: 1px;
            margin: 10px 0 20px 0;

            @media (min-width: 768px) {
                font-size: 64px;
                line-height: 66px;
                margin: 20px 0;
            }
        }

        & p{
            margin: 0;
            color: var(--dark-gray-2);
        }

        & button{
            height: 48px;
            width: 100%;
            margin-top: 40px;

            @media (min-width: 768px) {
                width: 220px;
            }
        }
    }
`;

// const Banner2Container = styled.div`
//     width: 100%;
//     height: 128px;
// `



const Banner1 = () => {

    return (
        <Banner1Container id="banner1">
            <div className="propag">
                <h4 className="text-small bold">Melhores ofertas personalizadas</h4>
                <h2>Queima de stoque Nike 🔥</h2>
                <p className={window.innerWidth <= 768 ? "text-extra-small" : "text-medium"}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <But buttonType="primary-button" label="Clique Aqui" className={"text-small bold"} />
            </div>
            {/* <img className="sapato" src="White-Sneakers.svg" /> */}
            <img className="pirilampos" src="Ornament 11.svg" />
        </Banner1Container>
    );
}


// const Banner2 = () => {
//     return (
//         <>

//         </>
//     );
// }

const Banners = () => {
    return (
        <BannersBigWraperContainer>

            <div className="banners-wrapper">
                <Banner1 />
            </div>

            <nav className="banners-links">
                <a to="#banner1"></a>
                <a to="#banner2"></a>
                <a to="#banner3"></a>
                <a to="#banner4"></a>
            </nav>

        </BannersBigWraperContainer>
    );
}

export default Banners;